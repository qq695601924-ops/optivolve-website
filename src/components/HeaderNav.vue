<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { nextTick } from "vue";
import { menuList, APP_NAME, redirectList } from "@/config/index";
import type { MenuItem } from "@/config/index";

const route = useRoute();
const router = useRouter();

function isActive(path: string) {
  if (path === "/" && route.path === "/") return true;
  return path !== "/" && route.path.startsWith(path);
}

async function handleNavigation(item: MenuItem) {
  const { path, selector } = item;

  // 如果目标路由与当前路由不同，先进行路由跳转
  if (path && path !== route.path) {
    await router.push(path);
    // 如果需要滚动到指定位置，等待路由切换完成
    if (selector) {
      await nextTick();
      // 给页面渲染一些时间
      setTimeout(() => scrollToElement(selector), 100);
    }
    return;
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

const { y } = useWindowScroll();
const isFixed = ref(false);

watch(y, (newY) => {
  isFixed.value = newY > 0;
});

// function downloadApp() {
//   window.open(DOWNLOAD_URL, "_blank");
// }

// const isPrimaryLogoText = computed(() => ["/loans", "/docs"].includes(route.path));
// const isPrimaryMenuText = computed(() =>
//   ["/loans", "/help", "/docs"].includes(route.path)
// );
</script>

<template>
  <div
    class="fixed left-0 right-0 z-10 h-200 flex items-center transition-all duration-250 md:h-[var(--nav-bar-height)] z-999 bg-transparent top-0 md:px-0 px-70"
    :class="{
      '!bg-#070606': isFixed,
    }"
  >
    <div class="w-1200 mx-auto flex items-center justify-center h-100%">
      <div class="logo flex items-center mx-30">
        <img
          src="@/assets/images/common/logo.svg"
          alt="logo"
          class="md:mr-10 mr-45 w-auto h-90 md:h-34"
        />
        <div class="md:text-14 text-20 font-bold uppercase text-#BA1819 w-100">
          {{ APP_NAME }}
        </div>
      </div>
      <div class="flex item-center gap-30 flex-1">
        <div
          v-for="item in redirectList"
          :key="item.name"
          class="h-100% md:flex items-center relative text-12"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="flex item-center gap-30">
        <div
          v-for="item in menuList"
          :key="item.name"
          class="h-100% md:flex items-center relative text-12"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
