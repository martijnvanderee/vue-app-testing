<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { loadStripe } from '@stripe/stripe-js';

console.log('test');
console.log('data', data, 'error:', error, isFetching);

const takePayments = () => {
  console.log('takePayments');
  const { isFetching, error, data } = useFetch(
    'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/create-payment-intent'
  ).post({ items: 8 });

  console.log('takePayments 1');
};

import Products from './components/Products.vue';
import Header from './components/Header.vue';
</script>

<template>
  <button @click="takePayments">payments</button>
  <Header />
  <Products />
</template>
