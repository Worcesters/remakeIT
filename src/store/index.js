import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseImage: null,
    updatedImage: null,
    isImageLoaded: false,
    navbarActive: 'filter',
  },
  getters: {
  },
  mutations: {
    updateNavbarActive(state, payload) {
      state.navbarActive = payload
    },
    setFile(state, payload) {
      state.baseImage = payload.url
      state.updatedImage = payload.url
      state.isImageLoaded = true
    }
  },
  actions: {
  },
  modules: {
  }
})
