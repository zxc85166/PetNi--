<script setup>
import { reactive, ref, onMounted } from "vue";
import { NIcon } from "naive-ui";
import { LocationOutline } from "@vicons/ionicons5";
import { PhoneCall } from "@vicons/tabler";
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
    <div class="bg-bg min-h-screen w-full p-4 lg:px-[88px] gap-3 lg:py-10">
        <div
            class="text-center bg-white lg:bg-transparent font-black text-lg flex justify-center gap-3"
        >
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
        <div v-for="(region, index) in data" :key="region" class="py-2">
            <div class="flex pb-2">
                <n-icon size="30" class="flex text-PeNi_pink">
                    <LocationOutline />
                </n-icon>
                <p class="text-2xl pl-1 font-black">{{ index }}</p>
            </div>
            <div class="grid grid-cols-1 lg:pb-0 pb-16 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                                    <PhoneCall />
                                </n-icon>
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