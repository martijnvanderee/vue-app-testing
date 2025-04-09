<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from './components/Header.vue';

import { useFetch } from '@vueuse/core';

useFetch(
  'vvue-backendpayload-zshvxw-d06432-168-119-233-159.traefik.me/api/products',
  {
    afterFetch(ctx) {
      console.log('fetch');
      console.log(ctx.data);
      console.log(JSON.parse(ctx.data));

      return ctx;
    },
  }
).get();
</script>

<template>
  <Header />
  <RouterView />
</template>
