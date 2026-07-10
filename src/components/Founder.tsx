import { Building2 } from 'lucide-react'

export function Founder() {
  return (
    <section id="founder" className="section">
      <div className="section-divider" style={{ marginBottom: 80 }} />
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">The Team Behind It</div>
          <h2 className="section-title gradient-text">Built With Vision</h2>
        </div>
        <div className="founder-card">
          <div className="founder-avatar" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/founder.jpg" alt="Arafath Rahoman" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="founder-name">Arafath Rahoman</div>
          <div className="founder-role">Founder & Lead Developer</div>
          <p className="founder-quote">
            "I built Pigeon Social because I believe privacy is not a privilege — it's a right.
            We deserve a social platform that truly respects our data, our conversations,
            and our communities. That's what NGST is committed to delivering."
          </p>
          <div className="company-badge">
            <Building2 size={14} />
            New Gen Software Technology (NGST)
          </div>
        </div>
      </div>
    </section>
  )
}
