<template>
  <div class="journey-section">
    <div class="section-title">About</div>
    <hr
      style="
        width: 100px;
        height: 1px;
        border: none;
        color: #333;
        background-color: #333;
      "
    />
    <div style="font-style: italic; color: #6c757d">
      A brief introduction to who I am, my values, and the driving forces behind
      my work.
    </div>
    <div
      style="display: flex; justify-content: row; padding: 36px 12px; gap: 8px"
    >
      <div
        style="
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <img :src="image" alt="photo" class="project-image" />
      </div>
      <div class="aboutContent">
        <div v-for="(val, index) in about" :key="index">{{ val }}</div>
        <div>
          Check out my work below. I’m always open to ideas that merge
          innovation with impact!
        </div>
      </div>
    </div>
    <Timeline :journey="journey" type="education" />
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";
export default {
  name: "AboutSection",
  components: {
    Timeline,
  },
  data() {
    return {
      journey: [
        {
          date: "Aug 2024 - May 2026 (Expected)",
          title: "Master of Science in Data Science",
          place: "The George Washington University, Washington, DC",
          gpa: "3.92 / 4.0",
          award: "Global Leaders Award",
        },
        {
          date: "Jun 2019 - Apr 2023",
          title: "Bachelor of Engineering in ECE",
          place: "Sri Venkateswara College of Engineering, Chennai, India",
          gpa: "3.97 / 4.0",
        },
      ],
      about: [
        "Hi, I’m Hari Prasannaa, an MS Data Science student at George Washington University (May 2026) based in Washington, DC (open to relocation). I build GenAI + ML systems end-to-end: RAG assistants, recommendation systems, forecasting/anomaly detection pipelines, and scalable APIs.",
        "At MyEdMaster, I built a RAG-based knowledge assistant (Pinecone/Chroma + LlamaIndex) that improved self-serve resolution by 10%, implemented semantic search that reduced zero-result queries by 15%, and optimized high-traffic endpoints with Redis caching (p95 ~800ms → ~500ms). With Data Science for Sustainable Development, I build and deploy energy forecasting and anomaly detection workflows on AWS to support sustainability operations across campus.",
        "Previously, I spent 2 years at Facilio (Member Technical Staff) developing end-to-end production systems including Java services, Kafka-based pipelines, ClickHouse(SQL) analytics, and performance-optimized APIs for a smart-building platform.",
        "Tech I use most: Python, SQL, AWS, FastAPI/Django, Redis, React, and scikit-learn/TensorFlow, with a strong focus on LLMs (RAG, fine-tuning, evaluation). Outside work, I mentor peers through Python/ML sessions and serve as a Graduate Senator at GWU.",
      ],
      image: require("@/assets/photo.png"),
    };
  },
};
</script>

<style scoped>
.journey-section {
  padding: 20px;
  color: #ecf0f1;
}

.project-image {
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 50%;
}
.aboutContent {
  width: 55%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  line-height: 1.75;
  font-size: 15px;
}
</style>
