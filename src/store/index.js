import Vue from 'vue';
import Vuex from 'vuex';

import productsApi from '../api/product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        productsApi.fetchProducts((data) => {
          context.commit('setProducts', data);
          resolve();
        }, (err) => {
          reject(err);
        });
      });
    },
  },
  modules: {
  },
});
