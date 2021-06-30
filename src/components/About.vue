<template>
  <top-nav></top-nav>
  <div class="tw-uppercase tw-text-center tw-text-gray-800 tw-mt-10 md:tw-tracking-widest tw-font-serif tw-text-3xl sm:tw-text-4xl tw-font-thin md:tw-text-5xl">
    About Us
  </div>
  <div class="tw-block lg:tw-flex tw-mb-10 md:tw-mb-20 tw-flex-wrap lg:tw-mt-10 tw-justify-center">
    <div class="md:tw-text-lg lg:tw-w-3/6 tw-mx-4 tw-text-sm tw-text-gray-700 tw-tracking-normal tw-font-thin tw-mt-4 tw-font-mono">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur, aspernatur cum necessitatibus nisi earum praesentium! Assumenda maiores soluta veritatis? Ratione eum sunt quae ea debitis. Fugiat ducimus sequi et!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit aut vitae beatae, iure voluptatibus. Nemo laborum error veniam dicta! Ea nisi obcaecati in ipsum est. Error magni odio animi.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, qui reiciendis repudiandae vel omnis vero ipsa maxime deserunt magnam sed minus dolorem eveniet rerum. Quia nulla beatae suscipit nisi omnis.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos provident illo debitis sequi ex rerum numquam explicabo, similique aliquid. Repudiandae porro fugiat explicabo dignissimos! Eaque laudantium harum dicta enim.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur, aspernatur cum necessitatibus nisi earum praesentium! Assumenda maiores soluta veritatis? Ratione eum sunt quae ea debitis. Fugiat ducimus sequi et!
      
    </div>
    <div class="lg:tw-w-2/6 tw-mx-2 lg:tw-mx-0">
      <img class="tw-w-full tw-opacity-100  hover:tw-opacity-80 tw-object-cover tw-rounded-3xl tw-shadow-xl tw-h-full hover:tw-shadow-2xl" src="/img/IMG-20210629-WA0081.jpg" alt="">
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