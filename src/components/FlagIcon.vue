<template>
  <span class="flag-icon" :class="'flag-icon-' + countryName"></span>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "FlagIcon",
  props: {
    country: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["getCountry"]),
    countryName() {
      if (this.country === "") {
        return this.getCountry;
      } else {
        return this.country;
      }
    },
  },
};
</script>