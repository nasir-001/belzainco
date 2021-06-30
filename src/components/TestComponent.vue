<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="400px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="tw-flex fit tw-justify-center tw-mx-auto tw-mt-20 q-gutter-xs q-col-gutter no-wrap">
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3987286.jpg" alt="">
            <q-badge outline label="Mango" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-castorly-stock-3682190.jpg" alt="">
            <q-badge outline label="Sesame Seeds" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-naman-nayar-922764.jpg" alt="">
            <q-badge outline label="Hibiscus Flower" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="tw-flex fit tw-justify-center tw-mx-auto tw-mt-20 q-gutter-xs q-col-gutter no-wrap">
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="tw-flex fit tw-justify-center tw-mx-auto tw-mt-20 q-gutter-xs q-col-gutter no-wrap">
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="tw-flex fit tw-justify-center tw-mx-auto tw-mt-20 q-gutter-xs q-col-gutter no-wrap">
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
          </div>              
          <div class="sm:tw-mx-2 tw-bg-gray-50 tw-shadow-xl tw-mb-20 tw-border-gray-200 hover:tw-shadow-2xl hover:tw-opacity-80 tw-border-2 tw-h-60 tw-w-1/2 sm:tw-w-1/3 md:tw-w-1/4 lg:tw-w-1/5 tw-rounded-3xl">
            <img class="tw-object-cover tw-shadow-xl tw-h-48 tw--mt-12 tw-w-5/6 tw-mx-auto hover:tw-shadow-2xl tw-rounded-3xl tw-overflow-hidden" src="/img/pexels-ready-made-3850652.jpg" alt="">
            <q-badge outline label="Avocado" class="tw-ml-4 sm:tw-ml-6 tw-mt-4 tw-text-xs sm:tw-text-sm tw-text-gray-500 tw-font-mono tw-font-thin tw-px-3" />
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