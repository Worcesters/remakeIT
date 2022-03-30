<template>
  <div id="homeView">
    <section class="overlay">
      <div class="overlay__inner">
        <header class="overlay__inner__title">
          <h1>RemakeIT</h1>
        </header>
        <main class="overlay__inner__content">
          <div class="overlay__inner__content__left" @click="dropImgClick()">
            <div class="overlay__inner__content__left__upload">
              <label class="required" for="upload_byfolder"></label>
              <input
                autocomplete="file"
                id="upload_byfolder"
                type="file"
                accept=".png,.jpg,.jpeg,.svg"
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
          <h3>Made with ❤️ by bcp de gens</h3>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "UpdateView",
  methods:{
    dropImgClick() {
      document.getElementById('upload_byfolder').click()
    },
    uploadFile(e) {
      const file = e.target.files[0]
      const url = URL.createObjectURL(file)

      // Save file in store
      this.$store.commit('setFile', {
        file,
        url,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.name.split('.').pop(),
      })
      this.$router.push('/update')
    }
  }
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}

#homeView {
  background: #f8f8ff;
  min-height: 100vh;
  min-width: 100vw;
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
    border: 1px solid linear-gradient(45deg, #7a3af9 25%, #e1079a);

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
                color: #7a3af9;
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
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
