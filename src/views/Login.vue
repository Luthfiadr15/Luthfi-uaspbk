<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="login w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-2">
        {{ isRegister ? 'Daftar Akun' : 'Selamat Datang' }}
      </h1>
      <p class="text-center text-gray-100 mb-6">
        {{ isRegister ? 'Buat akun baru untuk Futsal Booking' : 'Masuk ke akun Futsal Booking' }}
      </p>

      <form class="form-login" @submit.prevent="isRegister ? handleRegister() : handleLogin()">
        <!-- Username -->
        <label>
          <i class="fas fa-user mr-2"></i> Username
          <input v-model="username" type="text" placeholder="Masukkan username" required />
        </label>

        <!-- Password -->
        <label>
          <i class="fas fa-lock mr-2"></i> Password
          <input v-model="password" type="password" placeholder="Masukkan password" required />
        </label>

        <!-- Email saat Register -->
        <label v-if="isRegister">
          <i class="fas fa-envelope mr-2"></i> Email
          <input v-model="email" type="email" placeholder="Masukkan email" required />
        </label>

        <!-- Tombol -->
        <button type="submit">
          <i :class="isRegister ? 'fas fa-user-plus' : 'fas fa-sign-in-alt'" class="mr-2"></i>
          {{ isRegister ? 'DAFTAR' : 'MASUK' }}
        </button>
      </form>

      <!-- Link toggle -->
      <p class="mt-6 text-center text-sm text-gray-100">
        {{ isRegister ? 'Sudah punya akun?' : 'Belum punya akun?' }}
        <a href="#" @click.prevent="isRegister = !isRegister" class="text-yellow-200 hover:underline font-semibold">
          {{ isRegister ? 'Login Sekarang' : 'Daftar Sekarang' }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useAuthStore } from '../stores/auth'
import { mapActions } from 'pinia'

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      isRegister: false
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
    
    async handleLogin() {
      if (!this.username || !this.password) {
        alert("Username dan password wajib diisi!")
        return
      }

      try {
        const loginData = {
          username: this.username,
          waktu: new Date().toISOString()
        }

        const res = await axios.post('https://iron-expensive-cornet.glitch.me/logins', loginData)
        console.log("✅ Login berhasil disimpan ke JSON Server:", res.data)

        this.login(this.username) // simpan ke Pinia + localStorage
        this.$router.push('/')
      } catch (err) {
        console.error("❌ Terjadi error saat login:", err)
        alert("❌ Terjadi kesalahan saat menyimpan login.")
      }
    },

    handleRegister() {
      if (!this.username || !this.password || !this.email) {
        alert("⚠️ Semua field wajib diisi untuk registrasi!")
        return
      }

      alert(`✅ Akun untuk ${this.username} berhasil dibuat!`)
      this.isRegister = false
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 60px auto;
  background: linear-gradient(135deg, #6366f1, #4338ca);
  padding: 30px 25px;
  border-radius: 20px;
  color: #e0e7ff;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.2rem;
  text-shadow: 0 0 12px #8b5cf6;
}

.form-login label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
}

.form-login input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.3s ease;
}

.form-login input:focus {
  box-shadow: 0 0 10px #8b5cf6;
}

button {
  width: 100%;
  background-color: #7c3aed;
  border: none;
  padding: 12px 0;
  border-radius: 15px;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5b21b6;
}
</style>