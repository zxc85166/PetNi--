<script setup>
import { useRouter } from "vue-router";
import { onMounted } from 'vue';
const router = useRouter();
//前往Match頁面
function goToMatch() {
  router.push({
    path: '/match',
  })
}
onMounted(() => {
  setTimeout(() => {
    goToMatch();
  }, 2000);
})


</script>

<template>
  <div class="w-full bg-white h-sreen">
    <div class="mx-auto grid h-screen place-items-center">
      <img src="@/assets/homeDog.gif" alt="logo" />
      <div class="fixed bottom-5">
        <span>PetNi © Code: 卓罐頭 / Design: K.T</span>
      </div>
    </div>
  </div>
</template>