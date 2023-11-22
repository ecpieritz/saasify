<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    <HomeCustomers />
    <HomeServices />
    <HomePlatform />
    <HomeWork />
    <HomeTestimonials />
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
import HomeCustomers from '@/components/Home/HomeCustomers.vue'
import HomeServices from '@/components/Home/HomeServices.vue'
import HomePlatform from '@/components/Home/HomePlatform.vue'
import HomeWork from '@/components/Home/HomeWork.vue'
import HomeTestimonials from '@/components/Home/HomeTestimonials.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    HomeCustomers,
    HomeServices,
    HomePlatform,
    HomeWork,
    HomeTestimonials
  }
}
</script>
