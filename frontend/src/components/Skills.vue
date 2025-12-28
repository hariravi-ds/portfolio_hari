<template>
  <div
    class="skills-section image-card"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  >
    <div class="section-title">Skills</div>
    <hr class="divider" />
    <div class="section-subtitle">
      A concise overview of the key technical skills and tools I specialize in.
    </div>
    <div class="skills-container">
      <div
        v-for="(skills, category) in skillCategories"
        :key="category"
        class="skill-category"
      >
        <h2 class="category-title">{{ category }}</h2>
        <div class="skill-list">
          <span v-for="skill in skills" :key="skill" class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      img: require("@/assets/subtle.jpeg"),
      skillCategories: {
        "Programming Languages": ["Python", "C++", "Java", "SQL", "C", "R"],
        Frontend: ["JavaScript", "React", "Vue.js", "HTML", "CSS"],
        "Backend & APIs": ["Django", "FastAPI", "Spring Boot", "REST"],
        "Databases & Caches": [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Neo4j",
          "Redis",
          "BigQuery",
        ],
        "Streaming & Messaging": ["Apache Kafka"],
        "LLM / RAG / Vector Search": [
          "LangChain",
          "FAISS",
          "OpenAI API",
          "RAG",
        ],
        "ML / AI": [
          "Scikit-learn",
          "TensorFlow",
          "Keras",
          "Tree Models",
          "SHAP",
          "Regression",
          "Classification",
          "Clustering",
          "PCA",
          "Autoencoders",
        ],
        "Data Engineering & Orchestration": [
          "SQL/ETL",
          "Apache Airflow",
          "AWS Glue",
        ],
        "Cloud & Infra": [
          "AWS (ECS, Lambda, S3, CloudWatch, SNS)",
          "GCP (BigQuery)",
        ],
        "Containers & CI/CD": [
          "Docker",
          "Bitbucket Pipelines",
          "GitHub Actions",
        ],
        "Data Visualization & BI": [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Tableau",
          "Power BI",
          "Looker",
          "IBM Cognos",
        ],
        Tools: [
          "Git",
          "JIRA",
          "Postman",
          "Jupyter Notebook",
          "VS Code",
          "RStudio",
          "Excel",
        ],
      },
    };
  },
};
</script>

<style scoped>
.skills-section {
  padding: 20px;
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  gap: 20px;
}

.skill-category {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 300px;
}

.category-title {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #212529;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  background: #2f3241;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.95em;
  transition: background 0.3s ease, transform 0.2s ease;
}

.skill-pill:hover {
  background: #6c757d;
  transform: translateY(-2px);
}
</style>
