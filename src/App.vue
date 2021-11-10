<template>
  <Header />
  <Hero />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import Hero from "./components/sections/Hero.vue";


export default {
  name: 'App',
  components: {
   Header,
   Hero,
   Footer
  }
}
</script>

<style>

</style>
