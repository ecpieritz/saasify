<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__about-img.jpg')">
      <slot>
        <div class="sf-banner__texts">
          <h1>Discover a little more<br />ABOUT us</h1>
          <h4>
            Equals is the only spreadsheet with built-in connections to any database,
            versioning, and collaboration.
          </h4>
        </div>
      </slot>
    </Banner>
    <AboutItems />
  </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import AboutItems from "@/components/About/AboutItems.vue";

export default {
  name: "AboutView",
  components: {
    Banner,
    AboutItems,
  },
};
</script>
