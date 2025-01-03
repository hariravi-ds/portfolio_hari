<template>
  <div class="particle-container">
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="main-header">
      <div id="particles-js"></div>
      <div class="header">
        <h2 style="font-size: 2.5em">HARI PRASANNAA THANGAVEL RAVI</h2>
        <p style="font-size: 1.5em">
          Graduate Student at The George Washington University
        </p>
        <p style="font-size: 1.5em">
          Aspiring
          <span class="dynamic-role" id="dynamic-role">Data Analyst</span>
        </p>
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
      <Education title="Education" id="education"></Education>
      <Experience title="Experience" id="experience"></Experience>
      <Skills title="Skills" id="skills"></Skills>
      <Projects title="Projects" id="projects"></Projects>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import Skills from "./Skills.vue";
import Education from "./Education.vue";
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";
import "particles.js";

export default {
  name: "HeaderWithParticles",
  components: {
    AppHeader,
    Skills,
    Education,
    Experience,
    Projects,
  },
  mounted() {
    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
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

    const roles = [
      "Data Analyst",
      "Data Scientist",
      "Data Engineer",
      "ML Engineer",
    ];
    let roleIndex = 0;
    const dynamicRoleElement = document.getElementById("dynamic-role");

    function updateRole() {
      let currentRole = roles[roleIndex];
      let i = 0;

      const removeInterval = setInterval(() => {
        if (i <= currentRole.length) {
          dynamicRoleElement.textContent = currentRole.substring(
            0,
            currentRole.length - i
          );
          i++;
        } else {
          clearInterval(removeInterval);

          roleIndex = (roleIndex + 1) % roles.length;
          let nextRole = roles[roleIndex];
          let j = 0;

          const addInterval = setInterval(() => {
            if (j <= nextRole.length) {
              dynamicRoleElement.textContent = nextRole.substring(0, j);
              j++;
            } else {
              clearInterval(addInterval);
            }
          }, 100);
        }
      }, 100);
    }

    updateRole();
    setInterval(updateRole, 3000);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body,
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.particle-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #000;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.app-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  background: #1a1a1a;
  box-shadow: 0px 2px 8px #1a1a1a;
  padding: 10px 0;
}

.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  text-align: center;
  color: white;
  z-index: 1;
  position: relative;
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
  margin-top: 0;
}

.sections > * {
  padding: 20px;
  min-height: 100vh;
  color: white;
  background: #1a1a1a;
  margin-bottom: 10px;
}
.dynamic-role {
  color: #1e90ff;
  font-weight: bold;
  font-size: 1.5em;
  transition: all 0.3s ease-in-out;
}
</style>
