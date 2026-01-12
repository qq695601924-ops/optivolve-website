<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    id="why-section"
    class="why-section md:py-100 py-150"
    style="scroll-margin-top: 100px"
  >
    <div class="area flex flex-col items-center justify-center gap-50">
      <div class="md:text-48 text-88 font-bold text-center">{{ t('why.title') }}</div>
      <div class="md:px-0 px-50 mx-auto w-full">
        <div class="md:flex block items-center justify-between">
          <div
            class="md:w-580 w-full md:h-408 h-auto bg-#EFFCF9 border-rd-16 md:px-20 px-50 md:py-30 py-50 flex flex-col justify-between md:mb-0 mb-50"
            style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
          >
            <div class="md:text-24 text-55 font-semibold md:w-505 w-full">
              {{ t('why.modernTransactions.title') }}
            </div>
            <div
              class="md:text-14 text-34 text-[rgba(27,21,43,0.6)] md:lh-21 lh-40 md:py-0 py-30"
            >
              {{ t('why.modernTransactions.desc') }}
            </div>
            <img
              src="@/assets/images/home/post-why-1.svg"
              alt="why-1"
              class="w-100% h-auto"
            />
          </div>
          <div
            class="md:w-580 w-full md:h-408 h-auto bg-#EFFCF9 border-rd-16 md:px-20 px-50 md:py-30 py-50 flex flex-col justify-between md:mb-0 mb-50"
            style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
          >
            <div class="md:text-24 text-55 font-semibold">
              {{ t('why.localExpertise.title') }}
            </div>
            <div
              class="md:text-14 text-34 text-[rgba(27,21,43,0.6)] md:lh-21 lh-40 md:py-0 py-30"
            >
              {{ t('why.localExpertise.desc') }}
            </div>
            <img
              src="@/assets/images/home/post-why-2.svg"
              alt="why-2"
              class="w-100% h-auto"
            />
          </div>
        </div>
        <div
          class="mt-40 md:w-1200 w-full md:h-204 h-auto bg-#EFFCF9 border-rd-16 md:px-20 px-50 md:py-20 py-50 md:flex block justify-between items-center"
          style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
        >
          <div class="md:w-670 w-full flex flex-col justify-between">
            <div class="md:text-24 text-55 font-semibold mb-15">
              {{ t('why.securityCore.title') }}
            </div>
            <div
              class="md:text-14 text-34 text-[rgba(27,21,43,0.6)] md:lh-21 lh-40 md:py-0 py-30"
            >
              {{ t('why.securityCore.desc') }}
            </div>
          </div>
          <img
            src="@/assets/images/home/post-why-3.svg"
            alt="why-3"
            class="md:w-auto w-full md:h-150 h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
