<script setup>
import { NIcon } from "naive-ui";
import { Hospital } from "@vicons/carbon";
import { ColorLensOutlined } from "@vicons/material";
import { Heart16Regular } from "@vicons/fluent";
import { useRouter } from "vue-router";
const router = useRouter();
//前往Match頁面
function goToMatch() {
    router.push({
        path: "/match",
    });
}
//前往Favorites頁面
function goToFavorites() {
    router.push({
        path: "/favorites",
    });
}
//前往Theme_Pavilion頁面
function goToThemePavilion() {
    router.push({
        path: "/theme_pavilion",
    });
}
//前往Emergency頁面
function goToEmergency() {
    router.push({
        path: "/emergency",
    });
}
//前往Adoption頁面
function goToAdoption() {
    router.push({
        path: "/adoption",
    });
}
</script>
<template>
    <div class="justify-between flex px-20 py-3 shadow-md drop-shadow-lg relative z-50 w-full">
        <div class="w-[118.11px]">
            <img src="@/assets/smallLogo.png" alt="smallLogo" />
        </div>
        <div class="inline-flex gap-5 text-PeNi_grey">
            <button
                @click="goToMatch"
                class="routeIcon"
                :class="{ 'text-PeNi_pink': $route.meta.title == 'Match' }"
            >
                <n-icon size="24">
                    <Hospital />
                </n-icon>
                <span v-if="$route.meta.title == 'Match'" class="ml-3">配對</span>
            </button>
            <button
                @click="goToFavorites"
                class="routeIcon"
                :class="{ 'text-PeNi_pink': $route.meta.title == 'Favorites' }"
            >
                <n-icon size="24">
                    <Heart16Regular />
                </n-icon>
                <span v-if="$route.meta.title == 'Favorites'" class="ml-3">收藏</span>
            </button>
            <button
                @click="goToThemePavilion"
                class="routeIcon"
                :class="{ 'text-PeNi_pink': $route.meta.title == 'Theme_Pavilion' }"
            >
                <n-icon size="24">
                    <ColorLensOutlined />
                </n-icon>
                <span v-if="$route.meta.title == 'Theme_Pavilion'" class="ml-3">主題館</span>
            </button>
            <button
                @click="goToAdoption"
                class="routeIcon"
                :class="{ 'text-PeNi_pink': $route.meta.title == 'Adoption' }"
            >
                <n-icon size="24">
                    <Hospital />
                </n-icon>
                <span v-if="$route.meta.title == 'Adoption'" class="ml-3">送養</span>
            </button>
            <button
                @click="goToEmergency"
                class="routeIcon"
                :class="{ 'text-PeNi_pink': $route.meta.title == 'Emergency' }"
            >
                <n-icon size="24">
                    <Hospital />
                </n-icon>
                <span v-if="$route.meta.title == 'Emergency'" class="ml-3">急診</span>
            </button>
        </div>
    </div>
</template>