<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="form-wrapper">
      <h2 class="form-title">Formulir Reservasi & Pembayaran</h2>

      <form @submit.prevent="kirimReservasi" class="form-box">
        <div class="form-group">
          <label>Nama Pemesan</label>
          <input v-model="form.nama" type="text" required placeholder="Masukkan nama" />
        </div>

        <div class="form-group">
          <label>Tanggal</label>
          <input v-model="form.tanggal" type="date" required />
        </div>

        <div class="form-group">
          <label>Jam</label>
          <input v-model="form.jam" type="time" required />
        </div>

        <div class="form-group">
          <label>Lapangan</label>
          <select v-model="form.lapangan" required>
            <option disabled value="">Pilih Lapangan</option>
            <option>Lapangan 1</option>
            <option>Lapangan 2</option>
            <option>Lapangan 3</option>
          </select>
        </div>

        <div class="form-group">
          <label>Metode Pembayaran</label>
          <select v-model="form.metode" required>
            <option disabled value="">Pilih Metode</option>
            <option>QRIS</option>
            <option>Transfer BCA</option>
            <option>Transfer BNI</option>
            <option>Tunai</option>
          </select>
        </div>

        <div class="form-group">
          <label>Jumlah Bayar (Rp)</label>
          <input v-model.number="form.jumlah" type="number" required placeholder="Contoh: 150000" />
        </div>

        <button type="submit" class="submit-button">Simpan Reservasi</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Reservasi',
  data() {
    return {
      form: {
        nama: '',
        tanggal: '',
        jam: '',
        lapangan: '',
        status: 'Lunas',
        metode: '',
        jumlah: null
      },
      baseURL: 'https://futsal-api.glitch.me'
    }
  },
  methods: {
    async kirimReservasi() {
      try {
        const { nama, tanggal, jam, lapangan, status, metode, jumlah } = this.form
        const data = { nama, tanggal, jam, lapangan, status, metode, jumlah }

        // Cek jika jadwal bentrok
        const res = await axios.get(`${this.baseURL}/jadwal?tanggal=${tanggal}&jam=${jam}`)

        if (res.data.length > 0) {
          const existing = res.data[0]
          await axios.patch(`${this.baseURL}/jadwal/${existing.id}`, {
            ...existing,
            ...data
          })
        } else {
          await axios.post(`${this.baseURL}/jadwal`, data)
        }

        // Tambah ke tabel reservasi
        await axios.post(`${this.baseURL}/reservasi`, {
          ...data,
          waktu: new Date().toISOString()
        })

        alert('✅ Reservasi berhasil disimpan!')
        this.$router.push('/jadwal')
      } catch (err) {
        console.error('❌ Gagal menyimpan reservasi:', err)
        alert('❌ Terjadi kesalahan saat menyimpan reservasi.')
      }
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  max-width: 400px;
  margin: 60px auto;
  background: linear-gradient(135deg, #6366f1, #4338ca);
  padding: 30px 25px;
  border-radius: 20px;
  color: #e0e7ff;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-shadow: 0 0 12px #8b5cf6;
}

.form-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
}

input,
select {
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  transition: box-shadow 0.3s ease;
}

input:focus,
select:focus {
  box-shadow: 0 0 10px #8b5cf6;
}

.submit-button {
  background-color: #7c3aed;
  color: white;
  font-weight: 700;
  padding: 12px;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #5b21b6;
}
</style>
