<template>
  <main>
    <Banner :img="require('@/assets/imgs/sf-banner__home-img.png')">
      <slot>
        <div class="sf-banner__texts">
          <h1>The fastest way for startups to do any analysis</h1>
          <h4>
            Equals is the only spreadsheet with built-in connections to any database,
            versioning, and collaboration.
          </h4>
        </div>
        <div class="sf-banner__form input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email"
            aria-label="Enter your email"
            aria-describedby="bannerHomeBtn"
          />
          <div class="input-group-append">
            <button class="btn" type="button" id="bannerHomeBtn">Start for free</button>
          </div>
        </div>
      </slot>
    </Banner>
    <HomeCustomers />
    <HomeServices />
    <HomePlatform />
    <HomeWork />
    <HomeTestimonials />
  </main>
</template>

<script>
import Banner from "@/components/Banner.vue";
import HomeCustomers from "@/components/Home/HomeCustomers.vue";
import HomeServices from "@/components/Home/HomeServices.vue";
import HomePlatform from "@/components/Home/HomePlatform.vue";
import HomeWork from "@/components/Home/HomeWork.vue";
import HomeTestimonials from "@/components/Home/HomeTestimonials.vue";

export default {
  name: "HomeView",
  components: {
    Banner,
    HomeCustomers,
    HomeServices,
    HomePlatform,
    HomeWork,
    HomeTestimonials,
  },
};
</script>
