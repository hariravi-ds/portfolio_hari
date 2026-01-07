<template>
  <section class="journey-section" id="research">
    <!-- Centered section header (fixes alignment) -->
    <div class="section-header">
      <div class="section-title">Featured Research</div>
      <hr class="section-hr" />
      <div class="section-subtitle">
        A spotlight on one research project that reflects how I think and build
        — rigorous analysis, clear artifacts, and practical insights.
      </div>
    </div>

    <!-- Featured card -->
    <div class="research-card">
      <div class="research-top">
        <div class="research-title-wrap">
          <div class="research-title">
            Hallucination Dynamics in Transformer LLMs
          </div>
          <div class="research-one-liner">
            Modeling generation as a dynamical system to study stability,
            tipping points, and attractor-like behavior.
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <ul class="bullets">
        <li>
          Modeled generations as symbolic dynamical systems (A=neutral,
          B=correct, D=incorrect) using TF-IDF + cosine clustering and a
          truth-aware classifier; quantified time-to-settle into truthful vs
          false attractors across prompts/temperatures.
        </li>
        <li>
          Built a Markov transition + stationary distribution pipeline and
          computed spectral gaps + entropy rates to characterize stability vs
          oscillation regimes and identify tipping points.
        </li>
        <li>
          Implemented toy single-head transformer variants (attention + FFN +
          LayerNorm) with using PyTorch temperature-controlled sampling to
          visualize embedding trajectories and demonstrate parameter-driven
          collapse into incorrect regimes.
        </li>
      </ul>

      <div class="label" style="margin-top: 18px">METHODS &amp; TOOLS</div>
      <div class="chip-row">
        <span v-for="(t, i) in visibleTools" :key="t + i" class="chip">{{
          t
        }}</span>

        <button
          v-if="tools.length > TOOL_LIMIT"
          class="link-btn"
          type="button"
          @click="toolsExpanded = !toolsExpanded"
        >
          {{
            toolsExpanded ? "Show less" : `+${tools.length - TOOL_LIMIT} more`
          }}
        </button>
      </div>

      <div class="cta-row">
        <a
          v-if="links.writeup"
          :href="links.writeup"
          target="_blank"
          class="cta-pill"
        >
          <span class="cta-icon">📝</span> Writeup
          <span class="cta-ext">↗</span>
        </a>
        <a
          v-if="links.github"
          :href="links.github"
          target="_blank"
          class="cta-pill"
        >
          <span class="cta-icon">🐙</span> GitHub <span class="cta-ext">↗</span>
        </a>
      </div>
    </div>

    <!-- Details modal (Element Plus) -->
    <el-dialog
      v-model="dialogVisible"
      :show-close="false"
      width="860"
      class="research-dialog"
    >
      <template #header="{ close }">
        <div class="dialog-header">
          <div class="dialog-title">
            Hallucination Dynamics in Transformer LLMs
            <div class="dialog-subtitle">
              Modeling generation as a dynamical system; stability, tipping
              points, and attractors.
            </div>
          </div>

          <button
            class="dialog-close"
            type="button"
            @click="close"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </template>

      <div class="dialog-section">
        <div class="dialog-section-title">Description</div>
        <div class="dialog-divider"></div>

        <ul class="dialog-bullets">
          <li>
            Modeled LLM generations as symbolic dynamical systems (A/B/D) using
            TF-IDF + cosine clustering and a truth-aware classifier; measured
            time-to-truth vs time-to-false attractors across settings.
          </li>
          <li>
            Built a logistic-map → symbol-sequence pipeline using Markov
            transition matrices, stationary distributions, spectral gaps, and
            entropy rates to characterize attractor behavior and tipping points.
          </li>
          <li>
            Implemented toy transformer variants (attention + FFN + LayerNorm)
            to visualize embedding-space trajectories and detect
            cycles/attractors under temperature-controlled sampling.
          </li>
          <li>
            Analyzed representation geometry by extracting GPT-2 embeddings,
            computing cosine similarity/dot products, and projecting via PCA;
            showed how false tokens can be near true anchors in embedding space.
          </li>
          <li>
            Applied network-science analysis (layer-wise token similarity
            graphs) and measured connectivity metrics (e.g., component size,
            susceptibility) to observe transitions in representation structure.
          </li>
        </ul>

        <div class="dialog-section-title" style="margin-top: 18px">Links</div>
        <div class="dialog-divider"></div>

        <div class="dialog-links">
          <a
            v-if="links.writeup"
            :href="links.writeup"
            target="_blank"
            class="cta-pill"
          >
            <span class="cta-icon">📝</span> Writeup
            <span class="cta-ext">↗</span>
          </a>
          <a
            v-if="links.github"
            :href="links.github"
            target="_blank"
            class="cta-pill"
          >
            <span class="cta-icon">🐙</span> GitHub
            <span class="cta-ext">↗</span>
          </a>
          <a
            v-if="links.slides"
            :href="links.slides"
            target="_blank"
            class="cta-pill"
          >
            <span class="cta-icon">📌</span> Slides
            <span class="cta-ext">↗</span>
          </a>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  name: "FeaturedResearch",
  data() {
    return {
      dialogVisible: false,
      toolsExpanded: false,
      TOOL_LIMIT: 10,

      tools: [
        "Transformers",
        "GPT-2",
        "Attention",
        "LayerNorm",
        "TF-IDF",
        "Cosine Similarity",
        "Markov Chains",
        "Entropy Rate",
        "Spectral Gap",
        "PCA",
        "Network Analysis",
        "Stationary Distributions",
        "Token Similarity Graphs",
      ],

      // Replace with your real links (or set to "" to hide)
      links: {
        writeup: "", // "https://..."
        github: "", // "https://github.com/..."
        slides: "", // "https://..."
      },
    };
  },
  computed: {
    visibleTools() {
      if (this.toolsExpanded) return this.tools;
      return this.tools.slice(0, this.TOOL_LIMIT);
    },
  },
};
</script>

