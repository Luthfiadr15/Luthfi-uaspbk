import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE = "https://iron-expensive-cornet.glitch.me/reservasi"

export const useReservasiStore = defineStore('reservasi', {
  state: () => ({
    reservasiTerakhir: null,
    daftarReservasi: []
  }),
  actions: {
    simpanReservasi(data) {
      this.reservasiTerakhir = data
    },
    async ambilReservasi() {
      try {
        const response = await axios.get(`${API_BASE}/reservasi`)
        this.daftarReservasi = response.data
      } catch (error) {
        console.error("Gagal mengambil data reservasi:", error)
      }
    },
    async tambahReservasi(data) {
      try {
        const response = await axios.post(`${API_BASE}/reservasi`, data)
        this.reservasiTerakhir = response.data
      } catch (error) {
        console.error("Gagal menambah reservasi:", error)
      }
    }
  }
})
