<template>
  <div>
    <div class="cart-container">
      <cart fillColor="#FFFFFF" :size="30"></cart>
      <div class="amount">
        <span>{{ productsAmount }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Cart from 'vue-material-design-icons/Cart.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ShoppingCart',
  components: {
    Cart,
  },
  computed: {
    ...mapGetters({
      productsAmount: 'getCartProductsAmount',
    }),
  },
};

</script>
<style lang="scss">

  .cart-container {
    position: relative;
  }

  .amount {
    position: absolute;
    bottom: .2rem;
    background-color: black;
    border-radius: 50%;
    height: .9rem;
    width: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: .6em;
      color: white;
    }
  }
</style>
