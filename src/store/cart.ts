import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Cart, Product } from "../types/index"
// import { Product, Cart } from "../types";
// import { productPath, productFileToProduct } from "../util/constants";

// import { useRuntimeConfig } from "nuxt/app";



export const useCartStore = defineStore(
    "cart",
    () => {
        const cart = ref<Cart[]>([]);

        // getProduct: async (id: string): Promise<Product> => {
        //     const ProductFile = await queryContent("products")
        //         .where({ id })
        //         .findOne();

        //     return productFileToProduct(ProductFile);
        // },
        const IsProductInCart = ((id: string): boolean => {
            return cart.value.some((product) => {
                return product.id === id
            })
        })
        // getTotalPrice: computed(() =>
        //     state.reduce(
        //         (partialSum, product) =>
        //             partialSum + product.amount * product.product.price,
        //         0
        //     )
        // ),
        // const IsProductInState = computed(
        //     (): boolean => !(getTotalAmount.value === 0)
        // )

        const getTotalAmount = computed(() =>
            cart.value.reduce((partialSum, product) => partialSum + product.amount, 0)
        )

        const increaseAmount = (id: string) => {
            const index = findIndexById(id);

            cart.value[index] = {
                amount: cart.value[index].amount + 1,
                id,
                product: cart.value[index].product,
            };

        }
        // const decreaseAmount = (id: string) => {
        //     const index = findIndexById(id);

        //     if (index === -1) return;

        //     cart.value[index] = {
        //         amount: cart.value[index].amount - 1,
        //         id,
        //         product: cart.value[index].product,
        //     };
        // }

        const createProduct = (product: Product) => {

            cart.value.push({ product, amount: 1, id: product.id });
        }
        // const emptyCart = () => cart.value.splice(0)

        // const deleteProduct = (id: string) => {
        //     if (!IsInDatabase(id)) return;
        // }
        // const getCart = computed(() => {
        //     return cart
        // })

        // takePayments: () => {
        //     useFetch(
        //         'http://vue-deno-39scww-31cecd-168-119-233-159.traefik.me/create-payment-intent',
        //         {
        //             afterFetch(ctx) {
        //                 window.location.href = ctx.data;

        //                 return ctx;
        //             },
        //         }
        //     ).post();
        // }


        const findIndexById = (id: string) =>
            cart.value.findIndex((product) => {
                return product.id === id;
            });
        const IsInDatabase = (id: string) =>
            cart.value.findIndex((product) => product.id === id) === -1 ? false : true;


        return { cart, getTotalAmount, createProduct, IsProductInCart, increaseAmount }
    },
    {
        persist: true
    }
);
