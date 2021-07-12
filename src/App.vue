<template>
  <Header />
  <PhoneFeed />
  <Footer />
</template>

<script>
import PhoneFeed from "./components/PhoneFeed.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    PhoneFeed,
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  background: #f3f3f3;
}
</style>
