<template>
  <div class="timeline">
    <div v-for="(event, index) in journey" :key="index" class="timeline-item">
      <div class="timeline-date">{{ event.date }}</div>
      <div class="timeline-icon-wrapper">
        <div class="timeline-point"></div>
        <div v-if="index !== journey.length - 1" class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div v-if="event.experience" class="subtitle">
          {{ event.experience }}
        </div>
        <div class="title">{{ event.title }}</div>
        <div class="subtitle">{{ event.place }}</div>
        <div v-if="event.gpa" class="description">{{ event.gpa }}</div>
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
  color: #6c757d;
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
  background-color: teal;
  border: 2px solid teal;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.timeline-line {
  width: 2px;
  flex-grow: 1;
  background-color: teal;
  margin-top: 8px;
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #d1d8e0;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 8px;
  color: #a5a5a5;
}

.description {
  font-size: 14px;
  color: #ecf0f1;
}

.award {
  font-size: 12px;
  margin-top: 8px;
  color: #1abc9c;
  font-style: italic;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding: 16px;
  background-color: #3b3f4a;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #6c757d;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.timeline-content:hover {
  background-color: #4b566e;
  transform: translateY(-5px);
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
</style>
