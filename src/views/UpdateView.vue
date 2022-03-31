<template>
  <div id="modifyView">
    <section class="overlay">
      <div class="overlay__inner">
        <header class="overlay__inner__title">
          <h1>RemakeIT</h1>
          <h3 class="overlay__inner__content__right__text">
            Modifier mon image en direct !
          </h3>
        </header>
        <main class="overlay__inner__content">
          <div class="overlay__inner__content__image-preview">
            <div class="overlay__inner__content__image-preview__wrapper">
              <div
                class="overlay__inner__content__image-preview__wrapper__loader"
                v-if="isImageLoading"
              >
                <div
                  class="overlay__inner__content__image-preview__wrapper__loader__icon"
                >
                  <i class="bx bx-loader-circle bx-spin"></i>
                </div>
              </div>
              <div
                class="overlay__inner__content__image-preview__wrapper__image"
              >
                <img :src="file" alt="" />
              </div>
            </div>
          </div>
          <div class="overlay__inner__content__modification">
            <FilterModify v-if="navbarActive === 'filter'" />
            <CompressionModify v-if="navbarActive === 'compression'" />
            <ExtensionModify v-if="navbarActive === 'extension'" />
            <DimensionModify v-if="navbarActive === 'dimension'" />
          </div>
          <NavBar />
        </main>
        <footer class="overlay__inner__footer">
          <div class="button red" @click="backHome()">Retour</div>
          <div class="button gradient" @click="downloadImage()">
            Télécharger
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FilterModify from "@/components/FilterModify.vue";
import DimensionModify from "@/components/DimensionModify.vue";
import ExtensionModify from "@/components/ExtensionModify.vue";
import CompressionModify from "@/components/CompressionModify.vue";

export default {
  name: "UpdateView",
  components: {
    NavBar,
    FilterModify,
    DimensionModify,
    ExtensionModify,
    CompressionModify,
  },
  computed: {
    navbarActive() {
      return this.$store.state.navbarActive;
    },
    file() {
      return this.$store.state.updatedImageURL;
    },
    isImageLoading() {
      return this.$store.state.isImageLoading;
    },
  },
  created() {
    const baseImageURL = this.$store.state.baseImageURL;
    console.log("Created", baseImageURL);
    if (!baseImageURL) {
      this.$router.push("/");
    }
  },
  methods: {
    downloadImage() {
      this.$store
        .dispatch("requestUpdatedImageFile", {
          file: this.$store.state.updatedImage,
        })

        .then(() => {
          console.log(imageToDownload, fileName);
          const imageToDownload = this.$store.state.updatedImageURL;
          const downloadLink = document.createElement("a");
          const fileName = this.$store.state.updatedImageFileName;
          downloadLink.href = imageToDownload;
          downloadLink.download = fileName;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);

          this.$router.push("/success");
        })

        .catch((e) => {
          console.log(e);
        });
    },
    backHome() {
      this.$store.commit("clearState");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
:root {
  --dark-color: hsl(var(--hue), 100%, 9%);
  --light-color: hsl(var(--hue), 95%, 98%);
  --base: hsl(var(--hue), 95%, 50%);
  --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%);
  --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%);

  --font-family: "Poppins", system-ui;

  --bg-gradient: linear-gradient(
    to bottom,
    hsl(var(--hue), 95%, 99%),
    hsl(var(--hue), 95%, 84%)
  );
}
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  font-family: var(--font-family);
  color: var(--dark-color);
  background: var(--bg-gradient);
  overflow: clip;
}
.orb-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.overlay__inner__content__right__text {
  font-size: 1rem;
  font-weight: 800;
}
.button {
  padding: 1em 3em;
  border-radius: 0.5em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(45deg, var(--base) 25%, var(--complimentary2));
  color: #fff;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  transition: all 0.2s ease-in-out;

  &.red {
    background: linear-gradient(45deg, #f44336 25%, #e1079a);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}

#modifyView {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    background: blue;
    padding: 3rem 0 3rem 3rem;
    width: 70vw;
    height: 90vh;
    background: rgba(255, 255, 255, 0.375);
    box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);

    &__inner {
      min-width: 100%;
      height: 100%;
      padding: 1.5rem 0 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      &__title {
        h1 {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(
            45deg,
            var(--base) 25%,
            var(--complimentary2)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: left;
        }
      }

      &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 2;
        width: 100%;
        max-height: 60vh;

        &__image-preview {
          min-width: 50%;
          max-width: 50%;
          height: 100%;
          max-height: 100%;
          padding: 1rem;
          flex: 2;
          align-items: center;
          display: flex;
          justify-content: center;

          &__wrapper {
            position: relative;
            border-radius: 20px;
            overflow: clip;
            height: 100%;

            &__loader {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #00000090;
              display: flex;
              justify-content: center;
              align-items: center;

              &__icon {
                i {
                  font-size: 5rem;
                  color: var(--light-color);
                }
              }
            }

            &__image {
              border-radius: 20px;
              display: flex;
              width: 100%;
              height: 100%;

              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
          }
        }
      }

      &__footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
}
</style>
