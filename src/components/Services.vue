<template>
  <div class="tw-mx-2 lg:tw-mx-32 tw-my-10">
    <div class="tw-text-xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
      Service we Provides
    </div> 
    <div class="tw-flex tw-justify-center md:tw-justify-start tw-flex-wrap tw-mb-10">
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="agro processing" class="sm:tw-text-md tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono" dropdown-icon="">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label class="tw-shadow-xl">
              <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-pixabay-39304.jpg" alt="">
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      </div>
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="agro processing" class="sm:tw-text-md tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono" dropdown-icon="">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label class="tw-shadow-xl">
              <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-pixabay-39304.jpg" alt="">
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      </div>
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="agro processing" class="sm:tw-text-md tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono" dropdown-icon="">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label class="tw-shadow-xl">
              <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-pixabay-39304.jpg" alt="">
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      </div>
      <div class="tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="agro processing" class="sm:tw-text-md tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono" dropdown-icon="">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label class="tw-shadow-xl">
              <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-pixabay-39304.jpg" alt="">
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Services',
  setup () {
    return {
      onMainClick () {
        // console.log('Clicked on main button')
      },

      onItemClick () {
        // console.log('Clicked on an Item')
      }
    }
  }
})
</script>