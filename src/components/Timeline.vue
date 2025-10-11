<template>
  <div class="timeline">
    <div v-for="(event, index) in journey" :key="index" class="timeline-item">
      <div class="timeline-date">{{ event.date }}</div>

      <div class="timeline-icon-wrapper">
        <div class="timeline-point"></div>
        <div v-if="index !== journey.length - 1" class="timeline-line"></div>
      </div>

      <div class="timeline-content">
        <!-- Experience Title -->
        <div v-if="event.experience" class="subtitle">
          {{ event.experience }}
        </div>
        <div class="title">{{ event.title }}</div>
        <div class="subtitle">{{ event.place }}</div>
        <div v-if="event.gpa" class="description">{{ event.gpa }}</div>

        <!-- Tech Stack -->
        <div v-if="event.tech_stack" class="tech-stack">
          <el-icon class="tech-icon"><Cpu /></el-icon>
          <span class="tech-label">Tech Stack:</span>
          <span class="tech-list">{{ event.tech_stack.join(" • ") }}</span>
        </div>

        <!-- Description Items -->
        <div v-if="event.description">
          <div
            v-for="(desc, label) in event.description"
            :key="label"
            class="description-item"
          >
            <div class="description-key">{{ label }}</div>
            <div class="description-value">{{ desc }}</div>
          </div>
        </div>

        <!-- Awards -->
        <div v-if="event.award" class="award">{{ event.award }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTimeline",
  props: ["journey"],
};
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 24px 12px;
  margin: 0 auto;
  width: 85%;
}

.timeline-date {
  width: 10%;
  font-size: 12px;
  color: #9aa0a6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-icon-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px;
  margin-right: 8px;
  width: 20px;
}

.timeline-point {
  width: 10px;
  height: 10px;
  background-color: #1abc9c;
  border: 2px solid #1abc9c;
  border-radius: 50%;
  z-index: 1;
}

.timeline-line {
  width: 2px;
  flex-grow: 1;
  background-color: #1abc9c;
  margin-top: 8px;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding: 16px;
  background-color: #2f3441;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #444b55;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.timeline-content:hover {
  background-color: #3a4152;
  transform: translateY(-4px);
}

/* Typography */
.title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #e8eaed;
  font-weight: 600;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 8px;
  color: #a5aab0;
}

.description {
  font-size: 14px;
  color: #d1d5db;
}

.description-item {
  text-align: left;
  margin-bottom: 12px;
}

.description-key {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 4px;
  color: #ffffff;
}

.description-value {
  font-weight: 300;
  line-height: 1.5;
  color: #dcdcdc;
}

.tech-stack {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px 10px;
  padding: 8px 0;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin: 10px 0;
}

.tech-icon {
  font-size: 18px;
  color: #1abc9c;
  opacity: 0.9;
}

.tech-label {
  font-weight: 500;
  font-size: 14px;
  color: #cfd2d6;
}

.tech-list {
  font-weight: 400;
  font-size: 14px;
  color: #dfe2e5;
  opacity: 0.9;
}

/* Awards */
.award {
  font-size: 12px;
  margin-top: 8px;
  color: #1abc9c;
  font-style: italic;
}
</style>
