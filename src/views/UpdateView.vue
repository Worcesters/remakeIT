<template>
  <div id="modifyView">
    <section class="overlay">
      <div class="overlay__inner">
        <header class="overlay__inner__title">
          <h1>RemakeIT</h1>
        </header>
        <main class="overlay__inner__content">
          <div class="overlay__inner__content__image-preview">
            <img :src="file" alt="" />
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
          <div class="button red" @click="$router.push('/')">Retour</div>
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
      return this.$store.state.updatedImage;
    },
  },
  created() {
    const baseImageURL = this.$store.state.baseImageURL;
    console.log(baseImageURL);
    if (!baseImageURL) {
      this.$router.push("/");
    }
  },
  methods: {
    downloadImage() {
      const imageToDownload = this.$store.state.updatedImage;
      const downloadLink = document.createElement("a");
      const fileName = `RemakeIT-${this.$store.state.fileName}`;
      downloadLink.href = imageToDownload;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
  },
};
</script>

<style lang="scss">
.button {
  padding: 1em 3em;
  border-radius: 0.5em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(45deg, #7a3af9 25%, #e1079a);
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
  background: #f8f8ff;
  min-height: 100vh;
  min-width: 100vw;
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
          background: linear-gradient(45deg, #7a3af9 25%, #e1079a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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
          max-width: 50%;
          height: 100%;
          max-height: 100%;
          padding: 1rem;
          flex: 2;

          img {
            max-width: 100%;
            height: 100%;
            border-radius: 20px;
            box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
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
