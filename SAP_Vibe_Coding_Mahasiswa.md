# SATUAN ACARA PERKULIAHAN (SAP)
## Mata Kuliah / Workshop: Rekayasa Perangkat Lunak Berbasis AI (AI-Assisted Software Engineering)
### Topik Khusus: *Responsible Vibe Coding: Dari Intent Bahasa Alami Menjadi Aplikasi Nyata*
**Studi Kasus:** Sistem Bimbingan Skripsi (*BimbinganKu*) dengan Google Apps Script, Google Sheets, Google Stitch, dan Google Antigravity

---

## I. IDENTITAS PERKULIAHAN / WORKSHOP

| Komponen | Keterangan |
|---|---|
| **Program Studi** | Teknik Informatika / Sistem Informasi / Rekayasa Perangkat Lunak |
| **Jenjang** | Sarjana (S1) / Diploma IV (D4) |
| **Alokasi Waktu** | 150 Menit (Tatap Muka, Diskusi, dan Praktikum Mandiri) |
| **Prasyarat** | Dasar Algoritma & Pemrograman, Dasar Basis Data, Pemrograman Web Dasar (HTML/JS) |
| **Media Pembelajaran** | Slide Deck Interaktif (Vite + React Bolt-Slides), Google Antigravity IDE, Google AI Studio, Google Sheets, Clasp CLI |
| **Model Pembelajaran** | *Problem-Based Learning (PBL)* & *Interactive Live Demonstration* |

---

## II. DESKRIPSI SINGKAT
Mata kuliah/workshop ini membekali mahasiswa dengan kompetensi rekayasa perangkat lunak modern menggunakan paradigma **Vibe Coding yang Bertanggung Jawab (Responsible AI-Assisted Development)**. Mahasiswa tidak hanya diajarkan cara meminta model AI menghasilkan kode, melainkan dilatih berperan sebagai **Tech Lead & Software Architect**: merumuskan spesifikasi domain, mendesain alur state machine, merancang database spreadsheet berstandar keamanan (hashing & salting), mengawal backend serverless (Google Apps Script), melakukan orkestrasi agen otonom di Google Antigravity, serta memvalidasi sistem menggunakan Browser Sub-Agent dan audit keamanan siber.

---

## III. CAPAIAN PEMBELAJARAN MATA KULIAH (CPMK)

1. **CPMK 1 (Mindset & Etika Rekayasa):** Mahasiswa mampu membedakan secara kritis antara *Vibe Coding Murni* (*blind trust*) dengan *Responsible AI Development*, serta memegang kepemilikan penuh (*code ownership*) atas aplikasi yang dibangun.
2. **CPMK 2 (Spesifikasi & State Machine):** Mahasiswa mampu menyusun alur bisnis, diagram status (*State Machine*), dan batasan fungsional (*acceptance criteria*) sebelum kode digenerate oleh AI.
3. **CPMK 3 (Desain Basis Data & Keamanan Akun):** Mahasiswa mampu merancang skema relasional di Google Sheets (8 tabel sheet) dan menerapkan enkripsi kredensial (SHA-256 + salt acak) tanpa menyimpan password teks biasa.
4. **CPMK 4 (Serverless Backend & Concurrency Control):** Mahasiswa mampu menyusun backend Google Apps Script yang aman dengan pola *Session Guard* di baris pertama dan proteksi *race condition* menggunakan `LockService`.
5. **CPMK 5 (Mission Control Antigravity & Otomasi Pengujian):** Mahasiswa mampu mengorkestrasi pengembangan lokal dengan clasp, memecah arsitektur modular, meninjau *Implementation Plan*, serta melakukan pengujian fungsional otomatis menggunakan Sub-Agen Browser.
6. **CPMK 6 (Audit Keamanan & Standarisasi Agen):** Mahasiswa mampu melakukan audit 6 pilar keamanan web (anti-XSS, pembatasan brute force, isolasi hak akses NIM/NIDN) dan menanamkan SOP permanen pada AI melalui *Agent Skills* (`SKILL.md`).

---

## IV. RANCANGAN PEMBELAJARAN PER SLIDE (15 TAHAP PERKULIAHAN)

