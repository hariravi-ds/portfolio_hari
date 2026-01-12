<template>
  <div class="journey-section">
    <div class="section-title">Organizations</div>
    <hr class="divider" />
    <div class="section-subtitle">
      Highlighting the organizations I've contributed to and my role.
    </div>
    <div class="main-block">
      <div
        class="org-card"
        v-for="([key, value], index) in Object.entries(details[0])"
        :key="index"
      >
        <div class="org-icon">{{ key.charAt(0) }}</div>
        <div class="org-content">
          <h3 class="org-title">{{ value.role }}</h3>
          <p class="role">{{ key }}</p>
          <p class="date">{{ value.timeline }}</p>
          <p class="description">{{ value.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganisationSection",
  data() {
    return {
      details: [
        {
          "George Washington University Student Association": {
            role: "CCAS Graduate Senator",
            timeline: "Aug 2025 - Present",
            desc: "Represent graduate student interests within the Columbian College of Arts and Sciences (CCAS) School by participating in policy discussions and academic affairs.",
          },
          "Data Science for Sustainable Development": {
            role: "Member",
            timeline: "Aug 2025 - Present",
            desc: "Collaborate on data-driven research projects supporting the UN Sustainable Development Goals (SDGs).",
          },
          "Robotics & Artificial Intelligence Club": {
            role: "Student Tutor",
            timeline: "Jun 2021 - May 2023",
            desc: "Led Python workshops for over 50 incoming freshmen, fostering teamwork and collaborative learning among students without prior programming experience.",
          },
          "Youth Red Cross": {
            role: "Volunteer",
            timeline: "Jun 2019 - May 2023",
            desc: "Spearheaded various health-related initiatives, including blood donation drives engaging over 500 participants, raising awareness of public health issues.",
          },
          "Institution of Electronics and Telecommunication Engineers (IETE)": {
            role: "Member",
            timeline: "Aug 2019 - May 2023",
            desc: "Engaged in knowledge-sharing events and conferences, staying updated on the latest trends in telecommunications and electronics engineering.",
          },
          "Forum of Data Science Engineers": {
            role: "Student Tutor",
            timeline: "Jun 2020 - May 2022",
            desc: "Provided free tutoring in data science and mathematics, helping students improve academically and build confidence. Developed personalized learning plans for effective education.",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
}

.org-card {
  display: flex;
  align-items: flex-start;
  background: #3b3f4a;
  color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.org-card:hover {
  background-color: #4b566e;
  transform: translateY(-3px);
}

.org-icon {
  flex-shrink: 0;
  background: #5a5f73;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 1rem;
}

.org-content {
  flex: 1;
  text-align: start;
}

.org-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #d1d8e0;
}

.role {
  font-size: 14px;
  font-weight: bold;
  color: #a5a5a5;
  margin: 2px 0;
}

.date {
  font-size: 13px;
  font-style: italic;
  color: #ccc;
  margin-bottom: 8px;
}

.description {
  font-size: 14px;
  color: #ecf0f1;
  text-align: start;
}
</style>
