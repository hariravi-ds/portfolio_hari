<template>
  <div class="journey-section">
    <h1 class="section-title">Education</h1>
    <div class="timeline">
      <div v-for="(event, index) in journey" :key="index" class="timeline-item">
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-date" style="width: 50px">
          <div class="timeline-point"></div>
        </div>
        <div class="timeline-content">
          <h2 class="title">{{ event.title }}</h2>
          <p class="subtitle">{{ event.college }}</p>
          <p v-if="event.description" class="description">
            {{ event.description }}
          </p>
          <p v-if="event.award" class="award">{{ event.award }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationSection",
  data() {
    return {
      journey: [
        {
          date: "Aug 2024 - May 2026 (Expected)",
          title: "Master of Science in Data Science",
          college: "The George Washington University, Washington, DC",
          description: "CGPA: 3.77 out of 4",
          award: "Global Leaders Award",
        },
        {
          date: "Jun 2019 - Apr 2023",
          title: "Bachelor of Engineering in ECE",
          college: "Sri Venkateswara College of Engineering, Chennai, India",
          description: "CGPA: 9.52 out of 10",
        },
        {
          date: "Aug 2022 - June 2024",
          title: "Member Technical Staff",
          college: "Facilio Technology Solutions, Chennai, India",
          description:
            "Fast-tracked to a full-time role ahead of schedule for exceptional performance, contributing to data-centric projects such as creating interactive dashboards for real-time insights, automating KPI reporting with optimized SQL and ETL pipelines to reduce manual effort by 30%, and developing scalable visualization tools using React, enhancing decision-making and data accessibility.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.journey-section {
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-family: Arial, sans-serif;
}

.section-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 20px;
  margin: 0 auto;
  width: 60%;
}

.timeline-item {
  display: flex;
  justify-content: center;
  gap: 16px;
  position: relative;
}

.timeline-date {
  font-size: 1em;
  color: #6c757d;
  display: flex;
  justify-content: center;
  width: 175px;
  padding-top: 32px;
}

.timeline-content {
  flex: 1;
  padding: 15px;
  background-color: #3b3f4a;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #6c757d;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.timeline-content:hover {
  background-color: #4b566e;
  transform: translateY(-5px);
}

.title {
  font-size: 1.5em;
  margin-bottom: 5px;
  color: #d1d8e0;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #a5a5a5;
}

.description {
  font-size: 1em;
  color: #ecf0f1;
}

.award {
  font-size: 1em;
  margin-top: 10px;
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
  transform: translateX(-50%);
  width: 2px;
  height: 225px;
  background-color: teal;
  z-index: -1;
}

.timeline-item:last-child .timeline-point::before {
  display: none;
}
</style>
