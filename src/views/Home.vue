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
  setInterval(() => {
    goToMatch();
  }, 2000);
})


</script>

<template>
  <div class>
    <div class="mx-auto grid h-screen place-items-center">
      <img src="@/assets/homeDog.gif" alt="logo" class="bg-current" />
      <div class="fixed bottom-5">
        <span>PetNi © Code: 卓罐頭 / Design: K.T</span>
      </div>
    </div>
  </div>
</template>