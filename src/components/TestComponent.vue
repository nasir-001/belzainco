<template>
  <div class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
    Our Products
  </div>
  <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
    <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
    <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
      Avogado
    </p>
  </div>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'ProductCarousel',

  // props: {
  //   src = Object,
  //   name = String
  // },
  
  setup() {
    return { slide: ref(1), }
  }
})
</script>