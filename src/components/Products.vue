<template>
  <div>
    <div class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
      Our Products
    </div>
    <div class="tw-flex tw-justify-evenly tw-mx-28 tw-mt-6 tw-mb-10">
      <div class="tw-w-1/4 tw-mx-2 tw-rounded-3xl tw-shadow-xl tw-overflow-hidden hover:tw-shadow-2xl">
        <img class="tw-object-cover tw-opacity-100 hover:tw-opacity-80 tw-h-52 tw-w-full"  src="/img/pexels-ready-made-3987286.jpg" alt="">
      </div>
      <div class="tw-w-1/4 tw-mx-2 tw-rounded-3xl tw-shadow-xl tw-overflow-hidden hover:tw-shadow-2xl">
        <img class="tw-object-cover tw-opacity-100 hover:tw-opacity-80 tw-h-52 tw-w-full"  src="/img/pexels-ready-made-3850652.jpg" alt="">
      </div>
      <div class="tw-w-1/4 tw-mx-2 tw-rounded-3xl tw-shadow-xl tw-overflow-hidden hover:tw-shadow-2xl">
        <img class="tw-object-cover tw-opacity-100 hover:tw-opacity-80 tw-h-52 tw-w-full"  src="/img/pexels-pixabay-39303.jpg" alt="">
      </div>
      <div class="tw-w-1/4 tw-mx-2 tw-rounded-3xl tw-shadow-xl tw-overflow-hidden hover:tw-shadow-2xl">
        <img class="tw-object-cover tw-opacity-100 hover:tw-opacity-80 tw-h-52 tw-w-full"  src="/img/pexels-naman-nayar-922764.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Products'
})
</script>