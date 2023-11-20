<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    <h1>Home</h1>
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'HomeView',
  components: {
    Banner,
  }
}
</script>
