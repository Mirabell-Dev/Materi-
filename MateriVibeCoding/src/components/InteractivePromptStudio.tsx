import { useState } from 'react';
import CodeWindow from './CodeWindow';

interface Preset {
  name: string;
  rawPrompt: string;
  stack: string;
  boundaries: string[];
  code: string;
}

const PRESETS: Preset[] = [
  {
    name: 'Todo List (React)',
    rawPrompt: 'buatkan todo list React dengan localStorage, filter by status, dan tombol undo',
    stack: 'React 18 + TypeScript + LocalStorage Hook',
    boundaries: [
      'History stack maksimal 10 snapshot untuk undo',
      'Filter: All, Active, Completed tanpa re-fetch',
      'Sanitasi string input cegah XSS injection'
    ],
    code: `// Generated Spec & Implementation
interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
}

export function useTodoHistory() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [history, setHistory] = useState<TodoItem[][]>([]);

  const addTodo = (title: string) => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    setHistory((prev) => [...prev.slice(-9), todos]);
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: cleanTitle, completed: false, createdAt: Date.now() },
    ]);
  };

  const undo = () => {
    if (!history.length) return;
    const last = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setTodos(last);
  };

  return { todos, addTodo, undo, canUndo: history.length > 0 };
}`
  },
  {
    name: 'FastAPI Auth (Python)',
    rawPrompt: 'bikin endpoint login JWT auth dengan token expire dan hash password di FastAPI',
    stack: 'Python 3.11 + FastAPI + Passlib (bcrypt) + PyJWT',
    boundaries: [
      'Wajib gunakan HTTPS di production (Secure Cookie)',
      'Password hash menggunakan bcrypt salt rounds 12',
      'Token expire 15 menit dengan refresh token terpisah'
    ],
    code: `# FastAPI JWT Auth Intent Implementation
from datetime import datetime, timedelta
from fastapi import Depends, FastAPI, HTTPException, status
from passlib.context import CryptContext
import jwt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "ENV_LOADED_SECRET"  # Human Judgment: Jangan hardcode!

def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=15)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")

# Verifikasi & Error Handling wajib diaudit mahasiswa!`
  },
  {
    name: 'Data Pipeline (Python)',
    rawPrompt: 'buatkan pembersih data CSV pandas dan visualisasikan korelasi variabel',
    stack: 'Pandas + Seaborn + Matplotlib',
    boundaries: [
      'Handle missing values (imputation vs drop audit)',
      'Deteksi anomali/outlier menggunakan IQR',
      'Export matrix korelasi Spearman & Pearson'
    ],
    code: `# Data Pipeline Validation
import pandas as pd
import numpy as np

def clean_dataset(filepath: str) -> pd.DataFrame:
    df = pd.read_csv(filepath)
    # Human Judgment: Cek apakah null diganti mean atau median!
    num_cols = df.select_dtypes(include=[np.number]).columns
    df[num_cols] = df[num_cols].fillna(df[num_cols].median())
    
    # Deteksi Outlier via IQR
    Q1 = df[num_cols].quantile(0.25)
    Q3 = df[num_cols].quantile(0.75)
    IQR = Q3 - Q1
    clean_df = df[~((df[num_cols] < (Q1 - 1.5 * IQR)) | (df[num_cols] > (Q3 + 1.5 * IQR))).any(axis=1)]
    return clean_df`
  }
];

export default function InteractivePromptStudio() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customPrompt, setCustomPrompt] = useState(PRESETS[0].rawPrompt);
  const [checks, setChecks] = useState<Record<string, boolean>>({
    arch: true,
    security: false,
    testing: false,
  });

  const current = PRESETS[selectedIdx];

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    setCustomPrompt(PRESETS[idx].rawPrompt);
    setChecks({ arch: true, security: false, testing: false });
  };

  const toggleCheck = (key: string) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ width: '100%', maxWidth: 1120, marginInline: 'auto' }}>
      {/* Preset selector */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--fg-faint)', alignSelf: 'center', marginRight: 4 }}>
          Preset Kasus:
        </span>
        {PRESETS.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 500,
              border: i === selectedIdx ? '1px solid var(--primary)' : '1px solid var(--hair)',
              background: i === selectedIdx ? 'rgba(0, 240, 255, 0.15)' : 'var(--surface)',
              color: i === selectedIdx ? 'var(--primary)' : 'var(--fg-muted)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Two columns: Left Prompt & Judgment Checklist, Right AI Output */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 20,
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Input Vibe & Human Judgment Verification */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--hair)',
            borderRadius: 'var(--radius)',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span className="chip" style={{ fontSize: 11, background: 'rgba(255,255,255,0.06)' }}>
                Input: Intent / Vibe Prompt
              </span>
              <span style={{ fontSize: 11, color: 'var(--fg-faint)' }}>Coba edit teks di bawah ✍️</span>
            </div>
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              rows={3}
              style={{
                width: '100%',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--hair)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--fg)',
                padding: '12px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                lineHeight: 1.5,
                resize: 'none',
                outline: 'none',
              }}
            />
          </div>

          {/* AI Specification Extraction */}
          <div style={{ background: 'rgba(0, 240, 255, 0.04)', border: '1px solid rgba(0, 240, 255, 0.18)', borderRadius: 10, padding: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary)', marginBottom: 6 }}>
              🔍 AI Intent Extraction & Constraints:
            </div>
            <div style={{ fontSize: 12, color: 'var(--fg-muted)', marginBottom: 4 }}>
              <strong>Stack:</strong> {current.stack}
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.4 }}>
              {current.boundaries.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Human Judgment Checklist */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#f8fafc', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>🛡️ Human Judgment Checklist:</span>
              <span style={{ fontSize: 11, color: 'var(--fg-faint)', fontWeight: 400 }}>(Tugas Mahasiswa CS)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label
                onClick={() => toggleCheck('arch')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  color: checks.arch ? 'var(--primary)' : 'var(--fg-muted)',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: 6,
                  background: checks.arch ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                }}
              >
                <input type="checkbox" checked={checks.arch} readOnly style={{ accentColor: 'var(--primary)' }} />
                <span>1. Validasi Arsitektur & Keterpisahan Logika (SoC)</span>
              </label>
              <label
                onClick={() => toggleCheck('security')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  color: checks.security ? 'var(--primary)' : 'var(--fg-muted)',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: 6,
                  background: checks.security ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                }}
              >
                <input type="checkbox" checked={checks.security} readOnly style={{ accentColor: 'var(--primary)' }} />
                <span>2. Audit Keamanan: Tanpa Hardcoded Secret / Celah Injeksi</span>
              </label>
              <label
                onClick={() => toggleCheck('testing')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  color: checks.testing ? 'var(--primary)' : 'var(--fg-muted)',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: 6,
                  background: checks.testing ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                }}
              >
                <input type="checkbox" checked={checks.testing} readOnly style={{ accentColor: 'var(--primary)' }} />
                <span>3. Uji Edge Cases: Input Kosong, Network Failure & Boundary</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Generated Code Window */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <CodeWindow
            title={selectedIdx === 0 ? 'useTodoHistory.ts' : selectedIdx === 1 ? 'auth_service.py' : 'clean_data.py'}
            code={current.code}
            highlight={[1, 10, 16]}
          />
        </div>
      </div>
    </div>
  );
}
