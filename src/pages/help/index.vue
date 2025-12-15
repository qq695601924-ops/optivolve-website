<script setup lang="ts">
import { HELP_FAQ_LIST } from "@/config/faq";
import Collapse from "@/components/Collapse.vue";
</script>

<template>
  <div class="faq-wrapper relative">
    <div class="w-1220 mx-auto pt-240 pb-150 relative">
      <div class="font-bold text-96 text-center mb-80">Preguntas frecuentes</div>
      <Collapse
        v-for="(faq, index) in HELP_FAQ_LIST"
        :key="faq.question"
        :title="faq.question"
        :content="faq.answer"
        :is-open="index === 0"
        :index="index + 1"
      />
    </div>
  </div>
</template>
