<template>
  <div class="list">
    <div class="menudiv">
      <el-button
        class="close-btn"
        type="primary"
        icon="Close"
        circle
        @click="emitClose"
      ></el-button>
      <div class="menu-item" v-for="(menu, index) in menu_list" :key="index">
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
      menu_list: [
        "About",
        "Experience",
        "Projects",
        "Skills",
        "Publications",
        "Contact",
      ],
    };
  },
  methods: {
    emitClose() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style scoped>
.list {
  width: 15%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.menudiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
}

.close-btn {
  position: relative;
  right: 10;
}

.menu-item {
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 14px;
}
</style>
