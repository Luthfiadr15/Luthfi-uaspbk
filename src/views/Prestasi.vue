<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
    <div class="box-prestasi w-full max-w-6xl">
      <h2 class="judul">Prestasi Tim Kami</h2>
      <p class="deskripsi">
        Berikut beberapa prestasi yang telah kami raih dalam berbagai kompetisi futsal tingkat lokal maupun nasional.
      </p>
      <div class="gallery">
        <img v-for="(foto, idx) in fotoPrestasi" :key="idx" :src="foto" alt="Prestasi Futsal" />
      </div>
    </div>
  </div>
</template>

<script>
import prestasi1 from '../assets/prestasi1.jpg'
import prestasi2 from '../assets/prestasi2.jpg'
import prestasi3 from '../assets/prestasi3.jpg'
import prestasi4 from '../assets/prestasi4.jpg'
import prestasi5 from '../assets/prestasi5.jpg'
import prestasi6 from '../assets/prestasi6.jpg'
import prestasi7 from '../assets/prestasi7.jpg'
import prestasi8 from '../assets/prestasi8.jpg'

export default {
  name: "Prestasi",
  data() {
    return {
      fotoPrestasi: [
        prestasi1,
        prestasi2,
        prestasi3,
        prestasi4,
        prestasi5,
        prestasi6,
        prestasi7,
        prestasi8
      ]
    }
  }
}
</script>

<style scoped>
.box-prestasi {
  background: linear-gradient(135deg, #6366f1, #4338ca);
  padding: 40px;
  border-radius: 24px;
  color: #e0e7ff;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.judul {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 18px;
  text-shadow: 0 0 15px #8b5cf6;
}

.deskripsi {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 32px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  justify-items: center;
}

.gallery img {
  width: 100%;
  max-width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery img:hover {
  transform: scale(1.06);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}
</style>
