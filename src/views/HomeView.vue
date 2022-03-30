<template>
  <div id="homeView">
    <section class="overlay">
      <div class="overlay__inner">
        <header class="overlay__inner__title">
          <h1>RemakeIT</h1>
        </header>
        <main class="overlay__inner__content">
          <div class="overlay__inner__content__image-preview">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div class="overlay__inner__content__modification">MODIF</div>
          <NavBar />
        </main>
        <footer class="overlay__inner__footer">
          <div class="button gradient">Télécharger</div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#homeView {
  background: #f8f8ff;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    background: blue;
    padding: 3rem 0 3rem 3rem;
    min-width: 40vw;
    background: rgba(255, 255, 255, 0.375);
    box-shadow: 0 0.75rem 2rem 0 rgb(0 0 0 / 10%);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);

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

        &__image-preview {
          width: 40%;
          padding: 3rem;

          img {
            width: 100%;
            border-radius: 20px;
            box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
          }
        }

        &__modification {
          flex: 2;
        }
      }

      &__footer {
        display: flex;
        justify-content: center;
        align-items: center;

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
      }
    }
  }
}
</style>
