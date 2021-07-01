<template>
  <div class="tw-bottom-0 tw-mt-20 tw-bg-gray-50">
    <div class="tw-flex tw-flex-wrap tw-justify-between sm:tw-justify-start md:tw-justify-center tw-mb-10 tw-mx-2 md:tw-mx-20">
      <div class="tw-mt-10 sm:tw-w-1/2 md:tw-w-1/3">
        <div class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-text-gray-700 tw-cursor-pointer hover:tw-text-gray-600 tw-font-mono">
          Belzainco
        </div>
        <div class="tw-text-xs sm:tw-text-sm tw-mr-4 tw-mt-3 tw-tracking-widest tw-text-gray-500 tw-font-mono tw-font-thin">
          Belzainco global links nigerian limited offers the best service in sourcing, storage and transporting agricultural products. our role is to ensure that we import and export a raw and quality agricultural products at affordable price to our customers.
        </div>
      </div>
      <div class="tw-mt-2 md:tw-mt-10 sm:tw-w-1/2 md:tw-w-1/3">
        <div class="tw-text-lg sm:tw-text-xl md:tw-text-2xl md:tw-ml-12 tw-text-gray-800 tw-cursor-pointer hover:tw-text-gray-600 tw-font-mono">
          Services
        </div>
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Agro processing
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Agro import/export
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Agripreneur Training
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Export Consultations
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Agriculture Consultation
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Export Contract of Non-Oil Commodity
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Drying of All Forms of Farm produce
        </div>
        <q-separator class="md:tw-mx-10" />
        <div class="tw-text-xs sm:tw-text-sm tw-mt- tw-py-2 tw-tracking-widest md:tw-ml-12 tw-text-gray-500 tw-font-mono">
          Agriculture Equipment Manufacturing supply
        </div>
        <q-separator class="md:tw-mx-10" />
      </div>      
      <div class="tw-mt-2 md:tw-mt-10 sm:tw-w-1/2 md:tw-w-1/3">
        <div class="tw-text-lg sm:tw-text-xl md:tw-text-2xl tw-ml-1 tw-text-gray-800 tw-cursor-pointer hover:tw-text-gray-600 tw-font-mono">
          Contact Us
        </div>
        <div class="tw-text-sm tw-mt-3 tw-text-gray-500 tw-font-mono tw-font-thin">
          <q-btn dense flat rounded icon="phone"></q-btn>  08066241131
          <q-separator class="tw-w-40" />
          <q-btn dense flat rounded icon="phone"></q-btn>  08063269348
          <q-separator class="tw-w-40" />
          <q-btn dense flat rounded icon="email"></q-btn><a class="tw-ml-2 tw-text-xs lg:tw-text-base" href="mailto:belzainco.info@yahoo.com">belzainco.info@yahoo.com</a>        </div>
      </div>      
    </div>
    <q-separator class="tw-mx-6 md:tw-mx-20 tw-mb-10" />
    <div class="tw-flex tw-text-lg tw-text-gray-500 tw-justify-center">
      <q-btn flat dense size="xs" class="tw-mt-1" icon="copyright"></q-btn>
      <p class="tw-text-sm md:tw-text-base">{{ year }} Belzainco. All rights reserved.</p>
    </div>
    <div class="tw-mt-4 md:tw-mt-7 tw-text-gray-50">.</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const year = ref(new Date().getFullYear())
    return {
      year
    }
  }
})
</script>