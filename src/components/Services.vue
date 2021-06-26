<template>
  <div class="tw-mx-32 tw-my-10">
    <div class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
      Services we Provide
    </div>
    <div class="tw-flex sm:tw-flex-wrap tw-mx-auto tw-justify-evenly tw-mt-10">
      <div class="tw-w-1/3 tw-text-xl">
        <service-card></service-card>
      </div>
      <div class="tw-w-1/3 tw-text-xl">
        <service-card></service-card>
      </div>
      <div class="tw-w-1/3 tw-text-xl">
        <service-card></service-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ServiceCard from './ServiceCard.vue';

export default defineComponent({
  name: 'Services',
  components: {
    ServiceCard
  }
})
</script>