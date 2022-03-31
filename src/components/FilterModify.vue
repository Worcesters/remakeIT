<template>
  <div id="filterModify">
    <div class="filters">
      <div
        class="filter"
        :class="selectedFilter === filter.code ? 'active' : ''"
        v-for="filter in filters"
        :key="filter.code"
        @click="updateFilter(filter.code)"
      >
        {{ filter.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterModify",
  data() {
    return {
      filters: [
        {
          code: "grayScale",
          name: "Nuances de gris",
        },
        {
          code: "sepia",
          name: " Teintes - Vieille photo",
        },
        {
          code: "hsv",
          name: "Teinte - Saturation - Valeur",
        },
        {
          code: "rgb",
          name: "Rouge - Vert - Bleu",
        },
        {
          code: "default",
          name: "Aucun filtre",
        },
      ],
    };
  },
  computed: {
    selectedFilter() {
      return this.$store.state.selectedFilter;
    },
  },
  methods: {
    updateFilter(filter) {
      this.$store.commit("updateFilter", filter);
      this.$store.dispatch("updateImageFileType");
    },
  },
};
</script>

<style lang="scss">
#filterModify {
  .filters {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .filter {
      padding: 1.5rem 3em;
      background-color: #f5f5f5;
      border-radius: 0.5em;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
      font-weight: 800;

      &:hover {
        transform: translateY(-3px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }

      &.active {
        background: linear-gradient(45deg, #7a3af9 25%, #e1079a);
        color: #fff;
        border: 3px solid #e1079a;
      }
    }
  }
}
</style>
