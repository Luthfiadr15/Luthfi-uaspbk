<template>
<nav class="navbar">
    <div class="logo">Futsal Booking</div>
    <div class="logo">
      <i class="fas fa-futbol mr-2"></i> Futsal Booking
    </div>
<ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Beranda</router-link></li>
<li><router-link to="/jadwal">Jadwal</router-link></li>
<li><router-link to="/reservasi">Reservasi</router-link></li>
      <li><router-link to="/pembayaran">Pembayaran</router-link></li>
<li><router-link to="/prestasi">Prestasi</router-link></li>
<li><router-link to="/login">Login</router-link></li>
<li><router-link to="/register">Register</router-link></li>
</ul>
</nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar {
 display: flex;
 justify-content: space-between;
 align-items: center;
  background-color: #0d47a1; /* biru gelap */
  background: linear-gradient(90deg, #1e3a8a, #3b82f6);
 padding: 1rem 2rem;
 color: white;
 font-weight: bold;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links {
 list-style: none;
 display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-links li a {
 color: white;
 text-decoration: none;
  transition: color 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-links li a.router-link-exact-active,
.nav-links li a:hover {
  color: #ff6f00; /* oranye terang */
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffeb3b;
}
</style>