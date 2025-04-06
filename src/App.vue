<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from './store/product';
import { useCartStore } from './store/cart';
import { useFetch } from '@vueuse/core';

import Products from './components/Products.vue';
import Header from './components/Header.vue';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
  productStore.getProducts();
});

const { products } = storeToRefs(productStore);

const CartApi = computed(() =>
  cartStore.cart.map((item) => {
    return { quantity: item.amount, price: item.product.default_price };
  })
);

const takePayments = () => {
  useFetch(
    'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/create-payment-intent',
    {
      afterFetch(ctx) {
        window.location.href = ctx.data;

        return ctx;
      },
    }
  ).post(CartApi);
};
</script>

<template>
  a: {{ a }}
  <button @click="takePayments">payments</button>
  <Header />
  <div>
    <Products v-if="products" :products="products" />
  </div>
</template>
