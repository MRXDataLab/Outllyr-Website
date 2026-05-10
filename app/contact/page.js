export default function Contact() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px', display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 400px' }}>
        <div style={{ color: 'var(--accent-cyan)', fontSize: '14px', letterSpacing: '0.1em', marginBottom: '16px' }}>CONNECT WITH EXCELLENCE</div>
        <h1 style={{ fontSize: '48px', marginBottom: '24px', lineHeight: 1.1 }}>Transform your consumer intelligence today.</h1>
        <p className="text-secondary" style={{ fontSize: '18px', marginBottom: '48px' }}>
          Uncover the hidden patterns of the market with the Predictive Interface. Our AI doesn't just analyze, it anticipates.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ color: 'var(--accent-cyan)' }}>★</div>
            <div>
              <h3 style={{ marginBottom: '8px' }}>True-Time Synthesis</h3>
              <p className="text-secondary" style={{ fontSize: '14px' }}>Real-world data integration against a single truth.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ color: 'var(--accent-cyan)' }}>★</div>
            <div>
              <h3 style={{ marginBottom: '8px' }}>Predictive Modeling</h3>
              <p className="text-secondary" style={{ fontSize: '14px' }}>99.2% SLA adherence to variance logic heuristics.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ flex: '1 1 400px', padding: '48px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Deploy Outllyr</h2>
        <p className="text-muted" style={{ marginBottom: '32px' }}>Request beta testing access.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>First Name</label>
              <input type="text" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '12px', color: '#fff', outline: 'none' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Last Name</label>
              <input type="text" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '12px', color: '#fff', outline: 'none' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Work Email</label>
            <input type="email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '12px', color: '#fff', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Company Size</label>
            <select style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '4px', padding: '12px', color: '#fff', outline: 'none' }}>
              <option style={{ color: '#000' }}>1-50 employees</option>
              <option style={{ color: '#000' }}>51-200 employees</option>
              <option style={{ color: '#000' }}>201-1000 employees</option>
            </select>
          </div>
          
          <button type="button" className="btn-primary" style={{ marginTop: '16px' }}>
            Request Access
          </button>
        </form>
      </div>
    </div>
  );
}
