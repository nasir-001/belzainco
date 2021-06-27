<template>
  <div>
    <q-btn-dropdown flat label="agro processing" class="sm:tw-text-md tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono" dropdown-icon="">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label class="tw-shadow-xl">
              <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg hover:tw-shadow-2xl"  src="/img/pexels-pixabay-39304.jpg" alt="">
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default {
  name: 'ServiceCard',
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
}
</script>