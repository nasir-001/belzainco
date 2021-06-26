<template>
  <div class="tw-flex tw-justify-between tw-mx-4 tw-mt-4">
    <div>
      <div class="tw-text-xl sm:tw-text-2xl md:tw-ml-4 lg:tw-ml-6 tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
        belzainco
      </div>
    </div>
    <q-btn
      class="tw-text-gray-800 hover:tw-text-gray-600 tw-block md:tw-hidden"
      flat
      dense
      round
      icon="menu"
      aria-label="Menu">
      <q-menu
        class="tw-shadow-2xl"
        transition-show="scale"
        transition-hide="scale">
        <q-list style="min-width: 150px">
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
              Community
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
              Services
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
              Products
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
              Contact Us
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="md:tw-flex tw-hidden tw-justify-evenly tw--mt-2">
      <q-item class="tw-text-gray-800 tw-rounded-lg tw-text-lg hover:tw-text-gray-600" clickable>
        <q-item-section>
          Community
        </q-item-section>
      </q-item>
      <q-item class="tw-text-gray-800 tw-rounded-lg tw-text-lg hover:tw-text-gray-600" clickable>
        <q-item-section>
          Services
        </q-item-section>
      </q-item>
      <q-item class="tw-text-gray-800 tw-rounded-lg tw-text-lg hover:tw-text-gray-600" clickable>
        <q-item-section>
          Products
        </q-item-section>
      </q-item>
       <q-btn flat class="tw-ml-2 tw-bg-gradient-to-tl tw-from-purple-600 tw-via-yellow-200 tw-to-pink-600 tw-rounded-lg tw-text-lg hover:tw-text-gray-600 tw-capitalize tw-text-gray-800" label="Contact Us" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNav'
})
</script>
