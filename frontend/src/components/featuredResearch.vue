<template>
  <div class="journey-section">
    <div class="section-title">Featured Research</div>
    <hr
      style="
        width: 100px;
        height: 1px;
        border: none;
        color: #333;
        background-color: #333;
      "
    />
    <div class="section-subtitle">
      A spotlight on one research project that reflects how I think and build —
      rigorous analysis, clear artifacts, and practical insights.
    </div>
    <Timeline :journey="journey" type="research" />
  </div>
</template>

<script>
import Timeline from "./timeline.vue";
export default {
  name: "FeaturedResearch",
  components: { Timeline },
  data() {
    return {
      journey: [
        {
          date: "Sep 2025 - Nov 2025",
          title: "Hallucination Dynamics in Transformer LLMs",
          desc: "Modeling generation as a dynamical system to study stability, tipping points, and attractor-like behavior.",
          description: {
            "Truth/faithfulness dynamics modeling":
              "Built a pipeline that maps LLM outputs into symbolic states (neutral/correct/incorrect) using TF-IDF + cosine clustering + a truth-aware classifier; measured time-to-truth vs time-to-false attractors across prompts and temperature settings.",
            "Stability + tipping-point analytics":
              "Implemented a Markov transition + stationary distribution analyzer and computed spectral gaps + entropy rates to quantify stability vs oscillation regimes; surfaced “tipping points” where generation quality collapses.",
            "Transformer interpretability":
              "Prototyped transformer variants (attention + FFN + LayerNorm) in PyTorch with temperature-controlled sampling; visualized embedding/trajectory shifts to demonstrate parameter-driven collapse into incorrect regimes.",
          },
          tech_stack: [
            "Transformers",
            "GPT",
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
        },
      ],
    };
  },
};
</script>
