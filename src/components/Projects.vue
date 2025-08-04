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
    <div class="projects-scroll">
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
      <div v-if="selectedProject.images" class="image-wrapper">
        <div
          v-for="(img, index) in selectedProject.images"
          :key="index"
          class="image-container"
        >
          <img :src="img" alt="photo" />
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
      image: require("@/assets/ai.jpg"),
      dialogVisible: false,
      selectedProject: null,
      projects: [
        {
          title: "AWS-Based Conversational AI for Banking Support",
          subtitle: "Feb 2025 - Apr 2025",
          shortDesc:
            "Built an AWS-powered banking support chatbot with custom ML inference, real-time user interaction, and automated fraud alerting.",
          desc1:
            "Developed a banking support chatbot using AWS Lex and Lambda, enabling users to handle tasks such as card activation, balance inquiries, and fraud alerts through natural language interaction.",
          desc2:
            "Integrated a custom-built machine learning model via Amazon ECR for handling low-confidence queries, improving accuracy and response quality in sensitive banking scenarios.",
          desc3:
            "Implemented secure, scalable infrastructure for real-time chatbot interactions, including logging with CloudWatch, user context storage with DynamoDB, and automated alerting via SNS for critical cases like fraud detection.",
          image: require("@/assets/chatbot.jpeg"),
          github: "https://github.com/DarsiniLakshmiah/BankingIT_ChatBot",
          showContent: false,
        },
        {
          title: "Wildfire Data Analysis",
          subtitle: "Feb 2025 - Apr 2025",
          shortDesc:
            "Analyzed the multifaceted impact of California wildfires using Tableau, combining structural, financial, and air quality data to inform disaster awareness and prevention strategies.",
          desc1:
            "Designed a comprehensive data visualization dashboard in Tableau to analyze the impact of California wildfires using multi-source datasets on structural damage, financial loss, air quality, and casualties.",
          desc2:
            "Integrated EPA air quality data (2000–2023) to examine the health and environmental effects of wildfires, identifying pollutant spikes and high-risk regions.",
          desc3:
            "Extended the analysis to a national scale, evaluating total disaster-related deaths and financial costs to contextualize California’s wildfire crisis within broader U.S. disaster trends.",
          image: require("@/assets/cal_fire.jpeg"),
          // github:
          //   "https://github.com/hariravi-ds/Traffic-Flow-Forecasting-Using-Spatial-CNNs",
          showContent: false,
        },
        {
          title: "Traffic Flow Forecasting using CNN & Unsupervised Learning",
          subtitle: "Mar 2025 - Apr 2025",
          shortDesc:
            "Built a deep learning model to forecast traffic patterns using CNNs and unsupervised clustering on spatially mapped sensor data.",
          desc1:
            "Designed and implemented a spatiotemporal traffic forecasting system using CNNs on synthetic heatmap data generated from real-world sensor layouts.",
          desc2:
            "Mapped urban sensor networks into a 2D grid using MDS and built a supervised deep learning pipeline achieving low MSE (≈45) on future traffic prediction.",
          desc3:
            "Applied KMeans clustering and PCA for unsupervised pattern discovery, enabling comparative analysis of traffic states with interpretability across sequences.",
          image: require("@/assets/traffic.jpeg"),
          github:
            "https://github.com/hariravi-ds/Traffic-Flow-Forecasting-Using-Spatial-CNNs",
          showContent: false,
        },
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
          image: require("@/assets/asthma.jpg"),
          github: "https://github.com/hariravi-ds/DATS_6103_Project2",
          images: [
            require("@/assets/casthma/image1.png"),
            require("@/assets/casthma/image2.png"),
            require("@/assets/casthma/image3.png"),
          ],
          showContent: false,
        },
        {
          title: "Credit Card Fraud Detection",
          subtitle: "Nov 2024 - Jan 2025",
          shortDesc:
            "Developed a machine learning model to detect credit card fraud with optimized recall and precision",
          desc1:
            "Developed end-to-end pipelines for data preprocessing, including feature engineering, outlier detection, and class imbalance handling using advanced resampling techniques such as SMOTE and Tomek Links to optimize model performance.",
          desc2:
            "Designed and implemented machine learning models, including Logistic Regression, Random Forest, and Neural Networks, achieving a 25% improvement in fraud detection recall through hyperparameter tuning and ensemble modeling.",
          desc3:
            "Created interactive visualizations using Matplotlib and Seaborn to interpret data trends and model performance metrics, including ROC-AUC and Precision-Recall curves, enabling actionable insights for fraud detection strategies.",
          image: require("@/assets/credit.jpg"),
          github: "https://github.com/hariravi-ds/Fraud_Detection",
          images: [
            require("@/assets/creditcard/image1.png"),
            require("@/assets/creditcard/image2.png"),
            require("@/assets/creditcard/image3.png"),
            require("@/assets/creditcard/image4.png"),
          ],
          showContent: false,
        },
        {
          title: "CO2 Emissions in Modern Vehicles",
          subtitle: "Nov 2024 - Dec 2024",
          shortDesc:
            "Analyzed vehicle attributes to uncover relationships with CO2 emissions",
          desc1:
            "Developed statistical and machine learning models, including linear regression, clustering, and classification trees, to analyze relationships between vehicle attributes and CO2 emissions from a dataset of 40,000+ records.",
          desc2:
            "Implemented feature selection techniques like exhaustive methods and VIF analysis to identify key predictors of vehicle emissions, optimizing model performance and interpretability.",
          desc3:
            "Preprocessed high-dimensional data by handling missing values, encoding categorical variables, and removing irrelevant features, ensuring a robust pipeline for focused analysis on diesel and petrol vehicles.",
          image: require("@/assets/co2.jpeg"),
          github: "https://github.com/hariravi-ds/DATS6101-Team4-Project2",
          images: [
            require("@/assets/vehicle/image1.png"),
            require("@/assets/vehicle/image2.png"),
            require("@/assets/vehicle/image3.png"),
          ],
          showContent: false,
        },
        {
          title: "Healthcare Data Management System",
          subtitle: "Nov 2024 - Dec 2025",
          shortDesc:
            "Comparative Analysis of SQL and MongoDB for Efficient Healthcare Data Management",
          desc1:
            "Conducted a comparative analysis of SQL and MongoDB for managing large healthcare datasets, including patient records and appointment data, by simulating real-world scenarios with 100,000+ records",
          desc2:
            "Demonstrated SQL's superiority in transactional operations and data integrity, while highlighting MongoDB's scalability and flexibility in handling semi-structured data, providing actionable insights for hybrid database adoption",
          desc3:
            "Proposed a hybrid database model leveraging SQL for structured data and MongoDB for dynamic datasets, ensuring adaptability for evolving healthcare workflows",
          image: require("@/assets/dbms.jpg"),
          images: [
            require("@/assets/dbms/image1.png"),
            require("@/assets/dbms/image2.png"),
            require("@/assets/dbms/image3.png"),
          ],
          showContent: false,
        },
        {
          title: "Global Rice Production Analysis",
          subtitle: "Sep 2024 - Oct 2024",
          shortDesc:
            "Analyzed and visualized key trends in global rice production",
          desc1:
            "Spearheaded the development of a predictive model with 20,000+ observations, employing statistical testing, feature selection, hyperparameter tuning, and cross-validation to boost forecasting accuracy.",
          desc2:
            "Performed advanced exploratory data analysis in R, applying techniques such as data normalization, outlier detection, and multicollinearity analysis, followed by linear regression to uncover key trends.",
          desc3:
            "Designed and developed 5 interactive dashboards in Power BI, utilizing DAX functions and custom visualizations to transform complex data into actionable insights, ensuring interpretability for analysis. ",
          image: require("@/assets/rice.jpg"),
          github: "https://github.com/hariravi-ds/DATS6101-Team4",
          images: [
            require("@/assets/rice/image1.png"),
            require("@/assets/rice/image2.png"),
            require("@/assets/rice/image3.png"),
          ],
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
          image: require("@/assets/heart.jpg"),
          github: "https://github.com/hariravi-ds/heart-disease-predictor",
          images: [
            require("@/assets/heart/image1.png"),
            require("@/assets/heart/image2.png"),
            require("@/assets/heart/image3.png"),
          ],
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
  padding: 64px;
  color: #ecf0f1;
}

.title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}

.projects-scroll {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 20px 0;
}

.projects-scroll::-webkit-scrollbar {
  display: none;
}

.project-card {
  flex: 0 0 auto;
  width: 315px;
  height: 315px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
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

.project-description {
  font-size: 1em;
  color: #a5a5a5;
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

.image-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 16px;
}

.image-container {
  flex: 1 1 auto;
  max-width: calc(100% / var(--image-count));
}

.image-container img {
  width: 100%;
  height: 175px;
  object-fit: cover;
}
</style>
