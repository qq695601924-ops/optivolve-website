<script setup lang="ts">
import { FAQ_SECTIONS } from '@/config/faq'
import { useLanguage } from '@/composables/language'
import { useI18n } from 'vue-i18n'

const { language } = useLanguage()
const { t } = useI18n()
const activeSectionIndex = ref(0)
const openItemIndex = ref(0)

const activeSection = computed(() => FAQ_SECTIONS[activeSectionIndex.value])

function selectSection(index: number) {
  activeSectionIndex.value = index
  openItemIndex.value = 0
}

function toggleItem(index: number) {
  openItemIndex.value = openItemIndex.value === index ? -1 : index
}
</script>

<template>
  <div class="faq-page pb-160 pt-190 md:pb-130 md:pt-130">
    <div class="area px-40 md:px-0">
      <div class="mb-48 w-full md:mb-56 md:w-760">
        <div class="mb-70 text-88 font-bold lh-100 md:mb-50 md:text-48 md:lh-55">
          {{ t('faq.title') }}
        </div>
      </div>

      <div class="faq-layout block gap-0 md:flex md:gap-90">
        <div
          class="faq-categories mb-55 w-full md:mb-0 md:w-330"
        >
          <div
            v-for="(section, sectionIndex) in FAQ_SECTIONS"
            :key="section.title"
            class="faq-category cursor-pointer text-38 font-semibold transition-all duration-200 md:text-18"
            :class="{ active: activeSectionIndex === sectionIndex }"
            @click="selectSection(sectionIndex)"
          >
            <span>{{ section.title }}</span>
          </div>
        </div>

        <div class="faq-content flex-1">
          <div>
            <div
              v-for="(item, itemIndex) in activeSection.items"
              :key="item.question"
              style="border-top: 1px solid #e5e5e5"
              :style="{
                borderBottom:
                  itemIndex === activeSection.items.length - 1 ? '1px solid #e5e5e5' : 'none',
              }"
              class="faq-item cursor-pointer"
              @click="toggleItem(itemIndex)"
            >
              <div
                class="relative py-42 pr-95 text-48 font-bold lh-58 md:py-24 md:pr-52 md:text-22 md:lh-32"
                :class="{
                  'text-[var(--primary-color)]': openItemIndex === itemIndex,
                  'md:pl-52 pl-95 md:pr-0 pr-0': language === 'ur',
                }"
              >
                {{ item.question }}
                <img
                  v-if="openItemIndex !== itemIndex"
                  src="@/assets/images/home/icon-question-close.svg"
                  alt="arrow-down"
                  class="absolute top-1/2 h-60 w-auto md:h-32 -translate-y-1/2"
                  :class="language === 'ur' ? 'left-0' : 'right-0'"
                >
                <img
                  v-else
                  src="@/assets/images/home/icon-question-open.svg"
                  alt="arrow-down"
                  class="absolute top-1/2 h-60 w-auto md:h-32 -translate-y-1/2"
                  :class="language === 'ur' ? 'left-0' : 'right-0'"
                >
              </div>
              <div
                v-if="openItemIndex === itemIndex"
                class="pb-45 text-42 text-[rgba(27,21,43,0.58)] lh-56 md:pb-28 md:text-15 md:lh-25"
              >
                <p class="mb-22 md:mb-12">
                  {{ item.answer }}
                </p>
                <ul
                  v-if="item.bullets?.length"
                  class="mb-22 list-disc list-outside pl-1em md:mb-12"
                >
                  <li
                    v-for="bullet in item.bullets"
                    :key="bullet"
                    class="mb-12 md:mb-4"
                  >
                    {{ bullet }}
                  </li>
                </ul>
                <p v-if="item.note">
                  {{ item.note }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.faq-page {
  background: linear-gradient(180deg, #fff 0%, #f7fbfa 100%);
}

.faq-categories {
  position: sticky;
  top: 120px;
  align-self: flex-start;
}

.faq-category {
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 0 20px;
  color: rgba(27, 21, 43, 0.58);
  border-left: 3px solid transparent;
  border-bottom: 1px solid #e5e5e5;
  line-height: 1.3;
}

.faq-category:first-child {
  border-top: 1px solid #e5e5e5;
}

.faq-category.active {
  color: var(--primary-color);
  border-left-color: var(--primary-color);
  background-color: rgba(0, 171, 142, 0.06);
}

.faq-item {
  transition: all 200ms ease;
}

@media (max-width: 767px) {
  .faq-categories {
    position: static;
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 16px;
    scrollbar-width: none;
  }

  .faq-categories::-webkit-scrollbar {
    display: none;
  }

  .faq-category {
    flex: 0 0 auto;
    min-height: 78px;
    max-width: 320px;
    padding: 0 22px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    white-space: normal;
  }

  .faq-category.active {
    border-color: var(--primary-color);
  }
}
</style>
