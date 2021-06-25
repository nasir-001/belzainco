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
        transition-show="scale"
        transition-hide="scale">
        <q-list style="min-width: 150px">
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-red-600">Manager</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-red-600">Services</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-red-600">Products</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-red-600">Aims</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="sm:tw-flex tw-hidden tw-justify-evenly tw--mt-2">
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>Manager</q-item-section>
      </q-item>
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>Services</q-item-section>
      </q-item>
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>Products</q-item-section>
      </q-item>
      <q-item class="tw-text-red-600 tw-text-lg" clickable>
        <q-item-section>Aims</q-item-section>
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