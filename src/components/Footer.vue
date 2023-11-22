<template>
  <nav class="sf-footer">
    <div class="container-fluid">
      <div class="sf-footer__contact">
        <h2>We are here to help you grow your business</h2>
        <a href="/contact" class="sf-btn gradient">Get Started Now</a>
      </div>
    </div>

    <hr />

    <div class="container-fluid sf-footer__links">
      <div class="row">
        <div class="col-md-2 sf-footer__links__logo">
          <router-link to="/">SaaSify</router-link>
        </div>

        <div class="col-md-8 sf-footer__links__nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/solutions">Solutions</router-link>
          <router-link to="/clients">Clients</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>

        <div class="col-md-2 sf-footer__links__socials">
          <h4>Our Socials</h4>
          <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>

    <hr />

    <div class="container-fluid">
      <div class="sf-footer__made-by">
        <p>Copyright 2023. All Rights Reserved.</p>
        <p>Made with 💙 by Emilyn C. Pieritz</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "FooterSf",
  components: {},
};
</script>
