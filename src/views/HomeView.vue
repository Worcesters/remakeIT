<template>
  <div id="homeView">
    <section class="overlay">
      <div class="overlay__inner">
        <header class="overlay__inner__title">
          <h1>RemakeIT</h1>
          <h3 class="overlay__inner__content__right__text">
            Importer une image pour commencer !
          </h3>
        </header>
        <main class="overlay__inner__content">
          <div
            class="overlay__inner__content__left"
            @dragover.prevent
            @drop.prevent
            @click="dropImgClick()"
          >
            <div
              class="overlay__inner__content__left__upload"
              @drop="uploadFile"
            >
              <label class="required" for="upload_byfolder"></label>
              <input
                autocomplete="file"
                id="upload_byfolder"
                type="file"
                accept=".png,.jpg,.jpeg,.tiff,.webp,.gif"
                name="file"
                class="form__input"
                placeholder="Importer ou drop une image"
                @change="uploadFile"
                required
              />
              <div class="icon">
                <i class="bx bx-upload"></i>
              </div>
            </div>
            <div class="overlay__inner__content__left__text">
              Glisser - Déposer
            </div>
          </div>
          <div class="overlay__inner__content__separator"></div>
          <div class="overlay__inner__content__right">
            <div class="overlay__inner__content__right__text">
              J'importe une image depuis mon ordinateur
            </div>
            <div class="button gradient" @click="dropImgClick()">Importer</div>
          </div>
        </main>
        <footer class="overlay__inner__footer">
          <h3>Made with ❤️ and some ☕ by</h3>
          <div class="overlay__inner__footer__authors">
            <a
              :key="author.name"
              v-for="author in authorList"
              class="overlay__inner__footer__authors__author button black"
              target="_blank"
              :href="author.github"
            >
              <i class="bx bxl-github"></i>
              {{ author.name }}
            </a>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "UpdateView",
  data() {
    return {
      File: "", // Store our uploaded files
    };
  },
  created() {
    this.$store.dispatch("getUsersList");
  },
  computed: {
    authorList() {
      return this.$store.state.authorList;
    },
  },
  methods: {
    dropImgClick() {
      document.getElementById("upload_byfolder").click();
    },
    uploadFile(e) {
      var file = "";
      if (e.type != "change") {
        this.File = e.dataTransfer.files;
        file = this.File[0];
      } else {
        this.File = e.target.files;
        file = this.File[0];
      }
      var url = URL.createObjectURL(file);

      // Get image width and height
      var img = new Image();
      img.src = url;
      img.onload = () => {
        this.$store.commit("setFile", {
          file,
          url,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.name.split(".").pop(),
          width: img.width,
          height: img.height,
        });

        this.$router.push("/update");
      };
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
  display: grid;
  place-items: center;
  padding: 0;
  overflow: clip;
  font-family: var(--font-family);
  color: var(--dark-color);
  background: var(--bg-gradient);
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

#upload_byfolder {
  visibility: hidden;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  i {
    font-size: 1.5rem;
  }

  &.black {
    padding: 1em 1.5em;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}

#homeView {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    background: blue;
    padding: 3rem;
    min-width: 40vw;
    background: rgba(255, 255, 255, 0.375);
    box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
    border-radius: 2rem;
    border: 1px solid
      linear-gradient(45deg, var(--base) 25%, var(--complimentary2));

    &__inner {
      min-width: 100%;
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
        h3 {
          margin: 2rem 0 1rem 0;
        }
      }

      &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 2;
        width: 100%;
        gap: 2rem;

        &__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
          gap: 1.5rem;

          &__upload {
            height: 20rem;
            width: 20rem;
            border: 2px dashed #7a3af9;
            border-radius: 20px;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease-in-out;

            &:hover {
              filter: brightness(0.8);
              background: #7a3af920;
            }

            .icon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: flex;
              justify-content: center;
              align-items: center;

              i {
                font-size: 5rem;
                color: transparent;
                background-image: linear-gradient(
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
          }

          &__text {
            font-size: 1rem;
            font-weight: 800;
          }
        }

        &__separator {
          border-left: 1px dashed #7a3af9;
          height: 15rem;
        }

        &__right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
          gap: 2rem;

          &__text {
            font-size: 1rem;
            font-weight: 800;
          }
        }
      }

      &__footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-weight: 700;

        &__authors {
          font-size: 0.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }
}
</style>
