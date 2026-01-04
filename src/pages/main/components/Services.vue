<template>
  <div
    id="services-section"
    class="services-section h-818 bg-[rgba(147,232,211,0.15)]"
    style="scroll-margin-top: 100px"
  >
    <div class="area flex flex-col items-center justify-center gap-40 h-full">
      <div class="text-48 font-bold text-center w-645">
        Services Requiredfrom Payment Partner
      </div>
      <div class="grid grid-cols-2 gap-20 w-full">
        <div
          class="h-168 bg-#FFFFFF border-rd-20 px-25 py-25 flex flex-col justify-between"
          style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
        >
          <div class="flex items-center -mt-10 text-24 font-semibold">
            <img
              src="@/assets/images/home/icon-services-1.svg"
              alt="services-1"
              class="w-auto h-76 -ml-20"
            />
            Deposit (Pay-in)
          </div>
          <div class="text-16 lh-24 text-[rgba(27,21,43,0.5)]">
            Enables customers to deposit funds into merchant accounts in
            <span class="text-#1B152B">local currency</span>.
          </div>
        </div>
        <div
          class="h-168 bg-#FFFFFF border-rd-20 px-25 py-25 flex flex-col justify-between"
          style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
        >
          <div class="flex items-center -mt-10 text-24 font-semibold">
            <img
              src="@/assets/images/home/icon-services-2.svg"
              alt="services-1"
              class="w-auto h-76 -ml-20"
            />
            Disbursement (Pay-out)
          </div>
          <div class="text-16 lh-24 text-[rgba(27,21,43,0.5)]">
            Allows customers to withdraw funds from merchant accounts in
            <span class="text-#1B152B">local currency</span>.
          </div>
        </div>
        <div
          class="h-229 bg-#FFFFFF border-rd-20 px-25 py-20 flex flex-col justify-between"
          style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
        >
          <div class="flex items-center -mt-10 text-24 font-semibold">
            <img
              src="@/assets/images/home/icon-services-3.svg"
              alt="services-1"
              class="w-auto h-76 -ml-20"
            />
            Settlement
          </div>
          <div class="text-16 lh-24 text-[rgba(27,21,43,0.5)] mb-0 -mt-20">
            Settlement flows from the local payment partner to Vexora, including:
          </div>
          <ul
            class="text-14 lh-21 text-[rgba(27,21,43,0.5)] list-disc list-outside pl-15"
          >
            <li>
              <span class="text-#1B152B">Local Settlement</span> - Transfers to our
              remittance partners within the local market
            </li>
            <li>
              <span class="text-#1B152B">Overseas Settlement</span> - Cross-border
              settlements in <span class="text-#1B152B">EUR / USD / USDT</span>
            </li>
          </ul>
        </div>
        <div
          class="h-229 bg-#FFFFFF border-rd-20 px-25 py-25 flex flex-col justify-between"
          style="box-shadow: 0px 0px 17px 6px rgba(138, 192, 171, 0.15)"
        >
          <div class="flex items-center -mt-10 text-24 font-semibold">
            <img
              src="@/assets/images/home/icon-services-4.svg"
              alt="services-1"
              class="w-auto h-76 -ml-20"
            />
            Balance Top-Up
          </div>
          <div class="text-16 lh-24 text-[rgba(27,21,43,0.5)] mb-15">
            Balance top-up from Vexora to the local payment partner to support liquidity
            needs:
          </div>
          <ul
            class="text-14 lh-21 text-[rgba(27,21,43,0.5)] list-disc list-outside pl-15"
          >
            <li>
              <span class="text-#1B152B">Local Top-Up </span>
            </li>
            <li>
              <span class="text-#1B152B">Overseas Top-Up (EUR / USD / USDT)</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-944 h-72 bg-[#93E8D3] border-rd-8 ext-16 lh-24 text-center flex items-center justify-center px-25"
      >
        In certain scenarios, merchants may require higher disbursement (pay-out) volumes,
        making timely balance top-ups essential to ensure smooth transaction processing.
      </div>
    </div>
  </div>
</template>
