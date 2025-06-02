<template>
  <div
    class="skills-section image-card"
    :style="{ backgroundImage: 'url(' + img + ')' }"
  >
    <div class="section-title">Skills</div>
    <hr class="underline" />
    <div class="italic text-gray-500 mb-6">
      A concise overview of the key technical skills and tools I specialize in.
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(skills, category) in skillCategories"
        :key="category"
        class="bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md"
      >
        <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ category }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in skills" :key="skill" class="skill-badge">
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
          "AWS",
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
.skill-badge {
  @apply bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition;
}
</style>
