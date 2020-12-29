import Vue from 'vue';

function fetchProducts(cb, cbe) {
  Vue.axios
    .get('/products')
    .then(({ status, data }) => {
      if (status === 200) {
        cb(data);
      }
    })
    .catch((err) => {
      cbe(err);
    });
}

export default { fetchProducts };
