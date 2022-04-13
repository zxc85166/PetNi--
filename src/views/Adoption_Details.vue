<script setup>
import { useStore } from "@/store/store.js";
const store = useStore();
console.log(store.NowPetData)
</script>

<template>
    <div class="grid grid-cols-2 lg:px-48 lg:py-11 gap-[26px]">
        <div class="w-full justify-center shadow rounded-[28px] text-center bg-white">
            <div class="aspect-w-3 aspect-h-3">
                <img :src="store.NowPetData.PicUrl" class="rounded-[28px] object-cover align-middle border-none p-4" />
            </div>
        </div>

        <div>
            <h1 class="text-lg pb-1">{{ store.NowPetData.Name }}</h1>
            <p>{{ store.NowPetData.City }}{{ store.NowPetData.District }}</p>
        </div>
    </div>
</template>



<style scoped>
</style>