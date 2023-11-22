<template>
  <nav class="sf-navbar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 sf-navbar__logo">
          <router-link to="/">SaaSify</router-link>
        </div>

        <div class="col-md-8 sf-navbar__nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/solutions">Solutions</router-link>
          <router-link to="/clients">Clients</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>
