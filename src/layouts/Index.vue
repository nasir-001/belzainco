<template>
  <top-nav></top-nav>
  <overview></overview>
  <services></services>
  <test-component></test-component>
  <products></products>
  <app-footer></app-footer>
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
import Services from '../components/Services.vue';
import Overview from '../components/Overview.vue';
import Products from '../components/Products.vue';
import AppFooter from '../components/Footer.vue';
import TestComponent from '../components/TestComponent.vue';

export default defineComponent({
  name: 'Index',
  components: {
    TopNav,
    Services,
    Overview,
    Products,
    AppFooter,
    TestComponent
  }
})
</script>
