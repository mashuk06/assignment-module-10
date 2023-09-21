<script setup>
    import { ref, onBeforeMount, onMounted } from 'vue'
    import axios from 'axios'
    import { useRoute } from 'vue-router'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { Navigation, Pagination } from 'swiper/modules';

    const route = useRoute()
    const id = route.params.id
    const product = ref([])
    const modules = [Navigation, Pagination]

    onBeforeMount(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                product.value = res.data
            })
    })

</script>

<template>
    <div class="bg-gray-100 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                        <!--  -->
                        <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="modules"
                            class="mySwiper">
                            <swiper-slide v-for="image,index in product.images" :key="index">
                                <img class="w-full h-full object-cover" :src="image" :alt="product.title">
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
                    <div class="flex mb-4">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700">Price: </span>
                            <span class="text-indigo-400">${{ product.price }}</span>
                        </div>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700">Product Description:</span>
                        <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .swiper {
        width: 520px;
        height: 460px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
