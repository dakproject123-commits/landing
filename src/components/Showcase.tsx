import { Smartphone, Image as ImageIcon } from 'lucide-react'

const screens = [
  { label: 'Home Feed', hint: 'Drop Feed screenshot here' },
  { label: 'Messenger', hint: 'Drop Chat screenshot here' },
]

export function Showcase() {
  return (
    <section id="showcase" className="screenshots-section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">App Screenshots</div>
          <h2 className="section-title gradient-text">See It In Action</h2>
          <p style={{ maxWidth: 480, margin: '16px auto 0', fontSize: 16 }}>
            A glimpse into the Pigeon Social experience — clean, fast, and beautiful.
          </p>
        </div>
        <div className="screenshots-grid">
          {screens.map((s, i) => (
            <div className="screenshot-slot" key={i}>
              <div className="screenshot-placeholder">
                <div className="icon-bg">
                  {i === 0 ? <Smartphone size={26} style={{ color: 'var(--brand-blue)' }} /> : <ImageIcon size={26} style={{ color: 'var(--brand-purple)' }} />}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13, textAlign: 'center', padding: '0 20px' }}>
                  {s.hint}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace' }}>
                  Recommended: 1080×2340
                </div>
              </div>
              <div className="screenshot-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="tech-badges" style={{ marginTop: 48 }}>
          {['Flutter 3.x', 'Supabase', 'Firebase FCM', 'SQLite Offline', 'E2EE Crypto', 'Dart 3'].map(t => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
