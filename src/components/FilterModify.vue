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
          code: "invert",
          name: "Négatif",
        },
        {
          code: "solarize",
          name: "Solarisation",
        },
        {
          code: "4bit",
          name: "4 bits",
        },
        {
          code: "8bit",
          name: "8 bits",
        },
        {
          code: "mirror",
          name: "Mode mirroir",
        },
        {
          code: "boxBlur",
          name: "Flou",
        },
        {
          code: "gaussianBlur",
          name: "Flou gaussien",
        },
        {
          code: "unsharpMask",
          name: "Masque de flou",
        },
        {
          code: "sharpen",
          name: "Netteté",
        },
        {
          code: "contour",
          name: "Contour",
        },
        {
          code: "detail",
          name: "Détails",
        },
        {
          code: "edgeEnhance",
          name: "Effet de bord",
        },
        {
          code: "edgeEnhanceMore",
          name: "(plus) d'Effets de bord",
        },
        {
          code: "emboss",
          name: "Embosser",
        },
        {
          code: "findEdges",
          name: "Trouver les bords",
        },
        {
          code: "smooth",
          name: "Lissage",
        },
        {
          code: "smoothMore",
          name: "(plus) de lissage",
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
  height: 100%;
  .filters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 35em;
    overflow: auto;
    padding: 1rem;

    .filter {
      padding: 1.5rem 3em;
      background-color: #f5f5f5;
      border-radius: 0.5em;
      cursor: pointer;
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
      font-weight: 800;

      &:hover {
        transform: translateY(-3px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }

      &.active {
        background: linear-gradient(
          45deg,
          var(--base) 25%,
          var(--complimentary2)
        );
        color: #fff;
        border: 3px solid #f5f5f5;

        &:hover {
          transform: translateY(0);
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
            rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }
      }
    }
  }
}
</style>
