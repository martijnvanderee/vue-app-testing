<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useProductStore } from './store/product';
import { useCartStore } from './store/cart';
import { useFetch } from '@vueuse/core';

import Products from './components/Products.vue';
import Header from './components/Header.vue';

const { products, getProducts } = useProductStore();
const { cart } = useCartStore();

onBeforeMount(() => {
  getProducts();
});

const takePayments = () => {
  useFetch(
    'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/create-payment-intent',
    {
      afterFetch(ctx) {
        window.location.href = ctx.data;

        return ctx;
      },
    }
  ).post({ items: 8 });
};
</script>

<template>
  {{ cart }}
  <button @click="takePayments">payments</button>
  <Header />
  <div>
    <Products v-if="products" :products="products" />
  </div>
</template>
