<template>
  <div
    class="particle-container image-card"
    id="home"
    :style="{
      backgroundImage: 'url(' + img + ')',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="content-scroll">
      <div id="particles-js"></div>

      <div class="main-header">
        <div class="header">
          <p class="stdName">HARI PRASANNAA THANGAVEL RAVI</p>
          <hr
            style="
              width: 100px;
              height: 1px;
              border: none;
              color: #333;
              background-color: #333;
            "
          />
          <p style="font-size: 1.5em">
            Graduate Student at The George Washington University
          </p>
          <p style="font-size: 1.5em">
            Aspiring
            <span class="dynamic-role" id="dynamic-role"
              >AI/ML Software Engineer</span
            >
          </p>
          <div class="header-icons">
            <a href="mailto:hariprasannaa2001@gmail.com" aria-label="E-Mail">
              <i class="fas fa-envelope fa-xl"></i>
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
      <div class="sections" style="padding: 96px">
        <About id="about"></About>
        <Experience id="experience"></Experience>
        <Skills id="skills"></Skills>
        <Projects id="projects"></Projects>
        <Organization id="organizations"></Organization>
        <Contact id="contact"></Contact>
      </div>
    </div>
    <div v-if="isShow && !isOpen" class="chatbot-icon" @click="isOpen = true">
      🤖
    </div>
    <Chatbot v-if="isOpen" @close-bot="isOpen = false" />
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
import Chatbot from "./chatBot.vue";

export default {
  name: "HeaderWithParticles",
  data() {
    return {
      isOpen: false,
      isShow: false,
      img: require("@/assets/logo.png"),
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
    Chatbot,
  },
  mounted() {
    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer && window.particlesJS) {
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
    }

    // const roles = [
    //   "Data Analyst",
    //   "Data Scientist",
    //   "Data Engineer",
    //   "ML Engineer",
    // ];
    // let roleIndex = 0;
    // const dynamicRoleElement = document.getElementById("dynamic-role");

    // function updateRole() {
    //   let currentRole = roles[roleIndex];
    //   let i = 0;

    //   const removeInterval = setInterval(() => {
    //     if (i <= currentRole.length) {
    //       dynamicRoleElement.textContent = currentRole.substring(
    //         0,
    //         currentRole.length - i
    //       );
    //       i++;
    //     } else {
    //       clearInterval(removeInterval);

    //       roleIndex = (roleIndex + 1) % roles.length;
    //       let nextRole = roles[roleIndex];
    //       let j = 0;

    //       const addInterval = setInterval(() => {
    //         if (j <= nextRole.length) {
    //           dynamicRoleElement.textContent = nextRole.substring(0, j);
    //           j++;
    //         } else {
    //           clearInterval(addInterval);
    //         }
    //       }, 100);
    //     }
    //   }, 100);
    // }
    // updateRole();
    // setInterval(updateRole, 4000);
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
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.content-scroll {
  position: relative;
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  background: transparent;
  padding: 10px 15px;
}

.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  z-index: 1;
  position: relative;
}

.header {
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.header-icons {
  display: flex;
  justify-content: center;
}

.header-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
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
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 46px;
  position: relative;
  z-index: 1;
}

.sections > * {
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
  font-size: 35px;
  padding-left: 30px;
  color: #000000;
}

.cv-button {
  background: #000000;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  border: 2px solid #000000;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cv-button:hover {
  background: #1e90ff;
  border-color: #1e90ff;
  color: white;
}
</style>
