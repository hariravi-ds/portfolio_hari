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
import Timeline from "./timeline.vue";
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
        "I'm an AI Infrastructure and ML Platform engineer with 3+ years building the systems that make machine learning work at scale and not just the models, but the pipelines, orchestration, dashboards, and infrastructure underneath them.",
        "At CogentAI, I architect the backend that sustains 10,000+ daily ML training runs at 97% completion, async orchestration with FastAPI and RabbitMQ, Graph RAG pipelines with Neo4j and MongoDB, and Langfuse-integrated prompt tracking across agentic experiment workflows. Before that, at Facilio, I built a Kafka + Spark streaming pipeline ingesting 3,000 events/sec from 1M+ IoT devices at 99.95% uptime, React/Redux dashboards that cut p95 load from 4.8s to 1.9s, and a full MLOps stack on Kubernetes and Terraform that reduced model release cycles by 40%.",
        "I'm equally comfortable in a terminal optimizing SQL bottlenecks, designing a retrieval pipeline, or shipping a frontend dashboard and I've trained PPO reinforcement learning agents on NVIDIA T4 GPUs, so I understand what researchers need from the platform, not just how to build it.",
        "Tech stack: Python, JavaScript, Java, SQL · LangChain, LlamaIndex, PyTorch, FastAPI, Django, React/Redux · Kafka, Spark, Neo4j, Pinecone, Redis, PostgreSQL, MongoDB · AWS, Kubernetes, Terraform, Docker, CI/CD, Langfuse, Datadog",
      ],
      image: require("@/assets/photo.png"),
    };
  },
};
</script>

<style scoped>
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
