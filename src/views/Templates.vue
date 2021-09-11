<template>
  <div class="is-family-sans-serif text-color-default container-fluid">
    <h1 class="is-size-1 templates-title">Our Templates</h1>
    <div class="columns is-multiline is-mobile templates-container">
      <template-card
        class="column is-4 no-padding"
        v-for="(template, index) in templateRoutes"
        :key="index"
        v-bind="template"
      ></template-card>
      <template-card
        class="column is-4 no-padding"
        v-for="(template, index) in templateRoutes"
        :key="index"
        v-bind="template"
      ></template-card>
      <template-card
        class="column is-4 no-padding"
        v-for="(template, index) in templateRoutes"
        :key="index"
        v-bind="template"
      ></template-card>
    </div>
  </div>
</template>
<script>
import { templateRoutes } from "@/router.js";
import TemplateCard from "../components/TemplateCard.vue";
export const name = "Templates";
export default {
  components: { TemplateCard },
  name,
  data() {
    return { templateRoutes };
  },
  beforeMount() {
    this.$store.dispatch("setCurrentPage", name);
  },
};
</script>
<style lang="sass" scoped>
.container-fluid
  margin-left: 4vw
  margin-right: 4vw
  margin-top: 4vh
  margin-bottom: 4vh

.templates-title
  margin-bottom: 3vh

.templates-container
  margin-left: 3vw
</style>