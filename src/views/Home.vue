<template>
  <section class="home">
    <div class="hero">
      <div class="text">
        <h1>Selamat Datang di <span>Futsal Booking</span></h1>
        <p>Pesan lapangan futsal favoritmu dengan mudah, cepat, dan nyaman!</p>
        <button @click="goToReservasi">Reservasi Sekarang</button>
      </div>
      <div class="image">
        <img src="../assets/futsal-ball.png" alt="Futsal Ball" />
      </div>
    </div>

    <div class="features">
      <div class="feature">
        <img src="../assets/icon-schedule.png" alt="Jadwal" />
        <h3>Jadwal Real-Time</h3>
        <p>Lihat ketersediaan lapangan secara langsung tanpa menunggu.</p>
      </div>
      <div class="feature">
        <img src="../assets/icon-payment.png" alt="Pembayaran" />
        <h3>Pembayaran Mudah</h3>
        <p>Dukung berbagai metode pembayaran cepat dan aman.</p>
      </div>
      <div class="feature">
        <img src="../assets/icon-support.png" alt="Support" />
        <h3>Dukungan 24/7</h3>
        <p>Butuh bantuan? Tim kami siap membantu kapan saja.</p>
      </div>
    </div>

    <div class="stats">
      <div class="stat-box">
        <h2>500+</h2>
        <p>Reservasi Sukses</p>
      </div>
      <div class="stat-box">
        <h2>100%</h2>
        <p>Pelanggan Puas</p>
      </div>
      <div class="stat-box">
        <h2>3+</h2>
        <p>Lapangan Tersedia</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToReservasi() {
      this.$router.push('/reservasi');
    }
  }
}
</script>

<style scoped>
.home {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #f0f9ff;
  padding: 40px 20px;
  background: linear-gradient(to bottom right, #1e3a8a, #2563eb);
}

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 50px;
}

.hero .text {
  max-width: 500px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 0 0 12px #3b82f6;
}

.hero h1 span {
  color: #facc15;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero button {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #10b981;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hero button:hover {
  background-color: #059669;
}

.hero .image img {
  width: 300px;
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 0;
  text-align: center;
}

.feature {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  padding: 20px;
  border-radius: 20px;
  width: 250px;
  margin: 15px;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: scale(1.05);
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.3);
}

.feature img {
  width: 60px;
  margin-bottom: 10px;
}

.feature h3 {
  color: #facc15;
  margin-bottom: 8px;
}

.stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 30px;
}

.stat-box {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
  padding: 25px 30px;
  border-radius: 15px;
  text-align: center;
  min-width: 180px;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.3);
}

.stats h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #facc15;
}

.stats p {
  font-size: 1rem;
  margin-top: 5px;
}
</style>