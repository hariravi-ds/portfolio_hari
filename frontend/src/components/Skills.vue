<template>
  <div class="journey-section">
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
        <div class="category-title">{{ category }}</div>
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
        "LLM / GenAI Engineering": [
          "OpenAI API",
          "Hugging Face (Transformers, Hub)",
          "LangChain",
          "Embeddings",
          "Pinecone",
          "ChromaDB",
        ],
        "RAG / Retrieval": [
          "Chunking & Context Assembly",
          "Vector Search",
          "Lexical Search (BM25)",
          "Hybrid Search",
          "Reranking",
          "RAG Evaluation",
        ],
        "LLM Training & Adaptation": [
          "Supervised Fine-Tuning (SFT)",
          "Instruction Tuning",
          "PEFT",
          "LoRA",
          "QLoRA",
        ],
        "Reinforcement Learning": [
          "RL Basics (MDP, Policy/Value)",
          "Q-Learning",
          "Policy Gradients",
          "PPO",
          "Gymnasium",
        ],
        "ML / AI": [
          "Scikit-learn",
          "TensorFlow",
          "Keras",
          "Tree Models",
          "SHAP",
          "Clustering",
          "PCA",
        ],
        "Backend & APIs": ["FastAPI", "Django", "Spring Boot", "REST APIs"],
        "Data Engineering & Orchestration": [
          "SQL/ETL",
          "Apache Airflow",
          "AWS Glue",
        ],
        "Cloud & Infra": [
          "AWS (ECS, Lambda, S3, CloudWatch, SNS)",
          "GCP",
          "Kubernetes",
        ],
        "Databases & Caches": [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "BigQuery",
          "Neo4j",
        ],
        "Containers & CI/CD": [
          "Docker",
          "GitHub Actions",
          "Bitbucket Pipelines",
        ],
        "Data Analysis / BI": [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Tableau",
          "Power BI",
          "Looker",
        ],
        "UI / Web": ["React", "Vue.js", "HTML", "CSS"],
        "Streaming & Messaging": ["Apache Kafka"],
        Tools: [
          "Git",
          "JIRA",
          "Postman",
          "Jupyter Notebook",
          "VS Code",
          "RStudio",
          "Excel",
        ],
        "Programming Languages": [
          "Python",
          "SQL",
          "JavaScript",
          "Java",
          "C++",
          "R",
        ],
      },
    };
  },
};
</script>

<style scoped>
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
  font-size: 16px;
  font-weight: 1000;
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
  font-size: 14px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.skill-pill:hover {
  background: #6c757d;
  transform: translateY(-2px);
}
</style>
