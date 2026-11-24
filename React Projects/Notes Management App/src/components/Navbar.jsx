function Navbar() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Daynote home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" rx="8" /><path d="M11 12h10M11 16h10M11 20h6" /></svg>
        </span>
        <span>Daynote<span className="brand-period">.</span></span>
      </a>
      <div className="topbar-caption"><span className="status-dot" /> A quieter place to think</div>
      <div className="topbar-date">{new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date())}</div>
    </header>
  )
}

export default Navbar
