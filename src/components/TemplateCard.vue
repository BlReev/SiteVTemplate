<template>
  <div>
    <router-link :to="path">
      <div class="card">
        <div class="card-header">
          <component
            class="template-component is-4by3"
            :is="children[0].component"
          ></component>
        </div>
        <div class="card-content row has-background-theme-darker-10">
          <div class="bold is-size-5 text-color-default">
            {{ name }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
/*

  {
    path: "/templates/" + temp1_id,
    component: Template1,
    children: temp1_routes,
  },
*/
export default {
  name: "TemplateCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    component: {
      type: Object,
      required: true,
    },
    children: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="sass" scoped>
.template-component
  width: 100%
  aspect-ratio: 4 / 3
.card
  max-width: 500px
</style>