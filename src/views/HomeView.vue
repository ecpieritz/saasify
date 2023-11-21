<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    <HomeCustomers />
    <HomeServices />
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
import HomeCustomers from '@/components/Home/HomeCustomers.vue'
import HomeServices from '@/components/Home/HomeServices.vue'
export default {
  name: 'HomeView',
  components: {
    Banner,
    HomeCustomers,
    HomeServices
  }
}
</script>
