<script setup lang="ts">
const props = defineProps<{
  AmountOfProducts: number;
}>();
</script>

<template>
  <div class="relative mr-2">
    <svg
      class="w-5 h-5 lg:me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
      />
    </svg>
    <div
      class="cart w-4 h-4 absolute -top-1 -right-1 bg-red-700 flex justify-center items-center"
    >
      <div>{{ props.AmountOfProducts }}</div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  border-radius: 50%;
}
</style>
