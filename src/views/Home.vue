<template>
  <div>
    <div class="columns has-background-gradient-success-info d2 h-100">
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
          <div class="title is-size-1 text-color-default has-text-left is-flex">
            Beautiful
            <span class="text-animation"></span>
            ,
          </div>
          <div class="row is-size-2 is-flex" style="width: 80%">
            Made just for you!
          </div>
        </div>
        <div class="row align-center w-50">
          <router-link to="/templates">
            <button
              class="button is-light is-rounded has-text-weight-bold"
              style="margin-right: 2vw"
            >
              View Options
            </button></router-link
          >
        </div>
      </div>
      <div class="column">
        <img src="@/assets/beautiful.png" alt="Image failed to load" />
      </div>
    </div>
    <div class="columns has-background-info d2 h-100">
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
          <p class="title is-size-1 text-color-default has-text-left">
            Just take it, its yours!
          </p>
        </div>
        <p class="row is-size-5 w-50">
          Our templates were created for you, to enable you to deploy your
          beautiful web application!
        </p>
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
      <div class="column">
        <img src="@/assets/take_it.png" alt="Image failed to load" />
      </div>
    </div>
  </div>
</template>
<script>
export const name = "Home";
export default {
  name,
  beforeMount() {
    this.$store.dispatch("setCurrentPage", name);
  },
};
</script>
<style lang="sass" scoped>
.bg-blue
  background-color: $success
.d2
  align-items: center
  .column
    height: max-content
  .description
    width: 50%

.has-background-gradient-success-info
  background: rgb(72,199,142)
  background: linear-gradient(180deg, rgba(72,199,142,1) 0%, rgba(62,142,208,1) 100%)

.row
  margin-bottom: 5vh

.text-color-default
  color: $text-color-default

@mixin text-up
  opacity: 1
  -webkit-transform: translateY(0px)
  -moz-transform: translateY(0px)
  -ms-transform: translateY(0px)
  transform: translateY(0px)

@mixin text-down
  opacity: 0
  -webkit-transform: translateY(-40px)
  -moz-transform: translateY(-40px)
  -ms-transform: translateY(-40px)
  transform: translateY(-40px)

.text-animation
  width: max-content
  transition: transform 0.5s, opacity 0.5s
  font-weight: bold
  padding-left: 0.5vw
  &::before
    animation: text-animate infinite 5s
    content: 'Templates'
    @include text-up

@keyframes text-animate

  10%
    @include text-down

  21%
    @include text-up

  32%
    content: "Designs"

  43%
    @include text-down

  54%
    @include text-up

  65%
    content: "Applications"

  76%
    @include text-down

  87%
    @include text-up

  98%
    content: "Templates"
</style>