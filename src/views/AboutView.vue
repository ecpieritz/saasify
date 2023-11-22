<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    About
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'AboutView',
  components: {
    Banner,
  }
}
</script>
