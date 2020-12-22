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
img {
  width: 100%;
}

.content {
  width: 100%;
}
</style>
