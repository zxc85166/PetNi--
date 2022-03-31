<script setup>
import { reactive } from "vue";
import { NIcon } from "naive-ui";
import { LocationOutline } from "@vicons/ionicons5";
const activeBtn = reactive({ 北部: true, 中部: false, 北部: false, 東部: false });
//切換activeBtn
function toggleActiveBtn(btn) {
    switch (btn) {
        case "北部":
            activeBtn.北部 = true;
            activeBtn.中部 = false;
            activeBtn.南部 = false;
            activeBtn.東部 = false;
            break;
        case "中部":
            activeBtn.北部 = false;
            activeBtn.中部 = true;
            activeBtn.南部 = false;
            activeBtn.東部 = false;
            break;
        case "南部":
            activeBtn.北部 = false;
            activeBtn.中部 = false;
            activeBtn.南部 = true;
            activeBtn.東部 = false;
            break;
        case "東部":
            activeBtn.北部 = false;
            activeBtn.中部 = false;
            activeBtn.南部 = false;
            activeBtn.東部 = true;
            break;
        default:
            break;
    }
}
</script>
<template >
    <div class="bg-bg w-full h-screen px-[88px] gap-3 py-10">
        <div class="text-center font-black text-lg flex justify-center gap-3">
            <button
                @click="toggleActiveBtn('北部')"
                :class="{ 'btn-emergency-active': activeBtn.北部 }"
                class="btn-emergency"
            >北部</button>
            <button
                @click="toggleActiveBtn('中部')"
                :class="{ 'btn-emergency-active': activeBtn.中部 }"
                class="btn-emergency"
            >中部</button>
            <button
                @click="toggleActiveBtn('南部')"
                :class="{ 'btn-emergency-active': activeBtn.南部 }"
                class="btn-emergency"
            >南部</button>
            <button
                @click="toggleActiveBtn('東部')"
                :class="{ 'btn-emergency-active': activeBtn.東部 }"
                class="btn-emergency"
            >東部</button>
        </div>
        <p class="text-center pt-3 font-bold">*資訊僅供參考，建議先電話聯絡再前往。</p>
        <div class="flex">
            <n-icon size="30" class="flex text-PeNi_pink">
                <LocationOutline />
            </n-icon>
            <p class="text-2xl pl-1 font-black">台北市</p>
        </div>
        <div class="grid grid-cols-3 gap-2">
            <div class="bg-white rounded-[20px] p-3 shadow w-full">
                <p>展望動物醫院</p>
                <p>展望動物醫院</p>
                <p>展望動物醫院</p>
            </div>
        </div>
    </div>
</template>
<style >
</style>