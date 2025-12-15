<script setup lang="ts">
const props = defineProps<{
  index?: number;
  isOpen?: boolean;
  title: string;
  content: string;
}>();

const isOpen = ref(props.isOpen !== undefined ? props.isOpen : false);
const collapseRef = ref<HTMLDivElement>();
const titleRef = ref<HTMLDivElement>();
function toggle() {
  isOpen.value = !isOpen.value;
  changeHeight(isOpen.value);
}

function changeHeight(open: boolean) {
  if (open) {
    collapseRef.value!.style.height = "auto";
    const { height } = collapseRef.value!.getBoundingClientRect();
    collapseRef.value!.style.height = titleRef.value!.offsetHeight + "px"; // 初始高度

    collapseRef.value!.style.transition = "0.3s ease-in-out";
    collapseRef.value!.getBoundingClientRect();
    collapseRef.value!.style.height = `${height}px`;
  } else {
    collapseRef.value!.style.height = titleRef.value!.offsetHeight + "px"; // 初始高度
  }
}

onMounted(() => {
  if (props.isOpen) changeHeight(true);
});
</script>

<template>
  <div
    ref="collapseRef"
    class="bg-transparent collapse mb-20 md:h-76 h-76 cursor-pointer overflow-hidden rounded-21 px-40 transition-all duration-250 md:mb-20 mb-40"
    style="border: 2px solid #323232"
    @click="toggle"
    :class="{ '!bg-[rgba(255,255,255,0.1)]': isOpen }"
  >
    <div class="relative flex items-center justify-between md:lh-76 lh-76">
      <div
        ref="titleRef"
        class="md:text-20 text-50 transition-all duration-250 text-white w-92% h-76 flex items-center lh-30"
      >
        <!-- <span class="mr-100 text-[rgba(30,17,51,0.68)]">{{
          props.index > 9 ? props.index : "0" + props.index
        }}</span> -->
        <b>{{ props.title }}</b>
      </div>
      <div
        class="w-64 md:h-64 h-64 absolute right-0 top-50% -translate-y-1/2 flex items-center justify-center rotate-0 transition-all duration-250"
      >
        <img
          v-if="isOpen"
          src="@/assets/images/common/faq-close.svg"
          alt="arrow"
          class="md:w-24 w-80 h-auto"
        />
        <img
          v-else
          src="@/assets/images/common/faq-open.svg"
          alt="arrow"
          class="md:w-24 w-80 h-auto"
        />
      </div>
    </div>
    <div
      class="mb-40 md:mr-50 mr-70 md:text-16 text-50 text-[rgba(255,255,255,0.7)] font-400 md:lh-24 lh-60 whitespace-pre-wrap"
    >
      {{ props.content }}
    </div>
  </div>
</template>
