<template>
  <div
    class="journey-section image-card"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="section-title">Organizations</div>
    <hr class="underline" />
    <div class="italic text-gray-500">
      Highlighting the organizations I've contributed to and my role.
    </div>
    <div class="main-block">
      <div
        class="sub-block"
        v-for="([key, value], index) in Object.entries(details[0])"
        :key="index"
      >
        <div class="icon-title-wrapper">
          <div class="icon-circle">{{ key.charAt(0) }}</div>
          <div class="flex flex-col items-start">
            <div class="org-name">{{ key }}</div>
            <div class="role-title">{{ value.role }}</div>
            <div class="timeline">{{ value.timeline }}</div>
          </div>
        </div>
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
          "Institution of Electronics and Telecommunication Engineers": {
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

.main-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 48px;
}

.sub-block {
  backdrop-filter: blur(8px);
  background: linear-gradient(
    145deg,
    rgba(47, 53, 66, 0.75),
    rgba(34, 40, 49, 0.75)
  );
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
}

.sub-block:hover {
  transform: translateY(-5px);
  background: linear-gradient(
    145deg,
    rgba(60, 66, 77, 0.9),
    rgba(40, 45, 55, 0.9)
  );
}

.icon-title-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
}

.icon-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #ffffff20;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
}

.org-name {
  font-size: 16px;
  font-weight: 600;
  color: #d1d8e0;
}

.role-title {
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
}

.timeline {
  font-family: "Courier New", Courier, monospace;
  font-size: 13px;
  font-style: italic;
  color: #a5a5a5;
  margin-top: 2px;
}

.description {
  font-size: 14px;
  color: #ecf0f1;
  text-align: left;
  margin-top: 10px;
}
</style>
