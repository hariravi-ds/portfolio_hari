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
    <Timeline :journey="journey" />
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
          experience: "3 months",
          title: "Data Science Intern",
          place: "MyEdMaster, Ashburn, Virginia",
          description: {
            "Behavior-Driven Matching Algorithm":
              "Developed a behavior-driven algorithm to match equity-based candidates with startups, increasing user engagement and match relevance by 12%.",
            "Recommendation Logic Optimization":
              "Refined recommendation logic by analyzing engagement and interaction patterns, improving startup–candidate connection success rate by 3%.",
          },
        },
        {
          date: "Apr 2025 - Present",
          experience: "6 months",
          title: "Data Scientist",
          place: "Data Science for Sustainable Development, Washington, DC",
          description: {
            "Energy Demand Forecasting":
              "Built and deployed predictive models to forecast campus energy demand with 91% accuracy, reducing energy waste by 16%.",
            "Anomaly Detection & Clustering":
              "Conducted anomaly detection using PCA and clustering on energy usage data across 50+ buildings to optimize resource allocation.",
            "Operational Trend Analysis":
              "Applied Random Forest models to uncover operational trends, enhancing decision-making in university-wide energy strategy.",
          },
        },
        {
          date: "May 2022 - July 2024",
          experience: "2+ years",
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