| Menit Ke- | Slide & Navigasi | Topik Bahasan | Aktivitas Dosen / Fasilitator | Aktivitas Mahasiswa | Media Visual & Komponen Interaktif | Indikator Keberhasilan |
|---|---|---|---|---|---|---|
| **00 - 10** | **Slide 1**<br>`01. Cover` | Pembukaan & Pergeseran Paradigma Koding | Membuka kuliah dengan studi fenomena: *"Siapa yang pernah minta AI koding tapi tidak paham isinya?"* Menguraikan peran baru mahasiswa sebagai arsitek sistem. | Mahasiswa merespons pengalaman menggunakan AI coding dan menyimak kontrak belajar. | Background Hero Image (`hero.jpg`), display title, kicker `AI-Assisted Engineering`. | Mahasiswa menyadari pergeseran peran dari pengetik sintaks menjadi penilai kualitas (*judgment*). |
| **10 - 20** | **Slide 2**<br>`02. Peta Materi` | Roadmap Pembelajaran 15 Langkah | Memaparkan alur 15 langkah dari dokumen resmi Google Cloud: dari mindset, skema data, backend, hingga audit produksi. | Mahasiswa memetakan tahapan yang akan dilalui selama sesi. | Komponen `Agenda` 5 babak perkuliahan dengan penanda hint terstruktur. | Mahasiswa memahami peta jalan (*milestone*) perkuliahan. |
| **20 - 35** | **Slide 3**<br>`03. Paradigma` | Langkah 0: Vibe Murni vs Responsible AI | Menjelaskan bahaya *Blind Trust* pada data sensitif kampus vs disiplin *Human-in-the-Loop*. | Mahasiswa menganalisis studi kasus kegagalan software akibat halusinasi AI. | Komponen `Contrast`: panel kiri dim (Vibe Murni) vs panel kanan lit (Responsible AI). | Mahasiswa berkomitmen menerapkan mode Responsible AI. |
| **35 - 45** | **Slide 4**<br>`04. Studi Kasus` | Studi Kasus: Sistem BimbinganSkripsi | Membedah kebutuhan sistem *BimbinganKu*: interaksi 3 aktor (Admin, Dosen, Mahasiswa) dan tantangan hak akses bertingkat. | Mahasiswa mengidentifikasi entitas dan relasi antar peran. | Komponen `Split`: media diagram arsitektur (`architecture.jpg`) + kartu peran aktor. | Mahasiswa memahami ruang lingkup fungsional sistem. |
| **45 - 60** | **Slide 5**<br>`05. Alur Proses` | Langkah 1: State Machine & Celah Logika | Mendemonstrasikan pembuatan diagram status pengajuan judul, siklus bimbingan bab 1-5, dan penetapan status Siap Sidang. | Mahasiswa merumuskan prompt untuk meminta AI mencari celah logika alur. | 3 Kartu Fase State Machine + Build click reveal strategi prompt. | Mahasiswa mampu memvalidasi transisi state sebelum membuat kode. |
| **60 - 75** | **Slide 6**<br>`06. Database Sheets` | Langkah 2: Database Spreadsheet & Aturan Akun | Memaparkan skema 8 sheet dan 3 aturan emas: SHA-256 + salt acak, akses sheet privat, dan format NIM plain text. | Mahasiswa menelaah potensi kebocoran data jika password disimpan plaintext. | Komponen `Table` data skema sheet + 3 highlight card aturan keamanan. | Mahasiswa mampu menyusun struktur tabel spreadsheet yang aman. |
| **75 - 85** | **Slide 7**<br>`07. UI & Mock API` | Langkah 3 & 4: Desain Stitch & Prototipe AI Studio | Menjelaskan teknik visual-first dengan Stitch dan pembuatan mock API object di Google AI Studio (Build). | Mahasiswa mengamati bagaimana antarmuka dipisahkan dari layer akses data. | Komponen `Split` flip: teks proses + SpotlightCard pola mock API abstraction. | Mahasiswa memahami pola pemisahan antarmuka dan backend. |
| **85 - 100** | **Slide 8**<br>`08. Backend Apps Script` | Langkah 5: Google Apps Script & Security Guard | Membedah anatomi `Code.gs`: validasi `sesi_()` di baris pertama, `LockService`, dan konvensi fungsi privat berakhiran `_`. | Mahasiswa menganalisis baris kode kritis penulisan database. | Komponen `CodeWindow` dengan line highlighting pada sesi dan locking. | Mahasiswa mampu menulis/mengaudit backend serverless Apps Script. |
| **100 - 110** | **Slide 9**<br>`09. Iterasi & Deploy` | Langkah 6 & 7: The Iterative Loop & Deploy Web App | Mengajarkan etika diagnosis error: jangan panik, baca stacktrace, minta penjelasan akar masalah sebelum patch. | Mahasiswa mempraktikkan cara membuat prompt perbaikan error yang efektif. | Komponen `Steps` 4 tahapan berurutan: Intent → Diagnosis → Pahami → Deploy. | Mahasiswa terbiasa memahami penyebab bug sebelum menambal kode. |
| **110 - 120** | **Slide 10**<br>`10. Antigravity & Clasp` | Langkah 8 & 9: Scale Up ke Antigravity & Clasp | Menjelaskan transisi dari web editor ke Antigravity Mission Control dan modularisasi kode via clasp (`clasp clone`). | Mahasiswa menyimak struktur pemecahan `Code.gs` menjadi modul terpisah. | Komponen `Split`: media ruang kendali (`mission-control.jpg`) + rincian clasp. | Mahasiswa memahami cara mengelola proyek skala menengah di lingkungan lokal. |
| **120 - 130** | **Slide 11**<br>`11. Plan & Browser Agent` | Langkah 10 & 11: Plan Review & Browser Sub-Agent | Mendemonstrasikan titik kendali arsitek melalui `implementation_plan.md` dan testing otomatis UI via Browser Sub-Agent. | Mahasiswa mengamati proses browser agent memvalidasi skenario login dan hak akses. | 2 Spotlight Cards: Planning Mode vs Sub-Agent Browser Verification. | Mahasiswa mampu mengevaluasi rencana aksi agen AI sebelum eksekusi. |
| **130 - 140** | **Slide 12**<br>`12. Audit Keamanan` | Langkah 12: 6 Checklist Audit Keamanan Manusia | Memandu audit 6 pilar keamanan: Hashing, Server Guard, Isolasi Data NIM, Concurrency, Anti-XSS, dan Brute Force Lockout. | Mahasiswa mencatat checklist audit sebagai standar kualitas wajib rilis aplikasi. | Komponen `Split` flip: kartu 6 pilar keamanan + ilustrasi perisai (`security.jpg`). | Mahasiswa mampu melakukan vulnerability assessment mandiri pada aplikasi. |
| **140 - 145** | **Slide 13**<br>`13. Skills & Deploy` | Langkah 13 & 14: Agent Skills & Vibe Deploying | Mengenalkan pembuatan `.agent/skills/standar-apps-script/SKILL.md` untuk mengunci aturan rekayasa dan roadmap migrasi Cloud Run. | Mahasiswa memahami cara melatih agen AI agar tidak mengulang kesalahan masa lalu. | Komponen `Split`: rincian Agent Skills + ilustrasi peluncuran roket (`deployment.jpg`). | Mahasiswa menguasai konsep Agent Skills dan skalabilitas cloud. |
| **145 - 148** | **Slide 14**<br>`14. 7 Golden Rules` | Langkah 15 & Best Practices Prompting | Merangkum 7 aturan emas prompting teknik untuk mahasiswa agar terhindar dari *spaghetti code* dan *technical debt*. | Mahasiswa mencatat dan mengonfirmasi 7 aturan emas rekayasa prompt. | Grid 7 kartu aturan emas terstruktur lengkap dengan nomor dan deskripsi. | Mahasiswa memiliki panduan praktis penulisan prompt teknis. |
| **148 - 150** | **Slide 15**<br>`15. Penutup` | Refleksi & Call to Action Mahasiswa | Menutup kuliah dengan kesimpulan: *"AI menulis sintaks, kamu menentukan kualitas!"* Membuka sesi tanya jawab & tugas proyek. | Mahasiswa menyimpulkan pembelajaran dan bersiap mengerjakan tugas praktikum. | Komponen `Slide center`: Display typography + SpotlightCard quote motivasi. | Mahasiswa termotivasi menjadi software engineer tangguh di era AI. |

