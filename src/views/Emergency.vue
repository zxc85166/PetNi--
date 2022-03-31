<script setup>
import { ref } from "vue";

const activeBtn = ref(false);
</script>
<template >
    <div class="bg-bg w-full h-screen px-[88px] gap-3 py-10">
        <div class="text-center font-black text-lg flex justify-center gap-3">
            <button :class="{ 'btn-emergency-active': activeBtn }" class="btn-emergency">北部</button>
            <button :class="{ 'btn-emergency-active': activeBtn }" class="btn-emergency">中部</button>
            <button :class="{ 'btn-emergency-active': activeBtn }" class="btn-emergency">南部</button>
            <button :class="{ 'btn-emergency-active': activeBtn }" class="btn-emergency">東部</button>
        </div>
    </div>
</template>
<style lang="">
    
</style>