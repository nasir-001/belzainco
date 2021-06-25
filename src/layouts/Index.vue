<template>
  <top-nav></top-nav>
  <services></services>
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
import Services from '../components/Services.vue';
export default defineComponent({
  name: 'Index',
  components: {
    TopNav,
    Services
  }
})
</script>
