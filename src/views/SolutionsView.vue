<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__solutions-img.jpg')">
      <slot>
        <div class="sf-banner__texts">
          <h1>Discover the best SOLUTIONS we have for your company</h1>
          <h4>
            Equals is the only spreadsheet with built-in connections to any database,
            versioning, and collaboration.
          </h4>
        </div>
      </slot>
    </Banner>
  </main>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "SolutionsView",
  components: {
    Banner,
  },
};
</script>
