import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    navbarActive: 'filter',
  },
  getters: {
  },
  mutations: {
    updateNavbarActive(state, payload) {
      state.navbarActive = payload
    },
    updateImageFileType(state, payload) {
      state.updatedImageFileType = payload
    },
    setFile(state, payload) {
      state.baseImageURL = payload.url
      state.baseImageFile = payload.file
      state.baseImageFileName = payload.fileName
      state.baseImageFileSize = payload.fileSize
      state.baseImageFileType = payload.fileType
      state.updatedImage = payload.url
      state.updatedImageFile = payload.file
      state.updatedImageFileName = payload.fileName
      state.updatedImageFileSize = payload.fileSize
      state.updatedImageFileType = payload.fileType
      state.isImageLoaded = true
    },
  },
  actions: {
  },
  modules: {
  }
})
