<template>
  <div class="particle-container image-card" id="home">
    <div style="display: flex; flex-direction: row">
      <div class="main-header" style="width: 50%">
        <div id="particles-js"></div>
        <div class="header">
          <p class="stdName">HARI PRASANNAA THANGAVEL RAVI</p>
          <hr
            style="
              width: 100%;
              height: 1px;
              border: none;
              background-color: #333;
            "
          />
          <p style="font-size: 1.2em">
            Graduate Student at The George Washington University
          </p>
          <p style="font-size: 1.2em">
            Aspiring
            <span class="dynamic-role" id="dynamic-role">Data Analyst</span>
          </p>
          <AppHeader />
          <div class="header-icons">
            <a
              href="mailto:hariprasannaa.thangavelravi@gwu.edu"
              aria-label="E-Mail"
            >
              <i class="fas fa-envelope fa-lg"></i>
            </a>
            <a
              href="https://github.com/hariravi-ds"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github fa-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hari-prasannaa"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="sections" style="width: 50%">
        <About id="about"></About>
        <Experience id="experience"></Experience>
        <Skills id="skills"></Skills>
        <Projects id="projects"></Projects>
        <Organization id="organizations"></Organization>
        <Contact id="contact"></Contact>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import Skills from "./Skills.vue";
import About from "./About.vue";
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import Organization from "./Organisations.vue";
import "particles.js";

export default {
  name: "HeaderWithParticles",
  data() {
    return {
      image: require("@/assets/subtle2.jpeg"),
    };
  },
  components: {
    AppHeader,
    Skills,
    About,
    Experience,
    Projects,
    Contact,
    Organization,
  },
  mounted() {
    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 75, density: { enable: true, value_area: 1000 } },
          color: { value: "#1a1a1a" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 5 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#1a1a1a",
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

    dynamicRoleElement.textContent = roles[roleIndex];
    updateRole();
    setInterval(updateRole, 4000);
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

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.main-header {
  width: 50%;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  z-index: 1;
  overflow: hidden;
}

.header {
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  text-align: center;
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
  width: 40px;
  height: 40px;
  margin: 0 8px;
  color: white;
  background: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.header-icons a:hover {
  color: #1e90ff;
  border-color: #1e90ff;
}

.sections {
  width: 50%;
  height: 100vh;
  overflow-y: auto;
  padding-right: 10px;
}

.sections > * {
  padding: 20px;
  color: white;
}

.dynamic-role {
  color: black;
  font-weight: bold;
  font-size: 1.5em;
  transition: all 0.3s ease-in-out;
}

.stdName {
  display: inline;
  font-size: 32px;
  padding-left: 30px;
  color: #000000;
}
</style>
