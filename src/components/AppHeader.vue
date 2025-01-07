<template>
  <div class="header-container">
    <div
      :class="[selectedMenu == 'Home' ? 'selected' : 'menu-item']"
      @click="scrollFn('Home')"
    >
      Home
    </div>
    <div class="menu">
      <div
        style="font-size: 14.4px"
        v-for="(menu, index) in menu_list"
        :key="index"
        @click="scrollFn(menu)"
        :class="[selectedMenu == menu ? 'selected' : 'menu-item']"
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
      activeSection: null,
      menu_list: ["About", "Experience", "Skills", "Projects", "Contact"],
      selectedMenu: "Home",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.detectActiveSection);
    this.detectActiveSection();
  },
  watch: {
    "$route.query": {
      handler() {
        let sectionId = this.$route?.query?.menu;
        if (sectionId) {
          this.scrollTo(sectionId);
        }
      },
      immediate: true,
    },
    activeSection: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          let { menu_list } = this;
          if (newVal != null && menu_list.includes(newVal)) {
            this.selectedMenu = newVal;
          } else {
            this.selectedMenu = "Home";
          }
        }
      },
    },
  },
  methods: {
    detectActiveSection() {
      const sections = document.querySelectorAll("div[id]");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      this.activeSection = currentSection;
    },
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
  beforeUnmount() {
    window.removeEventListener("scroll", this.detectActiveSection);
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
