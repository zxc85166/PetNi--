<script setup>
import ButtonRepoVue from "@/components/ButtonRepo.vue";
import { AnimalCat24Regular } from "@vicons/fluent";
import { AnimalDog24Regular } from "@vicons/fluent";
import { WomanOutlined, ManOutlined } from "@vicons/antd";
import { NIcon, NSwitch, NAvatar, NImage } from "naive-ui";
import { ref, onMounted } from 'vue'

// import api.json
import api from "@/assets/api.json";
const railStyle = ({ checked }) => {
  const style = {};
  if (checked) {
    style.background = "#FDAAA2";
  }
  return style;
};
//有無被點擊
const isClicked = ref(false);
//點擊篩選按鈕
function clickFilterBtn(e) {
  // console.log(e.target.innerHTML);
  isClicked.value = !isClicked.value;
}
const el = ref(null);

onMounted(() => {
  el.value = api[3].album_file;
})

</script>

<template>
  <div class="flex h-full bg-bg">
    <div class="w-[413px] bg-bg_match py-5 pl-20 shadow-md drop-shadow-xl">
      <!-- 我想尋找 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">我想尋找</p>
        <button @click="clickFilterBtn($event)" :class="{ 'btn-clicked': isClicked }" class="btn-lg">
          <n-icon size="36">
            <AnimalCat24Regular />
          </n-icon>
        </button>
        <button class="btn-lg">
          <n-icon size="36">
            <AnimalDog24Regular />
          </n-icon>
        </button>
        <button class="btn-lg text-4xl">不拘</button>
      </section>
      <!-- 性別 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">性別</p>
        <button class="btn-lg text-PeNi_blue">
          <n-icon size="36">
            <ManOutlined />
          </n-icon>
        </button>
        <button class="btn-lg">
          <n-icon size="36" class="text-PeNi_pink">
            <WomanOutlined />
          </n-icon>
        </button>
        <button class="btn-lg text-4xl">不拘</button>
      </section>
      <!-- 年齡 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">年齡</p>
        <button @click="clickFilterBtn($event)" class="btn-sm">幼齡</button>
        <button class="btn-sm">成年</button>
        <button class="btn-sm">不拘</button>
      </section>
      <!-- 顏色 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">顏色</p>
        <button class="btn-sm">白貓</button>
        <button class="btn-sm">黑貓</button>
        <button class="btn-sm">乳牛貓</button>
        <button class="btn-sm mt-2">橘貓</button>
        <button class="btn-sm mt-2">虎斑貓</button>
        <button class="btn-sm mt-2">三色貓</button>
        <button class="btn-sm mt-2">玳瑁貓</button>
        <button class="btn-sm mt-2">不拘</button>
      </section>
      <!-- 搜尋附近 -->
      <section class="flex items-center justify-between py-3">
        <span class="font-PeNi_black font mb-1 mt-2 text-base font-medium">搜尋附近</span>
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
      >套用</button>
    </div>

    <div class="mx-auto grid place-items-center">
      <!-- 卡片 -->
      <div
        class="pt-11 relative h-[402.48px] w-[231.97px] rotate-[18deg] rounded-[32px] bg-white drop-shadow-xl"
      >
        <div
          class="absolute h-[430.24px] w-[253.74px] -translate-y-12 -translate-x-12 -rotate-6 rounded-[32px] bg-white drop-shadow-xl"
        >
          <span class="absolute left-[20%] top-[43%] -rotate-12 text-center text-PeNi_pink">
            <p>很抱歉 !</p>
            <p>已沒有單身狗、單身貓了，</p>請嘗試修改篩選條件。
          </span>
          <div
            class="absolute h-[461.96px] w-[287.84px] translate-y-1 border-[12px] border-white -translate-x-3 -rotate-[15deg] rounded-[32px] bg-white drop-shadow-xl"
          >
            <n-image class="rounded-[24px]" :src="el" show-toolbar-tooltip alt="petImg" />
          </div>
        </div>
      </div>
      <!-- 隨機推薦 -->
      <div>
        <div
          v-for="i in 3"
          class="bg-white px-3 py-2 h-[70px] w-[247px] shadow-md rounded-[23px] inline-flex mr-5"
        >
          <div class="grid items-center">
            <n-avatar
              round
              :size="48"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </div>
          <div class="grid grid-rows-2">
            <div class="inline-flex pl-2">
              <p class="font-black text-xl">157763</p>
              <n-icon size="30" class="text-PeNi_pink">
                <WomanOutlined />
              </n-icon>
            </div>
            <div class="pl-2 pt-1">
              <p class="text-PeNi_grey">臺南市南區</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
