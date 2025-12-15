<script setup lang="ts">
import downloadIcon from "@/assets/images/common/btn-download.svg";
import downloadIconDark from "@/assets/images/common/btn-download-dark.svg";
import vw from "@/utils/inline-px-to-vw";
import { DOWNLOAD_URL, SHOW_DOWNLOAD } from "@/config/index";

interface Props {
  height?: number;
  text?: string;
  href?: string;
  icon?: string;
  theme?: "light" | "dark";
}

withDefaults(defineProps<Props>(), {
  height: 35,
  text: "",
  href: DOWNLOAD_URL,
  icon: downloadIcon,
  theme: "dark",
});
</script>

<template>
  <a
    v-if="SHOW_DOWNLOAD"
    target="_blank"
    :href="href"
    class="inline-block cursor-pointer hover:scale-105 transition-all duration-300"
    :style="{ height: vw(height) }"
  >
    <img
      :src="theme === 'dark' ? downloadIconDark : downloadIcon"
      class="block h-full w-auto"
      alt="download"
    />
    <span v-if="text" class="text-sm">{{ text }}</span>
  </a>
</template>
