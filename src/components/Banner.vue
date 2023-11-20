<template>
  <nav class="sf-banner">
    <div class="container-fluid">
      <div class="sf-banner__texts">
        <h1>The fastest way for startups to do any analysis</h1>
        <p>
          Equals is the only spreadsheet with built-in connections to any database,
          versioning, and collaboration.
        </p>
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
          <button class="btn btn-outline-secondary" type="button" id="bannerHomeBtn">
            Start for free
          </button>
        </div>
      </div>
      <img class="sf-banner__img" :src="img" alt="banner image" />
    </div>
  </nav>
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
