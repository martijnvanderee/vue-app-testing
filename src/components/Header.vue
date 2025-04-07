<script setup lang="ts">
import CartIcon from './CartIcon.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="sticky top-0 bg-white dark:bg-gray-800 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <div class="shrink-0">
            <RouterLink to="/">
              <img
                class="block w-auto h-8 dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                alt=""
              />
              <img
                class="hidden w-auto h-8 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                alt=""
              />
            </RouterLink>
          </div>
        </div>

        <div class="flex items-center lg:space-x-2">
          <RouterLink to="/cart">
            <button
              id="myCartDropdownButton1"
              data-dropdown-toggle="myCartDropdown1"
              type="button"
              class="cursor-pointer inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span class="sr-only"> Cart </span>
              <CartIcon />
              <span class="hidden sm:flex">My Cart</span>
              <svg
                class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
          </RouterLink>

          <div
            id="myCartDropdown1"
            class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
          >
            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple iPhone 15</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $599
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 1
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem1a"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem1a"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple iPad Air</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $499
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 1
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem2a"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem2a"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple Watch SE</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $598
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 2
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem3b"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem3b"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Sony Playstation 5</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $799
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 1
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem4b"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem4b"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div>
                <a
                  href="#"
                  class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  >Apple iMac 20"</a
                >
                <p
                  class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  $8,997
                </p>
              </div>

              <div class="flex items-center justify-end gap-6">
                <p
                  class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
                >
                  Qty: 3
                </p>

                <button
                  data-tooltip-target="tooltipRemoveItem5b"
                  type="button"
                  class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                >
                  <span class="sr-only"> Remove </span>
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="tooltipRemoveItem5b"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Remove item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <a
              href="#"
              title=""
              class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              Proceed to Checkout
            </a>
          </div>

          <div
            id="userDropdown1"
            class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
          >
            <ul
              class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white"
            >
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Favourites
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Delivery Addresses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Billing Data
                </a>
              </li>
            </ul>

            <div class="p-2 text-sm font-medium text-gray-900 dark:text-white">
              <a
                href="#"
                title=""
                class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Sign Out
              </a>
            </div>
          </div>

          <button
            type="button"
            data-collapse-toggle="ecommerce-navbar-menu-1"
            aria-controls="ecommerce-navbar-menu-1"
            aria-expanded="false"
            class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
          >
            <span class="sr-only"> Open Menu </span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
