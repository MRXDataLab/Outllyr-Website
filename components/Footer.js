import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-subtle)', 
      padding: '48px 24px', 
      marginTop: 'auto' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '16px', fontWeight: 700, letterSpacing: '-0.05em' }}>Outllyr</h2>
          <p className="text-muted" style={{ fontSize: '14px', maxWidth: '300px' }}>
            Predictive intelligence for the high-velocity enterprise.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '64px', fontSize: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>PLATFORM</span>
            <Link href="/product" className="text-secondary">Product</Link>
            <Link href="/methodology" className="text-secondary">Methodology</Link>
            <Link href="/solution" className="text-secondary">Resources</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>LEGAL</span>
            <Link href="#" className="text-secondary">Privacy Policy</Link>
            <Link href="#" className="text-secondary">Terms of Service</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>CONNECT</span>
            <Link href="/contact" className="text-secondary">Contact</Link>
            <a href="mailto:hello@outllyr.ai" className="text-cyan">hello@outllyr.ai</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '48px auto 0', fontSize: '12px', color: 'var(--text-muted)' }}>
        © 2026 Outllyr AI. All rights reserved.
      </div>
    </footer>
  );
}
