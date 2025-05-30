<template>
  <div class="menu">
    <div
      style="font-size: 12px"
      v-for="(menu, index) in menu_list"
      :key="index"
      @click="scrollFn(menu)"
      class="menu-item"
    >
      <hr
        style="height: 2px; background-color: #000; border: none"
        :style="{
          width:
            selectedMenu.toLowerCase() === menu.toLowerCase()
              ? '150px'
              : '100px',
        }"
      />
      <div>{{ menu }}</div>
    </div>
    <div
      class="menu-item"
      style="border-radius: 8px; border: 1px solid; padding: 4px"
      @click="downloadResume()"
    >
      Resume
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
        "About",
        "Experience",
        "Skills",
        "Projects",
        "Organizations",
        // "Contact",
      ],
      selectedMenu: "about",
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

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      this.activeSection = currentSection;
    },
    scrollFn(menu) {
      this.selectedMenu = menu;
      this.$router.push({ query: { menu: menu.toLowerCase() } });
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
.menu {
  display: flex;
  height: 50px;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  text-transform: uppercase;
  font-size: 14.4px;
  padding: 24px;
}

.menu-item {
  cursor: pointer;
  color: black;
  font-size: 14.4px;
  transition: color 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.menu-item:hover {
  color: #1e90ff;
}
</style>
