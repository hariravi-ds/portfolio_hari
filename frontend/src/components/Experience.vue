<template>
  <div
    class="journey-section image-card"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
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
  data() {
    return {
      image: require("@/assets/subtle2.jpeg"),
      journey: [
        {
          date: "May 2025 - Aug 2025",
          title: "Data Science Intern",
          place: "MyEdMaster, Ashburn, Virginia",
          description: {
            "Recommendation Logic Optimization":
              "Designed and implemented a collaborative filtering and clustering-based recommendation system to match students with mentors and advisors, improving personalization and engagement.",
            "Backend Development":
              "Built and maintained Django-based REST APIs for model inference, data ingestion, and recommendation delivery, ensuring low-latency integration with the frontend.",
            "Frontend Engineering":
              "Developed React-based frontend pages for user dashboards and recommendation results, enabling interactive and dynamic visualization of matches.",
          },
          tech_stack: [
            "Python",
            "Django",
            "React",
            "JavaScript",
            "SQL",
            "AWS",
            "scikit-learn",
            "REST API",
            "Docker",
            "Pandas",
            "NumPy",
          ],
        },
        {
          date: "Apr 2025 - Present",
          title: "Data Scientist",
          place: "Data Science for Sustainable Development, Washington, DC",
          description: {
            "ML Model Deployment and Integration":
              "Architected and deployed ML models for energy-demand forecasting with 91% accuracy, integrating predictions into backend APIs to support real-time decision systems that reduced operational waste by 16%.",
            "Backend and Frontend Development":
              "Developed scalable backend services in Django and REST APIs to serve model inferences, and built a React-based web interface to visualize analytics and model outcomes for end users.",
            "ML Pipeline Optimization":
              "Implemented and optimized ML pipelines using Random Forests and unsupervised learning (PCA, clustering) for anomaly detection and trend analysis across 50+ university buildings.",
          },
          tech_stack: [
            "Python",
            "scikit-learn",
            "Django",
            "Flask",
            "React",
            "JavaScript",
            "SQL",
            "AWS",
            "Docker",
            "Pandas",
            "NumPy",
          ],
        },
        {
          date: "May 2022 - Jul 2024",
          title: "Member Technical Staff",
          place: "Facilio Technology Solutions, Chennai, India",
          description: {
            "Built Low-Code Analytics Platform":
              "Developed a low-code analytics platform using Java and Javascript enabling clients to create dynamic dashboards with real-time anomaly detection and AI-driven consumption forecasts, leading to improved customer adoption.",
            "Integrated Predictive Analytics Modules":
              "Integrated time-series ML models to detect abnormal energy usage patterns across 10K+ IoT devices, achieving faster anomaly detection and enhancing predictive insights.",
            "Developed Scalable Microservices":
              "Built and deployed scalable Java microservices and Kafka pipelines to stream and aggregate telemetry data for ML-based energy benchmarking across multi-site portfolios.",
            "Enhanced Front-End Visualization Engine":
              "Enhanced the Vue.js visualization engine to support live data-driven charts and smart filters powered by backend inference APIs, enabling interactive energy insights.",
            "Engineered SQL-Based ETL Pipelines":
              "Engineered SQL-based ETL pipelines to optimize data extraction and transformation from relational databases, improving reporting and API performance.",
            "Collaborated on AI-Ready Data Pipelines":
              "Worked with data science and product teams to design AI-ready data pipelines on AWS, enabling portfolio-level predictive modeling and analytics delivery to enterprise clients.",
          },
          tech_stack: [
            "JavaScript",
            "Java",
            "REST API",
            "SQL",
            "ETL",
            "Kafka",
            "Python",
            "AWS",
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

<style scoped>
.journey-section {
  padding: 20px;
  background-color: white;
  color: #ecf0f1;
}

.section-title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}
</style>
