<script setup>
import { NIcon } from "naive-ui";
import { Hospital } from "@vicons/carbon";
import { ColorLensOutlined } from "@vicons/material";
import { Heart16Regular, GiftCardAdd24Filled, PersonAccounts24Filled } from "@vicons/fluent";

</script>
<template>
    <div class="justify-between flex px-20 py-3 shadow-md drop-shadow-lg relative z-50 w-full">
        <div class="w-[118.11px]">
            <router-link :to="'/match'">
                <img src="@/assets/smallLogo.png" alt="smallLogo" />
            </router-link>
        </div>
        <div class="inline-flex gap-5 text-PeNi_grey">
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Match' }">
                <router-link :to="'/match'">
                    <n-icon size="24">
                        <GiftCardAdd24Filled />
                    </n-icon>
                    <span v-if="$route.meta.title == 'Match'" class="ml-3">配對</span>
                </router-link>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Favorites' }">
                <router-link :to="'/favorites'">
                    <n-icon size="24">
                        <Heart16Regular />
                    </n-icon>
                </router-link>
                <span v-if="$route.meta.title == 'Favorites'" class="ml-3">收藏</span>
            </div>
            <div
                class="routeIcon"
                :class="{ 'text-PeNi_pink': $route.meta.title == 'Theme_Pavilion' }"
            >
                <router-link :to="'/theme_Pavilion'">
                    <n-icon size="24">
                        <ColorLensOutlined />
                    </n-icon>
                </router-link>
                <span v-if="$route.meta.title == 'Theme_Pavilion'" class="ml-3">主題館</span>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Adoption' }">
                <router-link :to="'/adoption'">
                    <n-icon size="24">
                        <PersonAccounts24Filled />
                    </n-icon>
                </router-link>
                <span v-if="$route.meta.title == 'Adoption'" class="ml-3">送養</span>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Emergency' }">
                <router-link :to="'/emergency'">
                    <n-icon size="24">
                        <Hospital />
                    </n-icon>
                </router-link>
                <span v-if="$route.meta.title == 'Emergency'" class="ml-3">急診</span>
            </div>
        </div>
    </div>
</template>