<style scoped>
/* Centered section header (fixes “not centered” issue) */
.section-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 22px;
}

.section-hr {
  width: 110px;
  height: 1px;
  border: none;
  background-color: rgba(0, 0, 0, 0.35);
  margin: 10px 0 6px;
}

.research-card {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 14px;
  background: #1f2a35;
  border: 2px solid rgba(52, 211, 153, 0.55);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
  padding: 18px 18px 16px;
}

.research-top {
  display: flex;
  justify-content: center;
  gap: 14px;
}

.research-title {
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  line-height: 1.25;
}

.research-one-liner {
  margin-top: 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.6;
}

.divider {
  margin: 14px 0 12px;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
}

/* “View details” pill button */
.pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(52, 211, 153, 0.45);
  background: rgba(52, 211, 153, 0.08);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
}

.pill-btn:hover {
  background: rgba(52, 211, 153, 0.14);
  border-color: rgba(52, 211, 153, 0.75);
  transform: translateY(-1px);
}

.pill-icon {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
}

/* Labels + bullets */
.label {
  color: rgba(52, 211, 153, 0.95);
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.06em;
}

.bullets {
  margin: 12px 0 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
  font-size: 14px;
  text-align: left;
}

.bullets li {
  margin: 10px 0;
}

/* Chips (same style as timeline) */
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  align-items: center;
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

.link-btn {
  background: transparent;
  border: none;
  padding: 0 4px;
  cursor: pointer;
  font-size: 12px;
  color: rgba(52, 211, 153, 0.95);
  text-decoration: underline;
  font-weight: 700;
}

.link-btn:hover {
  color: rgba(52, 211, 153, 1);
}

/* CTA pills row */
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.cta-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
}

.cta-pill:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.22);
}

.cta-icon {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.22);
}

.cta-ext {
  opacity: 0.75;
}

/* Dialog styles */
.research-dialog :deep(.el-dialog) {
  border-radius: 14px;
}

.dialog-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-right: 6px;
}

.dialog-title {
  font-weight: 900;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.82);
}

.dialog-subtitle {
  margin-top: 6px;
  font-weight: 500;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.55);
  line-height: 1.55;
}

.dialog-close {
  border: none;
  background: rgba(0, 0, 0, 0.06);
  width: 38px;
  height: 38px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
}

.dialog-close:hover {
  background: rgba(0, 0, 0, 0.1);
}

.dialog-section {
  padding-top: 6px;
}

.dialog-section-title {
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.55);
}

.dialog-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 10px 0 14px;
}

.dialog-bullets {
  margin: 0;
  padding-left: 18px;
  color: rgba(0, 0, 0, 0.72);
  line-height: 1.75;
  font-size: 14px;
}

.dialog-bullets li {
  margin: 10px 0;
}

.dialog-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Responsive */
@media (max-width: 920px) {
  .research-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .pill-btn {
    align-self: flex-start;
  }

  .research-card {
    padding: 16px;
  }
}
</style>
