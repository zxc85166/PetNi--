<template>
  <Vue3Lottie
    :animationData="BallOfYarnJSON"
    :loop="true"
    :autoplay="true"
    :renderer="'svg'"
    :speed="1"
    :height="200"
    :width="200"
  />
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import BallOfYarnJSON from "@/assets/毛線球_loading.json";
</script>
