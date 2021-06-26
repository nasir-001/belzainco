<template>
  <div>
    <q-btn-dropdown size="xl" flat label="agro processing" class="md:tw-text-lg tw-text-sm tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono" dropdown-icon="">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
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