<template>
  <div
    class="skills-section image-card"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  >
    <div class="section-title">Skills</div>
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
      A concise overview of the key technical skills and tools I specialize in.
    </div>
    <div class="skills-container">
      <div
        v-for="(skills, category) in skillCategories"
        :key="category"
        class="skill-category"
      >
        <h2 class="category-title">{{ category }}</h2>
        <ul class="skill-list">
          <li v-for="skill in skills" :key="skill" class="skill-item">
            {{ skill }}
          </li>
        </ul>
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
        "Programming Languages": ["C", "C++", "Python", "SQL", "R", "Java"],
        "Web Technologies": ["HTML", "CSS", "JavaScript", "React", "Vue"],
        Databases: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j"],
        "Data Analysis & Visualization": [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Tableau",
          "Power BI",
          "IBM Cognos",
          "Statistical Analysis",
          "Exploratory Data Analysis (EDA)",
        ],
        "Machine Learning": [
          "Scikit-learn",
          "Feature Engineering",
          "Regression",
          "Classification",
          "Clustering",
          "TensorFlow",
          "Hyperparameter Tuning",
        ],
        Tools: [
          "Git",
          "JIRA",
          "Postman",
          "Jupyter Notebook",
          "VSCode",
          "RStudio",
          "Microsoft Excel",
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
  color: #ecf0f1;
}

.section-title {
  text-align: center;
  font-size: 35px;
  color: #212529;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 24px;
}

.skill-category {
  margin: 20px;
  flex: 1 1 300px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.category-title {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: black;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
  padding: 0;
}

.skill-item {
  border: 1px solid;
  border-radius: 12px;
  padding: 5px 0;
  font-size: 1.1em;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  background: #3b3f4a;
}

.skill-item:hover {
  color: #f5f6fa;
  background-color: #a5a5a5;
}
</style>
