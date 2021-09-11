<template>
  <div class="template-main is-grid" :id="'template' + id">
    <router-view class="template-view" />
  </div>
</template>
<script>
import Home from "./views/Home.vue";

export const id = "flights";
export const name = "Flights";
export const routes = [{ path: "", component: Home }];
export default {
  name,
  data() {
    return {
      id: id,
    };
  },
  beforeMount() {
    console.log(this.$route);
    this.$store.dispatch("setCurrentPage", name);
  },
  components: {},
};
</script>
<style lang="sass" scoped>
$id: 1
$template: 'template' + $id

.template-main
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: white
  width: 100%
  min-height: 100%

.template-view
  width: 100%
  height: 100%

.w-100
  width: 100% !important
</style>