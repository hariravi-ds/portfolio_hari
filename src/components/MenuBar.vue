<template>
  <div class="list">
    <div class="menudiv">
      <div style="font-size: 20px">
        <Close style="width: 1em; height: 1em; margin-right: 8px" />
      </div>
      <div style="height: 32px" v-for="(menu, index) in menu_list" :key="index">
        {{ menu }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      menu_list: ["About", "Experience", "Projects", "Skills", "Contact"],
    };
  },
};
</script>
<style>
.list {
  width: 15%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 12px;
}
.menudiv {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
