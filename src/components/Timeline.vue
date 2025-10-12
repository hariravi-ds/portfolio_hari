<template>
  <section class="timeline-section">
    <div class="timeline">
      <div
        v-for="(event, index) in localJourney"
        :key="index"
        class="timeline-item"
        v-intersect="() => activateItem(index)"
        :class="{ active: activeIndex === index }"
      >
        <div class="timeline-date">{{ event.date }}</div>

        <div class="timeline-icon-wrapper">
          <div class="timeline-point"></div>
          <div v-if="index !== journey.length - 1" class="timeline-line"></div>
        </div>

        <div class="timeline-content">
          <div v-if="event.logo" class="company-logo">
            <img :src="event.logo" :alt="event.title" />
          </div>

          <div v-if="event.experience" class="subtitle">
            {{ event.experience }}
          </div>
          <div class="title">{{ event.title }}</div>
          <div class="subtitle">{{ event.place }}</div>
          <div v-if="event.gpa" class="description">{{ event.gpa }}</div>

          <div v-if="event.tech_stack" class="tech-stack">
            <el-icon class="tech-icon"><Cpu /></el-icon>
            <span class="tech-label">Tech Stack:</span>
            <span class="tech-list">{{ event.tech_stack.join(" • ") }}</span>
          </div>

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
  </section>
</template>

<script>
export default {
  name: "TheTimeline",
  props: ["journey", "type"],
  data() {
    return {
      activeIndex: null,
      localJourney: [],
    };
  },
  directives: {
    intersect: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) binding.value();
          },
          { threshold: 0.4 }
        );
        observer.observe(el);
      },
    },
  },
  mounted() {
    let { type, journey } = this;
    if (type != "education") {
      let { journey } = this;
      const months = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      };
      let updatedJourney = journey.map((exp) => {
        let [startDate, endDate] = exp.date.split(" - ");
        endDate == "Present" ? (endDate = new Date()) : endDate;
        let [endMonth, endYear] = [0, 0];
        if (typeof endDate == "object") {
          endMonth = endDate.getMonth();
          endYear = endDate.getFullYear();
        } else {
          [endMonth, endYear] = endDate.split(" ");
          endMonth = months[endMonth];
        }
        let [startMonth, startYear] = startDate.split(" ");
        let duration =
          (Number(endYear) - Number(startYear)) * 12 +
          (endMonth - months[startMonth]);
        duration =
          duration > 12
            ? Math.floor(duration / 12) + "+ years"
            : duration + " months";
        return { ...exp, experience: duration };
      });
      this.localJourney = updatedJourney;
    } else {
      this.localJourney = journey;
    }
  },
  methods: {
    activateItem(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
.timeline-section {
  /* background: radial-gradient(circle at center, #1c1f29, #0f1118); */
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.timeline-header {
  text-align: center;
  margin-bottom: 40px;
}

.timeline-header h2 {
  font-size: 28px;
  color: #e8eaed;
  margin-bottom: 8px;
}

.timeline-intro {
  font-size: 14px;
  color: #9aa0a6;
  font-style: italic;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 85%;
  margin: 0 auto;
}

.timeline-date {
  width: 12%;
  font-size: 12px;
  color: #9aa0a6;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 12px;
}

.timeline-icon-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
}

.timeline-point {
  width: 12px;
  height: 12px;
  background-color: #1abc9c;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(26, 188, 156, 0.7);
  animation: pulse 2s infinite;
}

.timeline-line {
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(to bottom, #1abc9c, rgba(26, 188, 156, 0.1));
  margin-top: 4px;
}

.timeline-item {
  display: flex;
  flex-direction: row;
  gap: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content {
  flex: 1;
  background-color: #2f3441;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -40%;
  width: 180%;
  height: 180%;
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(26, 188, 156, 0.08),
    transparent 50%
  );
  transition: background 0.3s;
}

.timeline-content:hover::before {
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(26, 188, 156, 0.15),
    transparent 50%
  );
}

.timeline-item:hover {
  transform: translateY(-6px);
}

.timeline-item.active .timeline-content {
  border: 1px solid #1abc9c;
  box-shadow: 0 0 12px rgba(26, 188, 156, 0.4);
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #e8eaed;
}

.subtitle {
  font-size: 14px;
  color: #a5aab0;
  margin-bottom: 6px;
}

.description-item {
  text-align: left;
}

.description-key {
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
  margin-top: 8px;
}

.description-value {
  font-weight: 300;
  color: #d0d2d6;
  line-height: 1.6;
}

.award {
  font-size: 12px;
  color: #1abc9c;
  font-style: italic;
  margin-top: 10px;
}

.tech-stack {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 10px 0;
}

.tech-icon {
  font-size: 18px;
  color: #1abc9c;
}

.tech-label {
  font-weight: 500;
  font-size: 14px;
  color: #cfd2d6;
}

.tech-list {
  font-size: 14px;
  color: #e1e4e7;
}

.company-logo {
  position: absolute;
  top: 10px;
  right: 16px;
  opacity: 0.1;
}

.company-logo img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}

.timeline-item {
  opacity: 0.5;
  transform: translateY(10px);
  transition: all 0.6s ease-out;
}

.timeline-item.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
