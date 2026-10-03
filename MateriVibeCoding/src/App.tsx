import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Agenda from './components/Agenda';
import Contrast from './components/Contrast';
import Split from './components/Split';
import Steps from './components/Steps';
import Table from './components/Table';
import CodeWindow from './components/CodeWindow';
import SpotlightCard from './components/SpotlightCard';

export default function App() {
  return (
    <Deck>
      {/* ─────────────────────────────────────────────────────────────
          SLIDE 1: COVER
          ───────────────────────────────────────────────────────────── */}
      <Cover
        nav="01. Cover"
        notes="[Estimasi: 2 menit] Buka dengan pertanyaan interaktif ke mahasiswa: 'Siapa di sini yang pernah minta AI menuliskan kode program? Dari kalian, berapa banyak yang benar-benar membaca dan memverifikasi setiap baris hasilnya?' Jelaskan bahwa kuliah hari ini bukan tentang cara malas ngoding, melainkan tentang pergeseran peran insinyur software: dari sekadar pengetik sintaks menjadi arsitek dan penguji kualitas (human judgment). Kita akan membedah sistem bimbingan skripsi nyata dari langkah 0 hingga langkah 15."
        kicker="Rekayasa Perangkat Lunak · AI-Assisted Engineering"
        title={
          <>
            Vibe Coding: <span className="accent-text">Sistem Bimbingan Skripsi</span>
          </>
        }
        subtitle="Panduan Praktis Mahasiswa: Dari Intent Bahasa Alami ke Sistem Nyata dengan Google Apps Script, Sheets, Stitch & Antigravity"
        image="./images/hero.jpg"
        foot="Berdasarkan Panduan Resmi Google Cloud & Rekayasa Responsible AI · 2026"
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 2: AGENDA
          ───────────────────────────────────────────────────────────── */}
      <Agenda
        nav="02. Peta Materi"
        notes="[Estimasi: 1.5 menit] Orientasi ruang kelas. Jelaskan bahwa dalam sesi ini kita akan membongkar alur 15 langkah secara terstruktur. Tekankan bahwa vibe coding profesional terbagi dalam 5 tahap rekayasa perangkat lunak: dari mindset, skema data, backend serverless, otomasi IDE, hingga pengujian keamanan produksi."
        kicker="Peta Pembelajaran"
        title="15 Langkah Menuju Vibe Coding Tangguh."
        items={[
          { title: '01. Mindset & Alur Proses', hint: 'Langkah 0-1: Responsible AI vs Vibe Murni & State Machine' },
          { title: '02. Database & Desain Visual', hint: 'Langkah 2-4: Google Sheets, Stitch & Prototipe AI Studio' },
          { title: '03. Backend Google Apps Script', hint: 'Langkah 5-7: Code.gs, LockService, Sesi & Iterative Loop' },
          { title: '04. Mission Control Antigravity', hint: 'Langkah 8-11: Clasp, Modularisasi & Browser Sub-Agent' },
          { title: '05. Keamanan & Produksi', hint: 'Langkah 12-15: Security Audit, Agent Skills & Vibe Deploying' },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 3: LANGKAH 0 — DUA PARADIGMA VIBE CODING
          ───────────────────────────────────────────────────────────── */}
      <Contrast
        nav="03. Paradigma"
        notes="[Estimasi: 3 menit] INTI PEDAGOGIS: Tekankan bahwa untuk proyek yang menyimpan data pribadi mahasiswa dan akun login, mode Vibe Coding Murni dilarang keras. Mahasiswa harus memilih mode Responsible AI: AI sebagai pair programmer gesit, tetapi mahasiswa memegang kendali arsitektur dan kepemilikan penuh (code ownership)."
        kicker="Langkah 0 · Pemilihan Mode"
        title="Dua Jalur: Vibe Murni vs Responsible AI."
        left={{
          label: 'Mode 01 · Vibe Murni',
          title: 'Blind Trust (Proyek Mainan)',
          points: [
            'Percaya 100% pada output AI tanpa membaca ulang baris kodenya.',
            'Hanya cocok untuk eksplorasi ide sesaat atau proyek akhir pekan sekali pakai.',
            'Developer kehilangan mental model dan pemahaman arsitektur sistem.',
            'Rentan celah fatal: password plaintext, data bocor, race condition.',
          ],
        }}
        right={{
          label: 'Mode 02 · Responsible AI',
          title: 'Pair Programmer (Standar Rekayasa)',
          points: [
            'AI berperan sebagai Junior Engineer / Pair Programmer yang sangat gesit.',
            'Mahasiswa sebagai Tech Lead & Arsitek yang memiliki kepemilikan penuh.',
            'Verifikasi kode kritis: autentikasi, otorisasi, dan transaksi data.',
            'Wajib untuk sistem kampus, skripsi, dan portofolio profesional.',
          ],
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 4: STUDI KASUS SISTEM BIMBINGANKU (SPLIT)
          ───────────────────────────────────────────────────────────── */}
      <Split
        nav="04. Studi Kasus"
        notes="[Estimasi: 2.5 menit] Ajak mahasiswa melihat bahwa studi kasus ini dipilih karena memuat tantangan rekayasa nyata yang dekat dengan kehidupan kampus: 3 aktor (Admin, Dosen, Mahasiswa) dengan batasan otorisasi ketat dan alur verifikasi berkala bab 1 hingga bab 5."
        kicker="Studi Kasus Konkret"
        title="Sistem Bimbingan Skripsi Multi-Peran"
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ margin: 0, fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Aplikasi <strong>BimbinganKu</strong> dirancang untuk menyelesaikan masalah nyata di perguruan tinggi dengan arsitektur serverless Google Apps Script & Spreadsheet:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hair)' }}>
                <span className="chip dim" style={{ fontSize: 10, marginBottom: 4 }}>Aktor 1</span>
                <div style={{ fontWeight: 600, color: 'var(--fg)', fontSize: 14 }}>Admin</div>
                <div style={{ fontSize: 12, color: 'var(--fg-faint)', marginTop: 2 }}>Kelola akun, reset password, audit log aktivitas</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hair)' }}>
                <span className="chip dim" style={{ fontSize: 10, marginBottom: 4 }}>Aktor 2</span>
                <div style={{ fontWeight: 600, color: 'var(--fg)', fontSize: 14 }}>Dosen</div>
                <div style={{ fontSize: 12, color: 'var(--fg-faint)', marginTop: 2 }}>Putuskan judul, catatan revisi, ACC Bab 1–5, siap sidang</div>
              </div>
              <div style={{ background: 'rgba(0, 240, 255, 0.06)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,240,255,0.3)' }}>
                <span className="chip" style={{ fontSize: 10, marginBottom: 4 }}>Aktor 3</span>
                <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: 14 }}>Mahasiswa</div>
                <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>Ajukan judul, jadwalkan bimbingan, tandai revisi selesai</div>
              </div>
            </div>
          </div>
        }
        media={<img src="./images/architecture.jpg" alt="Arsitektur Sistem Bimbingan" />}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 5: LANGKAH 1 — ALUR PROSES & STATE MACHINE
          ───────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="05. Alur Proses"
        notes="[Estimasi: 3 menit] Tekankan kepada mahasiswa: 'Jangan buru-buru menyuruh AI membuat kode! Kualitas prompt berbanding lurus dengan kejelasan alur proses.' Minta AI mencari celah logika: apa yang terjadi jika mahasiswa mengajukan judul kedua padahal judul pertama belum selesai? Buat state diagram sebelum baris kode pertama dibuat."
      >
        <div className="container" style={{ maxWidth: 1080, marginInline: 'auto' }}>
          <Reveal>
            <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
              Langkah 1 · Analisis Kebutuhan
            </div>
            <h2
              className="headline"
              style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(20px, 3vh, 32px)' }}
            >
              Spesifikasi & State Machine Sebelum Sintaks.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
              gap: 16,
              textAlign: 'left',
              marginBottom: 20,
            }}
          >
            {/* Phase 1 */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--hair)',
                borderRadius: 'var(--radius)',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="chip dim" style={{ fontSize: 11 }}>Fase 01</span>
                <span style={{ fontSize: 12, color: 'var(--fg-faint)' }}>State: Diajukan</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 18, color: 'var(--fg)' }}>Pengajuan Judul</h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                Mahasiswa mengajukan judul & latar belakang ke dosen tujuan. Dosen memutuskan: <strong>Diterima</strong>, <strong>Perlu Revisi</strong>, atau <strong>Ditolak</strong>.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 10px', borderRadius: 6, fontSize: 11.5, color: 'var(--primary)', borderLeft: '2px solid var(--primary)' }}>
                Rule: 1 Mahasiswa hanya boleh punya 1 pengajuan aktif.
              </div>
            </div>

            {/* Phase 2 */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--hair)',
                borderRadius: 'var(--radius)',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="chip dim" style={{ fontSize: 11 }}>Fase 02</span>
                <span style={{ fontSize: 12, color: 'var(--fg-faint)' }}>State: Bimbingan</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 18, color: 'var(--fg)' }}>Siklus Bimbingan</h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                Mahasiswa ajukan jadwal. Dosen konfirmasi, isi catatan hasil diskusi, dan beri daftar revisi. Mahasiswa tandai selesai, lalu dosen verifikasi.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 10px', borderRadius: 6, fontSize: 11.5, color: 'var(--primary)', borderLeft: '2px solid var(--primary)' }}>
                Audit: Jejak revisi tercatat per sesi bimbingan.
              </div>
            </div>

            {/* Phase 3 */}
            <div
              style={{
                background: 'rgba(0, 240, 255, 0.04)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: 'var(--radius)',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="chip" style={{ fontSize: 11 }}>Fase 03</span>
                <span style={{ fontSize: 12, color: 'var(--primary)' }}>State: Siap Sidang</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 18, color: '#ffffff' }}>ACC Bab & Kelulusan</h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                Dosen memberi status ACC bertahap untuk Bab 1 sampai Bab 5. Tombol 'Siap Sidang' hanya aktif jika seluruh bab sudah berstatus ACC.
              </p>
              <div style={{ background: 'rgba(0, 240, 255, 0.08)', padding: '6px 10px', borderRadius: 6, fontSize: 11.5, color: '#ffffff', borderLeft: '2px solid var(--primary)' }}>
                Selesai: Seluruh riwayat bimbingan siap diekspor ke PDF.
              </div>
            </div>
          </div>

          <Build at={1}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius-sm)', padding: '10px 16px', textAlign: 'center' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>💡 Prompt Strategy: </span>
              <span style={{ color: 'var(--fg-muted)', fontSize: 13 }}>
                "Cari celah logika dan gambarkan diagram status (Mermaid) sebelum menulis kode apa pun."
              </span>
            </div>
          </Build>
        </div>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 6: LANGKAH 2 — DATABASE GOOGLE SPREADSHEET
          ───────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="06. Database Sheets"
        notes="[Estimasi: 3 menit] Diskusikan peran Google Sheets sebagai database: satu sheet = satu tabel, baris pertama = kolom, satu kolom ID unik. Tekankan aturan akun: jangan pernah simpan password plaintext! Simpan hash SHA-256 dan salt. Jelaskan juga bahwa file spreadsheet harus privat (hanya admin yang membuka file) agar data tidak bocor."
      >
        <div className="container" style={{ maxWidth: 1080, marginInline: 'auto' }}>
          <Reveal>
            <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
              Langkah 2 · Fondasi Data
            </div>
            <h2
              className="headline"
              style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(18px, 2.5vh, 28px)' }}
            >
              Google Sheets: Skema 8 Sheet & Aturan Akun.
            </h2>
          </Reveal>

          <Table
            columns={[
              { label: 'Nama Sheet', align: 'left' },
              { label: 'Kolom Kunci & Struktur Data', align: 'left' },
              { label: 'Tanggung Jawab Rekayasa', align: 'left' },
            ]}
            rows={[
              ['Users', 'user_id, username, password_hash, salt, role, aktif', 'Autentikasi aman tanpa plaintext'],
              ['Mahasiswa', 'nim (plain text), user_id, nama, prodi, status_skripsi', 'Relasi akun mahasiswa & progres'],
              ['Dosen', 'nidn (plain text), user_id, nama, bidang, kuota', 'Kapasitas bimbingan & spesialisasi'],
              ['PengajuanJudul', 'id_pengajuan, nim, judul, latar_belakang, status', 'Alur validasi persetujuan judul'],
              ['Bimbingan & Revisi', 'id_bimbingan, tanggal, bab, hasil_diskusi, link_doc', 'Log sesi tatap muka & catatan perbaikan'],
              ['ProgresBab', 'nim, bab (1-5), status (Belum/ACC), tanggal_acc', 'Syarat mutlak menuju status Siap Sidang'],
            ]}
            highlightCol={0}
            caption="Skema Database BimbinganKu (Google Sheets API Engine)"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 12,
              marginTop: 18,
              textAlign: 'left',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
              <strong style={{ fontSize: 13, color: 'var(--primary)' }}>🔒 Hash + Salt (SHA-256)</strong>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>Password asli tidak pernah disimpan. Hash melindungi akun jika spreadsheet diakses publik.</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
              <strong style={{ fontSize: 13, color: 'var(--primary)' }}>🛡️ Akses Sheet Privat</strong>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>Mahasiswa & dosen tidak diberi akses file. Mereka berinteraksi murni lewat antarmuka Web App.</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
              <strong style={{ fontSize: 13, color: 'var(--primary)' }}>🔢 NIM & NIDN Plain Text</strong>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>Wajib format teks agar angka nol di awal (misal 0812...) tidak terpotong oleh auto-formatting.</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 7: LANGKAH 3 & 4 — DESAIN STITCH & PROTOTIPE AI STUDIO
          ───────────────────────────────────────────────────────────── */}
      <Split
        flip
        nav="07. UI & Mock API"
        notes="[Estimasi: 2.5 menit] Tunjukkan strategi modular: UI prototype dipisahkan dari backend lewat abstraction layer (objek API). Google Stitch memberikan kejelasan visual agar AI tidak menebak layout. Lalu di Google AI Studio (Build), kita membangun prototipe cepat dengan single-file HTML dan mock API object."
        kicker="Langkah 3 & 4 · Visual Prototyping"
        title="Desain Visual Dulu, Kapsulkan ke Mock API."
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ margin: 0, fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Jangan biarkan AI menebak tata letak visual sendiri. Rancang wireframe sebelum menulis kode:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span className="chip" style={{ fontSize: 11 }}>01</span>
                <div>
                  <strong style={{ color: 'var(--fg)', fontSize: 14 }}>Google Stitch: Desain UI Mandiri</strong>
                  <div style={{ fontSize: 13, color: 'var(--fg-muted)' }}>Rancang layar Login, Dashboard Mahasiswa, Form Pengajuan, dan Dashboard Dosen secara visual.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span className="chip" style={{ fontSize: 11 }}>02</span>
                <div>
                  <strong style={{ color: 'var(--fg)', fontSize: 14 }}>Google AI Studio: Prototipe Cepat (Build)</strong>
                  <div style={{ fontSize: 13, color: 'var(--fg-muted)' }}>Ubah hasil desain menjadi aplikasi web satu file (HTML+CSS+JS) dengan live preview instan.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span className="chip" style={{ fontSize: 11, background: 'var(--primary)', color: 'var(--accent-ink)' }}>03</span>
                <div>
                  <strong style={{ color: 'var(--primary)', fontSize: 14 }}>Trik Arsitektur: Objek Mock API</strong>
                  <div style={{ fontSize: 13, color: '#f1f5f9' }}>
                    Kapsulkan seluruh data ke satu objek: <code>const API = &#123; login, ambilDashboard, ajukanJudul &#125;</code>. Saat transisi ke backend nyata, UI tidak perlu dirombak!
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        media={
          <SpotlightCard style={{ padding: '24px', margin: '20px', maxWidth: 440 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span className="chip" style={{ fontSize: 11 }}>Pattern · Mock to Live</span>
              <span style={{ fontSize: 11, color: 'var(--fg-faint)' }}>Abstraction Layer</span>
            </div>
            <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.6, color: 'var(--fg)' }}>
              <span style={{ color: 'var(--fg-faint)' }}>// Fase Prototipe: Mock Object</span>{'\n'}
              <span style={{ color: 'var(--primary)' }}>const</span> API = {'{\n'}
              {'  '}<span style={{ color: 'var(--fg-muted)' }}>login:</span> (u, p) =&gt; mockUsers[u],{'\n'}
              {'  '}<span style={{ color: 'var(--fg-muted)' }}>ajukanJudul:</span> (data) =&gt; ...{'\n'}
              {'}'};{'\n\n'}
              <span style={{ color: 'var(--fg-faint)' }}>// Fase Backend: Google Apps Script</span>{'\n'}
              <span style={{ color: 'var(--primary)' }}>function</span> panggil(fn, ...args) {'{\n'}
              {'  '}<span style={{ color: 'var(--primary)' }}>return</span> <span style={{ color: '#00e5a3' }}>new</span> Promise((ok, err) =&gt; {'{\n'}
              {'    '}google.script.run{'\n'}
              {'      '}.withSuccessHandler(ok){'\n'}
              {'      '}.withFailureHandler(err)[fn](...args);{'\n'}
              {'  '}{'}'});{'\n'}
              {'}'}
            </pre>
          </SpotlightCard>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 8: LANGKAH 5 — BACKEND APPS SCRIPT & SECURITY GUARD
          ───────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="08. Backend Apps Script"
        notes="[Estimasi: 3.5 menit] Bedah kode langsung di layar. Tunjukkan mengapa sesi_(token) harus di baris pertama: jika tidak, siapa saja bisa mengeksekusi putuskanJudul() tanpa izin. Tunjukkan juga LockService untuk mencegah tabrakan baris di spreadsheet, dan fungsi internal berakhiran garis bawah (_) yang tidak bisa dieksekusi dari browser."
      >
        <div className="container" style={{ maxWidth: 1040, marginInline: 'auto' }}>
          <Reveal>
            <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
              Langkah 5 · Serverless Backend
            </div>
            <h2
              className="headline"
              style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(16px, 2.5vh, 24px)' }}
            >
              Google Apps Script: Security by Design.
            </h2>
          </Reveal>

          <CodeWindow
            title="Code.gs — Backend Autentikasi & Mutasi Spreadsheet"
            highlight={[2, 6, 8, 16]}
            code={`function putuskanJudul(token, idPengajuan, keputusan, catatan) {
  const s = sesi_(token, ['dosen']); // WAJIB DI BARIS PERTAMA: otorisasi role
  if (!['Diterima', 'Perlu Revisi', 'Ditolak'].includes(keputusan))
    throw new Error('Keputusan tidak valid.');

  const d = baca_('Dosen').find(x => x.user_id === s.user_id);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000); // CEGAH RACE CONDITION penulisan spreadsheet bersamaan

  try {
    const p = baca_('PengajuanJudul').find(x => x.id_pengajuan === idPengajuan);
    if (!p || String(p.nidn_tujuan) !== String(d.nidn))
      throw new Error('Pengajuan tidak ditemukan atau bukan mahasiswa Anda.');

    ubah_('PengajuanJudul', 'id_pengajuan', idPengajuan, {
      status: keputusan, catatan_dosen: catatan, tanggal_keputusan: new Date()
    });
    catat_(s.user_id, 'PUTUSKAN_JUDUL', idPengajuan + ' ' + keputusan);
  } finally {
    lock.releaseLock(); // SELALU lepaskan lock di blok finally
  }
}`}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 12,
              marginTop: 16,
              textAlign: 'left',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
              <strong style={{ fontSize: 13, color: 'var(--primary)' }}>1. Sesi di Baris Pertama</strong>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>Panggil sesi_(token, role) sebelum menyentuh data apa pun.</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
              <strong style={{ fontSize: 13, color: 'var(--primary)' }}>2. LockService Concurrency</strong>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>Mencegah tabrakan saat banyak pengguna menulis sheet bersamaan.</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
              <strong style={{ fontSize: 13, color: 'var(--primary)' }}>3. Fungsi Privat (_)</strong>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2 }}>db_(), baca_(), ubah_() berakhiran _ tidak bisa ditembak dari client browser.</div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 9: LANGKAH 6 & 7 — THE ITERATIVE LOOP & DEPLOY
          ───────────────────────────────────────────────────────────── */}
      <Steps
        nav="09. Iterasi & Deploy"
        notes="[Estimasi: 2.5 menit] Ajarkan etika debugging kepada mahasiswa: saat muncul pesan error, jangan langsung mengetik 'error, benerin dong!'. Tempel error log lengkap, sebutkan fungsi apa yang dipanggil, dan minta penjelasan penyebabnya terlebih dahulu agar mental model mahasiswa tetap utuh."
        kicker="Langkah 6 & 7 · Siklus Rekayasa"
        title="Loop Iterasi Tangguh: Intent → Diagnosis → Deploy."
        items={[
          {
            title: 'Satu Perubahan per Prompt',
            body: 'Jangan meminta 10 fitur sekaligus. Ubah satu hal per prompt agar mudah dilacak jika terjadi regresi logika.',
          },
          {
            title: 'Amati Eksekusi & Log',
            body: 'Buka menu Eksekusi dan Log di Apps Script. Dapatkan stacktrace nyata alih-alih menebak di mana letak kerusakan.',
          },
          {
            title: 'Pahami Akar Masalah',
            body: 'Minta AI menjelaskan penyebab error sebelum menulis patch perbaikan. Ini melatih pemahaman Anda terhadap arsitektur.',
          },
          {
            title: 'Deploy (Execute as: Me)',
            body: 'Deploy sebagai Web App. Menggunakan kredensial admin sehingga mahasiswa & dosen tidak memerlukan izin akses ke Spreadsheet.',
          },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 10: LANGKAH 8 & 9 — ANTIGRAVITY & CLASP (SPLIT)
          ───────────────────────────────────────────────────────────── */}
      <Split
        nav="10. Antigravity & Clasp"
        notes="[Estimasi: 3 menit] Jelaskan lompatan teknologi dari sekadar web editor ke agentic IDE seperti Antigravity. Dengan clasp dan Antigravity, mahasiswa bisa menggunakan git version control, split-pane editing, dan agen otonom yang bekerja langsung di file lokal."
        kicker="Langkah 8 & 9 · Developer Mission Control"
        title="Beralih ke Google Antigravity & Clasp."
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ margin: 0, fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Ketika proyek membesar (banyak file, relasi, dan alur uji), editor web Apps Script menjadi sempit. Antigravity hadir sebagai Mission Control orkestrasi agen otonom:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--hair-2)' }}>
                <strong style={{ color: 'var(--primary)', fontSize: 13.5 }}>Terminal Clasp Integration</strong>
                <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 2 }}>
                  <code>npm install -g @google/clasp</code> lalu <code>clasp clone [scriptId]</code> untuk menarik kode ke filesystem lokal.
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--hair-2)' }}>
                <strong style={{ color: 'var(--primary)', fontSize: 13.5 }}>Modularisasi Bersih</strong>
                <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 2 }}>
                  Pecah Code.gs monolitik menjadi modul terpisah: <code>auth.gs</code>, <code>db.gs</code>, <code>judul.gs</code>, <code>bimbingan.gs</code>, <code>admin.gs</code> tanpa merusak perilaku sistem.
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--hair-2)' }}>
                <strong style={{ color: 'var(--primary)', fontSize: 13.5 }}>Automated Test Functions</strong>
                <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 2 }}>
                  Tulis fungsi simulasi alur end-to-end pada Spreadsheet salinan khusus uji sebelum clasp push ke produksi.
                </div>
              </div>
            </div>
          </div>
        }
        media={<img src="./images/mission-control.jpg" alt="Google Antigravity Mission Control" />}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 11: LANGKAH 10 & 11 — IMPLEMENTATION PLAN & BROWSER SUB-AGENT
          ───────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="11. Plan & Browser Agent"
        notes="[Estimasi: 3 menit] Tunjukkan fitur tercanggih Antigravity: Browser Sub-Agent! AI tidak hanya menulis kode, tapi bisa membuka browser, memasukkan username/password contoh, mengklik tombol, dan membuktikan bahwa fitur berjalan dengan screenshot dan video recording."
      >
        <div className="container" style={{ maxWidth: 1040, marginInline: 'auto' }}>
          <Reveal>
            <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
              Langkah 10 & 11 · Kendali & Verifikasi
            </div>
            <h2
              className="headline"
              style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(20px, 3vh, 32px)' }}
            >
              Titik Kendali Arsitek & Verifikasi Browser Agent.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 20,
              textAlign: 'left',
            }}
          >
            {/* Card 1: Implementation Plan */}
            <SpotlightCard style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="chip" style={{ fontSize: 11 }}>Kendali 01</span>
                <span style={{ fontSize: 12, color: 'var(--primary)' }}>Planning Mode</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 20, color: '#ffffff' }}>Implementation Plan Review</h3>
              <p style={{ margin: 0, fontSize: 13.5, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                Sebelum kode di-commit, agen membuat artefak <code>implementation_plan.md</code>. Ini adalah titik kendali terpenting mahasiswa:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12.5, color: '#e2e8f0' }}>
                <div>✓ Verifikasi: Apakah pemecahan file masuk akal dan modular?</div>
                <div>✓ Otorisasi: Apakah setiap fungsi publik mengecek <code>sesi_()</code>?</div>
                <div>✓ Scope Guard: Pastikan tidak ada fitur di luar spesifikasi tugas.</div>
              </div>
            </SpotlightCard>

            {/* Card 2: Browser Sub-Agent */}
            <SpotlightCard style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="chip" style={{ fontSize: 11, background: 'var(--primary)', color: 'var(--accent-ink)' }}>Verifikasi 02</span>
                <span style={{ fontSize: 12, color: 'var(--fg-faint)' }}>Sub-Agent Testing</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 20, color: '#ffffff' }}>Sub-Agen Browser Otomatis</h3>
              <p style={{ margin: 0, fontSize: 13.5, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                Antigravity menggerakkan browser sungguhan untuk menavigasi Web App dan memverifikasi alur tanpa uji manual yang melelahkan:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12.5, color: '#e2e8f0' }}>
                <div>⚡ Klik otomatis: Login mahasiswa A, ajukan judul ke dosen target.</div>
                <div>⚡ Coba serang: Mahasiswa B mencoba membuka link mahasiswa A (harus 403).</div>
                <div>⚡ Bukti visual: Agen mengembalikan screenshot dan rekaman video.</div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 12: LANGKAH 12 — AUDIT KEAMANAN MAHASISWA (SPLIT)
          ───────────────────────────────────────────────────────────── */}
      <Split
        flip
        nav="12. Audit Keamanan"
        notes="[Estimasi: 3 menit] Inilah pembeda mahasiswa teknik informatika dengan pengguna biasa: pemahaman keamanan siber. Tunjukkan bahwa AI sering lupa menambahkan LockService atau rate limiting; manusialah yang wajib memeriksa 6 poin ini."
        kicker="Langkah 12 · Validasi Manusia"
        title="6 Checklist Audit Keamanan Mahasiswa."
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ margin: 0, fontSize: 'clamp(14px, 1.3vw, 16px)', color: 'var(--fg-muted)', lineHeight: 1.45 }}>
              AI tidak selalu menambahkan keamanan secara otomatis. Sebelum sistem dibuka untuk dosen dan mahasiswa, lakukan audit 6 pilar ini:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
                <strong style={{ fontSize: 12.5, color: 'var(--fg)' }}>1. Hash SHA-256 + Salt</strong>
                <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>Cek sheet Users: tidak ada plaintext password sedikit pun.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
                <strong style={{ fontSize: 12.5, color: 'var(--fg)' }}>2. Server-Side Guard</strong>
                <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>Validasi sesi di backend, bukan hanya menyembunyikan tombol UI.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
                <strong style={{ fontSize: 12.5, color: 'var(--fg)' }}>3. Isolasi Data Peran</strong>
                <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>Mahasiswa hanya baca NIM sendiri, dosen hanya mahasiswa bimbingannya.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
                <strong style={{ fontSize: 12.5, color: 'var(--fg)' }}>4. LockService Concurrency</strong>
                <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>Semua operasi mutasi database dipagari lock untuk cegah balapan data.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
                <strong style={{ fontSize: 12.5, color: 'var(--fg)' }}>5. Pencegahan XSS</strong>
                <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>Gunakan textContent bukan innerHTML saat menampilkan data input.</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 12px', borderRadius: 8, borderLeft: '3px solid var(--primary)' }}>
                <strong style={{ fontSize: 12.5, color: 'var(--fg)' }}>6. Brute Force Lockout</strong>
                <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>ScriptCache membatasi 5x salah password sebelum akun dikunci 10 menit.</div>
              </div>
            </div>
          </div>
        }
        media={<img src="./images/security.jpg" alt="Audit Keamanan Siber" />}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 13: LANGKAH 13 & 14 — AGENT SKILLS & VIBE DEPLOYING (SPLIT)
          ───────────────────────────────────────────────────────────── */}
      <Split
        nav="13. Skills & Deploy"
        notes="[Estimasi: 2.5 menit] Kenalkan konsep 'Agent Skills': bagaimana kita membuat file instruksi permanen agar AI tidak mengulang kesalahan masa lalu. Lalu diskusikan jalur scaling: mulai dari Apps Script gratisan hingga arsitektur Cloud Run skala institusi."
        kicker="Langkah 13 & 14 · Standarisasi & Skalabilitas"
        title="Agent Skills & Vibe Deploying."
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ margin: 0, fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Bagaimana memastikan AI selalu mengikuti aturan tanpa perlu diketik ulang di setiap prompt?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--hair-2)' }}>
                <strong style={{ color: 'var(--primary)', fontSize: 14 }}>Agent Skill: .agent/skills/standar-apps-script/</strong>
                <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 3 }}>
                  File <code>SKILL.md</code> menyimpan memori permanen proyek: setiap fungsi wajib <code>sesi_()</code>, komentar dalam Bahasa Indonesia, penulisan wajib <code>LockService</code>, dan jangan deploy tanpa persetujuan.
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--hair-2)' }}>
                <strong style={{ color: 'var(--primary)', fontSize: 14 }}>Vibe Deploying ke Produksi</strong>
                <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 3 }}>
                  Salin Spreadsheet uji menjadi Spreadsheet produksi bersih, buat akun admin awal dengan password acak, lalu deploy Web App Apps Script dengan satu klik.
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--hair-2)' }}>
                <strong style={{ color: 'var(--primary)', fontSize: 14 }}>Jalur Evolusi Cloud Run</strong>
                <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 3 }}>
                  Ketika beban melampaui kuota Apps Script, minta agen membuat rencana migrasi ke Google Cloud Run + Firestore / Cloud SQL dengan akun Google Workspace kampus.
                </div>
              </div>
            </div>
          </div>
        }
        media={<img src="./images/deployment.jpg" alt="Vibe Deployment & Cloud Scaling" />}
      />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 14: LANGKAH 15 & 7 GOLDEN RULES PROMPTING
          ───────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="14. 7 Golden Rules"
        notes="[Estimasi: 2.5 menit] Berikan rangkuman praktis yang bisa dicatat atau difoto mahasiswa. 7 aturan ini adalah formula rahasia untuk menjadi insinyur yang produktif 10x lipat dengan AI tanpa menghasilkan kode sampah (technical debt)."
      >
        <div className="container" style={{ maxWidth: 1080, marginInline: 'auto' }}>
          <Reveal>
            <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
              Langkah 15 · Best Practices
            </div>
            <h2
              className="headline"
              style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 'clamp(20px, 3vh, 32px)' }}
            >
              7 Golden Rules Prompting untuk Mahasiswa.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 12,
              textAlign: 'left',
            }}
          >
            {[
              { no: '01', title: 'Satu Perubahan per Prompt', desc: 'Hindari prompt raksasa; mudah dilacak dan di-rollback jika ada kerusakan.' },
              { no: '02', title: 'Sampaikan Hasil & Batasan', desc: 'Jelaskan tujuan fungsional dan hal yang tidak boleh diubah (constraints).' },
              { no: '03', title: 'Minta Rencana Sebelum Kode', desc: 'Untuk tugas besar, minta Implementation Plan dulu sebelum AI menulis sintaks.' },
              { no: '04', title: 'Pahami Akar Error Sebelum Patch', desc: 'Minta AI menjelaskan penyebab bug agar mental model arsitekturmu berkembang.' },
              { no: '05', title: 'Tempel Pesan Error Lengkap', desc: 'Sertakan nama fungsi, pesan error di tab eksekusi, dan nomor barisnya.' },
              { no: '06', title: 'Eksplisitkan Aturan Keamanan', desc: 'Tulis kewajiban hashing, session guard, dan LockService secara tegas di prompt.' },
              { no: '07', title: 'Loop Pengguna Nyata', desc: 'Mulai dari 1 dosen dan 3-5 mahasiswa untuk menguji usability sebelum rilis massal.' },
            ].map((rule, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--hair-2)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 14px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'var(--primary)',
                    background: 'rgba(0, 240, 255, 0.08)',
                    padding: '4px 8px',
                    borderRadius: 6,
                  }}
                >
                  {rule.no}
                </span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--fg)', fontSize: 13.5 }}>{rule.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginTop: 2, lineHeight: 1.4 }}>{rule.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 15: PENUTUP / CALL TO ACTION
          ───────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="15. Penutup"
        notes="[Estimasi: 1.5 menit] Tutup kuliah/workshop dengan penuh semangat. Buka sesi tanya jawab dan tantang mahasiswa untuk mulai mempraktikkan panduan 15 langkah ini pada proyek tugas akhir atau proyek semester mereka."
      >
        <div style={{ maxWidth: 840, marginInline: 'auto' }}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 14 }}>
              Masa Depan Rekayasa Software
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display" style={{ marginBottom: 24, fontSize: 'clamp(36px, 5.5vw, 68px)' }}>
              AI Menulis Sintaks. <span className="accent-text">Kamu Menentukan Kualitas.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <SpotlightCard
              style={{
                padding: '28px 36px',
                marginInline: 'auto',
                maxWidth: 720,
                textAlign: 'center',
                border: '1px solid rgba(0, 240, 255, 0.3)',
              }}
            >
              <p
                className="lead"
                style={{
                  margin: 0,
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  lineHeight: 1.5,
                  color: 'var(--fg)',
                }}
              >
                "Koding di era modern bukan lagi tentang menghafal sintaks dan titik koma, melainkan tentang{' '}
                <strong style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '6px' }}>
                  ketajaman analisis masalah, desain arsitektur, dan integritas pengujian.
                </strong>"
              </p>
              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 12 }}>
                <span className="chip" style={{ fontSize: 11 }}>#ResponsibleAICoding</span>
                <span className="chip" style={{ fontSize: 11 }}>#GoogleAntigravity</span>
                <span className="chip" style={{ fontSize: 11 }}>#AppsScript</span>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </Slide>
    </Deck>
  );
}
