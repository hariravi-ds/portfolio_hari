<template>
  <div class="journey-section">
    <div class="section-title">Experience</div>
    <hr
      style="
        width: 100px;
        height: 1px;
        border: none;
        color: #333;
        background-color: #333;
      "
    />
    <div class="section-subtitle">
      A summary of my professional experience, highlighting key roles and
      achievements.
    </div>
    <Timeline :journey="journey" type="experience" />
  </div>
</template>

<script>
import Timeline from "./timeline.vue";
export default {
  name: "ExperienceSection",
  components: {
    Timeline,
  },
  props: {
    type: {
      type: String,
      default: "experience",
    },
  },
  data() {
    return {
      journey: [
        {
          date: "January 2026 – Present",
          title: "AI Engineer",
          place: "CogentAI, Remote",
          description: {
            "Sustained 10,000+ Daily ML Training Runs": "Scaled ML platform orchestration to 97% completion with async FastAPI services, RabbitMQ, and MongoDB — idempotent execution, automated retry, and dead-letter queue recovery.",
            "Ingested 3,000 Events/Sec at 99.95% Uptime": "Built a Kafka + Spark streaming pipeline for 1M+ IoT devices into Amazon RDS with replay-safe schemas and idempotent processing at sustained peak load.",
            "Cut p95 Latency by 37%": "Optimized Django REST backend and Redis cache layers — dropping API response time from 800ms to 500ms through deterministic cache keys and TTL-aware invalidation.",
          },
          tech_stack: [
            "FastAPI",
            "LangChain",
            "ReAct",
            "Langfuse",
            "CoT",
            "Neo4j",
            "MongoDB",
            "Graph RAG",
            "LLM Inference",
            "AWS",
            "Python",
          ],
        },
        {
          date: "March 2025 – December 2025",
          title: "Machine Learning Engineer",
          place: "MyEdMaster, Ashburn, VA",
          description: {
            "Cut p95 Latency by 37%": "Optimized Django REST backend and Redis cache layers — dropping API response time from 800ms to 500ms through deterministic cache keys and TTL-aware invalidation.",
            "Boosted Multi-Hop QA Accuracy by 35%": "Built LangChain multi-agent systems with chain-of-thought reasoning, automated tool invocation, validation, and retry pipelines on a 200-query benchmark.",
            "Improved Self-Serve Resolution by 10%": "Deployed LlamaIndex + Pinecone RAG assistants with embedding-based citation grounding and LLM-as-judge evaluation frameworks.",
          },
          tech_stack: [
            "LlamaIndex",
            "Pinecone",
            "RAG",
            "BLEU/ROUGE",
            "LLM-as-judge",
            "LangChain",
            "MCP",
            "CoT",
            "Django",
            "Redis",
            "Python",
            "AWS",
          ],
        },
        {
          date: "May 2022 – July 2024",
          title: "Software Engineer – Machine Learning",
          place: "Facilio Technology Solutions, Chennai, India",
          description: {
            "Sustained 3,000 Events/Sec at 99.95% Uptime": "Engineered a Kafka + Spark streaming pipeline for 1M+ IoT devices into Amazon RDS with idempotent processing and replay-safe schemas.",
            "Improved Forecasting MAPE from 18% to 11%": "Trained ARIMA and LSTM time-series models across 8,000+ buildings on Kafka and SQL for real-time telemetry dashboards.",
            "Cut Model Release Cycles by 40%": "Deployed Terraform IaC, Kubernetes orchestration, and AWS CI/CD pipelines on Linux — establishing a full MLOps production stack with automated security controls.",
            "Cut p95 Dashboard Load by 60%": "Built React.js/Redux frontends and Java REST APIs, using Datadog APM to trace and resolve high-cardinality SQL bottlenecks.",
          },
          tech_stack: [
            "ARIMA",
            "LSTM",
            "Time-Series Forecasting",
            "Apache Kafka",
            "SQL",
            "Apache Spark",
            "Amazon RDS",
            "IaC",
            "Terraform",
            "Kubernetes",
            "AWS",
            "CI/CD",
            "Java",
            "REST APIs",
            "React.js",
            "Datadog",
            "Python",
          ],
        },
      ],
    };
  },
};
</script>
