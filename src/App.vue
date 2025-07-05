<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">
        <img :src="logo" alt="Logo" />
        <router-link to="/" class="site-title">Futsal Booking</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/jadwal">Jadwal</router-link></li>
        <li><router-link to="/reservasi">Reservasi</router-link></li>
        <li><router-link to="/prestasi">Prestasi</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
import logo from './assets/logo.jpg'

export default {
  data() {
    return { logo }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #0a1a2b;
  min-height: 100vh;
  color: #e0e7ff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #1f2937, #3b82f6);
  padding: 0 30px;
  height: 60px;
  box-shadow: 0 3px 8px #1e40af;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  height: 40px;
  border-radius: 8px;
}

.site-title {
  color: #dbeafe;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 22px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: #dbeafe;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 14px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.nav-links li a.router-link-exact-active,
.nav-links li a:hover {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 0 8px #60a5fa;
}
</style>
