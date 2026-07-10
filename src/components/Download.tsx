import { Download as DownloadIcon, Smartphone, Shield } from 'lucide-react'

export function Download() {
  return (
    <section id="download" className="section">
      <div className="section-divider" style={{ marginBottom: 80 }} />
      <div className="container">
        <div className="download-hero-card">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label" style={{ margin: '0 auto 24px', display:'inline-flex' }}>
              Available Now
            </div>
            <h2 className="download-title gradient-text">
              Get Pigeon Social
            </h2>
            <p className="download-subtitle" style={{ color: 'var(--text-secondary)' }}>
              Download the latest APK and join the next generation of private social networking.
              Version 3.2.1 — packed with new features and improvements.
            </p>
            <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
              <a
                href="/pigeon-release.apk"
                download="pigeon-release.apk"
                className="btn btn-primary"
                style={{ padding: '16px 40px', fontSize: 16, fontWeight: 700 }}
              >
                <DownloadIcon size={18} />
                Download APK · v3.2.1
              </a>
              <a
                href="#features"
                className="btn btn-ghost"
                style={{ padding: '16px 28px', fontSize: 15 }}
              >
                <Shield size={16} /> View Features
              </a>
            </div>
            <div style={{ display:'flex', gap:28, justifyContent:'center', marginTop:40, flexWrap:'wrap' }}>
              {[
                { icon: Smartphone, text: 'Android 6.0+' },
                { icon: Shield, text: 'End-to-End Encrypted' },
                { icon: DownloadIcon, text: 'Free to Download' },
              ].map((item, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--text-muted)' }}>
                  <item.icon size={14} style={{ color: 'var(--brand-blue)' }} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
