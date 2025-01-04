<template>
  <BaseComp />
</template>

<script>
import BaseComp from "./components/Base.vue";

export default {
  name: "App",
  components: {
    BaseComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");

#app {
  font-family: "Roboto Slab", "Montserrat", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
