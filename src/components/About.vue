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
      style="display: flex; justify-content: row; padding: 36px 24px; gap: 8px"
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
        <div v-for="(val, index) in about" :key="index">{{ val }}</div>
        <div>
          <div v-for="(val, index) in about2" :key="index">{{ val }}</div>
        </div>
        <div>
          P.S. Check out my work below—I’m always open to ideas that merge
          innovation with impact!
        </div>
      </div>
    </div>
    <div class="timeline">
      <div v-for="(event, index) in journey" :key="index" class="timeline-item">
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-icon-wrapper">
          <div class="timeline-point"></div>
          <div v-if="index !== journey.length - 1" class="timeline-line"></div>
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
          description: "CGPA: 3.88 out of 4",
          award: "Global Leaders Award",
        },
        {
          date: "Jun 2019 - Apr 2023",
          title: "Bachelor of Engineering in ECE",
          college: "Sri Venkateswara College of Engineering, Chennai, India",
          description: "CGPA: 3.97 out of 4",
        },
      ],
      about: [
        "👋 Hi there! I’m Hari Prasannaa, a Data Science graduate student at George Washington University with a strong analytical mindset and a flair for visual storytelling. Based in Washington, DC, and originally from Chennai, India, I bridge cultures and code—passionate about machine learning, cloud tech, and building tools that make businesses smarter.",
        "Data isn’t just my job—it’s my playground🚀. I thrive on building real-world solutions that drive impact. At MyEdMaster, I’m designing behavior-driven recommendation algorithms to better match equity-focused candidates with startups. Simultaneously, with Data Science for Sustainable Development, I’m helping optimize university-wide energy use through predictive modeling and anomaly detection, boosting sustainability outcomes with data.",
        "Previously, during my 2 years as a Member Technical Staff at Facilio, I helped develop a smart building management platform and engineered BI dashboards and APIs that improved customer satisfaction and system reliability.",
        "My stack includes Python, SQL, React.js, AWS, Tableau, and ML frameworks like Scikit-learn and TensorFlow. I’m also fascinated by NLP and ethical AI, and love using data to make smart systems smarter.",
        "When I’m not geeking out over data, I mentor peers—leading Python bootcamps and hosting ML webinars to demystify tech for newcomers. I also serve as a Graduate Senator in the GWU Student Association, where I advocate for student needs and help shape initiatives that improve the graduate experience. I’m especially drawn to challenges where data can spark real-world change.",
      ],
      about2: [
        "Let’s connect if you’re into:",
        "✅ Collaborative problem-solving (I love cross-functional teams!).",
        "✅ Tech-for-good initiatives (think healthcare equity or green energy analytics).",
        "✅ Coffee chats about the future of AI, or why Chennai’s filter coffee beats everything ☕.",
      ],
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
.project-image {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50%;
}
.aboutContent {
  width: 55%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  line-height: 1.75;
  font-size: 14px;
}
</style>
