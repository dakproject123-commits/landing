
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" style={{ padding: '80px 0 48px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="footer-big-text">Pigeon Social</div>
      <div className="container footer-inner">
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div className="logo-mark" style={{ width:32, height:32, borderRadius:8, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <img src="/logo.jpg" alt="Pigeon Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, color:'var(--text-primary)' }}>Pigeon Social</div>
            <div className="footer-copy" style={{ fontSize:11 }}>© {year} NGST · New Gen Software Technology</div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#features" className="footer-link">Features</a>
          <a href="#showcase" className="footer-link">Screenshots</a>
          <a href="#founder" className="footer-link">About</a>
          <a href="#download" className="footer-link">Download</a>
        </div>
        <div className="footer-copy">Made with ❤️ by Arafath Rahoman</div>
      </div>
    </footer>
  )
}
