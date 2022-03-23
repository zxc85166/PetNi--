<script setup>
import navbar from "@/components/navbar.vue";
</script>

<template>
  <header>
    <navbar />
  </header>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
</style>