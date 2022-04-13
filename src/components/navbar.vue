<script setup>
import { NIcon, NAvatar } from "naive-ui";
// import { storage } from "@/firebase/firebase.js";
import { useStore } from "@/store/store.js";

const store = useStore();
const unsubscribe = store.$onAction(({ name, after, onError }) => {
    if (name === "setUserEmail") {
        // const startTime = Date.now();
        // after 會在 action 調用完全返回後才執行
        // 會等待所有回傳的 promise
        after((result) => {

            // getData();

            // console.log(
            //   `Finished "${name}" after ${
            //     Date.now() - startTime
            //   }ms.\nResult: ${result}.`
            // );
        });
        // onError 會在 action 報錯時調用
        onError((error) => {
            console.warn(
                `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
            );
        });
    }
});
</script>
<template>
    <div
        class="flex items-center fixed bottom-0 bg-white lg:bg-transparent justify-around py-3 shadow-md drop-shadow-lg lg:relative z-50 w-full">
        <div class="w-[118.11px] hidden lg:flex">
            <router-link v-if="!store.PhotoURL" :to="'/match'">
                <img src="@/assets/smallLogo.png" alt="smallLogo" />
            </router-link>
            <div class="inline-flex items-center" v-else>
                <n-avatar round :size="48" :src="store.PhotoURL" alt="google帳號圖"
                    fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <p @click="store.clear"
                    class="font-black pl-3 text-base text-PeNi_pink cursor-pointer hover:text-PeNi_blue">登出</p>
            </div>
        </div>
        <div class="inline-flex mx-auto lg:mx-0 gap-9 md:gap-24 text-PeNi_grey">
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Match' }">
                <router-link :to="'/match'">
                    <n-icon size="24">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--charm" width="32" height="32"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M1.75 2.75H10v11.5H1.75zm8.25 1l4.25 2l-4.25 7.5" />
                        </svg>
                    </n-icon>
                    <span v-if="$route.meta.title == 'Match'" class="ml-3">配對</span>
                </router-link>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Favorites' }">
                <router-link :to="'/favorites'">
                    <n-icon size="24">
                        <svg width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                    </n-icon>
                    <span v-if="$route.meta.title == 'Favorites'" class="ml-3">收藏</span>
                </router-link>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Theme_Pavilion' }">
                <router-link :to="'/theme_Pavilion'">
                    <n-icon size="24">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--carbon" width="32" height="32"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                            <circle cx="10" cy="12" r="2" fill="currentColor" />
                            <circle cx="16" cy="9" r="2" fill="currentColor" />
                            <circle cx="22" cy="12" r="2" fill="currentColor" />
                            <circle cx="23" cy="18" r="2" fill="currentColor" />
                            <circle cx="19" cy="23" r="2" fill="currentColor" />
                            <path fill="currentColor"
                                d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2Zm8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5.07 5.07 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.89 11.89 0 0 1-3.35 8.79Z" />
                        </svg>
                    </n-icon>
                    <span v-if="$route.meta.title == 'Theme_Pavilion'" class="ml-3">主題館</span>
                </router-link>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Adoption' }">
                <router-link :to="'/adoption'">
                    <n-icon size="24">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <circle cx="4.5" cy="9.5" r="2.5" fill="currentColor" />
                            <circle cx="9" cy="5.5" r="2.5" fill="currentColor" />
                            <circle cx="15" cy="5.5" r="2.5" fill="currentColor" />
                            <circle cx="19.5" cy="9.5" r="2.5" fill="currentColor" />
                            <path fill="currentColor"
                                d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91c-.46-.54-1.05-1.08-1.75-1.32c-.11-.04-.22-.07-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09c-.7.24-1.28.78-1.75 1.32c-.87 1.02-1.6 1.89-2.48 2.91c-1.31 1.31-2.92 2.76-2.62 4.79c.29 1.02 1.02 2.03 2.33 2.32c.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44c1.31-.29 2.04-1.31 2.33-2.32c.31-2.04-1.3-3.49-2.61-4.8z" />
                        </svg>
                    </n-icon>
                    <span v-if="$route.meta.title == 'Adoption'" class="ml-3">送養</span>
                </router-link>
            </div>
            <div class="routeIcon" :class="{ 'text-PeNi_pink': $route.meta.title == 'Emergency' }">
                <router-link :to="'/emergency'">
                    <n-icon size="24">
                        <svg width="1em" height="1em" viewBox="0 0 32 32">
                            <path fill="currentColor" d="M21 10h-4V6h-2v4h-4v2h4v4h2v-4h4v-2z" />
                            <path fill="currentColor"
                                d="M28 10h-2V4a2.002 2.002 0 0 0-2-2H8a2.002 2.002 0 0 0-2 2v6H4a2.002 2.002 0 0 0-2 2v18h28V12a2.002 2.002 0 0 0-2-2ZM14 28v-6h4v6Zm6 0v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7H4V12h4V4h16v8h4v16Z" />
                        </svg>
                    </n-icon>
                    <span v-if="$route.meta.title == 'Emergency'" class="ml-3">急診</span>
                </router-link>
            </div>
        </div>
    </div>
</template>