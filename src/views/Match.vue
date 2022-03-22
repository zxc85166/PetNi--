<script setup>
import navbar from "@/components/navbar.vue";
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="grid grid-cols-3 gap-0">
    <div class="bg-gray-100 box-shadow px-5 py-5">
      <div class="h-full">
        <span>我想尋找</span>
      </div>
    </div>
    <div class="col-span-2">09</div>
  </div>
</template>
<style scoped>
.box-shadow {
  box-shadow: 0px 2px 7px rgba(10, 10, 10, 0.07);
}
</style>