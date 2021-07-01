<template>
  <top-nav></top-nav>
  <div class="tw-uppercase tw-text-center tw-text-gray-800 tw-mt-10 md:tw-tracking-widest tw-font-serif tw-text-3xl sm:tw-text-4xl tw-font-thin md:tw-text-5xl">
    About Us
  </div>
  <div class="tw-block lg:tw-flex tw-mb-10 md:tw-mb-20 tw-flex-wrap lg:tw-mt-10 tw-justify-center">
    <div class="md:tw-text-lg lg:tw-w-3/6 tw-mx-4 tw-text-sm tw-text-gray-700 tw-tracking-normal tw-font-thin tw-mt-4 tw-font-mono">
      Belzainco Global Links Nig. Ltd, (1549886). Is an Agricultural Technological company engaged in the Business of Agro-processing, Export, Aggregating, Agricultural Consultation and supply of tools/Equipment needed for modern Agricultural practices with about five (5) year's Experiences in the Manufacturing of Sweet potato flour, Dry Onion flakes, Dry Tomatoes, Dry Big Red pepper, Spices and Dry Ginger powder or Fresh.
    Some of our partners we work with in a various Capacities in the Global Agribusinesses industry. National Research instituted for chemical technology (NARICT), Federal Ministry of Rural and Agriculture Development (FMRD), Sweet potato forum (SPF), Cooperate Farmers International (CFI) And Nigerian Export promotion council (NEPC). We have also build intensive network and Relationship in Nigeria and International Agribusiness industries.
    </div>
    <div class="lg:tw-w-2/6 tw-mx-2 lg:tw-mx-0">
      <img class="tw-w-full tw-opacity-100  hover:tw-opacity-80 tw-object-cover tw-rounded-3xl tw-shadow-xl tw-h-full hover:tw-shadow-2xl" src="/img/IMG-20210629-WA0080.jpg" alt="">
    </div>
  </div>
  <app-footer></app-footer>
</template>

<script>
import { defineComponent } from 'vue';
import TopNav from '../components/TopNav.vue';
import AppFooter from '../components/Footer.vue';
import App from 'src/App.vue';

export default defineComponent({
  name: 'About',
  components: {
    TopNav,
    AppFooter,
  }
})
</script>