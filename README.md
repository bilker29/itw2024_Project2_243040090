<div align="center">

<img src="./img/logo besar 1.png" alt="Logo Sayur MakDik" width="220">

# Sayur MakDik

Website katalog dan promosi toko sayur, buah, bumbu dapur, serta bahan makanan segar.

[![GitHub repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/bilker29/itw2024_Project2_243040090)
[![HTML](https://img.shields.io/badge/HTML5-static%20website-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-responsive-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

</div>

## Tentang proyek

Sayur MakDik adalah website statis untuk memperkenalkan toko dan menampilkan katalog produk. Pengunjung dapat menjelajahi kategori, melihat informasi kategori melalui galeri, membaca informasi singkat tentang manfaat sayur dan buah, serta menghubungi toko.

## Fitur

- Navigasi ke kategori produk, galeri, informasi toko, dan kontak.
- Katalog produk: sayur, bumbu dapur, bahan racik, ayam dan ikan, ikan asin, seafood, serta buah.
- Galeri kategori dengan dialog informasi yang dapat digunakan melalui mouse maupun keyboard.
- Tombol pemesanan melalui WhatsApp dan formulir kontak.
- Tata letak responsif untuk desktop dan perangkat seluler.

## Menjalankan secara lokal

Tidak diperlukan proses build atau instalasi dependency.

1. Unduh atau clone repositori ini.
2. Buka `index.html` di browser.

Untuk pengalaman pengembangan yang lebih konsisten, jalankan server lokal statis dari folder proyek, misalnya dengan ekstensi **Live Server** di Visual Studio Code.

## Teknologi

- HTML, CSS, dan JavaScript tanpa framework.
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/), [AOS](https://michalsnik.github.io/aos/), dan [Boxicons](https://boxicons.com/).
- Google Fonts dan Web3Forms untuk layanan eksternal.

Sebagian aset dan layanan eksternal memerlukan koneksi internet. Formulir kontak juga bergantung pada konfigurasi Web3Forms yang valid.

## Struktur proyek

```text
.
├── img/          # Logo, foto produk, dan aset gambar
├── index.html    # Halaman utama dan katalog
├── script.js     # Interaksi dialog galeri
├── style.css     # Gaya dan tata letak responsif
└── README.md
```

## Publikasi di GitHub Pages

1. Buka **Settings → Pages** pada repositori GitHub.
2. Pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`, lalu simpan.

## Kontak dan pemesanan

Gunakan tombol **Order Now** di website untuk menghubungi toko melalui WhatsApp. Untuk pertanyaan lainnya, gunakan formulir pada bagian **Contact**.
