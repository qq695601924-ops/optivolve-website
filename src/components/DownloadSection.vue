<script setup lang="ts">
import { SHOW_DOWNLOAD, APP_NAME } from "@/config/index";
</script>

<template>
  <div
    v-if="SHOW_DOWNLOAD"
    class="download-wrapper md:h-712 h-auto relative md:px-0 px-70 md:py-0 py-150"
  >
    <div class="area flex flex-col items-center justify-center gap-40 h-full">
      <div class="flex items-center justify-center md:text-32 text-70 text-white">
        <img
          src="@/assets/images/common/logo.svg"
          alt="logo"
          class="w-auto md:h-56 h-110 mr-20"
        />
        {{ APP_NAME }}
      </div>
      <div class="md:text-64 text-86 text-#ffffff text-center md:w-888 w-full mx-auto">
        Tu Asistente Financiero Inteligente
      </div>
      <div class="md:text-20 text-60 text-[rgba(255,255,255,0.75)]">
        Descarga la aplicación ahora para obtener apoyo
      </div>
      <BtnDownload class="!md:h-80 !h-200" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.download-wrapper {
  background: url("@/assets/images/common/bg-download.webp") no-repeat center / cover;
}
@media only screen and (max-width: 768px) {
  .download-wrapper {
    background: var(--primary-color);
  }
}
</style>
