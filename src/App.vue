

<template>
  <NavBar />
  <router-view/>
  <Footer />
</template>
<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  
  export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/index.scss';
</style>
