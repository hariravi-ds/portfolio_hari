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
    <Timeline :journey="journey" type="education" />
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";
export default {
  name: "AboutSection",
  components: {
    Timeline,
  },
  data() {
    return {
      img: require("@/assets/subtle.jpeg"),
      journey: [
        {
          date: "Aug 2024 - May 2026 (Expected)",
          title: "Master of Science in Data Science",
          place: "The George Washington University, Washington, DC",
          gpa: "CGPA: 3.92 out of 4",
          award: "Global Leaders Award",
        },
        {
          date: "Jun 2019 - Apr 2023",
          title: "Bachelor of Engineering in ECE",
          place: "Sri Venkateswara College of Engineering, Chennai, India",
          gpa: "CGPA: 3.97 out of 4",
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
