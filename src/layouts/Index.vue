<template>
  <div class="tw-flex tw-justify-between tw-mx-4 tw-mt-4">
    <div>
      <div class="tw-text-2xl tw-cursor-pointer tw-uppercase tw-text-red-600">
        belzainco
      </div>
    </div>
    <q-btn
      class="tw-text-red-600 tw-block sm:tw-hidden"
      flat
      dense
      round
      icon="menu"
      aria-label="Menu">
      <q-menu
        transition-show="flip-right"
        transition-hide="flip-left">
        <q-list>
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Recent tabs</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>History</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Downloads</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Settings</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Help &amp; Feedback</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="sm:tw-flex tw-hidden tw-justify-evenly tw--mt-2">
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>History</q-item-section>
      </q-item>
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>History</q-item-section>
      </q-item>
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>History</q-item-section>
      </q-item>
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