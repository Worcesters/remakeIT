<template>
  <div id="navbar">
    <nav class="navbar">
      <ul class="navbar__list">
        <li
          class="navbar__list__item"
          :class="navbarActive === 'filter' ? 'active' : ''"
          @click="updateNavbarActive('filter')"
        >
          Filtres
        </li>
        <li
          class="navbar__list__item"
          :class="navbarActive === 'dimension' ? 'active' : ''"
          @click="updateNavbarActive('dimension')"
        >
          Dimensions
        </li>
        <li
          class="navbar__list__item"
          :class="navbarActive === 'extension' ? 'active' : ''"
          @click="updateNavbarActive('extension')"
        >
          Extensions
        </li>
        <li
          class="navbar__list__item"
          :class="navbarActive === 'compression' ? 'active' : ''"
          @click="updateNavbarActive('compression')"
        >
          Compression
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    navbarActive() {
      return this.$store.state.navbarActive;
    },
  },
  methods: {
    updateNavbarActive(navbarActive) {
      this.$store.commit("updateNavbarActive", navbarActive);
    },
  }
};
</script>

<style lang="scss">
#navbar {
  .navbar {
    &__list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      text-align: left;

      &__item {
        padding: 1.5rem 3rem;
        border-radius: 0.5em 0 0 0.5em;
        transition: all 0.2s ease-in-out;
        box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
        transition: all 0.2s ease-in-out;
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        font-weight: 800;

        &:hover,
        &.active {
          transform: translateY(-3px);
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
            rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
          background: linear-gradient(45deg, #7a3af9 25%, #e1079a);
          color: #fff;
        }
      }
    }
  }
}
</style>
