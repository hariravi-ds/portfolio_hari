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
        <div class="hero-card">
          <p class="stdName">HARI PRASANNAA THANGAVEL RAVI</p>
          <div class="hero-divider"></div>
          <p class="hero-sub">
            MS Data Science @ George Washington University • May 2026
          </p>
          <p class="hero-role">AI/ML Software Engineer</p>
          <!-- <p class="hero-value">
            Building LLM applications with retrieval (RAG), fine-tuning, and
            scalable APIs.
          </p> -->
          <div class="cta-row">
            <a
              class="cv-button"
              :href="resumeUrl"
              target="_blank"
              rel="noopener"
            >
              Download Resume
            </a>
            <a class="secondary-button" href="#projects">View Projects</a>
          </div>

          <div class="chips-wrap">
            <div class="chips-label">Open to roles</div>
            <div class="chips">
              <span class="chip">AI/ML Engineer</span>
              <span class="chip">Data Scientist</span>
              <span class="chip">ML Software Engineer</span>
            </div>
          </div>

          <div class="quick-grid">
            <div class="quick-card">
              <div class="quick-title">Location</div>
              <div class="quick-text">Washington, DC • Open to Relocation</div>
            </div>

            <div class="quick-card">
              <div class="quick-title">Availability</div>
              <div class="quick-text">May 2026 • Full-time / Internships</div>
            </div>

            <div class="quick-card">
              <div class="quick-title">Focus</div>
              <div class="quick-text">
                LLMs • RAG • Reinforcement Learning • AWS • Full-Stack
              </div>
            </div>

            <div class="quick-card">
              <div class="quick-title">Currently Building</div>
              <div class="quick-text">End-to-end GenAI agents</div>
            </div>
          </div>

          <div class="header-icons">
            <a
              href="mailto:hariprasannaa2001@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <i class="fas fa-envelope fa-lg"></i>
            </a>
            <a
              href="https://github.com/hariravi-ds"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              title="GitHub"
            >
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hari-prasannaa"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="sections" style="padding: 0px 96px">
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
      img: require("@/assets/subtle.jpeg"),
      resumeUrl: "/resume.pdf",
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
          move: { enable: true, speed: 3 },
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
  padding: 120px 16px 48px;
}

.hero-card {
  width: min(980px, 94vw);
  padding: 36px 28px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.stdName {
  font-size: 42px;
  letter-spacing: 0.4px;
  color: #0f172a;
  line-height: 1.1;
}

.hero-divider {
  width: 120px;
  height: 2px;
  background: rgba(15, 23, 42, 0.22);
  margin: 14px auto 6px;
  border-radius: 999px;
}

.hero-sub {
  font-size: 18px;
  color: rgba(15, 23, 42, 0.78);
  margin-top: 12px;
}

.hero-role {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
  margin-top: 12px;
}

.hero-role-sub {
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  color: rgba(15, 23, 42, 0.6);
  margin-left: 8px;
}

.hero-value {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(15, 23, 42, 0.72);
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
}

.cta-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 18px;
  flex-wrap: wrap;
}

.cv-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  color: white;
  font-size: 1.05em;
  font-weight: 800;
  border: 2px solid #0f172a;
  padding: 10px 18px;
  border-radius: 10px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
}

.cv-button:hover {
  background: #1e90ff;
  border-color: #1e90ff;
  color: white;
}

.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 10px;
  border: 2px solid rgba(15, 23, 42, 0.18);
  color: #0f172a;
  text-decoration: none;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease;
}

.secondary-button:hover {
  border-color: rgba(30, 144, 255, 0.9);
  color: rgba(30, 144, 255, 1);
}

.chips-wrap {
  margin-top: 18px;
  text-align: left;
}

.chips-label {
  font-weight: 900;
  color: rgba(15, 23, 42, 0.7);
  font-size: 13px;
  margin-bottom: 10px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(15, 23, 42, 0.12);
  color: rgba(15, 23, 42, 0.88);
  font-weight: 800;
  font-size: 13px;
}

.quick-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  text-align: left;
}

.quick-card {
  padding: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(15, 23, 42, 0.1);
}

.quick-title {
  font-weight: 900;
  color: #0f172a;
  font-size: 14px;
  margin-bottom: 6px;
}

.quick-text {
  color: rgba(15, 23, 42, 0.75);
  font-size: 14px;
  line-height: 1.4;
}

.header-icons {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 10px;
}

.header-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: white;
  background: #0f172a;
  text-decoration: none;
  border: 2px solid #0f172a;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.header-icons a:hover {
  color: #1e90ff;
  border-color: #1e90ff;
}

.sections {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  z-index: 1;
}

@media (max-width: 640px) {
  .stdName {
    font-size: 30px;
  }
  .hero-role {
    font-size: 18px;
  }
  .hero-role-sub {
    display: block;
    margin-left: 0;
    margin-top: 6px;
  }
  .quick-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .particle-container.image-card {
    background-attachment: scroll !important;
  }
}
</style>
