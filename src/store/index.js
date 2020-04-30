import Vue from 'vue'
import Vuex from 'vuex'
import bqCache from './modules/bqCache'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
  storage: window.sessionStorage,
  reducer(val) {
    return {
      cache: val.cache
    }
  }
})

const store = new Vuex.Store({
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted],
  modules: {
    bqCache
  }
})

export default store
