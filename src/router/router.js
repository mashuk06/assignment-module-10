import { createRouter, createWebHistory } from 'vue-router'

import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetails from '../components/ProductDetails.vue'
import NavBar from '../components/NavBar.vue'

const routes = [
    {
        path: '/',
        components: {
            default: ProductList,
            NavBar: NavBar
        },
        name: 'product-list'
    },
    {
        path: '/about',
        components: {
            default: About,
            NavBar: NavBar
        },
        name: 'about'
    },
    {
        path: '/contact',
        components: {
            default: Contact,
            NavBar: NavBar
        },
        name: 'contact'
    },
    {
        path: '/product/:id',
        components: {
            default: ProductDetails,
            NavBar: NavBar
        },
        name: 'product-details',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
