<script setup lang="ts">
import { nextTick } from "vue";
import { menuList } from "@/config/index";
import type { MenuItem } from "@/config/index";
import { useToggle } from "@vueuse/core";
import { useLanguage } from "@/composables/language";
import { useI18n } from "vue-i18n";

async function handleNavigation(item: MenuItem) {
  const { selector } = item;
  toggleMobileMenuVisible(false);
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

const { y } = useWindowScroll();
const isFixed = ref(false);

watch(y, (newY) => {
  isFixed.value = newY > 0;
});

const [mobileMenuVisible, toggleMobileMenuVisible] = useToggle(false);
const { language, setLanguage } = useLanguage();
const [languageDropdownVisible, toggleLanguageDropdown] = useToggle(false);
const languageDropdownRef = ref<HTMLElement | null>(null);
const { t } = useI18n();

const languageOptions = [
  { value: "en", label: "English" },
  { value: "ur", label: "اردو" },
] as const;

function handleLanguageSelect(lang: "en" | "ur") {
  setLanguage(lang);
  toggleLanguageDropdown(false);
}

onClickOutside(languageDropdownRef, () => {
  if (languageDropdownVisible.value) {
    toggleLanguageDropdown(false);
  }
});
</script>

<template>
  <div>
    <!-- PC端 -->
    <div
      class="md:flex fixed hidden left-0 right-0 z-10 h-200 items-center transition-all duration-250 md:h-[var(--nav-bar-height)] z-999 bg-transparent top-0 md:px-0 px-70"
      :class="{ 'bg-white': isFixed }"
    >
      <div class="area flex items-center justify-center h-100% gap-40">
        <div class="logo flex items-center">
          <img
            src="@/assets/images/common/logo.svg"
            alt="logo"
            class="w-auto h-90 md:h-28"
          />
        </div>
        <div class="flex item-center gap-30 flex-1">
          <div
            v-for="item in menuList"
            :key="item.name"
            class="h-100% md:flex items-center relative text-14 cursor-pointer text-black hover:text-[var(--primary-color)] transition-all duration-200"
            @click="handleNavigation(item)"
          >
            {{ t(item.name) }}
          </div>
        </div>
        <div ref="languageDropdownRef" class="relative">
          <div
            class="flex items-center gap-8 cursor-pointer text-14 text-black hover:text-[var(--primary-color)] transition-all duration-200"
            @click="toggleLanguageDropdown(!languageDropdownVisible)"
          >
            <span>{{
              languageOptions.find((opt) => opt.value === language)?.label
            }}</span>
            <svg
              class="w-12 h-12 transition-transform duration-200"
              :class="{ 'rotate-180': languageDropdownVisible }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <transition name="fade">
            <div
              v-if="languageDropdownVisible"
              class="absolute rounded-10 overflow-hidden right-0 top-100% mt-8 bg-white border-1 border-#e5e5e5 border-rd-8 shadow-lg min-w-120 z-1000"
            >
              <div
                v-for="option in languageOptions"
                :key="option.value"
                class="px-16 py-12 cursor-pointer text-14 hover:bg-#effcf9 transition-colors duration-200"
                :class="{ 'bg-#effcf9': option.value === language }"
                @click="handleLanguageSelect(option.value)"
              >
                {{ option.label }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- 移动端导航栏 -->
    <div
      class="fixed left-0 right-0 top-0 z-100 mobile-only h-[var(--nav-bar-height)] bg-white"
    >
      <div
        class="flex justify-between items-center max-auto relative z-100 h-full px-40"
        style="box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4)"
      >
        <div class="flex items-center justify-center">
          <div
            class="text-bold text-55 text-[var(--primary-color)] flex items-center gap-30 uppercase"
          >
            <img src="@/assets/images/common/logo.svg" alt="logo" class="w-auto h-65" />
          </div>
        </div>
        <div>
          <div
            class="relative h-50 w-70"
            @click="toggleMobileMenuVisible(!mobileMenuVisible)"
          >
            <div
              class="absolute left-0 h-5 w-full bg-[var(--primary-color)] transition-all duration-200"
              :style="{
                top: mobileMenuVisible ? '50%' : '0',
                transform: mobileMenuVisible ? 'translateY(-50%) rotate(45deg)' : 'none',
              }"
            />
            <div
              class="absolute left-0 top-50% h-5 w-full bg-[var(--primary-color)] transition duration-200 -translate-y-1/2"
              :style="{
                opacity: mobileMenuVisible ? 0 : 1,
              }"
            />
            <div
              class="absolute bottom-0 left-0 h-5 w-full bg-[var(--primary-color)] transition duration-200"
              :style="{
                top: mobileMenuVisible ? '50%' : 'auto',
                transform: mobileMenuVisible ? 'translateY(-50%) rotate(-45deg)' : 'none',
              }"
            />
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="mobileMenuVisible"
            class="fixed z-10 bottom-0 left-0 right-0 top-[var(--nav-bar-height)] bg-white px-50 pt-0"
          >
            <div
              v-for="item in menuList"
              :key="item.name"
              class="text-12 cursor-pointer lh-140 text-50"
              style="border-bottom: 1px solid #e5e5e5"
              @click="handleNavigation(item)"
            >
              {{ t(item.name) }}
            </div>
            <div class="mt-80 px-40 py-20 bg-#effcf9 rounded-10">
              <div
                v-for="(option, index) in languageOptions"
                :key="option.value"
                class="text-12 cursor-pointer lh-100 text-50 py-12"
                :style="{
                  borderBottom:
                    index === languageOptions.length - 1 ? 'none' : '1px solid #0000001c',
                }"
                :class="{
                  'text-[var(--primary-color)] font-semibold': option.value === language,
                }"
                @click="handleLanguageSelect(option.value)"
              >
                {{ option.label }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
