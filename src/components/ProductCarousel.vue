<template>
  <div class="tw-text-2xl sm:tw-text-3xl tw-mt-20 md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
    Our Products
  </div>
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
      class="bg-white shadow-2 no-shadow rounded-borders"
    >
      <q-carousel-slide :name="1" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-18 tw-mt-16 tw-justify-start sm:tw-justify-center">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3987286.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Mango
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Avocado
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-castorly-stock-3682190.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Sasame Seeds
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-naman-nayar-922764.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Hibiscus Flower
            </p>
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-pixabay-161556.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Ginger
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/IMG_20210627_225552.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Potator Swallow
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ylanite-koppens-915016.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Pineapple
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-anna-nekrashevich-7214784.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Hibiscus Flower
            </p>
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/IMG_20210627_225228.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Potator Flour
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/potatorimages.jpeg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Potator
            </p>
          </div>
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pepperimages.jpeg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Pepper
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/gettyimages-175453750-612x612.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Soya Beans
            </p>
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column">
        <div class="tw-flex tw-flex-wrap tw--mx-14 md:tw--mx-0 tw-mt-20 tw-justify-start sm:tw-justify-center tw-mb-10">
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-shvets-production-7194915.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Banana
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-julia-volk-5273044.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Fruits
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/onionsimages.jpeg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Onions
            </p>
          </div>              
          <div class="sm:tw-mx-1 tw-bg-gray-50 tw-shadow-xl tw-mb-16 sm:tw-mb-0 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/crayfishimages.jpg" alt="">
            <p class="tw-ml-2 sm:tw-ml-4 tw-mt-4 tw-text-sm sm:tw-text-lg tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3">
              Crayfish
            </p>                  
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
  name: 'ProductCarousel',
  setup () {
    return {
      slide: ref(1)
    }
  }
})
</script>