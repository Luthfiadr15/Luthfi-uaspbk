<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
    <div class="box-jadwal w-full max-w-6xl">
      <h2 class="judul">Jadwal Reservasi Lapangan</h2>

      <div class="text-right mb-4">
        <button class="btn" @click="goToReservasi">+ Reservasi Baru</button>
      </div>

      <table class="tabel w-full">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Jam</th>
            <th>Nama</th>
            <th>Lapangan</th>
            <th>Status</th>
            <th>Jumlah Bayar</th>
            <th>Metode</th>
            <th>Pembayaran</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in jadwal" :key="item.id">
            <td>{{ item.tanggal }}</td>
            <td>{{ item.jam }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.lapangan }}</td>
            <td :class="item.status === 'Tersedia' ? 'text-green-600' : 'text-red-600'">
              {{ item.status }}
            </td>
            <td>
              <span v-if="item.jumlah">Rp {{ item.jumlah.toLocaleString() }}</span>
              <span v-else class="text-gray-400">-</span>
            </td>
            <td>
              <span v-if="item.metode">{{ item.metode }}</span>
              <span v-else class="text-gray-400">-</span>
            </td>
            <td>
              <span
                v-if="item.status === 'Lunas' || item.status === 'Sudah Dibayar'"
                class="text-green-600 font-semibold"
              >Lunas</span>
              <span
                v-else
                class="text-yellow-500 font-semibold"
              >Belum</span>
            </td>
            <td>
              <button class="text-red-600 underline" @click="hapusJadwal(item.id)">Hapus</button>
            </td>
          </tr>
          <tr v-if="jadwal.length === 0">
            <td colspan="9" class="text-center text-gray-400 py-4">Belum ada data jadwal.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Jadwal",
  data() {
    return {
      baseURL: 'https://iron-expensive-cornet.glitch.me', // hanya root saja
      jadwal: []
    }
  },
  methods: {
    async getJadwal() {
      try {
        const res = await axios.get(`${this.baseURL}/jadwal`)
        this.jadwal = res.data
      } catch (err) {
        console.error('❌ Gagal mengambil data jadwal:', err)
        alert('❌ Gagal mengambil data.')
      }
    },
    async hapusJadwal(id) {
      if (!confirm('Yakin ingin menghapus jadwal ini?')) return
      try {
        await axios.delete(`${this.baseURL}/jadwal/${id}`)
        await this.getJadwal()
        alert('✅ Jadwal berhasil dihapus!')
      } catch (err) {
        console.error('❌ Gagal menghapus jadwal:', err)
        alert('❌ Gagal menghapus jadwal.')
      }
    },
    goToReservasi() {
      this.$router.push('/reservasi')
    }
  },
  mounted() {
    this.getJadwal()
  }
}
</script>

<style scoped>
.box-jadwal {
  background: linear-gradient(135deg, #6366f1, #4338ca);
  padding: 30px;
  border-radius: 20px;
  color: #e0e7ff;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.7);
}

.judul {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 25px;
}

.tabel {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  color: #1e293b;
}

.tabel th,
.tabel td {
  padding: 12px 15px;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}

.tabel th {
  background-color: #e0e7ff;
  font-weight: bold;
  color: #4f46e5;
}

.btn {
  background-color: #facc15;
  color: #1f2937;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background-color: #eab308;
}
</style>
