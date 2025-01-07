<template>
  <div
    class="projects-section image-card"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
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
        @click="openDialog(index)"
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
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" :show-close="false" width="500">
      <template #header="{ close }">
        <div
          style="position: absolute; right: 25px; cursor: pointer"
          type="danger"
        >
          <el-icon :size="32" class="el-icon--left" @click="close"
            ><CircleCloseFilled
          /></el-icon>
        </div>
        <div>
          <div style="margin: 8px" class="f24">
            {{ selectedProject.title }}
          </div>
          <div style="margin-bottom: 30px" class="f16">
            {{ selectedProject.shortDesc }}
          </div>
        </div>
      </template>
      <div>Description</div>
      <hr style="border-top: 1px solid rgba(0, 0, 0, 0.1); margin: 16px 0px" />
      <div class="mb16">{{ selectedProject.desc1 }}</div>
      <div class="mb16">{{ selectedProject.desc2 }}</div>
      <div class="img-container">
        <div v-for="(img, index) in selectedProject.images" :key="index">
          <img style="height: 175px; width: 275px" :src="img" alt="photo" />
        </div>
      </div>
      <div class="mb16">{{ selectedProject.desc3 }}</div>
      <div>
        <a
          v-if="selectedProject.github"
          :href="selectedProject.github"
          target="_blank"
          class="project-link"
          >View Code</a
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      image: require("@/assets/ai.jpeg"),
      dialogVisible: false,
      selectedProject: null,
      projects: [
        {
          title: "Current Asthma Prevalence",
          subtitle: "Nov 2024 - Dec 2024",
          shortDesc: "Assessed the current asthma prevalence across the US",
          desc1:
            "Analyzed a large-scale dataset (241k rows, 22 columns) sourced from CDC PLACES, identifying key patterns using exploratory data analysis (EDA) and visualizations, including U.S. choropleth maps, residual plots, and Q-Q plots to validate model assumptions and assess residual normality.",
          desc2:
            "Conducted advanced feature engineering techniques, including cyclic encoding for spatial features (latitude/longitude), target encoding, and handling multicollinearity using Ridge Regression. Improved target variable distribution through log transformation and Winsorization to reduce skewness and outliers.",
          desc3:
            "Developed and optimized predictive models using Linear Regression, Ridge Regression, Support Vector Regression (SVR), and Gaussian Process Regression (GPR), achieving up to 86% R² in SVR and 81% R² in GPR for predicting asthma prevalence.",
          image: require("@/assets/asthma.jpeg"),
          github: "https://github.com/hariravi-ds/DATS_6103_Project2",
          images: [
            require("@/assets/casthma/image1.png"),
            require("@/assets/casthma/image2.png"),
            require("@/assets/casthma/image3.png"),
          ],
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
          title: "Global Rice Production Analysis",
          subtitle: "Sep 2024 - Oct 2024",
          shortDesc:
            "Analyzed and visualized key trends in global rice production",
          desc1:
            "Spearheaded the development of a predictive model with 20,000 observations, employing statistical testing, feature selection, hyperparameter tuning, and cross-validation to boost forecasting accuracy.",
          desc2:
            "Performed advanced exploratory data analysis in R, applying techniques such as data normalization, outlier detection, and multicollinearity analysis, followed by linear regression to uncover key trends.",
          desc3:
            "Designed and developed 5 interactive dashboards in Power BI, utilizing DAX functions and custom visualizations to transform complex data into actionable insights, ensuring interpretability for analysis. ",
          image: require("@/assets/rice.jpeg"),
          github: "https://github.com/hariravi-ds/DATS6101-Team4",
          showContent: false,
        },
        {
          title: "Heart Disease Predictor",
          subtitle: "IBM | Jul 2022 - Nov 2022",
          shortDesc:
            "Developed a heart disease prediction system with an interactive dashboard to identify high-risk individuals",
          desc1:
            "Led a team of 4 members to design an IBM-supported heart disease prediction system using IBM Cognos, creating an interactive dashboard to visualize patient data and identify high-risk individuals.",
          desc2:
            "Performed data preprocessing in Python, including data cleaning, transformation, and exploratory data analysis on 10,000+ patient records, ensuring high-quality inputs for accurate model training. ",
          desc3:
            "Optimized machine learning models, including Random Forest and Decision Tree classifiers, improving prediction accuracy to 95.18%, and coordinated team efforts to meet project milestones. ",
          image: require("@/assets/heart.jpeg"),
          github: "https://github.com/hariravi-ds/heart-disease-predictor",
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
    openDialog(index) {
      this.selectedProject = this.projects[index];
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.projects-section {
  padding: 20px;
  color: #ecf0f1;
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
.project-link {
  text-decoration: none;
  color: #1abc9c;
  font-weight: bold;
  margin-top: 15px;
  display: inline-block;
}

.project-link:hover {
  text-decoration: underline;
}

.img-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 30px 0px;
}
</style>
