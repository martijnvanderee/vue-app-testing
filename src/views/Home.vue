<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '../store/product';

import Products from '../components/Products.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.getProducts();
});

const { products } = storeToRefs(productStore);
</script>

<template>
  <Products v-if="products" :products="products" />
</template>
