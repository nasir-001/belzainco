<template>
  <top-nav></top-nav>
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
export default defineComponent({
  name: 'Index',
  components: {
    TopNav
  }
})
</script>
