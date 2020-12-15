<template>
  <nav>
    <div class="logo">
      <logo></logo>
      <span>rangeStore</span>
    </div>
    <shopping-cart></shopping-cart>
  </nav>
</template>
<script>
import Logo from './Logo.vue';
import ShoppingCart from './ShoppingCart.vue';

export default {
  name: 'navbar',
  components: {
    Logo,
    ShoppingCart,
  },
};

</script>
<style lang="scss" scoped>

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #FA7921;
  height: 4rem;
}

.logo {
  display: flex;
  align-items: center;

  span {
    margin-left: .2rem;
    font-family: 'Montserrat-Bold';
    font-size: 1.2rem;
    color: #FFFFFF;
  }
}

</style>
