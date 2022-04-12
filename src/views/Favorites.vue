<script setup>
import { NIcon, NImage, NCard } from "naive-ui";
const share = () => {
    if (navigator.share) {
        navigator.share({
            title: '分享標題',
            text: '分享文字',
            url: 'https://www.twitch.tv/japan_asmr'
        })
    } else {
        navigator.clipboard.writeText('Code is here')
    }
}
const dogImgs = ['/Theme_Pavilion_pics/三色犬.png', '/Theme_Pavilion_pics/紅棕犬.png', '/Theme_Pavilion_pics/黃犬.png', '/Theme_Pavilion_pics/白犬.png', '/Theme_Pavilion_pics/黑犬.png', '/Theme_Pavilion_pics/雙色犬.png', '/Theme_Pavilion_pics/虎斑犬.png', '/Theme_Pavilion_pics/灰犬.png'];

</script>
<template >
    <div
        class="h-screen px-4 lg:px-[120px] gap-3 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
        <div v-for="(img, index) in dogImgs" :key="index" class="shadow rounded-lg grid">
            <div class="aspect-w-2 aspect-h-3">
                <img :src="img" class="rounded-lg object-cover align-middle border-none" />
            </div>
            <div class="inline-flex mx-auto">
                <p class="text-xl font-black">157763</p>
                <n-icon size="30" class="text-PeNi_pink pl-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        class="iconify iconify--ant-design"
                        width="32"
                        height="32"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                    >
                        <path
                            fill="currentColor"
                            d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2C257.6 200.9 228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7zM512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1C404.2 161.5 456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556z"
                        />
                    </svg>
                </n-icon>
            </div>
            <div class="pt-1 mx-auto">
                <p class="text-PeNi_grey">臺南市南區</p>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>