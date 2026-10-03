# 🎓 Materi Vibe Coding: Sistem Bimbingan Skripsi
> Panduan Praktis & Slide Deck Interaktif Perkuliahan Mahasiswa: Dari Intent Bahasa Alami Menjadi Aplikasi Nyata

Modul ini disusun berdasarkan dokumen panduan Google Cloud *"Apa itu vibe coding?"* dengan studi kasus nyata pembuatan **Sistem Bimbingan Skripsi (*BimbinganKu*)** menggunakan **Google Apps Script**, **Google Sheets**, **Google Stitch**, dan **Google Antigravity**.

---

## 📂 Struktur Direktori `MateriVibeCoding/`

```
MateriVibeCoding/
├── SAP_Vibe_Coding_Mahasiswa.md           # Dokumen Resmi Satuan Acara Perkuliahan (150 Menit, 15 Tahap)
├── Panduan_Vibe_Coding_AppsScript_...docx # Dokumen Acuan Langkah demi Langkah Lengkap
├── package.json                           # Konfigurasi dependensi slide deck (Vite + React)
├── vite.config.ts                         # Konfigurasi Vite (relative base deployment)
├── index.html                             # Entry point web slide deck
├── src/                                   # Source code aplikasi presentasi
│   ├── App.tsx                            # 15 Slide Masterclass Vibe Coding
│   ├── components/                        # Komponen interaktif (CodeWindow, Steps, Contrast, Split, Table, dll.)
│   ├── deck/                              # Engine presentasi paged responsive (Bolt-Slides)
│   └── styles/                            # Tokens CSS (Dark Technical Theme)
├── public/                                # Asset publik & gambar ilustrasi
│   └── images/                            # 5 Gambar ilustrasi AI beresolusi tinggi
│       ├── hero.jpg                       # Ilustrasi Cover Mahasiswa & AI Agent
│       ├── architecture.jpg               # Ilustrasi Arsitektur Sistem Bimbingan
│       ├── mission-control.jpg            # Ilustrasi Antigravity Mission Control
│       ├── security.jpg                   # Ilustrasi Cybersecurity Audit & Hashing
│       └── deployment.jpg                 # Ilustrasi Vibe Deploying & Cloud Scale
└── dist/                                  # Hasil kompilasi static build (siap deploy)
```

---

## 🚀 Menjalankan Slide Deck Secara Lokal

Untuk menjalankan slide deck di komputer lokal:

```bash
# 1. Masuk ke direktori MateriVibeCoding
cd MateriVibeCoding

# 2. Install dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka URL lokal yang muncul (biasanya `http://localhost:5173/` atau `http://localhost:5174/`).

---

## ⌨️ Kontrol Navigasi Keyboard

- `→` / `Space`: Maju ke slide / build reveal berikutnya
- `←`: Mundur ke slide sebelumnya
- `S`: Buka thumbnail rail samping
- `G`: Buka grid overview semua slide
- `P`: Buka mode presenter lengkap dengan catatan dosen, estimasi waktu, & panduan pedagogi
- `A`: Mode anotasi pensil interaktif langsung di atas slide
- `F`: Masuk ke mode fullscreen
- `H`: Sembunyikan/tampilkan dock navigasi

---

## 📑 Dokumen Terkait
- [Satuan Acara Perkuliahan (SAP) Lengkap](SAP_Vibe_Coding_Mahasiswa.md)
- [Panduan Langkah demi Langkah (DOCX)](Panduan_Vibe_Coding_AppsScript_Spreadsheet.docx)
