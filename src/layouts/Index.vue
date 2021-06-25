<template>
  <top-nav></top-nav>
  <overview></overview>
  <services></services>
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
import Services from '../components/Services.vue';
import Overview from '../components/Overview.vue';

export default defineComponent({
  name: 'Index',
  components: {
    TopNav,
    Services,
    Overview
  }
})
</script>
