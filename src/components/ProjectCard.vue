<template>
  <div
    class="project-card"
    :style="{ backgroundImage: 'url(' + project.image + ')' }"
    @click="openPopover"
  >
    <el-popover
      trigger="click"
      v-model="popoverVisible"
      width="300"
      :content="project.description"
    >
      <div class="project-info">
        <h2 class="project-title">{{ project.title }}</h2>
        <p v-if="project.showContent" class="project-description">
          {{ project.shortDesc }}
        </p>
      </div>
      <template #reference>
        <div class="project-title">{{ project.title }}</div>
      </template>
    </el-popover>
  </div>
</template>

<script>
import { ElPopover } from "element-plus";

export default {
  name: "ProjectCard",
  components: {
    ElPopover,
  },
  props: {
    project: Object,
  },
  data() {
    return {
      popoverVisible: false,
    };
  },
  methods: {
    openPopover() {
      this.popoverVisible = !this.popoverVisible;
    },
  },
};
</script>

<style scoped>
.project-card {
  background-color: #34495e;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 300px;
  background-size: cover;
  background-position: center;
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
</style>
