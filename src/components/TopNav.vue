<template>
  <div class="tw-flex tw-justify-between tw-mx-4 tw-mt-4">
    <div class="flex tw-justify-start tw--mt-4">
      <div class="tw-mt-5 sm:tw-mt-0">
        <img class="tw-w-10 tw-h-10 sm:tw-w-14 sm:tw-h-14 tw-object-cover"  src="/img/site_logo.jpg" alt="">
      </div>
      <div class="tw-text-xl tw-mt-6 sm:tw-mt-2 sm:tw-text-2xl tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
        <router-link to="/">
          belzainco
        </router-link>
      </div>
    </div>
    <q-btn
      class="tw-text-gray-800 tw-mr-2 sm:tw--mt-0 tw-w-10 hover:tw-text-gray-600 tw-block md:tw-hidden"
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
              <router-link to="/">
                Home
              </router-link>
            </q-item-section>
          </q-item>          
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-overflow-hidden tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
              <router-link to="/about">
                About Us
              </router-link>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section class="tw-text-sm tw-cursor-pointer tw-uppercase tw-text-gray-800 hover:tw-text-gray-600">
              <a href="mailto:belzainco.info@yahoo.com">Contact Us</a>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="md:tw-flex tw-hidden tw-justify-evenly tw--mt-2">
      <q-item class="tw-text-gray-800 tw-rounded-lg tw-text-lg hover:tw-text-gray-600" clickable>
        <q-item-section>
          <router-link to="/">
            Home
          </router-link>
        </q-item-section>
      </q-item>
      <q-item class="tw-text-gray-800 tw-rounded-lg tw-text-lg hover:tw-text-gray-600" clickable>
        <q-item-section>
          <router-link to="/about">
            About Us
          </router-link>
        </q-item-section>
      </q-item>
      <a class="tw-ml-2 tw-py-2 tw-px-3 tw-bg-gradient-to-tl tw-from-gray-300 tw-to-gray-500 tw-bg-gray-700 tw-rounded-lg tw-text-lg hover:tw-text-gray-200 tw-capitalize tw-text-white" href="mailto:belzainco.info@yahoo.com">Contact Us</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNav'
})
</script>
