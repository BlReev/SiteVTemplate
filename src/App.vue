<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="view" />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  created() {
    this.$store.dispatch("loadData");
  },
};
</script>
<style lang="sass" scoped>
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: $background-color
  width: 100%
  min-height: 100%

.view
  padding-top: $nav-bar-height

.w-100
  width: 100% !important
</style>