<script setup>
import Loading from "@/components/Loading.vue";
import { AnimalCat24Regular, AnimalDog24Regular } from "@vicons/fluent";
import { CloseOutline } from "@vicons/ionicons5";
import { WomanOutlined, ManOutlined, HeartFilled } from "@vicons/antd";
import { NIcon, NSwitch, NAvatar, NImage } from "naive-ui";
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import dogDefault from "@/assets/dogDefault.png";
// import api.json
// import api from "@/assets/api.json";
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
const loadData = async (howmuch) => {
  for (let i = 0; i < howmuch; i++) {
    if (api[i].album_file == '') {
      el.value.push({ 圖: dogDefault, 種類: api[i].animal_kind });
    } else {
      el.value.push({ 圖: api[i].album_file, 種類: api[i].animal_kind });
    }
  }
}
onBeforeMount(() => {
  loadData(20);
  loading.value = false;
});

//Loading中
const loading = ref(true);
//移除最上面圖片
function removeTopImg() {
  el.value.pop();
}
//過濾資料-狗
function filterDog() {
  const filter = el.value.filter((item) => {
    return item.種類 == "狗";
  });
  el.value = filter;
}
</script>

<template>
  <div class="flex bg-bg h-screen">
    <div class="lg:w-[413px] w-full z-10 bg-bg_match py-5 pl-20 shadow-md drop-shadow-xl">
      <!-- 我想尋找 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">我想尋找</p>
        <button
          @click="clickFindBtn('cats')"
          :class="{ 'btn-clicked': wantToFind.cats }"
          class="btn-lg"
        >
          <n-icon size="36">
            <AnimalCat24Regular />
          </n-icon>
        </button>
        <button
          @click="clickFindBtn('dogs')"
          :class="{ 'btn-clicked': wantToFind.dogs }"
          class="btn-lg"
        >
          <n-icon size="36">
            <AnimalDog24Regular />
          </n-icon>
        </button>
        <button
          @click="clickFindBtn('any')"
          :class="{ 'btn-clicked': wantToFind.any }"
          class="btn-lg text-4xl"
        >不拘</button>
      </section>
      <!-- 性別 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">性別</p>
        <button
          @click="clickGenderBtn('male')"
          :class="{ 'btn-clicked': gender.male }"
          class="btn-lg text-PeNi_blue"
        >
          <n-icon size="36">
            <ManOutlined />
          </n-icon>
        </button>
        <button
          @click="clickGenderBtn('female')"
          :class="{ 'btn-clicked': gender.female }"
          class="btn-lg"
        >
          <n-icon size="36" class="text-PeNi_pink">
            <WomanOutlined />
          </n-icon>
        </button>
        <button
          @click="clickGenderBtn('any')"
          :class="{ 'btn-clicked': gender.any }"
          class="btn-lg text-4xl"
        >不拘</button>
      </section>
      <!-- 年齡 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">年齡</p>
        <button
          @click="clickcatAgeBtn(key)"
          v-for="(value, key) in catAges"
          :key="key"
          class="btn-sm"
          :class="{ 'btn-clicked': value }"
        >{{ key }}</button>
      </section>
      <!-- 顏色 -->
      <section>
        <p class="font-PeNi_black mb-1 mt-2 text-base">顏色</p>
        <button
          @click="clickCatColorsBtn(key)"
          v-for="(value, key) in catColors"
          :key="key"
          class="btn-sm mt-2"
          :class="{ 'btn-clicked': value }"
        >{{ key }}</button>
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
    <div v-if="loading" class="mx-auto">
      <Loading />
    </div>
    <div v-if="!loading" class="mx-auto grid place-items-center">
      <!-- 卡片 -->
      <div
        class="relative h-[402.48px] w-[231.97px] rotate-[18deg] rounded-[32px] bg-white pt-11 drop-shadow-xl"
      >
        <div
          class="absolute h-[430.24px] w-[253.74px] -translate-y-12 -translate-x-12 -rotate-6 rounded-[32px] bg-white drop-shadow-xl"
        >
          <span class="absolute left-[20%] top-[43%] -rotate-12 text-center text-PeNi_pink">
            <p>很抱歉 !</p>
            <p>已沒有單身狗、單身貓了，</p>請嘗試修改篩選條件。
          </span>
          <TransitionGroup name="slide-fade" tag="div">
            <div
              v-for="(item, index) in el"
              :key="index"
              class="absolute h-[461.96px] w-[287.84px] translate-y-1 -translate-x-3 -rotate-[15deg] rounded-[32px] border-[12px] border-white bg-bg"
            >
              <n-image
                class="rounded-[24px] h-full w-full"
                :src="item.圖"
                show-toolbar-tooltip
                alt="petImg"
              />
            </div>
          </TransitionGroup>
          <button
            v-if="el.length > 0"
            @click="removeTopImg()"
            class="absolute -bottom-8 left-16 h-[50px] w-[50px] rounded-full bg-white text-2xl font-medium text-PeNi_black shadow-md -rotate-[12deg] hover:text-white hover:bg-PeNi_black"
          >
            <n-icon size="30" class="flex pt-1">
              <CloseOutline />
            </n-icon>
          </button>
          <button
            v-if="el.length > 0"
            class="absolute bottom-3 -right-11 h-[50px] w-[50px] rounded-full bg-white text-2xl font-medium text-PeNi_pink shadow-md -rotate-[12deg] hover:text-white hover:bg-PeNi_pink"
          >
            <n-icon size="30" class="flex pt-1">
              <HeartFilled />
            </n-icon>
          </button>
        </div>
      </div>
      <!-- 隨機推薦 -->
      <div>
        <div
          v-for="i in 3"
          class="mr-5 inline-flex h-[70px] w-[247px] rounded-[23px] bg-white px-3 py-2 shadow-md"
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
              <p class="text-xl font-black">157763</p>
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