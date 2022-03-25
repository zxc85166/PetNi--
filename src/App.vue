<script setup>
import navbar from "@/components/navbar.vue";

</script>

<template>
  <header v-if="$route.meta.title !== 'Home'">
    <navbar />
  </header>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style></style>
