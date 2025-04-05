<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';
import { useCartStore } from './store/cart';
import { storeToRefs } from 'pinia';

import Products from './components/Products.vue';
import Header from './components/Header.vue';

import { type Product as IProduct } from './types';

const products = ref<IProduct[]>();

const cart = useCartStore();

const { getCart } = storeToRefs(cart);

useFetch(
  'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/list-of-products',
  {
    afterFetch(ctx) {
      products.value = JSON.parse(ctx.data);

      return ctx;
    },
  }
).get();

const takePayments = () => {
  console.log('takePayments getCart', getCart.value);
  // useFetch(
  //   'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/create-payment-intent',
  //   {
  //     afterFetch(ctx) {
  //       window.location.href = ctx.data;

  //       return ctx;
  //     },
  //   }
  // ).post({ items: 8 });
};
</script>

<template>
  <button @click="takePayments">payments</button>
  <Header />
  <div>
    <Products v-if="products" :products="products" />
  </div>
</template>
