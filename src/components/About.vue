<template>
  <div
    class="journey-section image-card"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  >
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
      style="display: flex; justify-content: row; padding: 48px 24px; gap: 8px"
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
        <div style="display: flex; gap: 4px; align-items: center">
          <i class="fa-regular fa-hand"></i>
          <div>Hi, I'm Hari.</div>
        </div>
        <div>{{ about1 }}</div>
        <div>{{ about2 }}</div>
        <div>{{ about3 }}</div>
      </div>
    </div>
    <div class="timeline">
      <div v-for="(event, index) in journey" :key="index" class="timeline-item">
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-date">
          <div class="timeline-point"></div>
        </div>
        <div class="timeline-content">
          <div class="title">{{ event.title }}</div>
          <div class="subtitle">{{ event.college }}</div>
          <div v-if="event.description" class="description">
            {{ event.description }}
          </div>
          <div v-if="event.award" class="award">{{ event.award }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      img: require("@/assets/subtle.jpeg"),
      journey: [
        {
          date: "Aug 2024 - May 2026 (Expected)",
          title: "Master of Science in Data Science",
          college: "The George Washington University, Washington, DC",
          description: "CGPA: 3.77 out of 4",
          award: "Global Leaders Award",
        },
        {
          date: "Jun 2022 - Jul 2024",
          title: "Member Technical Staff",
          college: "Facilio Technology Solutions, Chennai, India",
          description:
            "Developed Business Intelligence tool, automated KPI and report generation with optimized ETL pipelines, built reusable UI components, and trained multiple international clients, enhancing product adoption.",
        },
        {
          date: "Jun 2019 - Apr 2023",
          title: "Bachelor of Engineering in ECE",
          college: "Sri Venkateswara College of Engineering, Chennai, India",
          description: "CGPA: 9.52 out of 10",
        },
      ],
      about1:
        "I am an aspiring professional in data analytics, engineering and machine learning with 2 years of professional experience. Currently pursuing a Master’s degree in Data Science at The George Washington University, I have been recognized with the Global Leaders Award for exceptional contributions.",
      about2:
        "Proficient in Python, SQL, JavaScript, and data visualization tools like Power BI and Tableau, I have experience in machine learning, predictive modeling, and data engineering. I’ve successfully led projects such as the Heart Disease Predictor, achieving 95.18% accuracy, and the Global Rice Production Analysis, which delivered actionable insights through advanced statistical techniques and interactive dashboards.",
      about3:
        "Additionally, I’ve developed predictive models like SVR and GPR, achieving up to 86% R² for predicting asthma prevalence, and analyzed large-scale CDC PLACES data using visualizations like U.S. choropleth maps and Q-Q plots. My skills include automating KPIs with optimized SQL processes, building reusable UI components, and collaborating with cross-functional teams to drive impactful solutions. I am passionate about leveraging data to solve complex problems and committed to continuous learning and innovation.",
      image: require("@/assets/photo.png"),
    };
  },
};
</script>

<style scoped>
.journey-section {
  padding: 20px;
  color: #ecf0f1;
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}

.timeline {
  display: flex;
  flex-direction: row;
  gap: 16px;
  position: relative;
  padding: 24px 12px;
  margin: 0 auto;
  width: 85%;
}

.timeline-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.timeline-date {
  font-size: 12px;
  color: #6c757d;
  display: flex;
  justify-content: center;
  width: 100%;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 12px;
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

.description {
  font-size: 14px;
  color: #ecf0f1;
}

.award {
  font-size: 12px;
  margin-top: 8px;
  color: #1abc9c;
  font-style: italic;
}

.timeline-point {
  width: 10px;
  height: 10px;
  background-color: teal;
  border-radius: 50%;
  border: 2px solid teal;
  z-index: 1;
  position: relative;
}

.timeline-point::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateY(150%);
  width: 400px;
  height: 2px;
  background-color: teal;
  z-index: -1;
}

.timeline-item:last-child .timeline-point::before {
  display: none;
}
.project-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
}
.aboutContent {
  width: 50%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  line-height: 1.75;
  font-size: 16px;
}
</style>
