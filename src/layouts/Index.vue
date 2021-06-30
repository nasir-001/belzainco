<template>
  <top-nav></top-nav>
  <overview></overview>
  <services></services>
  <product-carousel></product-carousel>
  <app-footer></app-footer>
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
import Services from '../components/Services.vue';
import Overview from '../components/Overview.vue';
import AppFooter from '../components/Footer.vue';
import ProductCarousel from '../components/ProductCarousel.vue';

export default defineComponent({
  name: 'Index',
  components: {
    TopNav,
    Services,
    Overview,
    AppFooter,
    ProductCarousel
  }
})
</script>
