<template>
  <div id="dimensionModify">
    <div class="dimension">
      <div class="dimension__title">Définissez la taille :</div>
      <div class="dimension__tools">
        <div class="dimension__tools__percentage">
          <div class="dimension__tools__percentage__title">
            En pourcentage :
          </div>
          <div class="dimension__tools__percentage__input">
            <input
              type="range"
              v-model="currentPercentage"
              min="-100"
              max="100"
              value="0"
            />
            <div
              v-if="currentPercentage > 0"
              class="dimension__tools__percentage__value"
            >
              {{ currentPercentage }}% plus grand
            </div>
            <div
              v-if="currentPercentage < 0"
              class="dimension__tools__percentage__value"
            >
              {{ currentPercentage * -1 }}% plus petit
            </div>
          </div>
        </div>
        <div class="dimension__tools__brut">
          <div class="dimension__tools__brut__title">
            Avec les dimension :
          </div>
          <div class="dimension__tools__brut__input">
            <input
              type="number"
              :placeholder="baseWidth"
              min="0"
              max="10000"
              step="1"
              :value="newWidth ? newWidth : null"
              @change="updateWidth"
            />
            <div class="dimension__tools__brut__input__separator">x</div>
            <input
              type="number"
              :placeholder="baseHeight"
              min="0"
              max="10000"
              step="1"
              :value="newHeight ? newHeight : null"
              @change="updateHeight"
            />
          </div>
        </div>
        <div class="dimension__tools__reset" @click="reset">
          <div class="button">Réinitialiser</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DimensionModify",
  data() {
    return {
      currentPercentage: 0,
      newWidth: 0,
      newHeight: 0,
    };
  },
  computed: {
    baseWidth() {
      return this.$store.state.baseImageWidth;
    },
    baseHeight() {
      return this.$store.state.baseImageHeight;
    },
  },
  methods: {
    reset() {
      this.currentPercentage = 0;
      this.newWidth = 0;
      this.newHeight = 0;
    },
    updateHeight(e) {
      this.newHeight = e.target.value;
    },
    updateWidth(e) {
      this.newWidth = e.target.value;
    },
  },
};
</script>

<style lang="scss">
.dimension {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &__title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  &__tools {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    &__percentage {
        &__title {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 1em;
        }

        input[type="range"] {
            width: 100%;
            background: transparent;
            border: none;
        }
    }

    &__brut {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
        &__title {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: 1em;
        }

        &__input {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            input[type="number"] {
                width: 5rem;
                text-align: center;
                border: none;
                border-radius: 0.5em;
                font-size: 1.5em;
                padding: 0.1em;
                font-weight: bold;
            }
        }
    }
  }
}
</style>
