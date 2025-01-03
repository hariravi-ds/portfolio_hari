<template>
  <div class="header-container">
    <div class="menu">
      <div
        v-for="(menu, index) in menu_list"
        :key="index"
        @click="scrollTo(menu.toLowerCase())"
        class="menu-item"
      >
        {{ menu }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menu_list: [
        "About",
        "Education",
        "Experience",
        "Projects",
        "Skills",
        "Publications",
        "Contact",
      ],
    };
  },
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>
.header-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  align-items: center;
}

.menu {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.menu-item {
  cursor: pointer;
  color: aliceblue;
  font-size: 16px;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: #1e90ff;
}
</style>
