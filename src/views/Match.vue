<script setup>
import Loading from "@/components/Loading.vue";
import { NIcon, NSwitch, NAvatar, NImage } from "naive-ui";
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "@/firebase.js";
import { useStore } from "@/store/store.js";

import dogDefault from "@/assets/dogDefault.png";


const store = useStore();

//抓取資料
const getData = async () => {
  const datas = await getDocs(collection(db, store.UserEmail));
  const data = datas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  store.AllData = data;
};
//swich button外觀
const railStyle = ({ checked }) => {
  const style = {};
  if (checked) {
    style.background = "#FDAAA2";
  }
  return style;
};

//我想尋找
const wantToFind = reactive({ dogs: false, cats: false, any: true });
function clickFindBtn(e) {
  switch (e) {
    case "dogs":
      wantToFind.dogs = true;
      wantToFind.cats = false;
      wantToFind.any = false;
      filterDog();
      break;
    case "cats":
      wantToFind.cats = true;
      wantToFind.dogs = false;
      wantToFind.any = false;
      break;
    case "any":
      wantToFind.any = true;
      wantToFind.dogs = false;
      wantToFind.cats = false;
      break;
  }
}
//性別
const gender = reactive({ male: false, female: false, any: true });
function clickGenderBtn(e) {
  switch (e) {
    case "male":
      gender.male = true;
      gender.female = false;
      gender.any = false;
      break;
    case "female":
      gender.female = true;
      gender.male = false;
      gender.any = false;
      break;
    case "any":
      gender.any = true;
      gender.male = false;
      gender.female = false;
      break;
  }
}
//年齡
const catAges = reactive({ 幼齡: false, 成年: false, 不拘: true });
function clickcatAgeBtn(e) {
  switch (e) {
    case "幼齡":
      catAges.幼齡 = true;
      catAges.成年 = false;
      catAges.不拘 = false;
      break;
    case "成年":
      catAges.成年 = true;
      catAges.幼齡 = false;
      catAges.不拘 = false;
      break;
    case "不拘":
      catAges.不拘 = true;
      catAges.幼齡 = false;
      catAges.成年 = false;
      break;
  }
}
//重置顏色狀態: false
function ClearCatColors() {
  for (const key in catColors) {
    if (catColors[key] == true) {
      catColors[key] = false;
    }
  }
}
//顏色
const catColors = reactive({
  白貓: false,
  黑貓: false,
  乳牛貓: false,
  橘貓: false,
  虎斑貓: false,
  三色貓: false,
  玳瑁貓: false,
  不拘: true,
});
function clickCatColorsBtn(e) {
  switch (e) {
    case "白貓":
      ClearCatColors();
      catColors.白貓 = true;
      break;
    case "黑貓":
      ClearCatColors();
      catColors.黑貓 = true;
      break;
    case "乳牛貓":
      ClearCatColors();
      catColors.乳牛貓 = true;
      break;
    case "橘貓":
      ClearCatColors();
      catColors.橘貓 = true;
      break;
    case "虎斑貓":
      ClearCatColors();
      catColors.虎斑貓 = true;
      break;
    case "三色貓":
      ClearCatColors();
      catColors.三色貓 = true;
      break;
    case "玳瑁貓":
      ClearCatColors();
      catColors.玳瑁貓 = true;
      break;
    case "不拘":
      ClearCatColors();
      catColors.不拘 = true;
      break;
  }
}
//api資料
const el = ref([]);
//載入資料
const loadData = async () => {

}
onBeforeMount(() => {
  getData();
  loading.value = false;
});
onMounted(() => {
  el.value = store.AllData;
  console.log(store.AllData);
});
//Loading中
const loading = ref(true);
//移除最上面圖片
function removeTopImg() {
  el.value.pop();
}
//愛心按鈕
const love = ['transition', 'ease-in-out', 'delay-150', 'hover:translate-x-[100px]', 'duration-300'];
//過濾資料-狗
function filterDog() {
  const filter = el.value.filter((item) => {
    return item.種類 == "狗";
  });
  el.value = filter;
}
//切換篩選和圖片
const filterPage = ref(false);
</script>

