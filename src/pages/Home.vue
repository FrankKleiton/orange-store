<template>
  <div class="content">
    <img src="../assets/images/banner.png" />

    <h1 class="title">Todos os Produtos</h1>

    <div class="products">
      <product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
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
import { mapGetters } from 'vuex';
import Product from '../components/Product.vue';

export default {
  name: 'Home',
  components: {
    Product,
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
    }),
  },
  created() {
    this.$store.dispatch('getProducts');
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

  .title {
    margin-bottom: 1em;
    color: #3b3a3a;
    font-family: 'Montserrat-Bold';
  }

  .products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
    column-gap: 7em;
    row-gap: 2em;
  }
}

/deep/ .card {
  justify-self: center;
}

@media (max-width: 700px) {
  .content img {
    display: none;
  }
}
</style>
