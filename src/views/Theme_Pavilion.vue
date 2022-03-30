<script setup>
import { ref } from "vue";
import { NIcon } from "naive-ui";
import { GreaterThanOutlined, LessThanOutlined } from "@vicons/material";
import 三花貓 from "/Theme_Pavilion_pics/三花貓.png";
import 白貓 from "/Theme_Pavilion_pics/白貓.png";
import 乳牛貓 from "/Theme_Pavilion_pics/乳牛貓.png";
import 虎斑貓 from "/Theme_Pavilion_pics/虎斑貓.png";
import 玳瑁貓 from "/Theme_Pavilion_pics/玳瑁貓.png";
import 黑貓 from "/Theme_Pavilion_pics/黑貓.png";
import 橘貓 from "/Theme_Pavilion_pics/橘貓.png";
import 三色犬 from "/Theme_Pavilion_pics/三色犬.png";
import 紅棕犬 from "/Theme_Pavilion_pics/紅棕犬.png";
import 黃犬 from "/Theme_Pavilion_pics/黃犬.png";
import 白犬 from "/Theme_Pavilion_pics/白犬.png";
import 黑犬 from "/Theme_Pavilion_pics/黑犬.png";
import 雙色犬 from "/Theme_Pavilion_pics/雙色犬.png";
import 虎斑犬 from "/Theme_Pavilion_pics/虎斑犬.png";
import 灰犬 from "/Theme_Pavilion_pics/灰犬.png";

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
const catImgs = [橘貓, 三花貓, 白貓, 黑貓, 乳牛貓, 虎斑貓, 玳瑁貓];
const catInfos = ['個性膽小、貪吃、愛講話，十隻橘貓九隻胖，另一隻...超胖。', '個性黏人、愛撒嬌，因為遺傳基因的關係，99%以上都是母貓。', '優雅乖巧、個性獨立。撒嬌時，會輕聲喵喵叫，或是輕拍主人討摸摸。', '反差萌、愛撒嬌、聰明、貼心、學習力強、會認人，對牠好，牠會記在心裡。', '貓界的哈士奇、個性好動，容易跟其他貓打成一片。', '野性美、狩獵高手、傲嬌脾氣、警戒心強，一旦被牠認定，就會很依賴主子。', '個性善良、脾氣最好、愛撒嬌、不挑食，99%以上都是母貓，親人也親貓。'];
const catNames = ['橘貓', '三花貓', '白貓', '黑貓', '乳牛貓', '虎斑貓', '玳瑁貓'];
const dogImgs = [三色犬, 紅棕犬, 黃犬, 白犬, 黑犬, 雙色犬, 虎斑犬, 灰犬];
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
    <div class="bg-bg w-full h-screen md:h-[91vh] grid grid-cols-2 place-items-center">
        <span class="text-[324px] z-10 absolute font-black text-white">貓</span>
        <div class="col-span-1">
            <p v-if="switchState" class="text-8xl font-bold">{{ showCatName }}</p>
            <p v-else class="text-8xl font-bold">{{ showDogName }}</p>
            <p
                v-if="switchState"
                class="text-lg pt-14 font-black text-PeNi_grey w-3/4 leading-7 tracking-wider"
            >{{ showCatInfo }}</p>
            <p
                v-else
                class="text-lg pt-14 font-black text-PeNi_grey w-3/4 leading-7 tracking-wider"
            >{{ showDogInfo }}</p>
        </div>
        <div class="z-20 absolute right-1/4">
            <img v-if="switchState" :src="showCatImg" alt="貓圖" />
            <img v-else :src="showDogImg" alt="狗圖" />
        </div>
        <div class="col-span-1 z-20">
            <div
                class="inline-flex mb-8 cursor-pointer items-center justify-center text-center w-[132px] h-[30px] bg-white rounded-[10px] p-2 shadow-sm"
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

            <div class="pl-5 pt-96">
                <button
                    @click="changeImg('left')"
                    class="h-[50px] w-[50px] rounded-[14px] bg-white text-2xl font-medium text-PeNi_black shadow-md hover:text-white hover:bg-PeNi_black"
                >
                    <n-icon size="30" class="flex pt-1">
                        <LessThanOutlined />
                    </n-icon>
                </button>
                <button
                    @click="changeImg('right')"
                    class="h-[50px] w-[50px] ml-7 rounded-[14px] bg-white text-2xl font-medium text-PeNi_black shadow-md hover:text-white hover:bg-PeNi_black"
                >
                    <n-icon size="30" class="flex pt-1">
                        <GreaterThanOutlined />
                    </n-icon>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>