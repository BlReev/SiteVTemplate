<template>
  <div class="main align-center">
    <p
      class="
        is-family-sans-serif
        text-color-default
        is-size-1-desktop is-size-4-touch
      "
    >
      Hello World
    </p>
    <div class="columns has-background-info d2 h-100 w-100">
      <div
        class="
          column
          description
          is-family-sans-serif
          align-center
          text-color-default
        "
      >
        <div class="row" style="width: 70%">
          <p class="title is-size-1 text-color-default has-text-left">Test</p>
        </div>
        <p class="row is-size-5 w-50">Test Example</p>
        <div class="row align-right w-50">
          <router-link to="/templates">
            <button
              class="button is-rounded is-danger has-text-weight-bold"
              style="margin-right: 2vw"
            >
              Get Started
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
.main
  background: rgb(72,199,142)
</style>