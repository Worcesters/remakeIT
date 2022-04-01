<template>
  <div id="successView">
    <section class="overlay">
      <div class="overlay__inner">
        <header class="overlay__inner__title">
          <h1>RemakeIT</h1>
        </header>
        <main class="overlay__inner__content">
          <h3 class="overlay__inner__content__title">
            Merci d'avoir utiliser notre application !
          </h3>
        </main>
        <section class="overlay__inner__manga">
          <img src="../assets/luffy-smile.gif" />
        </section>
        <footer class="overlay__inner__footer">
          <div class="flex">
            <a
              href="https://github.com/TheoBIET/remakeIT-API"
              target="_blank"
              class="button black"
            >
              <i class="bx bxl-github"></i>
              RemakeIT-API
            </a>
            <a
              href="https://github.com/TheoBIET/remakeIT"
              target="_blank"
              class="button black"
            >
              <i class="bx bxl-github"></i>
              RemakeIT
            </a>
          </div>
          <div class="button red" @click="backHome">
            <i class="bx bx-home-alt"></i><span>Accueil</span>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ValidateView",
  computed: {
    navbarActive() {
      return this.$store.state.navbarActive;
    },
    file() {
      return this.$store.state.updatedImageURL;
    },
    baseFile() {
      return this.$store.state.baseImageURL;
    },
  },
  methods: {
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
  display: grid;
  place-items: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  i {
    font-size: 1.5rem;
  }

  &.red {
    background: linear-gradient(45deg, #f44336 25%, #e1079a);
  }

  &.black {
    background: linear-gradient(45deg, #333 15%, #333);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}

#successView {
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
        justify-content: center;
        align-items: center;
        width: 100%;
        max-height: 60vh;

        &__title {
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

        &__image-preview {
          min-width: 50%;
          max-width: 50%;
          height: 100%;
          max-height: 100%;
          padding: 1rem;
          flex: 2;
          align-items: center;
          display: flex;

          img {
            width: 100%;
            max-height: inherit;
            max-width: fit-content;
            border-radius: 20px;
            box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
              rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
          }
        }
      }

      &__manga {
        flex: 2;
        display: flex;

        img {
          margin: auto;
          border-radius: 20px;
        }
      }

      &__footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
}
</style>
