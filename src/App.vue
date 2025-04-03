<script setup lang="ts">
import { useFetch } from '@vueuse/core';

const options = (ctx) => {
  window.location.href = ctx.data;
};

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

import Products from './components/Products.vue';
import Header from './components/Header.vue';
</script>

<template>
  <button @click="takePayments">payments</button>
  <Header />
  <Products />
</template>
