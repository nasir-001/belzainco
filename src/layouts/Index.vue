<template>
  <top-nav></top-nav>
  <overview></overview>
  <services></services>
  <products></products>
  <Footer />
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
import Services from '../components/Services.vue';
import Overview from '../components/Overview.vue';
import Products from '../components/Products.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Index',
  components: {
    TopNav,
    Services,
    Overview,
    Products,
    Footer
  }
})
</script>
