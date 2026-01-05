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
import Timeline from "./Timeline.vue";
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
          date: "May 2025 - Sep 2025",
          title: "Data Science Intern",
          place: "MyEdMaster, Ashburn, Virginia",
          description: {
            "RAG Knowledge Assistant + Evaluation":
              "Built a RAG-based knowledge assistant (LlamaIndex + Pinecone) over unstructured internal resources and shipped an eval harness (faithfulness, context precision, citation coverage) with citation enforcement → improved self-serve resolution by 10% and reduced repeat escalations by 5%.",

            "Semantic Search + Hybrid Retrieval":
              "Implemented semantic search using OpenAI embeddings + Pinecone across 10K+ resources; added hybrid retrieval (BM25 + vector) to improve ranking → reduced zero-result queries by 15% and increased results CTR by 5%.",

            "Personalized Recommendations":
              "Developed a personalized recommendation system using hybrid ranking (content + interaction signals) with offline training + online serving → increased coverage including cold-start users and improved recommendation CTR by 8% in A/B tests with guardrails.",

            "Experimentation (A/B Testing Framework)":
              "Built an A/B testing framework with traffic bucketing, exposure logging, and metric guardrails that reduced time-to-launch experiments from ~10 business days to ~5 and increased throughput from ~1–2/month to ~3–4/month.",

            "Backend Performance & APIs":
              "Designed and implemented Django REST/GraphQL services backed by PostgreSQL, defining stable APIs for projects/tasks/matches/resources; optimized high-traffic endpoints with Redis caching (feed tiles/filters/recommendations) → reduced API error rate from 0.8% to 0.5%, cut integration churn by 10–15%, improved p95 latency ~800ms→~500ms, achieved 50–60% cache hit rate, and lowered DB query load by 15–25%.",
          },
          tech_stack: [
            "LlamaIndex",
            "Pinecone",
            "Embeddings",
            "RAG & Evaluation",
            "Hybrid Retrieval",
            "Python",
            "Django",
            "GraphQL",
            "PostgreSQL",
            "Redis",
            "React",
            "Next.js",
            "JavaScript",
            "A/B Testing",
            "Metric Guardrails",
            "SQL",
            "AWS",
          ],
        },
        {
          date: "Apr 2025 - Present",
          title: "Data Scientist",
          place: "Data Science for Sustainable Development, Washington, DC",
          description: {
            "Energy Forecasting (XGBoost + AWS)":
              "Architected and deployed building-level energy-demand forecasting using XGBoost + AWS to serve real-time API predictions → achieved 12% MAPE and reduced operational waste by 16% across 50+ university buildings.",

            "Productization (APIs + Analytics UI)":
              "Productized forecasts by building Django REST inference services and a React analytics UI with drilldowns on building trends/outliers → saved ~90 minutes/week of manual reporting and accelerated intervention workflows across buildings.",

            "ML Delivery Workflow (AWS Pipelines + CI/CD)":
              "Modernized ML delivery by migrating to AWS-native pipelines (containerized training, scheduled retrains, CI/CD) → cut release cycle time by 40% and enabled reliable cross-team access to sustainability forecasts.",

            "Anomaly Detection + Alerting":
              "Implemented automated anomaly detection using STL residual monitoring with CloudWatch/SNS alerting → continuously monitored 50+ buildings and surfaced abnormal usage early to speed investigations and interventions.",
          },
          tech_stack: [
            "Python",
            "SQL",
            "XGBoost",
            "Time-Series Forecasting",
            "Anomaly Detection",
            "Django",
            "REST APIs",
            "React",
            "Docker",
            "AWS",
            "CloudWatch",
            "SNS",
            "CI/CD",
            "Vercel",
            "Supabase",
          ],
        },
        {
          date: "May 2022 - Jul 2024",
          title: "Member Technical Staff",
          place: "Facilio Technology Solutions, Chennai, India",
          description: {
            "Self-Serve BI Platform (Vue + Java)":
              "Engineered a Tableau-like self-serve BI platform (Vue + Java REST APIs) enabling dashboards, pivots, and drilldowns → increased adoption +35% to ~1,200 WAU across 30+ enterprise customers in 4 regions.",

            "Anomaly Detection (Isolation Forest / Autoencoder)":
              "Built and productionized anomaly detection over energy telemetry using Kafka + ClickHouse + Java; trained Isolation Forest and autoencoder models on time-window features with threshold calibration → improved alert precision 0.62→0.78, reducing investigation time across 1M+ IoT devices.",

            "Forecasting (XGBoost / Prophet)":
              "Developed time-series forecasting services (Kafka→ClickHouse + Java) using XGBoost / Prophet with rolling-origin backtests and per-tenant calibration → improved MAPE 18%→11% across ~8K buildings and integrated forecasts into dashboards/alerts.",

            "Drilldowns + Query Engine Performance (ClickHouse)":
              "Built end-to-end drilldown workflows using Vue + Java + ClickHouse while preserving filter context; developed a query generation/orchestration layer (Java + SQL/ClickHouse) to compile user filters/group-bys into optimized queries → reduced time-to-insight 25 min→8 min and improved p95 dashboard load time 4.8s→1.9s across 500+ tenants.",

            "Caching, Rollups & Cost":
              "Optimized latency and cost using Redis caching + ClickHouse pre-aggregated rollups for hot KPIs → reduced ClickHouse query volume ~45% and improved p95 latency 2.6s→1.4s on core flows.",

            "Streaming Telemetry Pipelines (Kafka → ClickHouse on AWS)":
              "Implemented near-real-time ingestion on AWS (Kafka→ClickHouse) with idempotent processing/replay safety → improved freshness lag 30 min→3 min at ~3,000 events/sec peak; supported ~50M events/day with 99.95% pipeline uptime.",

            "Reliability, Observability & Security":
              "Instrumented analytics with Datadog APM/metrics/logs, added guardrails (timeouts/pagination), and enforced tenant isolation via auth + row-level constraints → reduced MTTR 1.5 hrs→25 min, lowered timeout/error rate 2.1%→0.4%, and reduced audit findings 3→0.",
          },
          tech_stack: [
            "JavaScript (Vue)",
            "Python",
            "Java",
            "REST APIs",
            "Microservices",
            "Kafka",
            "SQL",
            "ClickHouse",
            "ETL",
            "Redis",
            "Pre-aggregated Rollups",
            "Datadog",
            "Anomaly Detection",
            "Time-Series Forecasting",
            "Isolation Forest",
            "LightGBM",
            "Prophet",
            "Neural Networks",
            "Docker",
            "Bitbucket",
            "JIRA",
          ],
        },
      ],
    };
  },
};
</script>
