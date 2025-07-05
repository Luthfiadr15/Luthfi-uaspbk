// src/stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    isLoggedIn: false,
    baseURL: 'https://futsal-api.glitch.me/logins' 
  }),
  actions: {
    async login(username) {
      this.username = username
      this.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', username)

      try {
        const waktu = new Date().toISOString()
        await axios.post(`${this.baseURL}/logins`, { username, waktu })
        console.log('✅ Login disimpan ke JSON Server.')
      } catch (err) {
        console.error('❌ Gagal menyimpan login ke JSON Server:', err)
      }
    },

    logout() {
      this.username = ''
      this.isLoggedIn = false
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('username')
    },

    loadFromLocalStorage() {
      const saved = localStorage.getItem('isLoggedIn')
      const name = localStorage.getItem('username')
      if (saved === 'true' && name) {
        this.isLoggedIn = true
        this.username = name
      }
    }
  }
})
