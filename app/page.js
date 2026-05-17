"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain, Ear, ShieldCheck, Target, TrendingUp, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import ScrambleHeadline from '../components/ScrambleHeadline';
import TerminalAnimation from '../components/TerminalAnimation';
import AnimatedEcosystem from '../components/AnimatedEcosystem';
import StaggerCards from '../components/StaggerCards';
import SignalSieveAnimation from '../components/SignalSieveAnimation';
import CausalInferenceAnimation from '../components/CausalInferenceAnimation';
import './globals.css';

export default function Version3Page() {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('cmo');
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  // Canvas Animation (from V1)
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

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

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

  const personaContent = {
    cmo: {
      title: "For the CMO & Brand Owner",
      pain: "You're making multi-million dollar decisions based on 6-month-old surveys.",
      solution: "Outllyr gives you continuous, real-time pulse on consumer shifts before they hit your P&L.",
      metric: "10x Faster Time-to-Insight",
      icon: <Target size={32} color="var(--emerald)" />
    },
    insights: {
      title: "For the Head of Insights",
      pain: "You need to trust the data, but LLMs are black boxes that hallucinate.",
      solution: "Every insight in Outllyr is source-linked. You can trace back every claim to the raw, unedited behavioral signal.",
      metric: "98% Source Traceability",
      icon: <ShieldCheck size={32} color="var(--emerald)" />
    },
    founder: {
      title: "For Founders & Growth Leads",
      pain: "Traditional research agencies cost $50k+ and take too long.",
      solution: "Outllyr acts as your always-on insights team, delivering actionable intelligence at a fraction of the cost.",
      metric: "$0 Agency Retainers",
      icon: <Zap size={32} color="var(--emerald)" />
    }
  };

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
            <Link href="#demo" className="v3-btn-primary" style={{padding: '10px 20px', fontSize: '14px'}}>
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Canvas Background */}
      <div className="v3-canvas-wrap">
        <canvas ref={canvasRef}></canvas>
      </div>

      {/* HERO */}
      <section className="v3-hero" style={{position: 'relative', overflow: 'hidden'}}>
        
        <div className="v3-container" style={{position: 'relative', zIndex: 10}}>
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="v3-hero-eyebrow">Insights-as-Infrastructure</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="v3-hero-title">
              <ScrambleHeadline delay={200}>Access to Continuous</ScrambleHeadline>
              <br />
              <ScrambleHeadline delay={1200} style={{color: 'var(--emerald)', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400}}>
                Consumer Intelligence.
              </ScrambleHeadline>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="v3-hero-sub">
              Replace slow, survey-driven research with a continuous stream of source-linked, actionable intelligence—delivered instantly, at scale. Stop Guessing. Start Knowing.
            </motion.p>
            
            <motion.div variants={fadeUp} style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
              <Link href="#demo" className="v3-btn-primary">Book a Demo</Link>
              <Link href="#platform" className="v3-btn-secondary">See How It Works</Link>
            </motion.div>
            
            <motion.div variants={fadeUp} className="v3-pills-row">
              <span className="v3-pill"><Zap size={14} color="var(--emerald)" /> 10x Faster</span>
              <span className="v3-pill"><ShieldCheck size={14} color="var(--emerald)" /> Source-Linked</span>
              <span className="v3-pill"><Activity size={14} color="var(--emerald)" /> Continuous</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF / METRICS */}
      <section className="v3-metrics-strip">
        <div className="v3-container">
          <div className="v3-metrics-grid">
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>
              <div className="v3-metric-val">12x</div>
              <div className="v3-metric-label">Faster than surveys</div>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.1}}>
              <div className="v3-metric-val">500K+</div>
              <div className="v3-metric-label">Signals processed daily</div>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.2}}>
              <div className="v3-metric-val">98%</div>
              <div className="v3-metric-label">Source Traceability</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRIPTYCH: THE DIFFERENCE */}
      <section id="why-outllyr" className="v3-section">
        <div className="v3-container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <span className="v3-hero-eyebrow">The Difference</span>
            <h2 style={{fontSize: '40px', marginTop: '16px'}}>Intelligence, not information.</h2>
          </div>
          
          <div className="v3-triptych">
            <motion.div className="v3-triptych-card" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>
              <div className="v3-triptych-icon"><Ear size={24} /></div>
              <h3>Listen &gt; Ask</h3>
              <p>Surveys are inherently biased because they force answers. We map organic behavioral signals from the open web, revealing what consumers actually do, not what they say they do.</p>
            </motion.div>
            
            <motion.div className="v3-triptych-card" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.1}}>
              <div className="v3-triptych-icon"><TrendingUp size={24} /></div>
              <h3>Causes &gt; Patterns</h3>
              <p>Data tells you that sales are dropping. True intelligence tells you why. We synthesize disparate data points into causal models that identify the root drivers of market shifts.</p>
            </motion.div>
            
            <motion.div className="v3-triptych-card" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.2}}>
              <div className="v3-triptych-icon"><ShieldCheck size={24} /></div>
              <h3>Traceability &gt; Black Box</h3>
              <p>Generic AI hallucinates. The Nucleus Ingestion Engine provides absolute provenance. Every strategic insight is directly linked back to its verified source data.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PIPELINE ARCHITECTURE */}
      <section id="platform" className="v3-section" style={{background: 'transparent', borderTop: '1px solid var(--border-subtle)'}}>
        <div className="v3-container">
          <div style={{marginBottom: '80px', textAlign: 'center'}}>
            <span className="v3-hero-eyebrow">The Infrastructure</span>
            <h2 style={{fontSize: '48px', marginTop: '16px'}}>How the Ecosystem works.</h2>
          </div>

          <StaggerCards>
            {/* Phase 1 */}
            <div className="v3-pipeline-step">
              <div>
                <span className="v3-pipeline-number">01 // INTAKE</span>
                <h3 style={{fontSize: '32px', marginBottom: '20px'}}>Structured Intent Analysis</h3>
                <p style={{fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px'}}>
                  We begin with a multi-turn diagnostic conversation to lock in your exact North Star statement. By scoring against 5 Diagnostic Pillars, we ensure precise alignment before any data is gathered.
                </p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <span className="v3-pill">Diagnostic Chat</span>
                  <span className="v3-pill">Intent Locking</span>
                </div>
              </div>
              <div className="v3-pipeline-visual" style={{padding: '0 24px'}}>
                <div style={{transform: 'scale(0.85)', transformOrigin: 'center'}}>
                  <TerminalAnimation />
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="v3-pipeline-step">
              <div>
                <span className="v3-pipeline-number">02 // MAPPING</span>
                <h3 style={{fontSize: '32px', marginBottom: '20px'}}>Research Methodology</h3>
                <p style={{fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px'}}>
                  Your intent is transformed into an interactive knowledge graph where we outline the 5 Strategic Market Forces shaping your problem, creating a comprehensive research methodology for your approval and a manifest to guide our data scouts.
                </p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <span className="v3-pill">Category Graph</span>
                  <span className="v3-pill">Link Farming</span>
                </div>
              </div>
              <div className="v3-pipeline-visual">
                <AnimatedEcosystem />
              </div>
            </div>

            {/* Phase 3 */}
            <div className="v3-pipeline-step">
              <div>
                <span className="v3-pipeline-number">03 // DISCOVERY</span>
                <h3 style={{fontSize: '32px', marginBottom: '20px'}}>Continuous Signal Audit</h3>
                <p style={{fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px'}}>
                  Our engine deploys across the open web—monitoring Reddit, YouTube, reviews, and forums. We filter noise through an LLM classification sieve to extract high-confidence behavioral signals.
                </p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <span className="v3-pill">Signal Sieve</span>
                  <span className="v3-pill">Real-Time Extraction</span>
                </div>
              </div>
              <div className="v3-pipeline-visual" style={{padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <SignalSieveAnimation />
              </div>
            </div>

            {/* Phase 4 */}
            <div className="v3-pipeline-step">
              <div>
                <span className="v3-pipeline-number">04 // INFERENCE</span>
                <h3 style={{fontSize: '32px', marginBottom: '20px'}}>Causal Synthesis &amp; Action</h3>
                <p style={{fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px'}}>
                  Raw signals are fed into our high-order inference engine. We don&apos;t just extract patterns—we identify the &quot;why&quot; behind the &quot;what,&quot; synthesizing fragmented data into clear, causal models that dictate your next strategic move.
                </p>
                <div style={{display: 'flex', gap: '12px'}}>
                  <span className="v3-pill">Inference Engine</span>
                  <span className="v3-pill">Causal Models</span>
                </div>
              </div>
              <div className="v3-pipeline-visual" style={{padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CausalInferenceAnimation />
              </div>
            </div>
          </StaggerCards>
        </div>
      </section>

      {/* PERSONAS */}
      <section id="personas" className="v3-section">
        <div className="v3-container">
          <div style={{textAlign: 'center'}}>
            <span className="v3-hero-eyebrow">Solutions</span>
            <h2 style={{fontSize: '40px', marginTop: '16px'}}>Designed for leaders.</h2>
          </div>

          <div className="v3-tabs-container">
            <div className="v3-tab-headers">
              <button className={`v3-tab-btn ${activeTab === 'cmo' ? 'active' : ''}`} onClick={() => setActiveTab('cmo')}>CMO / Brand</button>
              <button className={`v3-tab-btn ${activeTab === 'insights' ? 'active' : ''}`} onClick={() => setActiveTab('insights')}>Head of Insights</button>
              <button className={`v3-tab-btn ${activeTab === 'founder' ? 'active' : ''}`} onClick={() => setActiveTab('founder')}>Founder / Growth</button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.3}}
                className="v3-tab-content"
              >
                <div className="v3-tab-content-text">
                  <div style={{marginBottom: '24px'}}>{personaContent[activeTab].icon}</div>
                  <h3>{personaContent[activeTab].title}</h3>
                  <p><strong>The Problem:</strong> {personaContent[activeTab].pain}</p>
                  <p><strong>Our Solution:</strong> {personaContent[activeTab].solution}</p>
                  <Link href="#demo" className="v3-btn-secondary" style={{marginTop: '16px', padding: '10px 20px', fontSize: '14px'}}>
                    See your use case <ChevronRight size={16} style={{marginLeft: '8px'}} />
                  </Link>
                </div>
                <div className="v3-metric-box">
                  <div style={{fontSize: '12px', textTransform: 'uppercase', color: 'var(--emerald)', letterSpacing: '0.1em', marginBottom: '16px'}}>Key Outcome</div>
                  <div style={{fontFamily: 'Sora', fontSize: '48px', fontWeight: 700, marginBottom: '8px', background: 'linear-gradient(90deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                    {personaContent[activeTab].metric.split(' ')[0]}
                  </div>
                  <div style={{fontSize: '18px', color: 'var(--text-secondary)'}}>
                    {personaContent[activeTab].metric.substring(personaContent[activeTab].metric.indexOf(' ') + 1)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* CTA / BOOK A DEMO */}
      <section id="demo" className="v3-section v3-form-section">
        <div className="v3-container">
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <h2 style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>Ready to explore the future of consumer intelligence?</h2>
            <p style={{fontSize: '18px', color: 'var(--text-secondary)', marginTop: '16px'}}>
              Request a demo to see the platform map your specific market.
            </p>
          </div>

          <div className="v3-form-container">
            {formState === 'success' ? (
              <div style={{textAlign: 'center', padding: '40px 0'}}>
                <CheckCircle2 size={64} color="var(--emerald)" style={{margin: '0 auto 24px'}} />
                <h3 style={{fontSize: '28px', marginBottom: '16px'}}>Request Received</h3>
                <p style={{color: 'var(--text-secondary)'}}>
                  Our team will be in touch shortly to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit}>
                <div className="v3-input-group">
                  <label className="v3-label">Work Email</label>
                  <input type="email" className="v3-input" required placeholder="you@company.com" disabled={formState === 'submitting'} />
                </div>
                <div className="v3-input-group">
                  <label className="v3-label">Company Name</label>
                  <input type="text" className="v3-input" required placeholder="Acme Corp" disabled={formState === 'submitting'} />
                </div>
                <div className="v3-input-group">
                  <label className="v3-label">Your Role</label>
                  <select className="v3-input" required disabled={formState === 'submitting'}>
                    <option value="">Select your role...</option>
                    <option value="cmo">CMO / VP of Marketing</option>
                    <option value="insights">Head of Insights / Data</option>
                    <option value="founder">Founder / CEO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="v3-input-group" style={{marginBottom: '32px'}}>
                  <label className="v3-label">Primary Use Case (Optional)</label>
                  <textarea className="v3-input" rows="3" placeholder="What market shift are you trying to track?" disabled={formState === 'submitting'}></textarea>
                </div>
                
                <button type="submit" className="v3-btn-primary" style={{width: '100%', opacity: formState === 'submitting' ? 0.7 : 1}} disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Submitting...' : 'Book a Demo'}
                </button>
              </form>
            )}
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
            <p style={{color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6}}>
              Access to Continuous Consumer Intelligence.
            </p>
          </div>
          <div>
            <h4 className="v3-footer-heading">Platform</h4>
            <ul className="v3-footer-links">
              <li><Link href="#why-outllyr">Methodology</Link></li>
              <li><Link href="#platform">The Engine</Link></li>
              <li><Link href="#personas">Solutions</Link></li>
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
