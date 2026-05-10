export default function Methodology() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>The Oracle is Traceable.</h1>
      <p className="text-secondary" style={{ fontSize: '18px', maxWidth: '800px', marginBottom: '64px' }}>
        At Outllyr, we don't just predict; we prove. Our methodology bridges the gap between raw consumer signals and actionable intelligence through a transparent, high-velocity feedback loop.
      </p>

      <section className="glass-panel" style={{ padding: '48px', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>Weeks to Days.</h2>
        <p className="text-secondary" style={{ marginBottom: '48px', maxWidth: '800px' }}>
          Traditional research is slowed by bureaucratic overhead and manual synthesis. Outllyr automates the collection and validates insights in real time.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>TRADITIONAL RESEARCH</div>
            <div style={{ display: 'flex', width: '100%', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: '12px' }}>4 TO 12 WEEKS</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>OUTLLYR INTELLIGENCE</div>
            <div style={{ display: 'flex', width: '100%', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '15%', background: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: '12px', color: '#000', fontWeight: 'bold' }}>&lt; 4 hr</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>Core Pillars</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>No Black Boxes</h3>
            <p className="text-secondary" style={{ fontSize: '14px' }}>We export the logic. Understand the exact weights and parameters the AI used to determine a market trend's confidence score.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Ethical Scraping</h3>
            <p className="text-secondary" style={{ fontSize: '14px' }}>Data is sourced strictly from public domains following US opt-in and fair use guidelines. We respect robots.txt and user privacy first.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Real-Time Drift</h3>
            <p className="text-secondary" style={{ fontSize: '14px' }}>Our models are constantly retraining. If consumer sentiment shifts at 2 AM, your dashboard reflects it by 3:00 AM.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
