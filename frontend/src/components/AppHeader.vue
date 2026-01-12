<template>
  <div class="header-container">
    <div @click="scrollFn('Home')" style="border-radius: 24px; cursor: pointer">
      <img
        src="/favicon.jpeg"
        alt="Home Icon"
        style="height: 50px; width: 50px; border-radius: 50%; object-fit: cover"
      />
    </div>
    <div class="menu">
      <div class="glass-effect" style="display: flex; gap: 24px">
        <div
          style="font-size: 14.4px"
          v-for="(menu, index) in menu_list"
          :key="index"
          @click="scrollFn(menu)"
          :class="{
            'menu-item': true,
            selected: selectedMenu.toLowerCase() === menu.toLowerCase(),
          }"
        >
          {{ menu }}
        </div>
      </div>
      <div class="menu glass-effect">
        <div
          class="menu-item"
          @click="downloadResume()"
          style="display: flex; gap: 8px"
        >
          <el-icon :size="16"><Download /></el-icon>
          <span>Resume</span>
        </div>
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
      menu_list: [
        "Home",
        "About",
        "Experience",
        "Skills",
        "Projects",
        "Research",
        "Organizations",
        // "Contact",
      ],
      selectedMenu: "home",
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
          if (
            newVal != null &&
            menu_list.includes(newVal[0].toUpperCase() + newVal.slice(1))
          ) {
            this.selectedMenu = newVal;
          } else {
            this.selectedMenu = "home";
          }
        }
      },
    },
  },
  methods: {
    downloadResume() {
      let resumeFile = "/resume.pdf";
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "HariPrasannaa_Resume.pdf";
      link.click();
    },
    detectActiveSection() {
      const sections = document.querySelectorAll("div[id]");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top < window.innerHeight * 0.6 &&
          rect.bottom > window.innerHeight * 0.2
        ) {
          currentSection = section.id;
        }
      });

      this.activeSection = currentSection;
    },
    scrollFn(menu) {
      this.selectedMenu = menu;
      this.$router.push({ query: { menu: menu.toLowerCase() } });
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.selected {
  color: black;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.menu-item:hover {
  color: #1e90ff;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  border-radius: 28px;
  padding: 12px;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
</style>
