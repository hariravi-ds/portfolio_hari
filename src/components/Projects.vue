<template>
  <div class="projects-section">
    <h1 class="section-title">Latest Works</h1>
    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
      >
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-info">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-subtitle">{{ project.subtitle }}</p>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-links">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="project-link"
              >View Code</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          title: "Heart Disease Predictor",
          subtitle: "IBM | Jul 2022 - Nov 2022",
          description:
            "Led a team of 4 to develop an IBM-supported heart disease prediction system using IBM Cognos, featuring an interactive dashboard to identify high-risk individuals. Conducted data preprocessing in Python on 10,000+ patient records, including cleaning, transformation, and exploratory data analysis. Optimized machine learning models, such as Random Forest and Decision Tree classifiers, achieving a 95.18% prediction accuracy while coordinating team efforts to meet project milestones.",
          image: "../assets/heart.jpeg",
          github: "https://github.com/example/heart-disease-predictor",
        },
        {
          title: "Global Rice Production Analysis",
          subtitle: "Sep 2024 - Oct 2024",
          description:
            "Spearheaded the development of a predictive model with 20,000 observations, utilizing statistical testing, feature selection, and cross-validation to enhance forecasting accuracy. Conducted advanced exploratory data analysis in R, applied linear regression to identify key trends, and designed 5 interactive Power BI dashboards using DAX and custom visualizations to transform complex data into actionable insights.",
          image: "rice_production_analysis.png",
          github: "https://github.com/example/rice-production-analysis",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-family: Arial, sans-serif;
}

.section-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 30px;
  color: #1abc9c;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: #34495e;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-title {
  font-size: 1.5em;
  color: #d1d8e0;
  margin-bottom: 10px;
}

.project-subtitle {
  font-size: 1.2em;
  color: #a5a5a5;
  margin-bottom: 10px;
}

.project-description {
  font-size: 1em;
  color: #a5a5a5;
  margin-bottom: 15px;
}

.project-links {
  display: flex;
  gap: 10px;
}

.project-link {
  text-decoration: none;
  color: #1abc9c;
  font-weight: bold;
}

.project-link:hover {
  text-decoration: underline;
}
</style>
