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
            "Interactive BI Platform Development":
              "Engineered Business Intelligence (BI) platform using JavaScript and Java, enabling real-time monitoring and customizable widgets, driving 8% customer base growth over two years.",
            "Automation of KPI & Report Generation":
              "Automated KPI and report generation processes by developing a core framework using optimized SQL indexing, time-series data aggregation, and dynamic ETL processes, reducing manual effort by 30%.",
            "SQL Optimization":
              "Streamlined ETL workflows and time series data aggregation by optimizing SQL queries reducing manual work and improving report generation speed by 15%.",
            "Development of RESTful APIs":
              "Developed RESTful APIs with well-defined endpoints for internal and external use, leveraging Swagger for documentation and Postman for unit testing, ensuring performance.",
            "Promotion Ahead of Schedule":
              "Secured a full-time position three months ahead of the typical promotion timeline after transitioning from an intern role, due to exceptional contributions and consistent performance in project delivery.",
          },
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
