import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import dayjs from "dayjs";

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
    navbarActive: "filter",
    selectedFilter: "default",
    isImageLoading: false,
  },
  getters: {},
  mutations: {
    updateNavbarActive(state, payload) {
      state.navbarActive = payload;
    },
    updateImageFileType(state, payload) {
      state.updatedImageFileType = payload;
    },
    updateFilter(state, payload) {
      state.selectedFilter = payload;
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
      state.isImageLoading = false;
    },
    setUpdatedFile(state, payload) {
      state.updatedImageURL = payload.url;
      state.updatedImageFile = payload.file;
      state.updatedImageFileName = payload.fileName;
      state.updatedImageFileType = payload.fileType;
      state.isImageLoading = false;
    },
  },
  actions: {
    async updateImageFileType({ state, commit }) {
      state.isImageLoading = true;
      // https://remake-it.herokuapp.com/api/v1/download
      const formData = new FormData();
      formData.append("file", state.baseImageFile);

      const res = await axios.post(
        `https://remake-it.herokuapp.com/api/v1/download?extension=${state.baseImageFileType}&filter=${state.selectedFilter}`,
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
        fileName: `RemakeIT-${dayjs().format('YYYY-MM-DD-HH-mm-ss')}-${state.updatedImageFileName}`,
        fileType: res.data.type.split("/")[1],
      });
    },
    async requestUpdatedImageFile({ state, commit }) {
      state.isImageLoading = true;
      // https://remake-it.herokuapp.com/api/v1/download
      const formData = new FormData();
      formData.append("file", state.baseImageFile);

      const res = await axios.post(
        `https://remake-it.herokuapp.com/api/v1/download?extension=${state.updatedImageFileType}&filter=${state.selectedFilter}`,
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
        fileName: `RemakeIT-${dayjs().format('YYYY-MM-DD-HH-mm-ss')}-${state.updatedImageFileName}`,
        fileType: res.data.type.split("/")[1],
      });
    },
  },
  modules: {},
});
