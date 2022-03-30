import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseImageURL: null,
    baseImageFile: null,
    baseImageFileName: null,
    baseImageFileSize: null,
    baseImageFileType: null,
    updatedImageURL: null,
    updatedImageFile: null,
    updatedImageFileName: null,
    updatedImageFileSize: null,
    updatedImageFileType: null,
    isImageLoaded: false,
    navbarActive: "filter",
  },
  getters: {},
  mutations: {
    updateNavbarActive(state, payload) {
      state.navbarActive = payload;
    },
    updateImageFileType(state, payload) {
      state.updatedImageFileType = payload;
    },
    setFile(state, payload) {
      state.baseImageURL = payload.url;
      state.baseImageFile = payload.file;
      state.baseImageFileName = payload.fileName;
      state.baseImageFileSize = payload.fileSize;
      state.baseImageFileType = payload.fileType;
      state.updatedImageURL = payload.url;
      state.updatedImageFile = payload.file;
      state.updatedImageFileName = payload.fileName;
      state.updatedImageFileSize = payload.fileSize;
      state.updatedImageFileType = payload.fileType;
      state.isImageLoaded = true;
    },
    setUpdatedFile(state, payload) {
      state.updatedImageURL = payload.url;
      state.updatedImageFile = payload.file;
      state.updatedImageFileName = payload.fileName;
      state.updatedImageFileType = payload.fileType;
    },
  },
  actions: {
    async requestUpdatedImageFile({ state, commit }) {
      // https://remake-it.herokuapp.com/api/v1/download
      const formData = new FormData();
      formData.append("file", state.baseImageFile);

      const res = await axios.post(
        `http://localhost:3000/api/v1/download?extension=jpeg&filter=grayScale`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );

      commit("setUpdatedFile", {
        url: URL.createObjectURL(res.data),
        file: res.data,
        fileName: `RemakeIT-${state.updatedImageFileName}`,
        fileType: res.data.type.split("/")[1],
      });
    },
  },
  modules: {},
});
