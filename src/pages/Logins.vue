<template>
  <div class="p-6 max-w-2xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">Riwayat Login</h2>

    <table class="w-full table-auto border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">Username</th>
          <th class="border px-4 py-2">Waktu Login</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="login in logins" :key="login.id" class="text-center">
          <td class="border px-4 py-2">{{ login.username }}</td>
          <td class="border px-4 py-2">{{ formatTanggal(login.timestamp) }}</td>
        </tr>
        <tr v-if="logins.length === 0">
          <td colspan="2" class="py-4 text-gray-500">Belum ada data login.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Logins',
  data() {
    return {
      logins: []
    }
  },
  methods: {
    async fetchLogins() {
      try {
        const res = await axios.get('https://iron-expensive-cornet.glitch.me/logins')
        this.logins = res.data
      } catch (err) {
        console.error('Gagal mengambil data login:', err)
      }
    },
    formatTanggal(iso) {
      const date = new Date(iso)
      return date.toLocaleString('id-ID', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  },
  mounted() {
    this.fetchLogins()
  }
}
</script>

<style scoped>
table {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>