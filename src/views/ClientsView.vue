<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__clients-img.jpg')"> </Banner>
  </main>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "ClientsView",
  components: {
    Banner,
  },
};
</script>
