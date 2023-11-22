<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    Solutions
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'SolutionsView',
  components: {
    Banner,
  }
}
</script>
