<template>
  <div class="tw-mx-2 lg:tw-mx-32 tw-my-10">
    <div class="tw-text-xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
      Service we Provides
    </div> 
    <div class="tw-flex tw-justify-center md:tw-justify-start tw-flex-wrap tw-mb-10">
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <service-card></service-card>
      </div>
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <service-card></service-card>
      </div>
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <service-card></service-card>
      </div>
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
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