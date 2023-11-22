<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')" />
    Customers
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'CustomersView',
  components: {
    Banner,
  }
}
</script>
