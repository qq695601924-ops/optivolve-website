<script setup lang="ts">
import { APP_NAME, WORK_TIME, EMAIL, ADDRESS, COPYRIGHT } from "@/config/index";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const isVisible = ref(false);

const theme = ref("dark");

function goto(path: any) {
  router.push(path);
}

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

// @click="goto({ path: 'docs', query: { tag: 'privacy' } })"
</script>

<template>
  <transition name="fade-slide" appear>
    <div class="footer-wrapper relative overflow-hidden text-white">
      <div
        class="flex justify-between md:py-70 py-100 area mx-auto md:flex-row flex-col md:px-0 px-90"
      >
        <div class="md:w-545 w-full md:text-40 text-60 text-white uppercase mr-100">
          <div class="flex items-center md:gap-20 gap-40 mb-45">
            <img
              src="@/assets/images/common/logo.svg"
              alt="logo"
              class="md:h-48 h-140 w-auto"
            />
            {{ APP_NAME }}
          </div>
          <div
            class="md:text-16 text-50 text-[#B4BBC5] md:lh-24 lh-60 md:mb-40 mb-70 font-thin"
          >
            GiroFácil es una plataforma de préstamos registrada en la CNBV (Comisión
            Nacional Bancaria y de Valores) de México, que ofrece préstamos digitales
            seguros y transparentes de hasta MXN$30,000, con aprobación rápida, desembolso
            seguro y la oportunidad de disfrutar de ofertas exclusivas sin intereses.
          </div>
          <BtnDownload class="!md:h-65 !h-140 md:mb-0 mb-50" />
        </div>
        <div class="md:block hidden">
          <div class="md:text-18 text-50 font-bold mb-40 mt-10 text-white">
            Enlaces rápidos
          </div>
          <div class="text-18 text-#838E9E">
            <div
              class="cursor-pointer hover:underline mb-20"
              @click="goto({ path: '/' })"
            >
              Pedir Préstamo
            </div>
            <div
              class="cursor-pointer hover:underline mb-20"
              @click="goto({ path: 'help' })"
            >
              Antifraude
            </div>
            <div
              class="cursor-pointer hover:underline mb-20"
              @click="goto({ path: 'remove' })"
            >
              FAQ
            </div>
          </div>
        </div>
        <div class="md:block hidden">
          <div class="md:text-18 text-50 font-bold mb-40 mt-10 text-white">Acuerdo</div>
          <div class="text-18 text-#838E9E">
            <div
              class="cursor-pointer hover:underline mb-20"
              @click="goto({ path: 'docs', query: { tag: 'privacy' } })"
            >
              Política de Privacidad
            </div>
            <div
              class="cursor-pointer hover:underline mb-20"
              @click="goto({ path: 'docs', query: { tag: 'terms' } })"
            >
              Términos de Servicio
            </div>
            <div
              class="cursor-pointer hover:underline mb-20"
              @click="goto({ path: 'remove' })"
            >
              Account Deletion Instructions
            </div>
          </div>
        </div>
        <div class="md:block hidden w-320">
          <div class="md:text-18 text-50 font-bold mb-40 mt-10 text-white">
            Servicio al Cliente
          </div>
          <div class="text-18 text-#838E9E">
            <div class="cursor-pointer hover:underline mb-20">Correo: {{ EMAIL }}</div>
            <div class="cursor-pointer hover:underline mb-20">
              Hora de servicio: {{ WORK_TIME }}
            </div>
            <div class="cursor-pointer hover:underline mb-20">
              Dirección：{{ ADDRESS }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="items-center area justify-center font-thin text-center md:text-16 text-50 flex md:h-100 h-180"
        style="border-top: 1px solid rgba(255, 255, 255, 0.2)"
      >
        {{ COPYRIGHT }}
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
