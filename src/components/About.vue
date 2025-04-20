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
      about: [
        "👋 Hi there! I’m Hari Prasannaa, a Data Science graduate student at George Washington University (GWU) with a strong analytical mindset and a flair for visual storytelling. Based in Washington, DC, and originally from Chennai, India, I bridge cultures and code—passionate about machine learning, cloud tech, and building tools that make businesses smarter.",
        "Data isn’t just my job—it’s my playground🚀. I thrive on designing scalable systems, like the custom BI platforms I engineered with real-time analytics, and optimizing workflows through data analysis and SQL solutions that untangle complex data pipelines. During my 2 years as a Member Technical Staff at Facilio Technology Solutions, I contributed to developing an innovative building management solution and data visualization tools for high-profile clients, collaborating with cross-functional teams to deliver intuitive and scalable systems. My toolkit? Python, JavaScript, SQL, AWS, Tableau and machine learning frameworks (Scikit-learn, TensorFlow), backed by a relentless curiosity for NLP and ethical AI.",
        "When I’m not geeking out over data, you’ll find me mentoring peers—I’ve led Python workshops for incoming freshmen and hosted ML webinars to demystify tech for newcomers. I’m especially drawn to challenges in healthcare analytics, fintech, and sustainable tech, where data can spark real-world change.",
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
  width: 55%;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  line-height: 1.75;
  font-size: 16px;
}
</style>
