<script setup lang="ts">
import BannerSection from "./components/BannerSection.vue";
import Why from "./components/Why.vue";
import Business from "./components/Business.vue";
import Services from "./components/Services.vue";
import Question from "./components/question.vue";
import Map from "./components/Map.vue";
import Partners from "./components/Partners.vue";
import JoinUs from "./components/JoinUs.vue";
import About from "./components/About.vue";
</script>

<template>
  <div id="main-page">
    <BannerSection />
    <Why />
    <Business v-if="false" />
    <Services />
    <Question />
    <Map v-if="false" />
    <Partners v-if="false" />
    <About />
    <JoinUs v-if="false" />
  </div>
</template>
