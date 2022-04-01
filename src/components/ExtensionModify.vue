<template>
  <div id="extensionModify">
    <div class="extensions">
      <div class="extensions__current">
        <div class="extensions__current__title">
          <h3>Extension actuelle :</h3>
        </div>
        <div class="extensions__current__container">
          <div class="extensions__current__container__icon">
            <i
              :class="
                extensions.find(
                  (e) => e.name.toLowerCase() === baseImageFileType
                ).icon
              "
            ></i>
          </div>
          <div class="extensions__current__container__text">
            {{ baseImageFileType.toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="extensions__list-container">
        <div class="extensions__list-container__title">
          <h3>Extension à l'exportation :</h3>
        </div>
        <div class="extensions__list-container__list">
          <div
            class="extensions__list-container__list__container"
            v-for="extension in extensions"
            :key="extension.name"
            @click="updateImageFileType(extension.name.toLowerCase())"
          >
            <div class="extensions__list-container__list__container__icon">
              <i class="bx bxs-file-jpg"></i>
            </div>
            <div class="extensions__list-container__list__container__text">
              {{ extension.name }}
            </div>
            <div class="extensions__list-container__list__container__checkbox">
              <input
                type="checkbox"
                :value="extension.name.toLowerCase()"
                :checked="
                  extension.name.toLowerCase() === updatedImageFileType
                    ? true
                    : false
                "
                @change="updateImageFileType($event.target.value)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExtensionModify",
  data() {
    return {
      extensions: [
        {
          name: "PNG",
          icon: "bx bxs-file-png",
        },
        {
          name: "GIF",
          icon: "bx bxs-file-gif",
        },
        {
          name: "WEBP",
          icon: "bx bx-image",
        },
        {
          name: "JPEG",
          icon: "bx bxs-file-jpeg",
        },
        {
          name: "JPG",
          icon: "bx bxs-file-jpg",
        },
        {
          name: "TIFF",
          icon: "bx bx-image",
        },
      ],
    };
  },
  computed: {
    updatedImageFileType() {
      return this.$store.state.updatedImageFileType;
    },
    baseImageFileType() {
      return this.$store.state.baseImageFileType;
    },
  },
  methods: {
    updateImageFileType(e) {
      this.$store.commit("updateImageFileType", e);
    },
  },
};
</script>

<style lang="scss">
#extensionModify {
  .extensions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    &__current,
    &__list-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      &__title {
        font-size: 1.5rem;
        font-weight: 800;
      }

      &__container,
      .extensions__list-container__list__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: #7a3af9;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        &__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;

          i {
            font-size: 2.5rem;
            color: #fff;
          }
        }

        &__text {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
        }
      }
    }

    &__list-container {
      &__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        &__container {
          width: 40%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
