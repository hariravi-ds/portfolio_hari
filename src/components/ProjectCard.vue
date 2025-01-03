<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-image" />
    <div class="project-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="project-links">
        <a :href="link" target="_blank" aria-label="View Project">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.project-info {
  padding: 16px;
  text-align: center;
  color: white;
}

.project-info h3 {
  margin: 10px 0;
  font-size: 1.2rem;
}

.project-info p {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 15px;
}

.project-links a {
  color: #1e90ff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.project-links a:hover {
  color: #00bfff;
}
</style>
