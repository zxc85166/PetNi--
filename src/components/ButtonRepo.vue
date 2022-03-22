<script setup>
defineProps({
  msg: String
})
</script>
<template>
  <button class="btn rounded-3xl">{{ msg }}</button>
</template>