---

## V. METODE EVALUASI & RUBRIK PENILAIAN MAHASISWA

Tugas praktikum mandiri/kelompok: Mahasiswa diminta membangun prototipe sistem bimbingan atau sistem kampus setara menggunakan prinsip Responsible Vibe Coding.

| Kriteria Penilaian | Bobot | Deskripsi Indikator Penilaian |
|---|---|---|
| **1. Desain Arsitektur & State Machine** | 20% | Kejelasan diagram status (Mermaid), tidak ada celah logika transisi status, pemisahan peran yang tegas antara admin, dosen, dan mahasiswa. |
| **2. Keamanan Basis Data Spreadsheet** | 20% | Spreadsheet berstatus privat, tidak ada plaintext password (wajib SHA-256 + salt acak), NIM diformat teks, struktur tabel bersih tanpa duplikasi. |
| **3. Server-Side Guard & Concurrency** | 20% | Setiap fungsi publik memanggil `sesi_(token, role)` di baris pertama, seluruh mutasi penulisan spreadsheet menggunakan `LockService`, fungsi pembantu bersifat privat (`_`). |
| **4. Kualitas Rekayasa Prompt & Siklus Debugging** | 20% | Prompt terstruktur (satu perubahan per prompt, mencantumkan batasan teknis), dokumentasi `implementation_plan.md` rapi, diagnosis error berbasis akar masalah. |
| **5. Testing Otomatis & Standar Proyek (Agent Skills)** | 20% | Tersedia fungsi tes alur end-to-end, bukti verifikasi skenario uji, dan file `SKILL.md` yang merumuskan aturan rekayasa proyek. |

---

## VI. DAFTAR PUSTAKA & RUJUKAN RESMI
1. Google Cloud Architecture Center (2026). *What is Vibe Coding? Responsible AI-Assisted Software Development*.
2. Google Workspace Developers Guide (2026). *Google Apps Script V8 Runtime & Optimization Guide*.
3. OWASP Foundation (2025). *OWASP Top 10 Web Application Security Risks*.
4. Google Antigravity Documentation (2026). *Agentic IDE Workflows, Clasp Integration, and Sub-Agent Browser Verification*.
