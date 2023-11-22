<template>
  <div class="sf-banner">
    <div class="container-fluid">
      <slot />
      <img class="sf-banner__img" :src="img" alt="banner image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComp",
  props: {
    img: {
      type: String,
      required: true,
    },
  },
  components: {},
};
</script>
