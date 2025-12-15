<script setup lang="ts">
import { DOWNLOAD_URL, SHOW_DOWNLOAD } from "@/config/index";

function download() {
  if (SHOW_DOWNLOAD) {
    window.open(DOWNLOAD_URL, "_blank");
  }
}
</script>

<template>
  <div class="banner-section relative overflow-hidden md:h-1347 h-1500 relative z-10">
    <img
      src="@/assets/images/home/post-banner.svg"
      alt=""
      class="w-auto h-1000 absolute top-370 left-0"
    />
    <div class="area h-100% flex items-start flex-col md:px-0 px-80 md:pt-230 pt-400">
      <div
        class="font-bold md:text-96 md:lh-110 text-88 text-#ffffff text-center md:mb-30 mb-60 mx-auto"
      >
        GiroFácil — <br />
        Préstamos Rápidos, Fáciles de<br />Obtener
      </div>
      <div
        class="md:w-1447 w-full md:text-24 text-62 text-[rgba(255,255,255,0.65)] text-center mx-auto md:mb-60 mb-80 font-thin"
      >
        Solicítalo ahora y obtén la oportunidad de disfrutar de tu primera cuota sin
        interés! Experimenta aprobaciones rápidas, transferencias sin complicaciones y sin
        cargos ocultos.
      </div>
      <div
        class="text-#000000 hover-scale md:w-286 w-60% md:h-76 h-150 bg-#FFFFFF md:text-24 text-55 flex items-center justify-center mx-auto"
        @click="download"
      >
        Request a Demo
      </div>
    </div>
  </div>
</template>
