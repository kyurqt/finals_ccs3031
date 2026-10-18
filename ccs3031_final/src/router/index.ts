import AboutUsView from '@/views/AboutUsView.vue'
import GalleryView from '@/views/GalleryView.vue'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import PartnershipView from '@/views/PartnershipView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView},
    { path: '/about', name: 'about', component: AboutUsView},
    {path: '/menu', name: 'menu', component: MenuView},
    {path: '/partnerships', name:'partnerships', component: PartnershipView},
    {path: '/gallery', name:'gallery', component: GalleryView}
  ],
})

export default router
