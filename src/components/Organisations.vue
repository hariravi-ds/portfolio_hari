<template>
  <div
    class="journey-section image-card"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="section-title">Organizations</div>
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
      Highlighting the organizations I've contributed to and my role.
    </div>
    <div class="main-block">
      <div
        class="sub-block"
        v-for="([key, value], index) in Object.entries(details[0])"
        :key="index"
      >
        <div class="title">
          {{ key }}
        </div>
        <div class="subtitle">{{ value.role }}</div>
        <div class="subtitle">{{ value.timeline }}</div>
        <div class="description">{{ value.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganisationSection",
  data() {
    return {
      image: require("@/assets/subtle2.jpeg"),
      details: [
        {
          // Equinox: {
          //   role: "Member",
          //   timeline: "Oct 2024 - Present",
          //   desc: "Engaged in fitness and wellness activities, participating in group fitness classes and community events.",
          // },
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

.main-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px 48px;
}

.sub-block {
  flex: 1;
  padding: 15px;
  background-color: #3b3f4a;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #6c757d;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.sub-block:hover {
  background-color: #4b566e;
  transform: translateY(-5px);
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #d1d8e0;
  text-align: left;
  font-weight: bold;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 8px;
  color: #a5a5a5;
  text-align: left;
}

.description {
  font-size: 14px;
  color: #ecf0f1;
  text-align: left;
}
</style>
