<template>
  <div class="tw-mx-2 lg:tw-mx-32 tw-my-10">
    <div class="tw-text-xl sm:tw-text-3xl md:tw-text-4xl tw-text-center tw-text-gray-800 tw-font-mono">
      Service We Provide
    </div> 
    <div class="tw-flex tw-justify-center md:tw-justify-start tw-flex-wrap tw-mb-10">
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="agro processing" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/gettyimages-1129883796-612x612.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="ginger export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-pixabay-161556.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="soya beans export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/gettyimages-175453750-612x612.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="hibiscus flower" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-naman-nayar-922764.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="potator swallow" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/IMG_20210627_225552.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="sesame seed" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-eva-elijas-5988119.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="mango export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
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
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="pineapple export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-ylanite-koppens-915016.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="apple export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-anna-nekrashevich-7214784.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="avocado export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-wendy-wei-1656666.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="orange export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-public-domain-pictures-42059.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="banana export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pexels-shvets-production-7194915.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="potator flour" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/IMG_20210627_225228.jpg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="Onions Export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/onionsimages.jpeg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="sweet potator export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/potatorimages.jpeg" alt="">
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-text-xl tw-mx-0">
        <q-btn-dropdown flat label="pepper export" class="sm:tw-text-md tw-mt-2 sm:tw-mt-6 tw-w-full tw-text-gray-700 tw-tracking-widest tw-font-thin tw-font-mono tw-text-left" dropdown-icon="">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label class="tw-shadow-xl">
                  <img class="tw-object-cover tw-shadow-xl tw-h-48 tw-rounded-lg tw-overflow-hidden tw-rounded-b-lg tw-mx-auto tw-w-full hover:tw-shadow-2xl"  src="/img/pepperimages.jpeg" alt="">
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