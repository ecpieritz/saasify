<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    <HomeCustomers />
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
import HomeCustomers from '@/components/Home/HomeCustomers.vue'
export default {
  name: 'HomeView',
  components: {
    Banner,
    HomeCustomers
  }
}
</script>
