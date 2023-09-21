<script setup>
    import { ref, onBeforeMount } from 'vue'
    import axios from 'axios'
    const products = ref([])

    onBeforeMount(() => {
        axios.get('https://dummyjson.com/products?limit=9')
            .then(res => {
                products.value = res.data.products
            })
    })

    const loadMoreProducts = () => {
        axios.get('https://dummyjson.com/products?limit=9&skip=9')
            .then(res => {
                products.value = [...products.value, ...res.data.products]
            })
    }

</script>

<template>
    <section class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section
            class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
            <section
                class="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
                v-for="product,index in products" :key="product.id">
                <img :src="product.thumbnail" style="height: 250px !important;width: 360px !important"
                    :alt="product.title">
                <h1 class="text-3xl my-5">{{ product.title }}</h1>
                <h2 class="font-semibold mb-5">${{ product.price }}</h2>
                <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                    <router-link :to="{ name: 'product-details', params: { id: product.id } }">
                        View Details
                    </router-link>
                </button>
            </section>
        </section>
        <div class="flex flex-col items-center">
            <button @click="loadMoreProducts()"
                class="bg-gray-800 hover:bg-gray-700 text-white font-bold my-5 py-3 px-4 rounded"
                v-if="products.length > 0">Load More Products</button>
        </div>
    </section>
</template>

<style scoped>

</style>
