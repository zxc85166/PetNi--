<script setup>
import navbar from "@/components/navbar.vue";

</script>

<template>
  <header v-if="$route.meta.title !== 'Home'">
    <navbar />
  </header>
  <div class="bg-bg">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style></style>
