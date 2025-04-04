import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useFetch } from '@vueuse/core';
import type { Cart, Product } from "../types/index"
// import { Product, Cart } from "../types";
// import { productPath, productFileToProduct } from "../util/constants";

// import { useRuntimeConfig } from "nuxt/app";

export const useCartStore = defineStore(
    "cart",
    () => {
        const state = reactive<Cart[]>([]);
        const products = ref<Product[]>()

        let cart = {
            getProducts: computed(() => useFetch(
                'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/list-of-products',
                {
                    afterFetch(ctx) {
                        products.value = JSON.parse(ctx.data);

                        return ctx;
                    },
                }
            ).get()),
            // getProduct: async (id: string): Promise<Product> => {
            //     const ProductFile = await queryContent("products")
            //         .where({ id })
            //         .findOne();

            //     return productFileToProduct(ProductFile);
            // },
            IsProductInCart: computed((): boolean => {
                return cart.getTotalAmount.value === 0 ? false : true;
            }),
            getTotalAmount: computed(() =>
                state.reduce((partialSum, product) => partialSum + product.amount, 0)
            ),
            // getTotalPrice: computed(() =>
            //     state.reduce(
            //         (partialSum, product) =>
            //             partialSum + product.amount * product.product.price,
            //         0
            //     )
            // ),
            IsProductInState: computed(
                (): boolean => !(cart.getTotalAmount.value === 0)
            ),
            increaseAmount: (id: string) => {
                const index = findIndexById(id);


                state[index] = {
                    amount: state[index].amount + 1,
                    id,
                    product: state[index].product,
                };

            },
            decreaseAmount: (id: string) => {
                const index = findIndexById(id);

                if (index === -1) return;

                state[index] = {
                    amount: state[index].amount - 1,
                    id,
                    product: state[index].product,
                };
            },
            createProduct: (product: Product) => {

                console.log("state:", state, product)
                state.push({ product, amount: 1, id: product.id });
            },
            emptyCart: state.splice(0),
            deleteProduct: (id: string) => {
                if (!IsInDatabase(id)) return;
            },
        };


        const findIndexById = (id: string) =>
            state.findIndex((product) => {
                return product.id === id;
            });
        const IsInDatabase = (id: string) =>
            state.findIndex((product) => product.id === id) === -1 ? false : true;
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

        return cart;
    },
    {
        persist: true,
    }
);
