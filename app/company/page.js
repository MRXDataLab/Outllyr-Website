"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../globals.css'; // Reuse global styles

export default function TeamPage() {
  const canvasRef = useRef(null);

  // Canvas Animation (from V1/V3)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let wrap = canvas.parentElement;
    let W, H;
    let animationFrameId;

    function resize() {
      if (!wrap) return;
      W = wrap.clientWidth;
      H = wrap.clientHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const N = 45;
    const nodes = [];
    for (let i = 0; i < N; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: i === 0 ? 8 : 1 + Math.random() * 2,
        opacity: i === 0 ? 0.9 : 0.3 + Math.random() * 0.5
      });
    }

    function tick(t) {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      }
      const phase = (t % 3000) / 3000;
      const sine = Math.sin(phase * Math.PI * 2);
      nodes[0].r = 8 + (sine * 0.5 + 0.5) * 4;
      nodes[0].opacity = 0.5 + (1 - (sine * 0.5 + 0.5)) * 0.5;

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx.strokeStyle = `rgba(77,201,168,${(1 - d / 150) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,201,168,${n.opacity})`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(tick);
    }
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const team = [
    {
      name: "Vivek",
      role: "Chief Executive Officer",
      bio: "Driving the strategic vision to replace legacy martech with continuous intelligence.",
      image: "https://ui-avatars.com/api/?name=Vivek+Soma&background=0A0E1A&color=4DC9A8&size=200" // Replace with actual image path like '/images/team/vivek.jpg'
    },
    {
      name: "Deepak",
      role: "Chief Product Officer",
      bio: "Architecting the user experience and ensuring actionable intelligence delivery.",
      image: "https://ui-avatars.com/api/?name=Deepak+Nair&background=0A0E1A&color=4DC9A8&size=200" // Replace with actual image path
    },
    {
      name: "Jeson",
      role: "Chief Technology Officer",
      bio: "Building the high-performance Nucleus Ingestion pipeline and graph architecture.",
      image: "https://ui-avatars.com/api/?name=Jeson+K&background=0A0E1A&color=4DC9A8&size=200" // Replace with actual image path
    }
  ];

  return (
    <div className="v3-theme">
      {/* NAV */}
      <nav className="v3-nav">
        <div className="v3-nav-inner">
          <Link href="/" className="v3-nav-logo">
            <span style={{color: '#fff'}}>Outllyr</span>
          </Link>
          <div className="v3-nav-links">
            <Link href="/#platform" className="v3-nav-link">Platform</Link>
            <Link href="/#why-outllyr" className="v3-nav-link">Why Outllyr</Link>
            <Link href="/#personas" className="v3-nav-link">Solutions</Link>
          </div>
          <div>
            <Link href="/#demo" className="v3-btn-primary" style={{padding: '10px 20px', fontSize: '14px'}}>
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Canvas Background */}
      <div className="v3-canvas-wrap">
        <canvas ref={canvasRef}></canvas>
      </div>

      {/* ABOUT US */}
      <section id="about-us" className="v3-section" style={{paddingTop: '160px', paddingBottom: '60px'}}>
        <div className="v3-container">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" style={{textAlign: 'center'}}>
            <motion.div variants={fadeUp}>
              <span className="v3-hero-eyebrow">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '24px', background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Decoding the Digital Footprint: Strategic Insights, Reimagined.
            </motion.h1>
            <motion.div variants={fadeUp} style={{fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.8, textAlign: 'left'}}>
              <p style={{marginBottom: '20px'}}>
                In a hyper-connected world, organizations are drowning in data but starving for clarity. Traditional market research often forces a compromise between speed, depth, and trust. Outllyr eliminates that compromise. We are a next-generation market intelligence and insights company built to transform complex, ambiguous business challenges into highly actionable strategic clarity.
              </p>
              <p style={{marginBottom: '20px'}}>
                At the core of Outllyr is a sophisticated, proprietary AI architecture designed to replicate and scale deep human reasoning. By seamlessly navigating the vast expanse of public internet data and digital footprints, our collaborative ecosystem of intelligent engines maps the intricate interaction dynamics between shifting consumer behaviors and market outcomes. We look beyond surface-level trends to uncover the underlying causal forces that truly drive brand performance.
              </p>
              <p>
                What defines the Outllyr experience is absolute trust and transparency. Through an intuitive, live interface, we provide leaders with a dynamic window into their market landscape, where every macro insight can be traced back to its empirical origin. Outllyr is more than a platform; it is an autonomous research partner, turning global digital noise into your clear, competitive advantage.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE TEAM */}
      <section id="team" className="v3-section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
        <div className="v3-container">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" style={{textAlign: 'center'}}>
            <motion.div variants={fadeUp}>
              <span className="v3-hero-eyebrow">The Team</span>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '24px', background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Enterprise Rigor Meets Consumer Intelligence.
            </motion.h2>
            <motion.p variants={fadeUp} style={{fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6}}>
              We're a multidisciplinary leadership team of systems architects, fintech product leaders, and market strategists. Having built mission-critical technology for the world's largest automotive and financial institutions, we are now bringing that same precision to delivering continuous, bias-free consumer intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="v3-section" style={{paddingTop: '0'}}>
        <div className="v3-container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto'}}>
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.1}}
                style={{
                  background: 'var(--bg-secondary)', // Make it opaque
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative', // Ensure it stays above the canvas
                  zIndex: 2
                }}
              >
                <div style={{
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  margin: '0 auto 24px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--emerald-glow)'
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.image} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <h3 style={{fontSize: '24px', marginBottom: '8px'}}>{member.name}</h3>
                <div style={{color: 'var(--emerald)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px'}}>{member.role}</div>
                <p style={{fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6}}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="v3-footer">
        <div className="v3-footer-grid">
          <div>
            <Link href="/" className="v3-nav-logo" style={{marginBottom: '16px', display: 'inline-block'}}>
              <span style={{color: '#fff'}}>Outllyr</span>
            </Link>
            <p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, whiteSpace: 'nowrap'}}>
              Access to Continuous Consumer Intelligence.
            </p>
          </div>
          <div>
            <h4 className="v3-footer-heading">Platform</h4>
            <ul className="v3-footer-links">
              <li><Link href="/#why-outllyr">Methodology</Link></li>
              <li><Link href="/#platform">The Engine</Link></li>
              <li><Link href="/#personas">Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="v3-footer-heading">Company</h4>
            <ul className="v3-footer-links">
              <li><Link href="/company#about-us">About Us</Link></li>
              <li><Link href="/company#team">The Team</Link></li>
              <li style={{marginTop: '24px', display: 'flex', alignItems: 'center', gap: '16px'}}>
                <a href="https://www.linkedin.com/company/outllyr/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-secondary)', display: 'flex'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:hello@outllyr.com" style={{color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none'}}>hello@outllyr.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{maxWidth: '1200px', margin: '60px auto 0', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)', fontSize: '13px'}}>
          <div>© 2026 Outllyr. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
