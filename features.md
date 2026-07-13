# Portofolio Features Catalog

Dokumen ini melacak seluruh fitur yang telah dibangun di portofolio ini, beserta status aktif/nonaktifnya saat ini untuk memudahkan pemeliharaan dan aktivasi di masa mendatang.

---

## 🟢 FITUR AKTIF (ACTIVE FEATURES)

### 1. Multi-Language Support (Dukungan Bahasa)
* **Status:** `Aktif`
* **Deskripsi:** Memungkinkan perpindahan bahasa (Inggris ke Indonesia dan sebaliknya) secara mulus di seluruh halaman web, termasuk halaman beranda, navigasi, form kontak, dan blog.
* **Berkas Terkait:**
  * [translations.ts](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/lib/translations.ts) (Kamus kata terjemahan)
  * [profile.json (EN)](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/data/en/profile.json) & [profile.json (ID)](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/data/id/profile.json) (Data profil terlokalisasi)
  * [src/pages/id/](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/pages/id/) (Halaman versi Indonesia)
  * [src/pages/](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/pages/) (Halaman versi Inggris)

### 2. Dark Mode & Light Mode (Tema Gelap/Terang)
* **Status:** `Aktif`
* **Deskripsi:** Sistem perpindahan tema warna (Gelap sebagai default, Terang sebagai opsional) menggunakan kelas `dark` pada elemen `html` via Alpine.js. Dilengkapi dengan script pencegah kedipan warna (*flash of unstyled content / FOUC*).
* **Berkas Terkait:**
  * [Nav.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/Nav.astro) (Toggle tombol tema)
  * [BaseLayout.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/layouts/BaseLayout.astro) (Script inline pendeteksi tema di head & swap handler)

### 3. Live Custom Accent Color Picker (Pemilih Warna Aksen)
* **Status:** `Aktif`
* **Deskripsi:** Pengunjung dapat memilih salah satu dari 5 warna aksen (Oranye, Biru, Emerald/Hijau, Ungu, dan Rose/Merah) secara *live* melalui navbar. Aksen ini langsung mengubah warna tombol, tautan, border, progress bar, hingga warna blok/seleksi teks secara real-time.
* **Berkas Terkait:**
  * [Nav.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/Nav.astro) (Dot pemilih warna aksen di desktop & mobile)
  * [globals.css](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/styles/globals.css) (CSS Variables aksen luar `@layer` untuk menghindari kompilasi stripping)

### 4. Project Filtering (Filter Kategori Proyek)
* **Status:** `Aktif`
* **Deskripsi:** Navigasi kategori interaktif pada bagian portofolio proyek (All, Frontend Web, UI/UX Design, Fullstack/AI) secara instan tanpa memuat ulang halaman (menggunakan Alpine.js).
* **Berkas Terkait:**
  * [Projects.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/sections/Projects.astro) (Fungsi filtering & tata letak)

---

## 🔴 FITUR NONAKTIF (INACTIVE / HIDDEN FEATURES)

### 1. Blog / Catatan Belajar (Keystatic CMS)
* **Status:** `Sembunyikan (Inactive)` *(Dapat diaktifkan kembali kapan saja)*
* **Deskripsi:** Sistem publikasi artikel dengan Astro Content Collections berbasis JSON dan editor Keystatic CMS lokal/Git. Menggunakan kustom renderer server-side (`renderNode`) agar aman dari konflik Astro View Transitions (bebas freeze).
* **Cara Aktivasi Kembali:**
  1. Hapus tanda komentar pada `<BlogSection locale={locale} />` di [PageContent.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/PageContent.astro).
  2. Hapus tanda komentar pada baris `{ href: '#blog', key: 'blog' },` di [nav.ts](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/lib/nav.ts).
* **Berkas Terkait:**
  * [BlogSection.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/sections/BlogSection.astro) (Seksi blog di beranda)
  * [src/pages/blog/](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/pages/blog/) & [src/pages/id/blog/](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/pages/id/blog/) (Daftar & Detail artikel)
  * [keystatic.config.ts](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/keystatic.config.ts) (Registrasi koleksi CMS)

### 2. Certifications Section (Sertifikasi)
* **Status:** `Sembunyikan (Inactive)`
* **Deskripsi:** Seksi khusus untuk memajang sertifikasi kompetensi digital yang diperoleh.
* **Cara Aktivasi Kembali:**
  * Hapus tanda komentar pada `{/* <Certifications locale={locale} /> */}` di [PageContent.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/PageContent.astro).
* **Berkas Terkait:**
  * [Certifications.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/sections/Certifications.astro) (Seksi & visualisasi sertifikat)

### 3. Testimonials Section (Testimoni)
* **Status:** `Sembunyikan (Inactive)`
* **Deskripsi:** Seksi khusus untuk menampilkan penilaian/testimoni dari rekan kerja atau klien.
* **Cara Aktivasi Kembali:**
  * Hapus tanda komentar pada `{/* <Testimonials locale={locale} /> */}` di [PageContent.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/PageContent.astro).
* **Berkas Terkait:**
  * [Testimonials.astro](file:///c:/main/KultivasiDewaNgoding/Portfolio-Website/src/components/sections/Testimonials.astro) (Seksi & visualisasi testimoni)
