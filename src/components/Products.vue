<template>
  <div class="tw-mx-1">
    <div class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
      Our Products
    </div>
    <div class="tw-flex tw-flex-wrap tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
      <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
        <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden"  src="/img/pexels-ready-made-3987286.jpg" alt="">
        <q-badge outline label="Mango" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
      </div>
      <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
        <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden"  src="/img/pexels-ready-made-3850652.jpg" alt="">
        <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
      </div>
      <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-6 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
        <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden"  src="/img/pexels-castorly-stock-3682190.jpg" alt="">
        <q-badge outline label="Sesame Seeds" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
      </div>
      <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-6 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
        <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden"  src="/img/pexels-naman-nayar-922764.jpg" alt="">
        <q-badge outline label="Hibiscus flower" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'Products',
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
})
</script>