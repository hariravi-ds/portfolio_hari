<template>
  <section class="timeline-section">
    <div class="timeline">
      <div v-for="(item, idx) in journey" :key="idx" class="timeline-row">
        <div class="date-col">
          <div class="date-text">{{ item.date }}</div>
        </div>

        <div class="line-col">
          <div class="dot" />
          <div v-if="idx !== journey.length - 1" class="vline" />
        </div>

        <div class="card-col">
          <div class="card">
            <div class="card-inner">
              <div
                v-if="type === 'experience' && getDurationLabel(item.date)"
                class="duration"
              >
                {{ getDurationLabel(item.date) }}
              </div>

              <div class="role-title">{{ item.title }}</div>
              <div class="role-place">{{ item.place }}</div>

              <div v-if="type === 'education'" class="edu-meta">
                <div v-if="item.gpa" class="edu-line">
                  <span class="muted">GPA:</span> {{ item.gpa }}
                </div>
                <div v-if="item.award" class="edu-line">
                  <span class="muted">Award:</span> {{ item.award }}
                </div>
              </div>

              <div
                v-if="type === 'experience' && item.tech_stack?.length"
                class="tech-wrap"
              >
                <div class="tech-label">Tech Stack:</div>

                <div class="tech-chips">
                  <span
                    v-for="(t, i) in visibleTech(item, idx)"
                    :key="t + i"
                    class="chip"
                    >{{ t }}</span
                  >

                  <button
                    v-if="item.tech_stack.length > TECH_LIMIT"
                    class="link-btn"
                    type="button"
                    @click="toggleTech(idx)"
                  >
                    {{
                      techExpanded[idx]
                        ? "Show less"
                        : `+${item.tech_stack.length - TECH_LIMIT} more`
                    }}
                  </button>
                </div>
              </div>

              <div
                v-if="type === 'experience' && item.description"
                class="desc-wrap"
              >
                <div
                  v-for="[k, v] in visibleDescEntries(item, idx)"
                  :key="k"
                  class="desc-item"
                >
                  <div class="desc-title">{{ k }}</div>
                  <div class="desc-text">{{ v }}</div>
                </div>

                <button
                  v-if="descEntries(item).length > DESC_LIMIT"
                  class="link-btn desc-toggle"
                  type="button"
                  @click="toggleDesc(idx)"
                >
                  {{
                    descExpanded[idx]
                      ? "Show fewer highlights"
                      : `Show all highlights (${descEntries(item).length})`
                  }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};
export default {
  name: "TheTimeline",
  props: ["journey", "type"],
  data() {
    return {
      TECH_LIMIT: 10,
      DESC_LIMIT: 3,
      techExpanded: {},
      descExpanded: {},
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
  methods: {
    toggleTech(idx) {
      this.techExpanded = {
        ...this.techExpanded,
        [idx]: !this.techExpanded[idx],
      };
    },
    toggleDesc(idx) {
      this.descExpanded = {
        ...this.descExpanded,
        [idx]: !this.descExpanded[idx],
      };
    },

    visibleTech(item, idx) {
      const all = item.tech_stack || [];
      if (this.techExpanded[idx]) return all;
      return all.slice(0, this.TECH_LIMIT);
    },

    descEntries(item) {
      if (!item.description) return [];
      return Object.entries(item.description);
    },
    visibleDescEntries(item, idx) {
      const entries = this.descEntries(item);
      if (this.descExpanded[idx]) return entries;
      return entries.slice(0, this.DESC_LIMIT);
    },

    getDurationLabel(dateStr) {
      const { start, end } = this.parseRange(dateStr);
      if (!start) return null;

      const endDate = end || new Date();
      const months = this.monthDiff(start, endDate);

      if (months <= 0) return null;
      if (months === 1) return "1 month";
      if (months < 12) {
        return `${months} months`;
      } else {
        return `${parseInt(months / 12)}+ years`;
      }
    },

    parseRange(s) {
      if (!s || typeof s !== "string") return { start: null, end: null };
      const cleaned = s.replace("–", "-");
      const parts = cleaned.split(" - ").map((p) => p.trim());
      if (parts.length < 2)
        return { start: this.parseMonthYear(parts[0]), end: null };

      const start = this.parseMonthYear(parts[0]);
      const endText = parts[1].toLowerCase();

      if (endText.includes("present")) return { start, end: null };

      const endClean = parts[1].replace(/\(.*?\)/g, "").trim();
      const end = this.parseMonthYear(endClean);
      return { start, end };
    },

    parseMonthYear(text) {
      if (!text) return null;
      const m = text.trim().toLowerCase().split(/\s+/);
      if (m.length < 2) return null;

      const monthKey = m[0].replace(".", "");
      const year = parseInt(m[1], 10);
      if (!Number.isFinite(year)) return null;

      const month = MONTHS[monthKey];
      if (month === undefined) return null;

      return new Date(year, month, 1);
    },

    monthDiff(a, b) {
      const years = b.getFullYear() - a.getFullYear();
      const months = b.getMonth() - a.getMonth();
      return years * 12 + months + 1;
    },
  },
};
</script>

<style scoped>
.timeline {
  width: 100%;
  margin-top: 24px;
}

.timeline-row {
  display: grid;
  grid-template-columns: 150px 28px 1fr;
  gap: 18px;
  align-items: start;
  margin-bottom: 26px;
}

.date-col {
  padding-top: 18px;
  text-align: right;
}
.date-text {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}

.line-col {
  position: relative;
  display: flex;
  justify-content: center;
  align-self: stretch;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #34d399;
  margin-top: 20px;
  box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.15);
}
.vline {
  position: absolute;
  top: 38px;
  width: 2px;
  bottom: -26px;
  background: rgba(52, 211, 153, 0.35);
}

.card-col {
  width: 100%;
}
.card {
  border-radius: 14px;
  background: #1f2a35;
  border: 2px solid rgba(52, 211, 153, 0.55);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
}

.card-inner {
  padding: 18px 18px 16px 18px;
}

.duration {
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.62);
  margin-bottom: 6px;
}

.role-title {
  text-align: center;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  font-size: 16px;
}

.role-place {
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.62);
  margin-top: 8px;
  margin-bottom: 12px;
}

.edu-meta {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.edu-line {
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  margin-top: 6px;
}
.muted {
  color: rgba(255, 255, 255, 0.6);
}

.tech-wrap {
  margin-top: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.tech-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(52, 211, 153, 0.95);
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 10px;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.88);
  white-space: nowrap;
}

.desc-wrap {
  margin-top: 14px;
}

.desc-item {
  margin-top: 16px;
}

.desc-title {
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
  font-size: 14px;
  margin-bottom: 8px;
  text-align: left;
}

.desc-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
  text-align: left;
}

.link-btn {
  background: transparent;
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  font-size: 12px;
  color: rgba(52, 211, 153, 0.95);
  text-decoration: underline;
}
.link-btn:hover {
  color: rgba(52, 211, 153, 1);
}
.desc-toggle {
  font-weight: 700;
  margin-top: 16px;
  margin-left: 0;
}

@media (max-width: 920px) {
  .timeline-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .date-col {
    text-align: left;
    padding-top: 0;
  }
  .line-col {
    display: none;
  }
  .card-inner {
    max-width: 100%;
  }
}
</style>
