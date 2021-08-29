import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    isLoggedIn: true,
  },
  mutations: {
    ADD_ITEM: (state, itemID) => {
      state.cart.push(itemID)
    },
    CLEAR_CART: (state) => {
      state.cart.splice(0, state.cart.length)
    },
    CHANGE_LOG_IN_STATUS: (state) => {
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
    addItem(store, string){
      store.commit('ADD_ITEM', string)
    },
    clearCart(store){
      store.commit('CLEAR_CART')
    },
    toggleAuthStatus(store){
      store.commit('CHANGE_LOG_IN_STATUS')
    }
  },
  modules: {
  }
})
