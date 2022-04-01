<template>
  <div id="compressionModify">
    <div class="compression">
      <div class="compression__title">Taux de compression :</div>
      <div class="compression__range">
        <input
          type="range"
          :value="currentCompression"
          min="0"
          max="99"
          @input="updateCompression"
        />
        <div class="compression__range__value">
          Image compressée à {{ currentCompression }}%
        </div>
      </div>
      <div class="compression__size">
        <div class="compression__size__title">Taille actuelle :</div>
        <div class="compression__size__value">
          {{ baseImageFileSize }}
          <span>Mo</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompressionModify",
  computed: {
    currentCompression() {
      return this.$store.state.currentCompression;
    },
    baseImageFileSize() {
      return (this.$store.state.baseImageFileSize * 1e-6).toFixed(2);
    },
  },
  methods: {
    updateCompression(e) {
      this.$store.commit("updateCompression", e.target.value);
    },
  },
};
</script>

<style lang="scss">
#compressionModify {
  .compression {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    &__range {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;

      input {
        width: 100%;
        height: 1.5rem;
      }

      &__value {
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }
    }

    &__size {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &__title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      &__value {
        background: linear-gradient(
          45deg,
          var(--base) 25%,
          var(--complimentary2)
        );
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        padding: 0.5em;
        font-size: 2rem;
        border-radius: 10px;
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>
