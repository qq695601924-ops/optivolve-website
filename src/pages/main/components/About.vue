<script setup lang="ts">
import { APP_NAME } from "@/config/index";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import postAbout1 from "@/assets/images/home/post-about-1.webp";
import postAbout2 from "@/assets/images/home/post-about-2.webp";
import postAbout3 from "@/assets/images/home/post-about-3.webp";
import ArrowRightActive from "@/assets/images/home/icon-arrow-right-active.webp";

const step = [
  {
    title: "About",
    image: postAbout1,
    desc:
      "We are an international payment service provider (PSP) working with local partners worldwide to deliver localized payment solutions to global clients. We specialize in international merchants and focus on Alternative Payment Methods (APMs), including online banking, ATM cards, e-wallets, QR payments, and OTC transactions, with global card acquiring as a key strategic focus.",
  },
  {
    title: "Purpuse",
    image: postAbout2,
    desc:
      "To simplify global payments and remove barriers in complex and emerging markets, enabling businesses to accept payments securely and efficiently anywhere in the world.",
  },
  {
    title: "Ambition",
    image: postAbout3,
    desc:
      "To build a globally connected payment infrastructure that bridges international card networks and trusted local payment systems, powering long-term growth for businesses worldwide.",
  },
];

const currentIndex = ref(0);
const swiperRef = ref();

const modules = [Navigation];

function onSwiper(swiper: any) {
  swiperRef.value = swiper;
}

function onSlideChange(swiper: any) {
  currentIndex.value = swiper.realIndex;
}

function changeIndex(direction: number) {
  if (swiperRef.value) {
    if (direction > 0) {
      swiperRef.value.slideNext();
    } else {
      swiperRef.value.slidePrev();
    }
  }
}
</script>

<template>
  <div
    id="about-section"
    class="about-section py-100 md:h-850 h-1650"
    style="scroll-margin-top: 100px"
  >
    <div class="area">
      <div class="md:text-48 text-88 font-bold text-center md:mb-40 mb-70">
        About {{ APP_NAME }}
      </div>
      <div class="relative md:mx-0 mx-100">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="40"
          :loop="true"
          :allow-touch-move="true"
          :breakpoints="{
            768: {
              slidesPerView: 3,
            },
          }"
          class="about-swiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide
            v-for="item in [...step, ...step]"
            :key="item.title"
            class="md:w-540 w-800 md:h-558 h-900 relative rounded-12 overflow-hidden"
          >
            <div class="w-full md:h-200 h-500 relative">
              <img :src="item.image" alt="about-1" class="w-full h-full object-cover" />
            </div>
            <div
              class="md:flex hidden w-88 h-88 bg-#FFFFFF rounded-full absolute left-15 top-140 items-center justify-center transition-all duration-200 z-2"
              style="box-shadow: 0px 50px 60px -10px rgba(0, 0, 0, 0.08)"
            >
              <img
                src="@/assets/images/home/icon-quote.svg"
                alt="quote"
                class="w-35% h-auto"
              />
            </div>
            <div
              class="w-full md:h-292 h-600 relative bg-white px-20 py-45 transition-all duration-400 rounded-[0px_0px_12px_12px]"
            >
              <div class="md:text-24 text-55 text-semibold text-#1B152B md:mb-10 mb-30">
                {{ item.title }}
              </div>
              <div class="md:text-14 text-40 text-[rgba(27,21,43,0.5)] md:lh-18 lh-55">
                {{ item.desc }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="flex items-center justify-center gap-50 md:mt-30 mt-50">
          <img
            :src="ArrowRightActive"
            alt="arrow"
            class="w-auto md:h-64 h-120 rotate-180 cursor-pointer z-10"
            @click="changeIndex(-1)"
          />
          <img
            :src="ArrowRightActive"
            alt="arrow"
            class="w-auto md:h-64 h-120 cursor-pointer z-10"
            @click="changeIndex(1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about-section {
  background: url("@/assets/images/home/bg-about.webp") no-repeat center bottom / 100%
    auto;
}

:deep(.about-swiper) {
  .swiper-slide {
    width: auto;
    height: auto;
  }
}
</style>
