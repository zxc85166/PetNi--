<script setup>
import { NIcon, NImage, NCard } from "naive-ui";
import { WomanOutlined, ManOutlined, HeartFilled } from "@vicons/antd";
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
    <div class="bg-bg h-screen px-[120px] gap-3 py-10 grid grid-cols-6">
        <n-card class="w-[162px] h-[214px]" content-style="border-radius: 28px;" :bordered="false">
            <template #cover>
                <n-image
                    class="rounded-[24px]"
                    :src="dogImgs[0]"
                    show-toolbar-tooltip
                    alt="petImg"
                />
            </template>
            <div class="inline-flex">
                <p class="text-xl font-black">157763</p>
                <n-icon size="30" class="text-PeNi_pink pl-5">
                    <WomanOutlined />
                </n-icon>
            </div>
            <div class="pt-1">
                <p class="text-PeNi_grey">臺南市南區</p>
            </div>
        </n-card>
    </div>
</template>

<style lang="">
    
</style>