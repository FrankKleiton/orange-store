<template>
  <div class="card">
    <img :src="url" />
    <div class="content">
      <h1>{{ name }}</h1>

      <div class="stars">
        <star
          v-for="star in starsAmount"
          :key="star.id"
          :size="16"
          fillColor="#8FCB9B"
        ></star>
        <star-half
          v-if="hasHalfStar"
          :size="16"
          fillColor="#8FCB9B"
        ></star-half>
      </div>

      <div class="price">
        <div v-if="formattedPrice === discountedPrice">
          <h2>R$ {{ formattedPrice }}</h2>
        </div>
        <div v-else>
          <h3>{{ formattedPrice }}</h3>
          <h2>{{ discountedPrice }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { parseISO, compareAsc } from 'date-fns';
import Star from 'vue-material-design-icons/Star.vue';
import StarHalf from 'vue-material-design-icons/StarHalf.vue';

export default {
  name: 'Product',
  components: {
    Star,
    StarHalf,
  },
  props: {
    name: String,
    url: String,
    price: Number,
    avaliations: Array,
    discounts: Array,
  },
  computed: {
    starsAmount() {
      return Math.floor(this.computeStarsMean());
    },
    hasHalfStar() {
      return this.computeStarsMean() % 1 !== 0;
    },
    formattedPrice() {
      return this.price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
    },
    discountedPrice() {
      const discount = this.price * (this.getLatestDiscount() / 100);
      const price = this.price - discount;
      return price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  methods: {
    getLatestDiscount() {
      const sortedDiscounts = this.discounts
        .map((el) => {
          const discount = {};
          discount.start_in = parseISO(el.start_in);
          discount.end_in = parseISO(el.end_in);
          discount.created_at = parseISO(el.end_in);
          discount.percentage = el.percentage;
          return discount;
        })
        .sort((a, b) => compareAsc(a.created_at, b.created_at));

      return sortedDiscounts[sortedDiscounts.length - 1].percentage;
    },
    computeStarsMean() {
      const sum = this.avaliations.reduce((a, b) => a + b.stars, 0);
      const mean = sum / this.avaliations.length;
      return mean;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 18.5em;
  background-color: white;

  image {
    width: 100%;
    height: 100%;
  }

  .content {
    background-color: white;
    width: 100%;
    padding: 0.8em 1.5em;

    h1 {
      font-size: 0.87rem;
      line-height: 1.4;
    }

    h2 {
      font-size: 1rem;
      font-family: 'Montserrat-Bold';
    }

    h3 {
      font-size: 0.85rem;
      font-family: 'Montserrat-Light';
      text-decoration: line-through;
      color: #282828;
    }

    .stars {
      margin: 0.2em 0 0.5em 0;
    }
  }
}
</style>
