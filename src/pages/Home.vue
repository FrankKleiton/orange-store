<template>
  <div class="content">
    <img src="../assets/images/banner.png" />

    <div class="products">
      <product
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :url="product.photo_url"
        :price="product.price"
        :discounts="product.discounts"
        :avaliations="product.avaliations"
      ></product>
    </div>
  </div>
</template>
<script>
import Product from '../components/Product.vue';
import products from '../assets/data/product.json';

export default {
  name: 'Home',
  components: {
    Product,
  },
  computed: {
    products: () => products,
  },
};
</script>
<style lang="scss" scoped>
.content img {
  width: 100%;
  margin-bottom: 1.5em;
}

.content {
  width: 100%;

  .products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 2.3em;
  }
}
</style>
