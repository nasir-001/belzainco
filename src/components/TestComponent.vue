<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="secondary"
      navigation
      padding
      arrows
      height="400px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3987286.jpg" alt="">
            <q-badge outline label="Mango" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-castorly-stock-3682190.jpg" alt="">
            <q-badge outline label="Sesame Seeds" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-naman-nayar-922764.jpg" alt="">
            <q-badge outline label="Hibiscus Flower" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-pixabay-161556.jpg" alt="">
            <q-badge outline label="Ginger" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/IMG_20210627_225552.jpg" alt="">
            <q-badge outline label="Potato Swallow" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ylanite-koppens-915016.jpg" alt="">
            <q-badge outline label="Pineapple" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-anna-nekrashevich-7214784.jpg" alt="">
            <q-badge outline label="Hibiscus Flower" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/IMG_20210627_225228.jpg" alt="">
            <q-badge outline label="Potator Flour" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/potatorimages.jpeg" alt="">
            <q-badge outline label="Potator" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pepperimages.jpeg" alt="">
            <q-badge outline label="Pepper" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/gettyimages-175453750-612x612.jpg" alt="">
            <q-badge outline label="Soya Beans" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3987286.jpg" alt="">
            <q-badge outline label="Mango" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-castorly-stock-3682190.jpg" alt="">
            <q-badge outline label="Sesame Seeds" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-naman-nayar-922764.jpg" alt="">
            <q-badge outline label="Hibiscus Flower" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'TestComponent',
  setup () {
    return {
      slide: ref(1)
    }
  }
})
</script>