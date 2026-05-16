"use client";

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Canvas Animation
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

    const N = 35;
    const nodes = [];
    for (let i = 0; i < N; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: i === 0 ? 8 : 2 + Math.random() * 2,
        opacity: i === 0 ? 0.9 : 0.5 + Math.random() * 0.4
      });
    }

    function tick(t) {
      ctx.fillStyle = 'rgba(10,14,26,0.15)';
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      }
      const phase = (t % 2500) / 2500;
      const sine = Math.sin(phase * Math.PI * 2);
      nodes[0].r = 8 + (sine * 0.5 + 0.5) * 5;
      nodes[0].opacity = 0.4 + (1 - (sine * 0.5 + 0.5)) * 0.5;

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.strokeStyle = 'rgba(77,201,168,' + ((1 - d / 120) * 0.18) + ')';
            ctx.lineWidth = 0.5;
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
        ctx.fillStyle = 'rgba(77,201,168,' + n.opacity + ')';
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

  // Scroll Reveal Observer
  useEffect(() => {
    const revs = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const p = e.target.parentElement;
            const sibs = p ? p.querySelectorAll('.reveal') : [];
            let idx = 0;
            for (let i = 0; i < sibs.length; i++) {
              if (sibs[i] === e.target) {
                idx = i;
                break;
              }
            }
            e.target.style.transitionDelay = (idx * 80) + 'ms';
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revs.forEach((el) => obs.observe(el));
    } else {
      revs.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Setting state to true simulates form submission for this static frontend.
    setFormSubmitted(true);
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo">Outllyr</a>
          <button 
            className="nav-hamburger" 
            aria-label="Toggle menu" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
            <a href="#" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#paradigm" className="nav-link" onClick={() => setMenuOpen(false)}>Methodology</a>
            <a href="#architecture" className="nav-link" onClick={() => setMenuOpen(false)}>Architecture</a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Initialize Intake Terminal →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero" aria-label="Hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow hero-anim" style={{ animationDelay: '0ms' }}>Nucleus Ingestion Engine</p>
            <h1 className="hero-headline hero-anim" style={{ animationDelay: '0ms' }}>
              Strategic Intake.<br /><em>Synthesized Truth.</em>
            </h1>
            <p className="hero-sub hero-anim" style={{ animationDelay: '100ms' }}>
              We ingest your research intent to build a strategic framework, traverse the web to discover and audit relevant data sources, and distill the findings into a Living Truth Map of actionable insights.
            </p>
            <div className="hero-ctas hero-anim" style={{ animationDelay: '200ms' }}>
              <a href="#contact" className="btn-emerald">Initiate Intake Terminal →</a>
              <a href="#paradigm" className="btn-ghost">View Methodology</a>
            </div>
            <div className="hero-pills hero-anim" style={{ animationDelay: '320ms' }}>
              <span className="pill">Intent Scoring</span>
              <span className="pill">Ecosystem Mapping</span>
              <span className="pill">Signal Sieve</span>
            </div>
          </div>
          <div className="hero-canvas-wrap">
            <canvas ref={canvasRef}></canvas>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* PARADIGM SHIFT */}
      <section id="paradigm" className="paradigm" aria-label="The Paradigm Shift">
        <div className="paradigm-inner">
          <p className="section-label reveal">The Paradigm Shift</p>
          <h2 className="paradigm-headline reveal">From static polling to a Living Truth Map.</h2>
          <p className="paradigm-sub reveal">
            Traditional research asks questions after the fact. The Nucleus Ingestion Engine listens in real-time, mapping the behavioral signals that precede every market shift.
          </p>
          <div className="paradigm-grid">
            <div className="paradigm-card legacy reveal">
              <div className="paradigm-icon legacy">⟲</div>
              <h3>Legacy Research</h3>
              <ul>
                <li>Relies on biased, static, and self-reported survey data.</li>
              </ul>
            </div>
            <div className="paradigm-card highlight reveal">
              <div className="paradigm-icon outllyr">✦</div>
              <h3>The Outllyr Approach</h3>
              <ul>
                <li>Knowledge-Base driven pipeline that synthesizes intent into an Ecosystem Graph and audits global sources in real-time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CORE PILLARS */}
      <section id="architecture" className="architecture" aria-label="Core Pillars">
        <div className="architecture-inner">
          <p className="section-label reveal">Pipeline Architecture</p>
          <h2 className="architecture-headline reveal">The stages of the Nucleus Ingestion pipeline.</h2>
          <div className="arch-grid">
            <div className="arch-card reveal">
              <div className="card-icon">◉</div>
              <h3>Structured Intake</h3>
              <p>Our Intake Terminal conducts a structured, multi-turn conversation to surface your research intent, scored against 5 diagnostic pillars.</p>
            </div>
            <div className="arch-card featured reveal">
              <div className="card-icon">✦</div>
              <h3>Ecosystem Mapping</h3>
              <p>We convert your intent into a Living Truth Map—a dynamic graph architecture that visualizes categories, entities, and signal hierarchy across the broader market landscape.</p>
              <div className="feat-preview">
                <span style={{ color: 'var(--text-muted)' }}>// Truth Map Topology</span><br />
                map.generate(research_intent)<br />
                → 4-8 Source Terrain Nodes mapped<br />
                → force_impact_pct: +12.4%<br />
                → Status: Converged
              </div>
            </div>
            <div className="arch-card reveal">
              <div className="card-icon">◈</div>
              <h3>Confidence Sieve</h3>
              <p>Our two-layer discovery system audits sources across the web, routing unknown signals through an LLM classification sieve for verified confidence and risk alerting.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CONTACT / CTA */}
      <section id="contact" className="contact-form-section" aria-label="Contact">
        <div className="contact-inner">
          <div className="cta-strip" style={{ padding: '0 0 60px 0' }}>
            <h2 className="reveal">Initialize the Oracle.</h2>
            <p className="reveal">Leave your contact details to learn more about deploying the Nucleus Ingestion Engine.</p>
          </div>

          <div className="contact-form reveal">
            {formSubmitted ? (
              <div className="success-message">
                <h3>Thanks!</h3>
                <p>We've received your details and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input 
                  type="email" 
                  className="contact-input" 
                  placeholder="Email Address" 
                  required 
                />
                <input 
                  type="tel" 
                  className="contact-input" 
                  placeholder="Phone Number" 
                  required 
                />
                <button type="submit" className="btn-emerald" style={{ marginTop: '10px' }}>
                  Request Access
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" aria-label="Footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Outllyr</div>
            <p className="footer-tagline">Access to Continuous Consumer Intelligence.</p>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#paradigm">Methodology</a>
            <a href="#architecture">Architecture</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <a href="mailto:hello@outllyr.com">hello@outllyr.com</a>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Outllyr. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div>
        </div>
      </footer>
    </>
  );
}
