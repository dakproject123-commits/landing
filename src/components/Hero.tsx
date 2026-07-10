import { useState, useEffect } from 'react'
import { Download, Shield, Heart, MessageSquare, Share2 } from 'lucide-react'

export function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="logo">
            <div className="logo-mark" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo.jpg" alt="Pigeon Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div className="logo-product">Pigeon Social</div>
              <div className="logo-company">by NGST</div>
            </div>
          </a>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#showcase" className="nav-link">Screenshots</a>
            <a href="#founder" className="nav-link">About</a>
            <a href="#download" className="nav-link">Download</a>
          </nav>
          <a href="#download" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
            <Download size={15} /> Get the App
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section container">
        <div className="hero-badge">
          <span className="pulse-dot" />
          Now Available · Version 3.2.1
        </div>

        <h1 className="hero-title">
          <span className="gradient-text">Connect. Share.</span>
          <br />Privately & Securely.
        </h1>

        <p className="hero-subtitle">
          Pigeon Social is the next-generation encrypted social platform by NGST —
          combining end-to-end encrypted messaging, a vibrant social feed, and a
          private community, all in one beautiful app.
        </p>

        <div className="hero-actions">
          <a href="#download" className="btn btn-primary">
            <Download size={16} /> Download APK
          </a>
          <a href="#features" className="btn btn-ghost">
            <Shield size={16} /> Explore Features
          </a>
        </div>

        <div className="hero-stats">
          <div style={{ textAlign: 'center' }}>
            <span className="stat-num">E2EE</span>
            <span className="stat-label">Encrypted Chats</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="stat-num">0</span>
            <span className="stat-label">Data Harvesting</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="stat-num">3.2.1</span>
            <span className="stat-label">Latest Version</span>
          </div>
        </div>

        {/* 3D Phone Mockups */}
        <div className="phones-3d-container">
          {/* Left phone – Feed */}
          <div className="phone-3d-wrapper-left">
            <div className="animate-float">
              <div className="phone-3d">
                <div className="phone-notch-pill" />
                <div className="phone-screen-content">
                  <div className="mock-feed-post">
                    <div className="mock-feed-header">
                      <div className="mock-feed-avi" />
                      <div>
                        <div className="mock-feed-name">Rafi Ahmed</div>
                        <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>Just now</div>
                      </div>
                    </div>
                    <p>Beautiful sunset from the rooftop today 🌅</p>
                    <div className="mock-feed-actions">
                      <span style={{ display:'flex',alignItems:'center',gap:4 }}><Heart size={10} style={{ color: '#f472b6', fill:'#f472b6' }} /> 412</span>
                      <span style={{ display:'flex',alignItems:'center',gap:4 }}><MessageSquare size={10} /> 38</span>
                      <span style={{ display:'flex',alignItems:'center',gap:4 }}><Share2 size={10} /> 12</span>
                    </div>
                  </div>
                  <div className="mock-feed-post" style={{ marginTop: 4 }}>
                    <div className="mock-feed-header">
                      <div className="mock-feed-avi" style={{ background: 'linear-gradient(135deg,#f472b6,#a78bfa)' }} />
                      <div>
                        <div className="mock-feed-name">Tania Islam</div>
                        <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>2 min ago</div>
                      </div>
                    </div>
                    <p>Finally launched our project! 🚀</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right phone – Notifications */}
          <div className="phone-3d-wrapper-right">
            <div className="animate-float-d">
              <div className="phone-3d">
                <div className="phone-notch-pill" />
                <div className="phone-screen-content">
                  <div style={{ fontSize:11, fontWeight:700, color:'var(--text-primary)', marginBottom:12 }}>Notifications</div>
                  {[
                    { name:'Rafi Ahmed', action:'liked your post', time:'Just now', color:'#f472b6' },
                    { name:'Tania Islam', action:'commented on your story', time:'1 min', color:'#a78bfa' },
                    { name:'Karim Hasan', action:'started following you', time:'5 min', color:'var(--brand-blue)' },
                  ].map((n, i) => (
                    <div key={i} style={{ display:'flex',gap:10,padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ width:28,height:28,borderRadius:'50%',background:`linear-gradient(135deg,${n.color},var(--brand-purple))`,flexShrink:0 }} />
                      <div>
                        <div style={{ fontSize:11,color:'var(--text-primary)',fontWeight:600 }}>{n.name}</div>
                        <div style={{ fontSize:10,color:'var(--text-muted)' }}>{n.action}</div>
                      </div>
                      <div style={{ marginLeft:'auto',fontSize:10,color:'var(--text-muted)',flexShrink:0 }}>{n.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
