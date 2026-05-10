export default function Solution() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '64px' }}>The Solution Overview.</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '80px' }}>
        <div className="glass-panel" style={{ padding: '48px' }}>
          <div style={{ color: 'var(--accent-cyan)', marginBottom: '16px', fontSize: '14px', letterSpacing: '0.1em' }}>LIVE CAPTURE</div>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Real-Time Intelligence</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            Capturing behavior as it happens. We bypass latency to intercept high-velocity signals across global digital ecosystems.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '48px' }}>
          <div style={{ color: 'var(--accent-cyan)', marginBottom: '16px', fontSize: '14px', letterSpacing: '0.1em' }}>FOCUS DIRECT</div>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Context-First Analysis</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6 }}>
            Focusing on the 'why' behind actions. Data without intent is noise; we map the psychological environmental triggers that drive conversion.
          </p>
        </div>
        <div className="glass-panel" style={{ padding: '48px', gridColumn: '1 / -1', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(160, 32, 240, 0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Recursive Inference Pipeline</h2>
          <p className="text-secondary" style={{ lineHeight: 1.6, maxWidth: '600px' }}>
            Our proprietary engine iteratively combines raw signals and prior insights. Each data point refines the previous conclusion, creating a self-optimizing feedback loop that mimics advanced human reasoning.
          </p>
        </div>
      </div>

      <section style={{ textAlign: 'center', padding: '80px 0' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>How will your market evolve in the next 12 minutes?</h2>
        <div style={{ 
          display: 'flex', maxWidth: '600px', margin: '0 auto', 
          background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--border-subtle)',
          padding: '8px'
        }}>
          <input 
            type="text" 
            placeholder="Inquire the pipeline..." 
            style={{ 
              flex: 1, background: 'transparent', border: 'none', color: '#fff', 
              padding: '16px', fontSize: '16px', outline: 'none' 
            }} 
          />
          <button className="btn-primary" style={{ padding: '16px 32px' }}>→</button>
        </div>
      </section>
    </div>
  );
}
