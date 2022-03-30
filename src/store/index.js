import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseImage: '',
    updatedImage: '',
    isImageLoaded: false,
    navbarActive: 'filter',
  },
  getters: {
  },
  mutations: {
    // updateNavbarActive
    updateNavbarActive(state, payload) {
      state.navbarActive = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
