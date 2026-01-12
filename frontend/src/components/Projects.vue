<template>
  <div class="journey-section">
    <div class="title">Projects</div>
    <hr class="section-divider" />
    <div class="subtitle">
      An overview of the projects I've worked on, showcasing my skills and the
      impact of my work.
    </div>

    <button
      v-show="showLeftButton"
      class="scroll-btn left-btn"
      @click="scrollLeft"
    >
      <el-icon><ArrowLeftBold /></el-icon>
    </button>

    <div ref="scrollContainer" class="projects-scroll">
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

    <button
      v-show="showRightButton"
      class="scroll-btn right-btn"
      @click="scrollRight"
    >
      <el-icon><ArrowRightBold /></el-icon>
    </button>

    <el-dialog v-model="dialogVisible" :show-close="false" width="500">
      <template #header="{ close }">
        <div style="position: absolute; right: 25px; cursor: pointer">
          <el-icon :size="32" class="el-icon--left" @click="close">
            <CircleCloseFilled />
          </el-icon>
        </div>
        <div>
          <div style="margin: 8px" class="f24">{{ selectedProject.title }}</div>
          <div style="margin-bottom: 30px" class="f16">
            {{ selectedProject.shortDesc }}
          </div>
        </div>
      </template>
      <div>Description</div>
      <hr style="border-top: 1px solid rgba(0, 0, 0, 0.1); margin: 16px 0px" />
      <ul class="dlg-bullets">
        <li v-for="(item, index) in selectedProject.desc" :key="index">
          {{ item }}
        </li>
      </ul>
      <div v-if="selectedProject.images" class="image-wrapper">
        <div
          v-for="(img, index) in selectedProject.images"
          :key="index"
          class="image-container"
        >
          <img :src="img" alt="photo" />
        </div>
      </div>
      <div class="dlg-actions">
        <a
          v-if="selectedProject.github"
          :href="selectedProject.github"
          target="_blank"
          rel="noreferrer"
          class="pill pill--github"
        >
          <span class="pill__icon" aria-hidden="true">
            <i class="fab fa-github fa-lg"></i>
          </span>
          <span class="pill__text">View on GitHub</span>
        </a>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ProjectsSection",
  data() {
    return {
      dialogVisible: false,
      selectedProject: null,
      showLeftButton: false,
      showRightButton: true,
      projects: [
        {
          title: "LLM Gateway",
          subtitle: "Oct 2025 - Dec 2025",
          shortDesc:
            "Built a LLM+RAG gateway (Llama 3) with semantic caching, hybrid retrieval, safety redaction, and Ragas-driven evaluation to improve answer quality while cutting latency and redundant model calls.",
          desc: [
            "Built an LLM-powered RAG gateway for enterprise Q&A using Python/FastAPI + Pinecone (retrieval) + Llama 3 (Ollama), routing requests through retrieve→augment→generate with versioned prompts/contexts, reducing repeated LLM calls via write-through caching and enabling low-latency reuse on duplicates.",
            "Developed an ML evaluation harness to improve RAG answer quality using Ragas (faithfulness, answer relevancy, context precision/recall), iterating on recursive character chunking + top-k retrieval based on metric regressions, increasing faithfulness by 15% (relative) vs baseline settings.",
            "Implemented a semantic cache correctness layer to prevent wrong cached answers using Redis/RediSearch vectors + a cross-encoder verifier (MiniLM), re-checking borderline cosine matches before serving from cache, reducing cache false-hit rate by 22% vs cosine-only baseline.",
            "Engineered a hybrid retrieval pipeline to improve recall on keyword-heavy edge cases using BM25 + dense vectors fused with Reciprocal Rank Fusion (RRF), merging sparse+dense candidate sets before context assembly, improving Recall@5 by 12% on a 500-query benchmark.",
            "Built a PII redaction firewall to prevent sensitive data leakage to the LLM using a multi-stage NER + heuristics pipeline, detecting/redacting entities under adversarial formatting before generation, achieving 99.2% PII recall on labeled tests vs regex-only filters.",
          ],
          image: require("@/assets/llm_gateway.jpeg"),
          github: "https://github.com/hariravi-ds/llm_gateway",
          showContent: false,
        },
        {
          title: "Reinforcement Learning for Airport Taxi Route Management",
          subtitle: "Nov 2025 - Dec 2025",
          shortDesc:
            "Built a reinforcement learning system for airport taxi route management, comparing tabular Q-Learning/SARSA vs. a Double Dueling DQN to minimize taxi times and congestion under stochastic demand and weather.",
          desc: [
            "Designed a custom airport taxi routing simulator with multiple routes, Poisson aircraft arrivals, mean-reverting weather, and a reward shaped as negative cost over taxi time, queue length, and system congestion.",
            "Implemented and compared three policy families: tabular Q-Learning & SARSA (discretized state), a Double Dueling DQN with replay buffer and soft (Polyak) target updates, and non-learning baselines (Random, Always-A, Min-Congestion heuristic).",
            "Built the full Deep RL stack in PyTorch for DQN: dueling value/advantage heads, Double DQN target computation, epsilon-greedy exploration, replay buffer training loop, and evaluation with confidence-band plots.",
            "Ran large-scale experiments (up to 800k environment steps) and logged learning curves, taxi times, and action distributions to compare stability and performance across methods.",
            "Results: DQN converged to ~11.7 min average taxi time vs ~17–18 min for tabular methods (≈32% reduction) and improved average reward (negative cost) by 200+ points vs SARSA, clearly outperforming all non-learning baselines.",
            "DQN learned an interpretable, capacity-aware policy that routes almost all traffic through Routes A and B while effectively avoiding high-cost configurations, showing how richer state + function approximation leads to better congestion management.",
          ],
          image: require("@/assets/taxiing.png"),
          github: "https://github.com/hariravi-ds/airport-taxi-rl",
          showContent: false,
        },
        {
          title: "Intelligent Document Q&A Assistant with RAG",
          subtitle: "July 2025 - Sep 2025",
          shortDesc:
            "Developed an LLM-powered retrieval system with FAISS and embeddings, enabling real-time, context-aware Q&A over enterprise documents.",
          desc: [
            "Built an LLM-powered retrieval system using embeddings and FAISS vector DB, enabling context-aware Q&A over enterprise knowledge bases.",
            "Designed and deployed a RAG pipeline, improving answer relevance by 8% compared to keyword search baselines.",
            "Implemented monitoring for latency, token usage, and hallucination rates, reducing inaccuracies by 12% while maintaining sub-500ms response times.",
          ],
          image: require("@/assets/document_rag.png"),
          // github: "https://github.com/hariravi-ds/employee-churn-pred-pipeline",
          showContent: false,
        },
        {
          title: "Employee Churn Prediction Pipeline",
          subtitle: "July 2025 - Sep 2025",
          shortDesc:
            "End-to-end ML pipeline for Employee Churn Prediction, orchestrated with Airflow and powered by BigQuery, XGBoost, and Looker.",
          desc: [
            "Built and scheduled an Airflow DAG to automatically retrain churn prediction models on weekly HR data updates in BigQuery. This ensured the model stayed current with evolving employee behavior.",
            "Trained XGBoost models on ~5M employee records, applied SHAP for feature explainability, and validated fairness across departments and demographics to maintain trust in predictions.",
            "Integrated churn probability outputs into BigQuery and Looker dashboards with ROI simulations, enabling leadership to identify at-risk employees and measure the cost savings of targeted retention campaigns.",
          ],
          image: require("@/assets/churn.png"),
          github: "https://github.com/hariravi-ds/employee-churn-pred-pipeline",
          showContent: false,
        },
        {
          title: "Real-Time Transaction Anomaly Detection System ",
          subtitle: "Feb 2025 - Mar 2025",
          shortDesc:
            "Engineered a Kafka–FastAPI streaming pipeline with ML models for fraud detection, delivering 300 ms alert latency and 0.91 precision in production.",
          desc: [
            "Designed a streaming alert pipeline with Kafka, FastAPI, and Redis, detecting anomalies within 300 ms and lowering false-positive rates by 10%.",

            "Trained isolation forest and autoencoder models in Python, reaching 0.91 precision on real-world transaction datasets.",

            "Deployed system on AWS ECS using CI/CD pipelines; partnered with DevOps engineers to enable versioned rollouts and automated drift monitoring.",
          ],
          image: require("@/assets/anomly_det.png"),
          // github: "https://github.com/hariravi-ds/employee-churn-pred-pipeline",
          showContent: false,
        },
        {
          title: "Low-Latency Recommendation Engine",
          subtitle: "July 2025 - Sep 2025",
          shortDesc:
            "Built a high-throughput C++ inference service using FAISS ANN search, achieving <10 ms latency and 50K QPS scalability for production workloads.",
          desc: [
            "Built a C++ inference service for candidate retrieval using FAISS-based approximate nearest neighbor search, achieving <10ms latency per request.",

            "Optimized cache-aware data structures and quantization methods, reducing memory footprint by 22% while sustaining recall within 1% of baseline.",

            "Benchmarked system at 50K QPS on simulated ad-serving traffic, validating scalability for production deployment.",
          ],
          image: require("@/assets/recommandation.png"),
          // github: "https://github.com/hariravi-ds/employee-churn-pred-pipeline",
          showContent: false,
        },
        {
          title: "AWS-Based Conversational AI for Banking Support",
          subtitle: "Feb 2025 - Apr 2025",
          shortDesc:
            "Built an AWS-powered banking support chatbot with custom ML inference, real-time user interaction, and automated fraud alerting.",
          desc: [
            "Developed a banking support chatbot using AWS Lex and Lambda, enabling users to handle tasks such as card activation, balance inquiries, and fraud alerts through natural language interaction.",

            "Integrated a custom-built machine learning model via Amazon ECR for handling low-confidence queries, improving accuracy and response quality in sensitive banking scenarios.",

            "Implemented secure, scalable infrastructure for real-time chatbot interactions, including logging with CloudWatch, user context storage with DynamoDB, and automated alerting via SNS for critical cases like fraud detection.",
          ],
          image: require("@/assets/chatbot.jpeg"),
          github: "https://github.com/DarsiniLakshmiah/BankingIT_ChatBot",
          showContent: false,
        },
        {
          title: "Traffic Flow Forecasting using CNN & Unsupervised Learning",
          subtitle: "Mar 2025 - Apr 2025",
          shortDesc:
            "Built a deep learning model to forecast traffic patterns using CNNs and unsupervised clustering on spatially mapped sensor data.",
          desc: [
            "Designed and implemented a spatiotemporal traffic forecasting system using CNNs on synthetic heatmap data generated from real-world sensor layouts.",

            "Mapped urban sensor networks into a 2D grid using MDS and built a supervised deep learning pipeline achieving low MSE (≈45) on future traffic prediction.",

            "Applied KMeans clustering and PCA for unsupervised pattern discovery, enabling comparative analysis of traffic states with interpretability across sequences.",
          ],
          image: require("@/assets/traffic.jpeg"),
          github:
            "https://github.com/hariravi-ds/Traffic-Flow-Forecasting-Using-Spatial-CNNs",
          showContent: false,
        },
        {
          title: "Current Asthma Prevalence",
          subtitle: "Nov 2024 - Dec 2024",
          shortDesc: "Assessed the current asthma prevalence across the US",
          desc: [
            "Analyzed a large-scale dataset (241k rows, 22 columns) sourced from CDC PLACES, identifying key patterns using exploratory data analysis (EDA) and visualizations, including U.S. choropleth maps, residual plots, and Q-Q plots to validate model assumptions and assess residual normality.",

            "Conducted advanced feature engineering techniques, including cyclic encoding for spatial features (latitude/longitude), target encoding, and handling multicollinearity using Ridge Regression. Improved target variable distribution through log transformation and Winsorization to reduce skewness and outliers.",

            "Developed and optimized predictive models using Linear Regression, Ridge Regression, Support Vector Regression (SVR), and Gaussian Process Regression (GPR), achieving up to 86% R² in SVR and 81% R² in GPR for predicting asthma prevalence.",
          ],
          image: require("@/assets/asthma.jpg"),
          github: "https://github.com/hariravi-ds/asthma_prevalance ",
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
          desc: [
            "Developed end-to-end pipelines for data preprocessing, including feature engineering, outlier detection, and class imbalance handling using advanced resampling techniques such as SMOTE and Tomek Links to optimize model performance.",

            "Designed and implemented machine learning models, including Logistic Regression, Random Forest, and Neural Networks, achieving a 25% improvement in fraud detection recall through hyperparameter tuning and ensemble modeling.",

            "Created interactive visualizations using Matplotlib and Seaborn to interpret data trends and model performance metrics, including ROC-AUC and Precision-Recall curves, enabling actionable insights for fraud detection strategies.",
          ],
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
          desc: [
            "Developed statistical and machine learning models, including linear regression, clustering, and classification trees, to analyze relationships between vehicle attributes and CO2 emissions from a dataset of 40,000+ records.",
            "Implemented feature selection techniques like exhaustive methods and VIF analysis to identify key predictors of vehicle emissions, optimizing model performance and interpretability.",
            "Preprocessed high-dimensional data by handling missing values, encoding categorical variables, and removing irrelevant features, ensuring a robust pipeline for focused analysis on diesel and petrol vehicles.",
          ],
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
          title: "Wildfire Data Analysis",
          subtitle: "Feb 2025 - Apr 2025",
          shortDesc:
            "Analyzed the multifaceted impact of California wildfires using Tableau, combining structural, financial, and air quality data to inform disaster awareness and prevention strategies.",
          desc: [
            "Designed a comprehensive data visualization dashboard in Tableau to analyze the impact of California wildfires using multi-source datasets on structural damage, financial loss, air quality, and casualties.",
            "Integrated EPA air quality data (2000–2023) to examine the health and environmental effects of wildfires, identifying pollutant spikes and high-risk regions.",
            "Extended the analysis to a national scale, evaluating total disaster-related deaths and financial costs to contextualize California’s wildfire crisis within broader U.S. disaster trends.",
          ],
          image: require("@/assets/cal_fire.jpeg"),
          // github:
          //   "https://github.com/hariravi-ds/Traffic-Flow-Forecasting-Using-Spatial-CNNs",
          showContent: false,
        },
        {
          title: "Healthcare Data Management System",
          subtitle: "Nov 2024 - Dec 2025",
          shortDesc:
            "Comparative Analysis of SQL and MongoDB for Efficient Healthcare Data Management",
          desc: [
            "Conducted a comparative analysis of SQL and MongoDB for managing large healthcare datasets, including patient records and appointment data, by simulating real-world scenarios with 100,000+ records",
            "Demonstrated SQL's superiority in transactional operations and data integrity, while highlighting MongoDB's scalability and flexibility in handling semi-structured data, providing actionable insights for hybrid database adoption",
            "Proposed a hybrid database model leveraging SQL for structured data and MongoDB for dynamic datasets, ensuring adaptability for evolving healthcare workflows",
          ],
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
          desc: [
            "Spearheaded the development of a predictive model with 20,000+ observations, employing statistical testing, feature selection, hyperparameter tuning, and cross-validation to boost forecasting accuracy.",
            "Performed advanced exploratory data analysis in R, applying techniques such as data normalization, outlier detection, and multicollinearity analysis, followed by linear regression to uncover key trends.",
            "Designed and developed 5 interactive dashboards in Power BI, utilizing DAX functions and custom visualizations to transform complex data into actionable insights, ensuring interpretability for analysis. ",
          ],
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
          desc: [
            "Led a team of 4 members to design an IBM-supported heart disease prediction system using IBM Cognos, creating an interactive dashboard to visualize patient data and identify high-risk individuals.",
            "Performed data preprocessing in Python, including data cleaning, transformation, and exploratory data analysis on 10,000+ patient records, ensuring high-quality inputs for accurate model training. ",
            "Optimized machine learning models, including Random Forest and Decision Tree classifiers, improving prediction accuracy to 95.18%, and coordinated team efforts to meet project milestones. ",
          ],
          image: require("@/assets/heart.jpg"),
          github: "https://github.com/hariravi-ds/heart_disease_pred",
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
  mounted() {
    this.checkScrollButtons();
    this.$refs.scrollContainer.addEventListener(
      "scroll",
      this.checkScrollButtons
    );
  },
  methods: {
    toggleContent(ind, val) {
      this.projects[ind].showContent = val;
    },
    openDialog(index) {
      this.selectedProject = this.projects[index];
      this.dialogVisible = true;
    },
    scrollLeft() {
      this.$refs.scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
    },
    scrollRight() {
      this.$refs.scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
    },
    checkScrollButtons() {
      const container = this.$refs.scrollContainer;
      this.showLeftButton = container.scrollLeft > 0;
      this.showRightButton =
        container.scrollWidth - container.scrollLeft >
        container.clientWidth + 10;
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}

.section-divider {
  width: 100px;
  height: 1px;
  border: none;
  background-color: #333;
  margin: 10px auto;
}

.subtitle {
  font-style: italic;
  color: #6c757d;
  text-align: center;
  margin-bottom: 20px;
}

.projects-scroll {
  display: flex;
  gap: 24px;
  padding: 20px 80px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  min-height: 330px;
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

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-btn {
  left: 10px;
}

.right-btn {
  right: 10px;
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

.dlg-bullets {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
  line-height: 1.7;
  font-size: 14px;
  color: rgba(15, 23, 42, 0.82);
}

.dlg-actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 18px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 24px;
  border: 1px solid rgba(15, 23, 42, 0.14);
  background: rgba(15, 23, 42, 0.06);
  color: rgba(15, 23, 42, 0.92);
  text-decoration: none;
  font-weight: 800;
  font-size: 13px;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

.pill:hover {
  transform: translateY(-1px);
  background: rgba(15, 23, 42, 0.08);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.1);
}
</style>
