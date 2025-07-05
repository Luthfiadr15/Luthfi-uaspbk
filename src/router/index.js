// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Jadwal from '../views/Jadwal.vue'
import Reservasi from '../views/Reservasi.vue'
import Prestasi from '../views/Prestasi.vue'
import Login from '../views/Login.vue'
import Logins from '../pages/Logins.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jadwal', component: Jadwal },
  { path: '/reservasi', component: Reservasi },
  { path: '/prestasi', component: Prestasi },
  { path: '/login', component: Login },
  { path: '/logins', component: Logins }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
