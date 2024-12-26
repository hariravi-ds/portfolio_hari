<template>
  <div class="particle-container">
    <!-- Particle.js background -->
    <div id="particles-js"></div>

    <!-- Centered content -->
    <div class="header">
      <h2>Hari Prasannaa Thangavel Ravi</h2>
      <p>Master of Science in Data Science</p>
      <p>George Washington University</p>
    </div>
  </div>
</template>

<script>
import "particles.js";

export default {
  name: "HeaderWithParticles",
  mounted() {
    // Ensure Particle.js initializes properly
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
  },
};
</script>
<style scoped>
/* Reset body and html styles to ensure full height and width */
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrollbars */
}

/* Ensure the particle container fills the viewport */
.particle-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
}

/* Style for the Particle.js background */
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Ensure it fills the container */
  background: #000; /* Black background */
}

/* Center the header over the particles */
.header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1; /* Place it above the particles */
}
</style>
