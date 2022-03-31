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

            &__value {
                font-size: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
}
</style>
