import Vue from 'vue';
import Vuex from 'vuex';

import productsApi from '../api/product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCartProductsAmount(state) {
      return state.cart.length;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProductToCart(state, payload) {
      const productIndex = this.state.cart.findIndex((prod) => prod.id === payload.product.id);
      if (productIndex !== -1) {
        state.cart[productIndex].amount += 1;
      } else {
        const product = { ...payload.product, amount: 1 };
        state.cart.push(product);
      }
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
