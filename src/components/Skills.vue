<template>
  <div class="skills-section">
    <h1 class="section-title">Skill Set</h1>
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
      skillCategories: {
        "Programming and Scripting": [
          "Python",
          "R",
          "JavaScript",
          "C",
          "C++",
          "SQL",
          "Java",
        ],
        "Tools and Platforms": [
          "VSCode",
          "IBM Cognos",
          "Git",
          "Postman",
          "RStudio",
          "JIRA",
          "Jupyter Notebook",
        ],
        "Frontend Development": ["Vue.js", "HTML", "CSS", "React.js"],
        "Backend Development & Databases": ["Neo4j", "MongoDB", "SQL"],
        "Data Analysis and Visualization": [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Power BI",
          "Tableau",
          "Predictive Modeling",
          "Statistical Analysis",
          "Data Management",
          "Exploratory Data Analysis (EDA)",
          "Statistical Methods",
        ],
      },
    };
  },
};
</script>

<style scoped>
.skills-section {
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.section-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #ecf0f1;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.skill-category {
  margin: 20px;
  flex: 1 1 300px;
  background-color: #3b3f4a;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #6c757d;
}

.category-title {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #d1d8e0;
}

.skill-list {
  list-style-type: none;
  padding: 0;
}

.skill-item {
  padding: 5px 0;
  font-size: 1.1em;
  border-bottom: 1px solid #6c757d;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
}

.skill-item:hover {
  color: #f5f6fa;
  background-color: #a5a5a5;
}
</style>
