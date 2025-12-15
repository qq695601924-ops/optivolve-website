<script setup lang="ts">
import { useRoute } from "vue-router";

const isDev = true; // import.meta.env.DEV;
const route = useRoute();

const category = ref([
  {
    title: "Privacy Policy",
    tag: "privacy",
    text: getText(isDev ? "/privacy.html" : "https://app.urieos.com/privacidad.html"),
  },
  {
    title: "Terms of Service",
    tag: "terms",
    text: getText(isDev ? "/service.html" : "https://app.urieos.com/servicio.html"),
  },
]);
const numberStartReg = /^\d/;

function getText(url: string) {
  const text = ref("");
  fetch(url)
    .then((res) => res.text())
    .then((res) => {
      // 利用正则获取body下第一个div的内容
      const div = res.match(/<body>(.*?)<\/body>/s);
      const parser = new DOMParser();
      const doc = parser.parseFromString(div[1], "text/html");
      const body = doc.body;
      const container = body.children[0];

      const divs = container.children as HTMLCollectionOf<HTMLElement>;
      if (divs.length) {
        // 由于divs是类数组，需要转换为数组
        const divsArray = Array.from(divs);
        // 判断段落是否以数字开头，用于加粗显示
        // 过滤掉第一个节点，因为第一个节点是标题
        divsArray.slice(1).forEach((div) => {
          if (div.tagName === "P") {
            const fontWeight = numberStartReg.test(div.textContent?.trim?.() || "")
              ? "bold"
              : "200";
            // 如果匹配到第一个是数字，则需要加粗
            text.value += `<p class="text-16 lh-24 font-${fontWeight} mb-3">${div.textContent}</p>`;
          } else if (div.tagName === "H3") {
            text.value += `<h3 class="text-16 font-bold my-20">${div.textContent}</h3>`;
          }
        });
      }
      return text;
    });
  return text;
}

const currentAgreement = ref<any>(category.value[0]);

onActivated(() => {
  const tag = route.query.tag;
  if (tag) {
    currentAgreement.value =
      category.value.find((item) => item.tag === tag) || category.value[0];
  }
});

onBeforeRouteUpdate((to) => {
  const tag = to.query.tag;
  if (tag) {
    currentAgreement.value =
      category.value.find((item) => item.tag === tag) || category.value[0];
  }
});
</script>

<template>
  <div class="agreement-wrapper relative pt-170">
    <div class="mx-auto min-h-100vh w-1200 pb-150">
      <div class="mb-30 text-center text-64 font-bold">
        {{ currentAgreement?.title }}
      </div>

      <div v-if="currentAgreement?.text" v-html="currentAgreement?.text" />
      <img
        v-else
        src="@/assets/images/common/loading.gif"
        alt=""
        class="mx-auto my-80 mb-60 block h-100 w-100"
      />
    </div>
  </div>
</template>
