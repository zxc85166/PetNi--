<script setup>
import { ref } from "vue";
import { NIcon } from "naive-ui";
import { GreaterThanOutlined, LessThanOutlined } from "@vicons/material";

const switchState = ref(false);
//切換switchState
function switchStateChange(type) {
    if (type == 'cat' && switchState.value == false) {
        index.value = 0;
        switchState.value = true;
    }
    if (type == 'dog' && switchState.value == true) {
        index.value = 0;
        switchState.value = false;
    }
}
const catImgs = ['/Theme_Pavilion_pics/橘貓.png', '/Theme_Pavilion_pics/三花貓.png', '/Theme_Pavilion_pics/白貓.png', '/Theme_Pavilion_pics/黑貓.png', '/Theme_Pavilion_pics/乳牛貓.png', '/Theme_Pavilion_pics/虎斑貓.png', '/Theme_Pavilion_pics/玳瑁貓.png'];
const catInfos = ['個性膽小、貪吃、愛講話，十隻橘貓九隻胖，另一隻...超胖。', '個性黏人、愛撒嬌，因為遺傳基因的關係，99%以上都是母貓。', '優雅乖巧、個性獨立。撒嬌時，會輕聲喵喵叫，或是輕拍主人討摸摸。', '反差萌、愛撒嬌、聰明、貼心、學習力強、會認人，對牠好，牠會記在心裡。', '貓界的哈士奇、個性好動，容易跟其他貓打成一片。', '野性美、狩獵高手、傲嬌脾氣、警戒心強，一旦被牠認定，就會很依賴主子。', '個性善良、脾氣最好、愛撒嬌、不挑食，99%以上都是母貓，親人也親貓。'];
const catNames = ['橘貓', '三花貓', '白貓', '黑貓', '乳牛貓', '虎斑貓', '玳瑁貓'];
const dogImgs = ['/Theme_Pavilion_pics/三色犬.png', '/Theme_Pavilion_pics/紅棕犬.png', '/Theme_Pavilion_pics/黃犬.png', '/Theme_Pavilion_pics/白犬.png', '/Theme_Pavilion_pics/黑犬.png', '/Theme_Pavilion_pics/雙色犬.png', '/Theme_Pavilion_pics/虎斑犬.png', '/Theme_Pavilion_pics/灰犬.png'];
const dogInfos = ['個性老實、喜歡社交，溫順黏人的小跟屁蟲。', '個性獨立、外向、喜歡與人互動。', '溫和友善、忠誠護主、乖巧聽話、不太主動攻擊人。', '憂雅氣質、乖巧安靜。白毛容易髒，需要花心思照顧。', '個性穩重、敏捷聰明、學習力強。', '活潑好動、憨厚、愛玩、天生少根筋、無厘頭，親人也親狗。', '身上有著老虎斑點，面惡心善、忠心勇敢、聰明機警。', '善良優雅、好奇心重、喜歡嘗試新鮮事物、樂於取悅主人。'];
const dogNames = ['三色犬', '紅棕犬', '黃犬', '白犬', '黑犬', '雙色犬', '虎斑犬', '灰犬'];

const index = ref(0);
const showCatImg = ref(catImgs[index.value]);
const showCatInfo = ref(catInfos[index.value]);
const showCatName = ref(catNames[index.value]);
const showDogImg = ref(dogImgs[index.value]);
const showDogInfo = ref(dogInfos[index.value]);
const showDogName = ref(dogNames[index.value]);

function changeImg(type) {
    if (type == 'left') {
        index.value = index.value - 1;
        if (index.value < 0 && switchState.value == true) {
            index.value = catImgs.length - 1;
        } else if (index.value < 0 && switchState.value == false) {
            index.value = dogImgs.length - 1;
        }
    }
    if (type == 'right') {
        index.value = index.value + 1;
        if (index.value > catImgs.length - 1 && switchState.value == true) {
            index.value = 0;
        } else if (index.value > dogImgs.length - 1 && switchState.value == false) {
            index.value = 0;
        }
    }
    showCatImg.value = catImgs[index.value];
    showCatInfo.value = catInfos[index.value];
    showCatName.value = catNames[index.value];
    showDogImg.value = dogImgs[index.value];
    showDogInfo.value = dogInfos[index.value];
    showDogName.value = dogNames[index.value];
}
//切換圖片

