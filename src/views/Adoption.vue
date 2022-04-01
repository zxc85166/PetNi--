<script setup>
import { NIcon, NCard, NModal } from "naive-ui";
import { AddCircle } from "@vicons/ionicons5";
import { ref } from "vue";


const showModal = ref(false);
</script>
<template>
    <div class="bg-bg w-full h-screen px-[120px] gap-3 py-10 grid grid-cols-6">
        <div
            class="w-[162px] h-[214px] shadow rounded-[28px] text-center grid place-items-center bg-white text-PeNi_pink"
        >
            <div @click="showModal = true">
                <n-icon size="56" class="hover:text-pink-300 cursor-pointer">
                    <AddCircle />
                </n-icon>
                <p>上傳寵物照片</p>
            </div>
        </div>
        <!-- modal -->
        <n-modal v-model:show="showModal" transform-origin="center">
            <div
                class="grid place-items-center w-[466px] bg-white h-[240px] rounded-3xl text-center font-black py-11"
            >
                <p class="text-lg">請登入帳號，才能發送養文</p>

                <button
                    class="bg-PeNi_black text-white rounded-lg hover:bg-PeNi_blue w-[236px] h-[46px] gap-4 flex justify-center items-center"
                >
                    <img src="@/assets/google.png" alt="google login icon" />
                    <p>Google 登入</p>
                </button>
                <button
                    @click="showModal = false"
                    class="bg-PeNi_grey_light rounded-lg w-[236px] hover:bg-PeNi_black hover:text-white font-black h-[46px]"
                >取 消</button>
            </div>
        </n-modal>
    </div>
</template>
<style lang="">
    
</style>