<template>
  <div class="flex h-screen">
    <div :class="{ 'hidden': filterPage }"
      class="w-full lg:block lg:w-[450px] z-10 bg-bg_match lg:py-5 lg:pl-20 lg:shadow-md lg:drop-shadow-xl">
      <!-- 我想尋找 -->
      <div class="lg:hidden flex justify-around items-center bg-white shadow h-[92px]">
        <svg @click="filterPage = true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z"></path>
        </svg>
        <p class="text-lg font-black">篩選</p>
        <div></div>
      </div>
      <div class="lg:px-0 lg:pt-0 px-9 pt-9 pb-20 md:px-20 md:pt-4 md:pb-0">
        <section>
          <p class="font-PeNi_black mb-1 mt-2 text-base">我想尋找</p>
          <div class="grid grid-cols-3">
            <button @click="clickFindBtn('cats')" :class="{ 'btn-clicked': wantToFind.cats }" class="btn-lg">
              <n-icon size="36">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  role="img" class="iconify iconify--ph" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256">
                  <path fill="currentColor"
                    d="M96 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm60-76.7V136c0 52.9-46.7 96-104 96S24 188.9 24 136V51.3A16 16 0 0 1 51.3 40l17.2 17.2a106.2 106.2 0 0 1 24.3-11.5l1.6-.5a111.2 111.2 0 0 1 67.2 0l1.6.5a106.2 106.2 0 0 1 24.3 11.5L204.7 40A16 16 0 0 1 232 51.3Zm-16 0l-21.9 22a8.1 8.1 0 0 1-10.5.7a84.1 84.1 0 0 0-15.6-9.2V88a8 8 0 0 1-16 0V59.1a95.7 95.7 0 0 0-16-2.8V88a8 8 0 0 1-16 0V56.3a95.7 95.7 0 0 0-16 2.8V88a8 8 0 0 1-16 0V64.8A84.1 84.1 0 0 0 72.4 74a8.1 8.1 0 0 1-10.5-.7L40 51.3V136c0 41.7 35.2 76 80 79.7v-20.4l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3v20.4c44.8-3.7 80-38 80-79.7Z" />
                </svg>
              </n-icon>
            </button>
            <button @click="clickFindBtn('dogs')" :class="{ 'btn-clicked': wantToFind.dogs }" class="btn-lg">
              <n-icon size="36">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  role="img" class="iconify iconify--ph" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256">
                  <path fill="currentColor"
                    d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z" />
                </svg>
              </n-icon>
            </button>
            <button @click="clickFindBtn('any')" :class="{ 'btn-clicked': wantToFind.any }"
              class="btn-lg text-2xl">不拘</button>
          </div>
        </section>
        <!-- 性別 -->
        <section>
          <p class="font-PeNi_black mb-1 mt-2 text-base">性別</p>
          <div class="grid grid-cols-3">
            <button @click="clickGenderBtn('male')" :class="{ 'btn-clicked': gender.male }"
              class="btn-lg text-PeNi_blue">
              <n-icon size="36">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  role="img" class="iconify iconify--ant-design" width="32" height="32"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M874 120H622c-3.3 0-6 2.7-6 6v56c0 3.3 2.7 6 6 6h160.4L583.1 387.3c-50-38.5-111-59.3-175.1-59.3c-76.9 0-149.3 30-203.6 84.4S120 539.1 120 616s30 149.3 84.4 203.6C258.7 874 331.1 904 408 904s149.3-30 203.6-84.4C666 765.3 696 692.9 696 616c0-64.1-20.8-124.9-59.2-174.9L836 241.9V402c0 3.3 2.7 6 6 6h56c3.3 0 6-2.7 6-6V150c0-16.5-13.5-30-30-30zM408 828c-116.9 0-212-95.1-212-212s95.1-212 212-212s212 95.1 212 212s-95.1 212-212 212z" />
                </svg>
              </n-icon>
            </button>
            <button @click="clickGenderBtn('female')" :class="{ 'btn-clicked': gender.female }" class="btn-lg">
              <n-icon size="36" class="text-PeNi_pink">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  role="img" class="iconify iconify--ant-design" width="32" height="32"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z" />
                </svg>
              </n-icon>
            </button>
            <button @click="clickGenderBtn('any')" :class="{ 'btn-clicked': gender.any }"
              class="btn-lg text-2xl">不拘</button>
          </div>
        </section>
        <!-- 年齡 -->
        <section>
          <p class="font-PeNi_black mb-1 mt-2 text-base">年齡</p>
          <div class="grid grid-cols-3">
            <button @click="clickcatAgeBtn(key)" v-for="(value, key) in catAges" :key="key" class="btn-sm"
              :class="{ 'btn-clicked': value }">{{ key }}</button>
          </div>
        </section>
        <!-- 顏色 -->
        <section>
          <p class="font-PeNi_black mb-1 mt-2 text-base">顏色</p>
          <div class="grid grid-cols-3">
            <button @click="clickCatColorsBtn(key)" v-for="(value, key) in catColors" :key="key" class="btn-sm mt-2"
              :class="{ 'btn-clicked': value }">{{ key }}</button>
          </div>
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
          class="mt-2 h-[50px] w-full rounded-2xl bg-PeNi_black text-base font-medium text-white hover:border hover:bg-white hover:text-black">套用</button>
      </div>
    </div>
    <div v-if="loading" class="mx-auto">
      <Loading />
    </div>
    <div v-if="!loading" :class="{ 'hidden': !filterPage }" class="mx-auto lg:grid  place-items-center">
      <!-- 卡片 -->
      <div class="lg:hidden flex justify-around items-center h-[92px]">
        <svg @click="filterPage = false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32"
          preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
          <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
            <path d="M12.9998 8L6 14L12.9998 21"></path>
            <path
              d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984">
            </path>
          </g>
        </svg>
        <p class="text-lg font-black">篩選</p>
        <div></div>
      </div>
      <div class="relative h-[402.48px] w-[231.97px] rotate-[18deg] rounded-[32px] bg-white pt-11 drop-shadow-xl">
        <div
          class="absolute h-[430.24px] w-[253.74px] -translate-y-12 -translate-x-12 -rotate-6 rounded-[32px] bg-white drop-shadow-xl">
          <span class="absolute left-[20%] top-[43%] -rotate-12 text-center text-PeNi_pink">
            <p>很抱歉 !</p>
            <p>已沒有單身狗、單身貓了，</p>請嘗試修改篩選條件。
          </span>
          <TransitionGroup name="slide-fade" tag="div">
            <div v-for="(item, index) in el" :key="index"
              class="absolute h-[461.96px] w-[287.84px] translate-y-1 -translate-x-3 -rotate-[15deg] rounded-[32px] border-[12px] border-white bg-bg"
              :class="love">
              <div>
                <n-image class="rounded-[24px] w-full h-full object-center object-cover" :src="item.PicUrl"
                  show-toolbar-tooltip alt="petImg" />
              </div>

            </div>
          </TransitionGroup>
          <button v-if="el.length > 0" @click="removeTopImg()"
            class="absolute -bottom-8 left-16 h-[50px] w-[50px] rounded-full bg-white text-2xl font-medium text-PeNi_black shadow-md -rotate-[12deg] hover:text-white hover:bg-PeNi_black">
            <n-icon size="30" class="flex pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" />
              </svg>
            </n-icon>
          </button>
          <button v-if="el.length > 0"
            class="absolute bottom-3 -right-11 h-[50px] w-[50px] rounded-full bg-white text-2xl font-medium text-PeNi_pink shadow-md -rotate-[12deg] hover:text-white hover:bg-PeNi_pink">
            <n-icon size="30" class="flex pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--mdi" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
              </svg>
            </n-icon>
          </button>
        </div>
      </div>
      <!-- 隨機推薦 -->
      <div>
        <div v-for="i in 3" class="mr-5 inline-flex h-[70px] w-[247px] rounded-[23px] bg-white px-3 py-2 shadow-md">
          <div class="grid items-center">
            <n-avatar round :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          </div>
          <div class="grid grid-rows-2">
            <div class="inline-flex pl-2">
              <p class="text-xl font-black">157763</p>
              <n-icon size="30" class="text-PeNi_pink">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  role="img" class="iconify iconify--ant-design" width="32" height="32"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z" />
                </svg>
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
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-950px) translateY(200px) rotate(-40deg);
}
</style>