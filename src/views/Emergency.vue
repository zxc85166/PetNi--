<script setup>
import { reactive, ref, onMounted } from "vue";
import { NIcon } from "naive-ui";
import hospital from "@/assets/hospital.json";

const northern = hospital.北部;
const central = hospital.中部;
const southern = hospital.南部;
const eastern = hospital.東部;

//切換activeBtn
const activeBtn = reactive({ 北部: true, 中部: false, 南部: false, 東部: false });
function toggleActiveBtn(btn) {
    switch (btn) {
        case "北部":
            activeBtn.北部 = true;
            activeBtn.中部 = false;
            activeBtn.南部 = false;
            activeBtn.東部 = false;
            data.value = northern;
            break;
        case "中部":
            activeBtn.北部 = false;
            activeBtn.中部 = true;
            activeBtn.南部 = false;
            activeBtn.東部 = false;
            data.value = central;
            break;
        case "南部":
            activeBtn.北部 = false;
            activeBtn.中部 = false;
            activeBtn.南部 = true;
            activeBtn.東部 = false;
            data.value = southern;
            break;
        case "東部":
            activeBtn.北部 = false;
            activeBtn.中部 = false;
            activeBtn.南部 = false;
            activeBtn.東部 = true;
            data.value = eastern;
            break;
        default:
            break;
    }
}
//儲存當下渲染的資料
const data = ref({});
onMounted(() => {
    data.value = northern;
})
</script>
<template>
    <div class="bg-bg min-h-screen w-full gap-3 lg:py-10 lg:pb-0 pb-20">
        <div
            class="text-center bg-white p-7 shadow lg:shadow-none lg:bg-transparent font-black text-lg flex items-center justify-between lg:justify-center"
        >
            <p class="text-black text-2xl hidden md:flex lg:hidden">24H急診</p>
            <p class="text-black text-2xl md:hidden lg:hidden">24H</p>

            <div class="md:gap-3 gap-[6px] flex">
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
        </div>
        <div class="px-4 lg:px-[88px]">
            <p class="text-right lg:text-center pt-3 font-bold">*資訊僅供參考，建議先電話聯絡再前往。</p>
            <div v-for="(region, index) in data" :key="region" class="py-2">
                <div class="flex pb-2">
                    <n-icon size="30" class="flex text-PeNi_pink">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--ion"
                            width="32"
                            height="32"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                                d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z"
                            />
                            <circle
                                cx="256"
                                cy="192"
                                r="48"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                            />
                        </svg>
                    </n-icon>
                    <p class="text-2xl pl-1 font-black">{{ index }}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 pb-5 lg:grid-cols-3 gap-2">
                    <div
                        v-for="(item, index) in region"
                        class="bg-white h-[104px] flex justify-between items-center rounded-[20px] p-3 shadow w-full"
                    >
                        <div>
                            <p class="font-black text-lg">{{ item.院名 }}</p>
                            <a :href="'tel:+886-' + item.電話" class="font-bold">{{ item.電話 }}</a>
                            <p class="font-bold">{{ item.地址 }}</p>
                        </div>
                        <div class="grid content-around">
                            <div>
                                <p class="text-base font-bold text-PeNi_pink">{{ item.疫情開門情況 }}</p>
                            </div>
                            <div class="flex items-end justify-end">
                                <div
                                    class="w-10 h-10 bg-PeNi_black grid place-items-center rounded-full"
                                >
                                    <n-icon size="20" class="text-white cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            class="iconify iconify--carbon"
                                            width="32"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 32 32"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M28 13h-2a7.008 7.008 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9zm-2 16h-.17C6.18 27.87 3.39 11.29 3 6.23a3 3 0 0 1 2.761-3.221Q5.88 3 6 3h5.27a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1.003.997q0 .042.003.083C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.058-.938L27 26v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z"
                                            />
                                        </svg>
                                    </n-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
</style>