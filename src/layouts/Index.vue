<template>
  <div class="tw-flex tw-justify-between">
    <div>
      <div class="tw-text-2xl tw-text-red-600">
        Company
      </div>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
      />
    </div>
    <div>
      <q-menu anchor="bottom right" self="top right">
        <q-item clickable>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>New incognito tab</q-item-section>
        </q-item>
      </q-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Index'
})
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>