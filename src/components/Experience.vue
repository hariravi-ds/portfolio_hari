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
    <div style="font-style: italic; color: #6c757d; margin-bottom: 36px">
      A summary of my professional experience, highlighting key roles and
      achievements.
    </div>
    <div class="timeline">
      <div v-for="(event, index) in journey" :key="index" class="timeline-item">
        <div class="timeline-content">
          <div
            style="display: flex; justify-content: center; gap: 8px"
            class="subtitle"
          >
            <i class="fa-solid fa-user-tie"></i>
            <div>{{ event.experience }}</div>
          </div>
          <div class="subtitle">{{ event.date }}</div>
          <div class="title">{{ event.title }}</div>
          <div class="subtitle">{{ event.work }}</div>
        </div>
      </div>
    </div>
    <div class="main-block">
      <div
        style="display: flex; flex-direction: column; gap: 4px"
        v-for="([key, value], index) in Object.entries(details[0])"
        :key="index"
      >
        <div style="font-weight: bold; text-align: left; font-style: italic">
          {{ key }}
        </div>
        <div style="text-align: left">{{ value }}</div>
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
      details: [
        {
          "Interactive Dashboard Development":
            "Developed and implemented an interactive dashboard tool using JavaScript and Java, which allowed for customizable widgets and real-time monitoring on TV screens. This led to an 8% increase in the customer base over two years.",
          "Automation of KPI & Report Generation":
            "Automated KPI and report generation processes by developing a core framework using optimized SQL indexing, time-series data aggregation, and dynamic ETL processes, reducing manual effort by 30%.",
          "SQL Optimization and Management":
            "Enhanced SQL queries for large datasets, optimizing performance through indexing, joins, and advanced aggregation techniques, resulting in 20% faster query execution and improved database efficiency.",
          "UI Component Library Creation":
            "Built a custom UI component library using React and JSX, leveraging Context API and styled-components. Improved performance and reusability through optimizations such as memoization and lazy loading.",
          "Promotion Ahead of Schedule":
            "Secured a full-time position three months ahead of the typical promotion timeline after transitioning from an intern role, due to exceptional contributions and consistent performance in project delivery.",
        },
      ],
      journey: [
        {
          date: "May 2022 - July 2024",
          experience: "2+ years",
          title: "Member Technical Staff",
          work: "Facilio Technology Solutions, Chennai, India",
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
  padding: 0px 24px;
  margin: 0 auto;
  width: 60%;
}

.timeline-item {
  display: flex;
  justify-content: center;
  gap: 16px;
  position: relative;
}

.timeline-content {
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
  margin-bottom: 4px;
  color: #d1d8e0;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 4px;
  color: #a5a5a5;
}

.main-block {
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: black;
  padding: 36px;
}
</style>
