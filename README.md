🏟️ Futsal Booking
Futsal Booking adalah aplikasi berbasis web yang dikembangkan dengan Vue.js sebagai frontend dan JSON Server sebagai backend simulasi. Aplikasi ini dirancang untuk mempermudah proses reservasi lapangan futsal, lengkap dengan fitur penjadwalan, pembayaran, serta pencatatan login pengguna.

🚀 Fitur Utama
🔐 Login & Register
Pengguna dapat login atau mendaftar untuk mencatat aktivitas pemesanan.

📅 Formulir Reservasi
Input nama, tanggal, jam, lapangan, metode pembayaran, dan jumlah bayar.

📋 Jadwal Reservasi
Menampilkan daftar jadwal reservasi berdasarkan data dari JSON Server.

🧾 Riwayat Login
Mencatat setiap login ke dalam database (/logins) dengan timestamp.

🗑️ Hapus Jadwal
Pengguna dapat menghapus jadwal yang sudah tidak digunakan.

🛠️ Teknologi yang Digunakan
Vue.js 3 — Framework frontend berbasis komponen

Vue Router — Navigasi antar halaman SPA

Pinia — Manajemen state global untuk auth

Axios — HTTP client untuk fetch/push data

JSON Server — REST API simulasi

Tailwind CSS — Utility-first CSS framework (optional, jika digunakan)

Vite — Build tool modern untuk proyek Vue

📁 Struktur Halaman
/ → Home
Menyambut pengguna dan menampilkan info aplikasi.

/jadwal → Jadwal
Menampilkan semua reservasi lapangan yang tercatat di server.

/reservasi → Formulir Reservasi
Tempat pengguna mengisi data reservasi lapangan.

/login → Login/Register
Login akun (juga bisa toggle ke mode register).

/logins → Riwayat Login
Menampilkan daftar user yang pernah login (jika diaktifkan).

🌐 API Endpoint (Glitch/Local JSON Server)
Berikut endpoint yang digunakan aplikasi ini:

Metode	Endpoint	Fungsi
GET	/jadwal	Menampilkan semua data jadwal
POST	/jadwal	Menambahkan jadwal baru
PATCH	/jadwal/:id	Mengubah data jadwal jika sudah ada
DELETE	/jadwal/:id	Menghapus data jadwal
POST	/reservasi	Menambahkan data reservasi (backup catatan)
POST	/logins	Mencatat waktu dan username login

🧪 Pengujian
Unit testing dapat dilakukan menggunakan Vitest untuk mengecek logika aplikasi, khususnya bagian Pinia Store.

📦 Cara Menjalankan Proyek
1. Clone repository
git clone https://github.com/Luthfiadr15/UAS-PBK.git
cd UAS-PBK
2. Install dependencies
npm install
3. Jalankan frontend
npm run dev
4. Jalankan JSON Server
json-server --watch db.json --port 3000
Catatan: Pastikan baseURL di axios mengarah ke URL JSON Server yang sesuai.

🌍 Deployment
Frontend dapat di-deploy ke Netlify
Backend (JSON Server) bisa di-host di Glitch agar online 24 jam.

📝 Penutup
Proyek ini dibuat untuk memenuhi tugas UAS mata kuliah Pengembangan Berbasis Komponen (PBK). Dengan kombinasi Vue, JSON Server, dan Pinia, aplikasi ini menunjukkan bagaimana membangun SPA modern yang terhubung dengan REST API sederhana namun fungsional.
