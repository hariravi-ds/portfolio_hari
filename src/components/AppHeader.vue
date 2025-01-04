<template>
  <div class="header-container">
    <div
      :class="[selectedMenu == 'home' ? 'selected' : 'menu-item']"
      @click="scrollFn('home')"
    >
      Home
    </div>
    <div class="menu">
      <div
        style="font-size: 14.4px"
        v-for="(menu, index) in menu_list"
        :key="index"
        @click="scrollFn(menu.toLowerCase())"
        :class="[selectedMenu == menu.toLowerCase() ? 'selected' : 'menu-item']"
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
      selectedMenu: "home",
    };
  },
  methods: {
    scrollFn(menu) {
      this.selectedMenu = menu;
      this.$router.push({ query: { menu: menu } });
      this.scrollTo(menu);
    },
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
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 14.4px;
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
  color: black;
  font-size: 14.4px;
  transition: color 0.3s ease;
}
.selected {
  color: black;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.menu-item:hover {
  color: #1e90ff;
}
</style>
