import { Shield, Lock, Unlock, Server } from 'lucide-react'

export function E2EESecurity() {
  return (
    <section id="security" className="section bg-security">
      <div className="section-divider" style={{ marginBottom: 80 }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'center' }}>
          
          {/* LEFT: Phone Chat Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', perspective: 1000 }}>
            <div 
              className="phone-3d" 
              style={{ 
                position: 'relative', 
                width: '280px', 
                height: '560px', 
                transform: 'rotateY(10deg) rotateX(5deg)',
                boxShadow: 'var(--shadow-deep), var(--glow-blue)',
                border: '1.5px solid rgba(29, 154, 240, 0.2)',
                background: 'linear-gradient(145deg, #0d1929, #050a12)'
              }}
            >
              <div className="phone-notch-pill" />
              <div className="phone-screen-content" style={{ padding: '48px 18px 18px' }}>
                <div className="mock-chat-header" style={{ marginBottom: 16 }}>
                  <div className="mock-avi" />
                  <div>
                    <div className="mock-name">Arafath R.</div>
                    <div className="mock-status">● Online</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--brand-green)' }}>
                    <Shield size={12} /> E2EE
                  </div>
                </div>

                <div className="mock-msgs" style={{ gap: 12 }}>
                  <div className="mock-msg mock-msg-recv" style={{ fontSize: 12, padding: '10px 14px' }}>
                    Hey! Did you try Pigeon yet? 🎉
                  </div>
                  <div 
                    className="mock-msg" 
                    style={{ 
                      fontSize: 10, 
                      fontFamily: 'monospace', 
                      background: 'rgba(124, 58, 237, 0.15)', 
                      border: '1px dashed rgba(124, 58, 237, 0.3)',
                      color: '#a78bfa',
                      borderRadius: 12,
                      padding: '8px 12px',
                      wordBreak: 'break-all'
                    }}
                  >
                    Ciphertext: E2EE:v1:nonce:mac:c78fh29...
                  </div>
                  <div className="mock-msg mock-msg-sent" style={{ fontSize: 12, padding: '10px 14px' }}>
                    Just installed it, the encryption is next level! 🔥
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,.05)', borderRadius: 20, padding: '10px 16px', fontSize: 12, color: 'var(--text-muted)' }}>
                    Type a message…
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,var(--brand-blue),var(--brand-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <SendArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: E2EE Explanation Text */}
          <div>
            <div className="section-label">E2EE Security</div>
            <h2 className="section-title gradient-text" style={{ marginBottom: 24 }}>
              How Our End-to-End Encryption Works
            </h2>
            <p style={{ fontSize: 16, marginBottom: 36, color: 'var(--text-secondary)' }}>
              Pigeon Social ensures total privacy. Your private conversations are locked before they leave your device and can only be decrypted by the recipient. 
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {/* Step 1 */}
              <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(29, 154, 240, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brand-blue)', border: '1px solid rgba(29, 154, 240, 0.2)' }}>
                  <Lock size={20} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>1. Local Device Encryption</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                    When you send a message, it is encrypted on your phone using the recipient's public key. The raw text never touches the internet.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#a78bfa', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                  <Server size={20} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>2. Zero-Knowledge Server</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                    Our database only stores ciphertext. Even if our servers are fully compromised or inspected by administrators, the data remains complete gibberish.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(16, 229, 160, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brand-green)', border: '1px solid rgba(16, 229, 160, 0.2)' }}>
                  <Unlock size={20} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>3. Recipient Side Decryption</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                    Once downloaded by the recipient, the message is decrypted locally on their sandboxed database using their private key.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function SendArrow() {
  return (
    <svg style={{ width: 14, height: 14, margin: 'auto' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}
