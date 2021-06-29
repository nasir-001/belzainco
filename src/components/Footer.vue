<template>
  <div class="flex flex-col h-screen">
    <div class="bg-red-500">header</div>
    <div class="bg-green-500 flex-grow">content</div>
    <div class="bg-blue-500">footer</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter'
})
</script>