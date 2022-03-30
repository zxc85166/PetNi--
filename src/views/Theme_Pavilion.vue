<script setup>
import { ref, onBeforeMount } from "vue";
import { NIcon } from "naive-ui";
import { GreaterThanOutlined, LessThanOutlined } from "@vicons/material";
import 三花貓 from "@/assets/Theme_Pavilion_pics/三花貓.png";
import 白貓 from "@/assets/Theme_Pavilion_pics/白貓.png";
import 乳牛貓 from "@/assets/Theme_Pavilion_pics/乳牛貓.png";
import 虎斑貓 from "@/assets/Theme_Pavilion_pics/虎斑貓.png";
import 玳瑁貓 from "@/assets/Theme_Pavilion_pics/玳瑁貓.png";
import 黑貓 from "@/assets/Theme_Pavilion_pics/黑貓.png";
import 橘貓 from "@/assets/Theme_Pavilion_pics/橘貓.png";

const switchState = ref(false);
//切換switchState
function switchStateChange(type) {
    if (type == 'cat' && switchState.value == false) {
        switchState.value = true;
    }
    if (type == 'dog' && switchState.value == true) {
        switchState.value = false;
    }
}
const imgs = [三花貓, 白貓, 乳牛貓, 虎斑貓, 玳瑁貓, 黑貓, 橘貓];
const index = ref(0);
const showimg = ref(imgs[index.value]);
function changeImg(type) {
    if (type == 'left') {
        index.value = index.value - 1;
        if (index.value < 0) {
            index.value = imgs.length - 1;
        }
    }
    if (type == 'right') {
        index.value = index.value + 1;
        if (index.value > imgs.length - 1) {
            index.value = 0;
        }
    }
    showimg.value = imgs[index.value];
}
//切換圖片

</script>
<template >
    <div class="bg-bg h-[91vh] grid grid-cols-2 place-items-center">
        <span class="text-[324px] z-10 absolute font-black text-white">貓</span>
        <div class="col-span-1">
            <p class="text-8xl font-bold">橘貓</p>
            <p class="text-lg pt-14 font-black text-PeNi_grey">
                個性膽小、貪吃、愛講話，十隻橘貓
                <br />九隻胖，另一隻...超胖。
            </p>
        </div>
        <div class="z-20 absolute right-1/4">
            <img :src="showimg" alt="三花貓" />
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