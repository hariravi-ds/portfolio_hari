<template>
  <div class="projects-section">
    <div class="title">Projects</div>
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
      An overview of the projects I've worked on, showcasing my skills and the
      impact of my work.
    </div>
    <div class="projects-grid">
      <div
        @mouseenter="toggleContent(index, true)"
        @mouseleave="toggleContent(index, false)"
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        :style="{ backgroundImage: 'url(' + project.image + ')' }"
      >
        <div class="project-info">
          <h2 class="project-title">{{ project.title }}</h2>
          <p v-if="project.showContent" class="project-description">
            {{ project.shortDesc }}
          </p>
          <!-- <div class="project-links">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="project-link"
              >View Code</a
            >
          </div> -->
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
          title: "Current Asthma Prevalence",
          subtitle: "Nov 2024 - Dec 2024",
          shortDesc: "Assessed the current asthma prevalence across the US",
          description:
            "Designed and optimized machine learning models, achieving up to 86% R² in predicting asthma prevalence with SVR and GPR. Applied advanced feature engineering techniques like cyclic encoding for spatial data, target encoding, and Ridge Regression to handle multicollinearity. Conducted EDA on a large-scale dataset (241k rows), visualizing insights through choropleth maps and Q-Q plots, improving model assumptions and residual analysis.",
          image: require("@/assets/asthma.jpeg"),
          github: "https://github.com/hariravi-ds/DATS_6103_Project2",
          showContent: false,
        },
        {
          title: "Global Rice Production Analysis",
          subtitle: "Sep 2024 - Oct 2024",
          shortDesc:
            "Analyzed and visualized key trends in global rice production",
          description:
            "Spearheaded the development of a predictive model with 20,000 observations, utilizing statistical testing, feature selection, and cross-validation to enhance forecasting accuracy. Conducted advanced exploratory data analysis in R, applied linear regression to identify key trends, and designed 5 interactive Power BI dashboards using DAX and custom visualizations to transform complex data into actionable insights.",
          image: require("@/assets/rice.jpeg"),
          github: "https://github.com/hariravi-ds/DATS6101-Team4",
          showContent: false,
        },
        {
          title: "CO2 Emissions in Modern Vehicles",
          subtitle: "Nov 2024 - Dec 2024",
          shortDesc:
            "Analyzed vehicle attributes to uncover relationships with CO2 emissions",
          description:
            "Analyzed a dataset of 40,000 vehicle records, developing statistical and machine learning models to uncover relationships between vehicle attributes and CO2 emissions. Applied feature selection techniques, such as VIF analysis, to identify key predictors, and implemented a robust data cleaning pipeline, including handling missing values and encoding categorical variables, for focused analysis on diesel and petrol vehicles.",
          image: require("@/assets/fuel.jpeg"),
          github: "https://github.com/hariravi-ds/DATS6101-Team4-Project2",
          showContent: false,
        },
        {
          title: "Heart Disease Predictor",
          subtitle: "IBM | Jul 2022 - Nov 2022",
          shortDesc:
            "Developed a heart disease prediction system with an interactive dashboard to identify high-risk individuals",
          description:
            "Led a team of 4 to develop an IBM-supported heart disease prediction system using IBM Cognos, featuring an interactive dashboard to identify high-risk individuals. Conducted data preprocessing in Python on 10,000+ patient records, including cleaning, transformation, and exploratory data analysis. Optimized machine learning models, such as Random Forest and Decision Tree classifiers, achieving a 95.18% prediction accuracy while coordinating team efforts to meet project milestones.",
          image: require("@/assets/heart.jpeg"),
          github: "https://github.com/example/heart-disease-predictor",
          showContent: false,
        },
      ],
    };
  },
  methods: {
    toggleContent(ind, val) {
      let { projects } = this;
      projects = projects.map((project, index) => {
        if (index == ind) {
          project = { ...project, showContent: val };
        }
        return project;
      });
      this.projects = projects;
    },
  },
};
</script>

<style scoped>
.projects-section {
  padding: 20px;
  color: #ecf0f1;
  background-color: white;
}

.title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 48px 24px;
}

.project-card {
  background-color: #34495e;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-image 0.3s ease;
  height: 300px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center;
}

.project-image {
  display: none;
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-info {
  opacity: 1;
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
