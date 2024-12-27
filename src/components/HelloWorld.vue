<template>
  <div class="particle-container">
    <!-- Particle.js background -->
    <div id="particles-js"></div>

    <div class="header">
      <h2>Hari Prasannaa Thangavel Ravi</h2>
      <p>Master of Science in Data Science</p>
      <p>George Washington University</p>
      <div class="header-icons">
        <a
          href="mailto:hariprasannaa.thangavelravi@gwu.edu"
          aria-label="E-Mail"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/hariravi-ds"
          target="_blank"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hari-prasannaa"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
    <div
      class="list-button"
      @click="toggleMenu"
      v-if="!showMenu"
      :class="{ animate: menuButtonClicked }"
      style="display: flex; flex-direction: column; gap: 4px"
    >
      <div style="width: 20px; height: 1px; background: white"></div>
      <div style="width: 20px; height: 1px; background: white"></div>
      <div style="width: 20px; height: 1px; background: white"></div>
    </div>
    <MenuBar
      @closeMenu="toggleMenu"
      v-if="showMenu"
      :class="{ slideIn: showMenu }"
    />
  </div>
</template>
<script>
import MenuBar from "./MenuBar.vue";
import "particles.js";

export default {
  name: "HeaderWithParticles",
  components: {
    MenuBar,
  },
  data() {
    return {
      showMenu: false,
      menuButtonClicked: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuButtonClicked = true;
      this.showMenu = !this.showMenu;

      // Reset button animation state after it finishes
      setTimeout(() => {
        this.menuButtonClicked = false;
      }, 300); // Match the animation duration
    },
  },
  mounted() {
    // Ensure particles-js container exists
    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onclick: { enable: true, mode: "repulse" },
          },
        },
      });
    } else {
      console.error("particles-js container not found.");
    }
  },
};
</script>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

.header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
}

.header-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.header-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 0 8px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.header-icons a:hover {
  color: #1e90ff;
  border-color: #1e90ff;
}

.list-button {
  width: 25px;
  height: 25px;
  top: 50%;
  position: absolute;
  right: 0;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 4px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.list-button.animate {
  transform: scale(1.2);
  opacity: 0.8;
}

.MenuBar {
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
