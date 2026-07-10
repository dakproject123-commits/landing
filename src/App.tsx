import { useState, useEffect } from "react"
import { CheckCircle2, X } from "lucide-react"
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { E2EESecurity } from './components/E2EESecurity'
import { Showcase } from './components/Showcase'
import { Founder } from './components/Founder'
import { Download } from './components/Download'
import { Footer } from './components/Footer'

export function App() {
  const [showVerifyModal, setShowVerifyModal] = useState(false)

  useEffect(() => {
    // Check if the URL hash contains access_token and type=signup
    const hash = window.location.hash
    if (hash && hash.includes("type=signup") && hash.includes("access_token")) {
      setShowVerifyModal(true)
      // Clean up the hash parameters from URL bar for clean interface
      window.history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <Hero />
      <Features />
      <E2EESecurity />
      <Showcase />
      <Founder />
      <Download />
      <Footer />

      {/* Verification Success Glass Dialog */}
      {showVerifyModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
        }} className="animate-modal-fade">
          <div style={{
            background: 'rgba(13, 25, 41, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '28px 24px',
            textAlign: 'center',
            maxWidth: '380px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
          }} className="animate-modal-scale">
            <button 
              onClick={() => setShowVerifyModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X style={{ width: '20px', height: '20px' }} />
            </button>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 229, 160, 0.12)',
              color: 'var(--brand-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              border: '1px solid rgba(16, 229, 160, 0.25)',
            }}>
              <CheckCircle2 style={{ width: '32px', height: '32px' }} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>Email Verified!</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
              Your email has been verified successfully. Open the Pigeon Social App to login.
            </p>
            <button
              onClick={() => setShowVerifyModal(false)}
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-purple) 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(29, 154, 240, 0.2)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
