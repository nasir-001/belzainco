<template>
  <div class="tw-flex tw-justify-between tw-mx-4 tw-mt-4">
    <div>
      <div class="tw-text-xl sm:tw-text-2xl tw-cursor-pointer tw-uppercase tw-text-gray-600 hover:tw-text-gray-400">
        belzainco
      </div>
    </div>
    <q-btn
      class="tw-text-gray-600 hover:tw-text-gray-400 tw-block sm:tw-hidden"
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
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-600 hover:tw-text-gray-400">
              Community
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-600 hover:tw-text-gray-400">
              Services
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-600 hover:tw-text-gray-400">
              Products
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-600 hover:tw-text-gray-400">
              Aims
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="sm:tw-flex tw-hidden tw-justify-evenly tw--mt-2">
      <q-item class="tw-text-gray-600 tw-text-lg hover:tw-text-gray-400" clickable>
        <q-item-section>
          Community
        </q-item-section>
      </q-item>
      <q-item class="tw-text-gray-600 tw-text-lg hover:tw-text-gray-400" clickable>
        <q-item-section>
          Services
        </q-item-section>
      </q-item>
      <q-item class="tw-text-gray-600 tw-text-lg hover:tw-text-gray-400" clickable>
        <q-item-section>
          Products
        </q-item-section>
      </q-item>
      <q-item class="tw-text-gray-600 tw-text-lg hover:tw-text-gray-400" clickable>
        <q-item-section>
          Aims
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNav'
})
</script>
