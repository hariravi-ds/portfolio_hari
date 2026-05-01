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
"Programming Languages": [
  "Python",
  "JavaScript",
  "Java",
  "SQL",
  "R",
  "C++",
],

"Frameworks & Libraries": [
  "FastAPI",
  "Django",
  "Flask",
  "React.js",
  "Redux",
  "Vue.js",
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "Model Context Protocol (MCP)",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "scikit-learn",
  "XGBoost",
  "NumPy",
  "Pandas",
  "REST API",
],

"AI / Agentic Systems": [
  "Large Language Models (LLM)",
  "Generative AI",
  "Retrieval-Augmented Generation (RAG)",
  "Graph RAG",
  "Fine-Tuning",
  "Parameter-Efficient Fine-Tuning (PEFT/LoRA)",
  "Vector Embeddings",
  "Semantic Caching",
  "NLP",
  "Machine Learning",
  "Deep Learning",
  "Reinforcement Learning",
  "Computer Vision",
],

"Prompt Engineering": [
  "Chain-of-Thought (CoT)",
  "ReAct Pattern",
  "Prompt Chaining",
  "Prompt Versioning",
  "Pydantic",
],

"LLM Evaluation": [
  "RAGAS",
  "BLEU/ROUGE",
  "Braintrust",
  "LLM-as-judge",
  "Human Evaluation",
  "Context Precision",
  "Answer Relevance",
  "Langfuse",
],

"Data Engineering & Databases": [
  "Apache Kafka",
  "Apache Spark",
  "RabbitMQ",
  "Airflow",
  "ETL",
  "PostgreSQL",
  "Amazon RDS",
  "MongoDB",
  "Neo4j",
  "Redis",
  "Pinecone",
  "FAISS",
  "MSSQL",
],

"Cloud & MLOps": [
  "Amazon Web Services (AWS)",
  "AWS Bedrock",
  "Microsoft Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "CI/CD",
  "MLOps",
  "Datadog",
  "Linux / RHEL",
  "HPC Clusters",
  "GPU-Accelerated Training (NVIDIA CUDA)",
  "Security Best Practices",
],

"Tools": [
  "Git",
  "JIRA",
  "Postman",
  "Jupyter Notebook",
  "VS Code",
  "RStudio",
  "Excel",
],

"Certifications": [
  "Red Hat System Administration I (RH124) v9.3",
  "Red Hat System Administration II (RH134) v9.3",
  "Red Hat Enterprise Linux Automation with Ansible (RH294) v9.0",
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