</script>
<template>
    <div class="bg-bg w-full min-h-screen grid lg:grid-cols-2 place-items-center">
        <div class="bg-white shadow w-full lg:hidden absolute top-0 h-[62px] md:h-[92px]"></div>
        <!-- 背景白色浮水印 -->
        <span
            v-if="!switchState"
            class="text-[324px] hidden lg:flex absolute font-black text-white"
        >狗</span>
        <span v-else class="text-[324px] hidden lg:flex absolute font-black text-white">貓</span>
        <!-- 資訊與品種 -->
        <div class="order-2 lg:order-1 px-3">
            <p v-if="switchState" class="text-3xl lg:text-8xl font-black">{{ showCatName }}</p>
            <p v-else class="text-3xl lg:text-8xl font-black">{{ showDogName }}</p>
            <p
                v-if="switchState"
                class="text-lg pt-2 lg:pt-12 font-bold text-PeNi_grey leading-7 tracking-wider"
            >{{ showCatInfo }}</p>
            <p
                v-else
                class="text-lg pt-2 lg:pt-12 font-bold text-PeNi_grey leading-7 tracking-wider"
            >{{ showDogInfo }}</p>
            <!-- 搜尋XX貓犬 -->
            <div
                class="bg-white lg:mx-0 mx-auto shadow h-[46px] w-[196px] py-1 px-[10px] rounded-2xl mt-10 font-bold flex items-center text-lg"
            >
                <div class="grow flex justify-center">搜尋{{ showDogName }}</div>
                <div class="flex-none">
                    <svg width="40" height="40" viewBox="0 0 24 24">
                        <g fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-1 5a4 4 0 1 0 2.032 7.446l1.76 1.761a1 1 0 0 0 1.415-1.414l-1.761-1.761A4 4 0 0 0 11 7zm0 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <!-- 圖片 -->
        <div class="z-10 absolute w-fit lg:right-1/4">
            <img v-if="switchState" :src="showCatImg" alt="貓圖" />
            <img v-else :src="showDogImg" alt="狗圖" />
        </div>
        <div class="order-1 h-full lg:order-2">
            <!-- 切換貓狗按鈕 -->
            <div
                class="inline-flex lg:mt-10 z-20 lg:relative absolute md:top-10 left-36 md:left-[45%] top-5 mb-8 cursor-pointer items-center justify-center text-center w-[132px] h-[30px] bg-white rounded-[10px] p-2 shadow"
            >
                <div
                    @click="switchStateChange('cat')"
                    :class="{ 'switch-active': switchState }"
                    class="w-[62px] hover:font-black flex items-center justify-center h-[26px] rounded-[10px]"
                >喵星人</div>
                <div
                    @click="switchStateChange('dog')"
                    :class="{ 'switch-active': !switchState }"
                    class="w-[62px] hover:font-black h-[26px] rounded-[10px] flex items-center justify-center"
                >汪星人</div>
            </div>
            <!-- 切換照片按鈕 -->
            <div class="pl-24 pt-60 lg:pt-96">
                <button
                    @click="changeImg('left')"
                    class="h-[40px] z-30 w-[40px] md:h-[50px] md:w-[50px] lg:relative absolute left-4 rounded-[14px] bg-white text-2xl font-medium text-PeNi_black shadow-md hover:text-white hover:bg-PeNi_black"
                >
                    <n-icon size="30" class="flex pt-1">
                        <LessThanOutlined />
                    </n-icon>
                </button>
                <button
                    @click="changeImg('right')"
                    class="h-[40px] z-30 w-[40px] md:h-[50px] md:w-[50px] lg:relative absolute right-4 ml-10 rounded-[14px] bg-white text-2xl font-medium text-PeNi_black shadow-md hover:text-white hover:bg-PeNi_black"
                >
                    <n-icon size="30" class="flex pt-1">
                        <GreaterThanOutlined />
                    </n-icon>
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}
</style>