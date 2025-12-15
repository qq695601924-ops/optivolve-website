<script setup lang="ts">
import { APP_NAME, COPYRIGHT, menuList } from "@/config/index";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import type { MenuItem } from "@/config/index";

const router = useRouter();
const isVisible = ref(false);

const theme = ref("dark");

onMounted(() => {
  // 延迟一小段时间后显示，以确保DOM已完全加载
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
// 监听路由变化
watch(router.currentRoute, (newRoute) => {
  if (["about", "remove"].some((route) => newRoute?.path?.indexOf(route) !== -1)) {
    theme.value = "dark";
  } else {
    theme.value = "light";
  }
});

async function handleNavigation(item: MenuItem) {
  const { selector } = item;

  // 如果目标路由与当前路由不同，先进行路由跳转
  if (selector) {
    await nextTick();
    // 给页面渲染一些时间
    setTimeout(() => scrollToElement(selector), 100);
  }

  // 如果在同一页面且有选择器，直接滚动
  if (selector) scrollToElement(selector);
}

function scrollToElement(selector: string) {
  const element = document.querySelector(`#${selector}`);
  if (!element) {
    console.warn(`Element with id "${selector}" not found`);
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<template>
  <transition name="fade-slide" appear>
    <div class="footer-wrapper relative overflow-hidden text-white bg-#222020">
      <div class="area md:pt-40 pt-100 md:px-0 px-50">
        <div class="flex justify-between items-center md:mb-20 mb-50">
          <div class="flex items-center">
            <img
              src="@/assets/images/common/logo-white.svg"
              alt="logo"
              class="w-auto md:h-56 h-100 md:mr-15 mr-40"
            />
            <div class="md:text-24 text-45 lh-30 md:w-100 w-full uppercase">
              {{ APP_NAME }}
            </div>
          </div>
        </div>
        <div
          class="flex justify-between items-center mb-40 font-light md:flex-nowrap flex-wrap"
        >
          <div
            class="md:text-16 text-45 md:lh-24 lh-90 cursor-pointer hover:decoration-underline"
            v-for="item in menuList"
            :key="item.name"
            @click="handleNavigation(item)"
          >
            {{ item.name }}
          </div>
        </div>
        <div
          class="md:text-16 text-45 md:lh-24 lh-50 text-[rgba(255,255,255,0.65)] font-bold md:mb-10 mb-50"
        >
          Accelerating the Rise of Digital Businesses in Emerging Markets
        </div>
        <div
          class="md:text-16 text-45 md:lh-24 lh-50 text-[rgba(255,255,255,0.65)] md:mb-20 mb-50"
        >
          Future Harvest HK Limited is a global investment and operations group built to
          unlock the next wave of growth across high-potential digital economies. By
          integrating
          <span class="font-bold"
            >technology capability, financial infrastructure, and large-scale
            distribution</span
          >, we empower mobile-internet ventures to scale with speed, efficiency, and
          global ambition.
        </div>
        <div
          class="md:text-16 text-45 md:lh-24 lh-50 text-[rgba(255,255,255,0.65)] font-bold md:mb-10 mb-50"
        >
          We go beyond traditional investment.
        </div>
        <div
          class="md:text-16 text-45 md:lh-24 lh-50 text-[rgba(255,255,255,0.65)] md:mb-20 mb-50"
        >
          We partner, build, and operate alongside our portfolio teams—delivering product
          support, market access, user-growth channels, and compliance-ready financial
          solutions.
        </div>
        <div
          class="md:text-16 text-45 md:lh-24 lh-50 text-[rgba(255,255,255,0.65)] md:mb-50 mb-100"
        >
          With active footprints across Hong Kong, Singapore, Southeast Asia, South Asia,
          Africa, and the Americas, we create a unified ecosystem that helps digital
          platforms break market barriers and achieve sustainable global expansion.
        </div>
        <div
          class="md:h-55 h-150 flex justify-center items-center md:text-16 text-45 text-[rgba(255,255,255,0.65)]"
          style="border-top: 1px solid rgba(255, 255, 255, 0.1)"
        >
          {{ COPYRIGHT }}
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
/* 渐入动画 */
.fade-slide-enter-active,
.fade-slide-appear-active {
  transition: all 300ms ease;
}

.fade-slide-enter-from,
.fade-slide-appear-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>
