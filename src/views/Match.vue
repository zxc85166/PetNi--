<script setup>
import ButtonRepoVue from "@/components/ButtonRepo.vue";
import { Cat } from "@vicons/fa";
import { NIcon, NSwitch } from "naive-ui";
const railStyle = ({ checked }) => {
  const style = {};
  if (checked) {
    style.background = "#FDAAA2";
  }
  return style;
};
</script>

<template>
  <div class="flex max-h-screen bg-bg">
    <div class="w-[413px] bg-bg_match py-5 pl-20 shadow-md drop-shadow-xl">
      <!-- 我想尋找 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">我想尋找</p>
        <button class="btn-lg">
          <n-icon size="36">
            <Cat />
          </n-icon>
        </button>
        <button class="btn-lg">
          <n-icon size="36">
            <Cat />
          </n-icon>
        </button>
        <button class="btn-lg text-4xl">不拘</button>
      </section>
      <!-- 性別 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">性別</p>
        <button class="btn-lg">
          <n-icon size="36">
            <Cat />
          </n-icon>
        </button>
        <button class="btn-lg">
          <n-icon size="36">
            <Cat />
          </n-icon>
        </button>
        <button class="btn-lg">
          <n-icon size="36">
            <Cat />
          </n-icon>
        </button>
      </section>
      <!-- 年齡 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">年齡</p>
        <button class="btn-sm">幼齡</button>
        <button class="btn-sm">成年</button>
        <button class="btn-sm">不拘</button>
      </section>
      <!-- 顏色 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">顏色</p>
        <button class="btn-sm">白貓</button>
        <button class="btn-sm">黑貓</button>
        <button class="btn-sm">乳牛貓</button>
        <button class="btn-sm mt-2">乳牛貓</button>
        <button class="btn-sm mt-2">乳牛貓</button>
        <button class="btn-sm mt-2">乳牛貓</button>
        <button class="btn-sm mt-2">玳瑁貓</button>
        <button class="btn-sm mt-2">不拘</button>
      </section>
      <!-- 搜尋附近 -->
      <section class="flex items-center justify-between py-3">
        <span class="font-PeNi_black font mb-1 mt-2 text-base font-medium"
          >搜尋附近</span
        >
        <n-switch size="medium" class="pr-10" :rail-style="railStyle" />
      </section>
      <!-- 互動音效 -->
      <section class="flex items-center justify-between py-3">
        <span class="font-PeNi_black mb-1 mt-2 text-base">互動音效</span>
        <n-switch size="medium" class="pr-10" :rail-style="railStyle" />
      </section>
      <!-- 套用 -->
      <button
        class="mt-2 h-[50px] w-[290px] rounded-2xl bg-PeNi_black text-base font-medium text-white hover:border hover:bg-white hover:text-black"
      >
        套用
      </button>
    </div>
    <div class="mx-auto grid place-items-center">
      <div
        class="relative h-[402.48px] w-[231.97px] rotate-[18deg] rounded-[32px] bg-white drop-shadow-xl"
      >
        <div
          class="absolute h-[430.24px] w-[253.74px] -translate-y-12 -translate-x-12 -rotate-6 rounded-[32px] bg-white drop-shadow-xl"
        >
          <span
            class="absolute left-[20%] top-[43%] -rotate-12 text-center text-PeNi_pink"
          >
            <p>很抱歉 !</p>
            <p>已沒有單身狗、單身貓了，</p>
            請嘗試修改篩選條件。
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
