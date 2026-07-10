import { Shield, MessageSquare, Bell, Image, Lock, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield, iconClass: 'fi-blue',
    title: 'End-to-End Encryption',
    desc: 'Every message is encrypted on your device. Not even we can read your conversations. True E2EE with zero backdoors.',
  },
  {
    icon: MessageSquare, iconClass: 'fi-purple',
    title: 'Smart Messaging',
    desc: 'Real-time chat with read receipts, voice messages, media sharing, custom themes, and wallpapers per chat.',
  },
  {
    icon: Bell, iconClass: 'fi-green',
    title: 'Push Notifications',
    desc: 'Smart push notifications via FCM — one notification per sender, silence-respecting sound, and instant delivery.',
  },
  {
    icon: Image, iconClass: 'fi-cyan',
    title: 'Rich Social Feed',
    desc: 'Share posts, images, and stories. Like, comment, and engage with your community in a beautiful feed.',
  },
  {
    icon: Lock, iconClass: 'fi-orange',
    title: 'Privacy First',
    desc: 'No data harvesting, no targeted ads. Your profile, messages, and activity are yours alone.',
  },
  {
    icon: Zap, iconClass: 'fi-pink',
    title: 'Lightning Fast',
    desc: 'Built with Flutter and Supabase for ultra-fast performance, offline support, and a buttery-smooth experience.',
  },
]

export function Features() {
  return (
    <section id="features" className="section">
      <div className="section-divider" style={{ marginBottom: 80 }} />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div className="section-label">Why Pigeon Social</div>
          <h2 className="section-title gradient-text">Built Different. Built Better.</h2>
          <p style={{ maxWidth: 540, margin: '16px auto 0', fontSize: 16 }}>
            Pigeon Social isn't just another social app — it's a rethinking of what privacy,
            communication, and community should feel like.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className={`feature-icon ${f.iconClass}`}>
                <f.icon size={22} />
              </div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
