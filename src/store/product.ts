import { defineStore } from "pinia";
import { ref } from "vue";
import { useFetch } from '@vueuse/core';
import type { Product } from "../types/index"


export const useProductStore = defineStore(
    "product",
    () => {
        const products = ref<Product[]>()

        const getProducts = () => {
            useFetch(
                'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/list-of-products',
                {
                    afterFetch(ctx) {
                        products.value = JSON.parse(ctx.data);

                        return ctx;
                    },
                }
            ).get()
        }

        // const findIndexById = (id: string) =>
        //     state.findIndex((product) => {
        //         return product.id === id;
        //     });
        // const IsInDatabase = (id: string) =>
        //     state.findIndex((product) => product.id === id) === -1 ? false : true;


        return { products, getProducts }
    },
    { persist: true }
);
