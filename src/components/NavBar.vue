<template>
  <div
    class="columns is-mobile nav-bar align-center has-background-theme-lighter"
  >
    <div class="column center is-1">
      <i class="red fas fa-circle"></i>
      <i class="yellow fas fa-circle"></i>
      <i class="blue fas fa-circle"></i>
    </div>
    <div class="column is-2 text-color-default is-family-sans-serif is-size-2">
      {{ getCurrentPage }}
    </div>
    <div
      class="
        column
        is-6 is-hidden-touch
        text-color-default
        is-family-sans-serif is-size-5 is-uppercase
        links
      "
    >
      <div v-for="(link, index) in getLinks" :key="index" class="link">
        <i class="fas" :class="link.icon"></i>
        <router-link class="text-color-default" :to="link.path">
          {{ link.name }}
        </router-link>
      </div>
    </div>
    <div class="column is-2 is-hidden-touch center">
      <language-dropdown class="align-right"></language-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import LanguageDropdown from "./LanguageDropdown.vue";

export default {
  components: { LanguageDropdown },
  name: "NavBar",
  computed: {
    ...mapGetters(["getCurrentPage", "getLanguages", "getLinks"]),
  },
};
</script>
<style lang="sass" scoped>
.nav-bar
  position: fixed
  width: 100%
  align-items: center
  min-height: $nav-bar-height
  margin: 0 !important
  z-index: 9999

.red
  color: rgb(255, 90, 90)

.yellow
  color: rgb(255, 255, 90)

.blue
  color: rgb(90, 90, 255)

.links
  display: flex

.link
  padding-left: 0.75vw
  padding-right: 0.75vw

.is-link-active
  font-weight: bold
</style>