<script setup>
import navbar from "@/components/navbar.vue";
import ButtonRepoVue from "@/components/ButtonRepo.vue";
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="grid grid-cols-3 gap-0">
    <div class="bg-gray-100 box-shadow pl-20 py-5">
      <div>
        <p class="font-black">我想尋找</p>
        <button class="btn rounded-3xl w-[90px] h-[90px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <p class="font-black">性別</p>
        <button class="btn rounded-3xl w-[90px] h-[90px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <p class="font-black">年齡</p>
        <button class="btn rounded-[14px] w-[90px] h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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