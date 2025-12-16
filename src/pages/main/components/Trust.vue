<script setup lang="ts">
const list = [
  {
    title: "Global Coverage That Accelerates Expansion",
    desc:
      "Access high-performance acquiring, local payment methods, and settlement capabilities across Asia, Africa, and the Americas—all through one integrated platform.",
  },
  {
    title: "Enterprise-Grade Reliability & Intelligent Performance",
    desc:
      "Our infrastructure is engineered for scale: smart routing, high availability, adaptive risk engines, and real-time monitoring ensure consistently strong approval rates.",
  },
  {
    title: "Compliance First, Always",
    desc:
      "We operate under strict global standards with robust KYC/KYB, AML/CTF, data governance, and regional licensing readiness—empowering merchants to grow safely across regulated markets.",
  },
  {
    title: "Market Intelligence Backed by Deep Local Presence",
    desc:
      "With teams and partners embedded in high-growth markets, we help businesses navigate regulatory shifts, adapt quickly, and seize new opportunities.",
  },
  {
    title: "Long-Term Partnerships, Not Transactions",
    desc:
      "We work side-by-side with merchants, platforms, and financial institutions—building solutions that scale, last, and evolve with your business.",
  },
  {
    title: "Execution Certainty inComplex Markets",
    desc:
      "From onboarding to go-live, we optimize every step with clear timelines, localized playbooks, and accountable delivery— turning complexity into predictable outcomes.",
  },
];
const current = ref(0);
</script>

<template>
  <div class="md:py-100 py-200 scroll-mt-50" id="why-trust-us">
    <div
      class="md:w-1240 md:px-0 px-50 w-full mx-auto flex flex-col items-center justify-center gap-25"
    >
      <div class="md:flex block items-center justify-between w-full">
        <div class="md:text-48 text-60 font-bold md:w-570 w-full lh-64 md:mb-0 mb-30">
          A Global Payment Partner Built for Scale, Speed, and Trust
        </div>
        <div class="md:w-570 w-full md:mb-0 mb-50">
          <div class="md:text-24 text-40 text-[rgba(13,27,42,0.5)] font-bold mb-10">
            Why Global Teams Trust Us
          </div>
          <div class="md:text-19 text-40 md:lh-26 lh-45 text-[rgba(13,27,42,0.5)]">
            We empower digital businesses with the infrastructure, intelligence, and
            global reach required to win in the world’s fastest-growing markets.
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-20">
        <div
          v-for="(item, index) in list"
          :key="item.title"
          class="md:h-366 h-700 px-25 md:py-20 py-50 flex flex-col justify-between cursor-pointer transition-all duration-250"
          @click="current = index"
          :style="{
            border: current === index ? '1px solid #BA1819' : '1px solid #dedede',
            boxShadow: current === index ? '0 0 4px 0 #F2EBEB' : '',
          }"
        >
          <div
            class="md:text-32 text-70 text-#D8D8D8 font-italic"
            :class="{ '!text-#BA1819': current === index }"
          >
            {{ `0${index + 1}` }}
          </div>
          <div>
            <div
              class="md:text-22 text-45 md:lh-26 lh-45 text-semibold md:mb-10 mb-30"
              :class="{ 'text-#BA1819': current === index }"
            >
              {{ item.title }}
            </div>
            <div class="md:text-16 text-30 md:lh-19 lh-40 text-[rgba(13,27,42,0.5)]">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
