<template>
  <div>
    <div class="dropdown" :class="active ? 'is-active' : ''">
      <div class="dropdown-trigger">
        <button
          class="
            button
            is-borderless is-rounded is-dark
            text-color-default
            has-background-theme-lighter-10
            dropdown-button
          "
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          @click="toggle"
        >
          <flag-icon class="flag"></flag-icon>
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </button>
      </div>
      <div
        class="dropdown-menu custom-dropdown-menu is-family-sans-serif"
        id="dropdown-menu"
        role="menu"
      >
        <div
          class="dropdown-content custom-dropdown has-background-theme-lighter"
        >
          <div
            class="dropdown-item text-color-default has-text-left"
            v-for="(language, key) in getLanguages"
            :key="key"
            @click="changeLanguageAndClose(language)"
          >
            <flag-icon :country="getCountryFromLanguage(key)"></flag-icon>
            {{ " " + language }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import FlagIcon from "./FlagIcon.vue";

export default {
  components: { FlagIcon },
  name: "LanguageDropdown",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    open() {
      this.active = true;
    },
    close() {
      this.active = false;
    },
    ...mapActions(["changeLanguage"]),
    changeLanguageAndClose(language) {
      this.changeLanguage(language);
      this.close();
    },
  },
  computed: {
    ...mapGetters([
      "getCountryFromLanguage",
      "getLanguage",
      "getLanguages",
      "getCountry",
    ]),
  },
};
</script>
<style lang="sass" scoped>
.custom-dropdown-menu
  min-width: 0 !important
  width: 100%
  text-align: -webkit-center

.custom-dropdown
  width: max-content !important

.dropdown-button
  display: inline-flex
  width: max-content
  grid-row-gap: 10px

.dropdown-item
  padding-left: 1.33333333em
  padding-left: 1.33333333em
  &:hover
    background-color: lighten($background-color, 20%)
    cursor: pointer

.flag
  padding: 0.2vw
  margin-left: 0.5vw
  margin-right: 0.5vw
</style>