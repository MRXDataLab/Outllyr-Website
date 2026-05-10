import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{ 
      position: 'fixed', width: '100vw', top: 0, zIndex: 50, 
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--background-glass)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'flex', 
        justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px'
      }}>
        <Link href="/" style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.05em' }}>
          Outllyr
        </Link>
        <nav style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: 500 }}>
          <Link href="/solution" className="text-secondary">Solution</Link>
          <Link href="/product" className="text-secondary">Product</Link>
          <Link href="/methodology" className="text-secondary">Methodology</Link>
        </nav>
        <div>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '14px' }}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
