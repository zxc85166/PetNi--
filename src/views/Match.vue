<script setup>
import ButtonRepoVue from "@/components/ButtonRepo.vue";
import { Cat } from "@vicons/fa";
import { NIcon, NSwitch } from 'naive-ui';
const railStyle = ({
  checked
}) => {
  const style = {};
  if (checked) {
    style.background = "#FDAAA2";
  }
  return style;
}
</script>

<template>
  <div class="bg-bg">
    <div class="shadow-md drop-shadow-lg pl-20 py-5 w-[413px] bg-bg_match">
      <!-- 我想尋找 -->
      <section>
        <p class="font-black mb-1 mt-2 text-base">我想尋找</p>
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
        <p class="font-black mb-1 mt-2 text-base">性別</p>
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
        <p class="font-black mb-1 mt-2 text-base">年齡</p>
        <button class="btn-sm">幼齡</button>
        <button class="btn-sm">成年</button>
        <button class="btn-sm">不拘</button>
      </section>
      <!-- 顏色 -->
      <section>
        <p class="font-black mb-1 mt-2 text-base">顏色</p>
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
      <section class="py-3 flex justify-between items-center">
        <span class="font-black mb-1 mt-2 text-base">搜尋附近</span>
        <n-switch size="medium" class="pr-10" :rail-style="railStyle" />
      </section>
      <!-- 互動音效 -->
      <section class="py-3 flex justify-between items-center">
        <span class="font-black mb-1 mt-2 text-base">互動音效</span>
        <n-switch size="medium" class="pr-10" :rail-style="railStyle" />
      </section>
    </div>
  </div>
</template>
<style scoped>
</style>