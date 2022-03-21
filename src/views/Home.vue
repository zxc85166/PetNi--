<script setup>
import Loading from "@/components/Loading.vue";
import { ref } from "vue";

const showHomeDog = ref(true);
setInterval(() => {
  showHomeDog.value = false;
}, 2000);
</script>

<template>
  <div class="">
    <div v-if="showHomeDog" class="mx-auto grid h-screen place-items-center">
      <img src="@/assets/homeDog.gif" alt="logo" class="bg-current" />
      <div class="fixed bottom-5">
        <span>PetNi © Code: 卓罐頭 / Design: K.T</span>
      </div>
    </div>
  </div>
</template>
