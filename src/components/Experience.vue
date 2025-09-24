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
    <div class="timeline">
      <div v-for="(event, index) in journey" :key="index" class="timeline-item">
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-icon-wrapper">
          <div class="timeline-point"></div>
          <div v-if="index !== journey.length - 1" class="timeline-line"></div>
        </div>
        <div class="timeline-content">
          <div class="subtitle">{{ event.experience }}</div>
          <div class="title">{{ event.title }}</div>
          <div class="subtitle">{{ event.work }}</div>
          <div class="subtitle">{{ event.location }}</div>
          <div v-if="event.description">
            <div
              v-for="(value, key) in event.description"
              :key="key"
              class="description-item"
            >
              <div class="description-key">{{ key }}</div>
              <div class="description-value">{{ value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",
  data() {
    return {
      image: require("@/assets/subtle2.jpeg"),
      journey: [
        {
          date: "May 2025 - Aug 2025",
          experience: "3 months",
          title: "Data Science Intern",
          work: "MyEdMaster",
          location: "Ashburn, Virginia",
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
          work: "Data Science for Sustainable Development",
          location: "Washington, DC",
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
          work: "Facilio Technology Solutions",
          location: "Chennai, India",
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 24px 12px;
  margin: 0 auto;
  width: 85%;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.timeline-date {
  width: 10%;
  font-size: 12px;
  color: #6c757d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-icon-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px;
  margin-right: 8px;
  width: 20px;
}

.timeline-point {
  width: 10px;
  height: 10px;
  background-color: teal;
  border: 2px solid teal;
  border-radius: 50%;
  z-index: 1;
}

.timeline-line {
  width: 2px;
  flex-grow: 1;
  background-color: teal;
  margin-top: 8px;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding: 16px;
  background-color: #3b3f4a;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #6c757d;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.timeline-content:hover {
  background-color: #4b566e;
  transform: translateY(-5px);
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #d1d8e0;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 8px;
  color: #a5a5a5;
}

.description-item {
  text-align: left;
  margin-bottom: 12px;
}

.description-key {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 4px;
  color: #ffffff;
}

.description-value {
  font-weight: 300;
  line-height: 1.5;
  color: #dcdcdc;
}
</style>
