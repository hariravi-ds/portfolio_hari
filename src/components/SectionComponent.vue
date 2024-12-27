<template>
  <div class="section-container">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["msg", "title"],
};
</script>

<style>
.section-container {
  width: 100%;
  height: 300px;
}
</style>
