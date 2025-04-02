<script setup lang="ts">
import { useFetch } from '@vueuse/core';

const { isFetching, error, data } = useFetch(
  'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/dinosaurs'
);

console.log('test');
console.log('data', data, 'error:', error, isFetching);

import Products from './components/Products.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <Products />
</template>
