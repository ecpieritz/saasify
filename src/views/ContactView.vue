<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    Contact
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'BannerView',
  components: {
    Banner,
  }
}
</script>
