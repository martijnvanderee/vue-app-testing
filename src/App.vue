<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

import Products from './components/Products.vue';
import Header from './components/Header.vue';

import { type Product as IProduct } from './types';

const products = ref<IProduct[]>();

useFetch(
  'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/list-of-products',
  {
    afterFetch(ctx) {
      products.value = JSON.parse(ctx.data);

      console.log('test', JSON.parse(ctx.data));

      return ctx;
    },
  }
).get();

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
  <button @click="takePayments">payments</button>
  <Header />
  <div>
    <Products v-if="products" :products="products" />
  </div>
</template>
