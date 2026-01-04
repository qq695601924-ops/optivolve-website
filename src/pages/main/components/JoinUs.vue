<script setup lang="ts">
const step = ["Contact Us", "Sign contract", "Integration", "Product release"];

const form = ref({
  name: "",
  email: "",
  phone: "",
  companyName: "",
  companyWebsite: "",
  message: "",
});

const handleSubmit = () => {
  console.log(form.value);
};
</script>

<template>
  <div class="py-150">
    <div
      class="area h-666 rounded-16 bg-#F4FBF9 px-40 py-40 flex justify-between items-center"
    >
      <div class="w-500 flex flex-col gap-30">
        <div class="text-48 font-semibold">Ready to Join Us?</div>
        <div class="text-15 lh-24 text-[rgba(27,21,43,0.6)]">
          Join thousands of businesses that trust Vexora for their payment and recharge
          needs.
        </div>
        <div class="flex flex-col gap-20 step-wrapper">
          <div v-for="(item, index) in step" :key="item" class="h-48 relative lh-48">
            <div
              class="bg-#F4FBF9 w-48 h-48 rounded-full text-24 text-#47D7AC flex items-center justify-center absolute left-0 top-50% -translate-y-50%"
              style="border: 2px solid #47d7ac"
            >
              {{ index + 1 }}
            </div>
            <div class="text-20 pl-60">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-567 h-586 bg-[rgba(71,215,172,0.1)] rounded-16 px-40 py-40">
        <div class="flex items-center justify-between mb-24">
          <input
            type="text"
            placeholder="Name"
            class="custom-input w-230 h-54 rounded-8 bg-#FFFFFF border-none px-20"
            v-model="form.name"
          />
          <input
            type="text"
            placeholder="Email"
            class="custom-input w-230 h-54 rounded-8 bg-#FFFFFF border-none px-20"
            v-model="form.email"
          />
        </div>
        <div class="mb-24">
          <input
            type="text"
            placeholder="Phone"
            class="custom-input w-full h-54 rounded-8 bg-#FFFFFF border-none px-20"
            v-model="form.phone"
          />
        </div>
        <div class="mb-24">
          <input
            type="text"
            placeholder="Company Name"
            class="custom-input w-full h-54 rounded-8 bg-#FFFFFF border-none px-20"
            v-model="form.companyName"
          />
        </div>
        <div class="mb-24">
          <input
            type="text"
            placeholder="Company Website / Product Link"
            class="custom-input w-full h-54 rounded-8 bg-#FFFFFF border-none px-20"
            v-model="form.companyWebsite"
          />
        </div>
        <div class="mb-24">
          <textarea
            placeholder="Message"
            class="custom-input w-full h-100 rounded-8 bg-#FFFFFF border-none px-20 py-20 resize-none"
            v-model="form.message"
          ></textarea>
        </div>
        <div
          class="w-full h-60 rounded-8 bg-#47D7AC flex items-center justify-center text-20 text-#211551 font-semibold"
          @click="handleSubmit"
        >
          Contact Us
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.step-wrapper {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 100%;
    background: #47d7ac;
  }
}
.custom-input {
  &::placeholder {
    color: rgba(40, 37, 29, 0.5);
  }
  &:focus {
    outline: none;
  }
}
</style>
