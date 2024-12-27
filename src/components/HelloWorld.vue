<template>
  <div class="particle-container">
    <!-- Particle.js background -->
    <div id="particles-js"></div>

    <div class="app-header">
      <AppHeader />
    </div>
    <div class="main-header">
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
    </div>
    <div class="sections">
      <SectionComponent title="Experience" id="experience"></SectionComponent>
      <SectionComponent title="Education" id="education"></SectionComponent>
      <SectionComponent title="Projects" id="projects"></SectionComponent>
    </div>
  </div>
</template>

<script>
import SectionComponent from "./SectionComponent.vue";
import AppHeader from "./AppHeader.vue";
import "particles.js";

export default {
  name: "HeaderWithParticles",
  components: {
    AppHeader,
    SectionComponent,
  },
  mounted() {
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
  overflow-x: hidden;
}

.particle-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8); /* Transparent black background */
  border-bottom: 2px solid white;
}

/* Main Header (Centered Name and Icons) */
.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  text-align: center;
  color: white;
  z-index: 1; /* Ensures it's above particles.js */
}

.header {
  z-index: 2;
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

.sections {
  margin-top: 100vh; /* Start after the full viewport main header */
}

.sections > * {
  padding: 20px;
  min-height: 100vh; /* Full-screen height for each section */
  color: white;
  background: #1a1a1a;
  margin-bottom: 10px;
}
</style>
