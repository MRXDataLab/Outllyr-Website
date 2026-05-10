"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Brain, Network, Radar, Activity, ShieldCheck, Workflow } from 'lucide-react';
import ScrambleHeadline from '../../components/ScrambleHeadline';
import TerminalAnimation from '../../components/TerminalAnimation';
import AnimatedEcosystem from '../../components/AnimatedEcosystem';
import StaggerCards from '../../components/StaggerCards';
import './v2-overrides.css';

export default function Version2Page() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="v2-theme">
      {/* NAV */}
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo">Outllyr <span style={{fontSize: '12px', opacity: 0.5}}>V2</span></a>
          <button 
            className="nav-hamburger" 
            aria-label="Toggle menu" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
            <a href="#hero" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#paradigm" className="nav-link" onClick={() => setMenuOpen(false)}>The Pivot</a>
            <a href="#pipeline" className="nav-link" onClick={() => setMenuOpen(false)}>Engine Pipeline</a>
            <a href="/version2/contact-us" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="hero v2-hero" aria-label="Hero">
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr', textAlign: 'center', paddingTop: '60px' }}>
          <motion.div 
            className="hero-text"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{ margin: '0 auto', maxWidth: '800px' }}
          >
            <motion.p variants={fadeUp} className="hero-eyebrow" style={{ color: 'var(--emerald)' }}>
              Outllyr Nucleus Ingestion Engine
            </motion.p>

            {/* SCRAMBLE TEXT HEADLINE */}
            <motion.h1 variants={fadeUp} className="hero-headline" style={{ fontSize: 'clamp(40px, 6vw, 72px)', margin: '20px 0' }}>
              <ScrambleHeadline delay={300}>Stop Guessing.</ScrambleHeadline>
              <br />
              <em style={{ color: 'var(--emerald)', fontFamily: 'Instrument Serif, serif' }}>
                <ScrambleHeadline delay={1800}>Start Knowing.</ScrambleHeadline>
              </em>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-sub" style={{ fontSize: '20px', margin: '0 auto 40px auto', maxWidth: '600px' }}>
              Outllyr is a Living Truth Map. Not a static report. Not a generic LLM chat. We ingest your research intent, map the ecosystem, and track consumer signals in real-time.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-ctas" style={{ justifyContent: 'center' }}>
              <a href="/version2/contact-us" className="btn-emerald">Initialize Intake Terminal →</a>
              <a href="#pipeline" className="btn-ghost">View the Pipeline</a>
            </motion.div>
          </motion.div>

          {/* ANIMATED TERMINAL (replaces static mock) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* PARADIGM SHIFT */}
      <section id="paradigm" className="paradigm" aria-label="The Paradigm Shift">
        <div className="paradigm-inner">
          <p className="section-label">The Problem</p>
          <h2 className="paradigm-headline">Traditional research is dead on arrival.</h2>
          <p className="paradigm-sub">
            By the time you get the 100-page PDF report, the market has already shifted. You need continuous intelligence, not a historical snapshot.
          </p>
          <div className="paradigm-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="paradigm-card legacy"
            >
              <div className="paradigm-icon legacy"><Workflow /></div>
              <h3>Legacy Market Research</h3>
              <ul>
                <li>Static 6-month old surveys</li>
                <li>Self-reported, biased survey panels</li>
                <li>Disconnected from real-time events</li>
                <li>Actionability: Low</li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="paradigm-card highlight"
            >
              <div className="paradigm-icon outllyr"><Activity /></div>
              <h3>The Outllyr Pivot</h3>
              <ul>
                <li>Live Ecosystem Mapping</li>
                <li>Behavioral signals extracted from the open web</li>
                <li>Continuous monitoring of the "Threat Matrix"</li>
                <li>Actionability: High Confidence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* PIPELINE ARCHITECTURE — now uses StaggerCards */}
      <section id="pipeline" className="architecture" aria-label="Engine Pipeline">
        <div className="architecture-inner">
          <p className="section-label">How it Works</p>
          <h2 className="architecture-headline">The 3 Phases of Nucleus Ingestion.</h2>
          
          <StaggerCards>

            {/* PHASE 1 */}
            <div 
              className="pipeline-step" 
              style={{ opacity: 0, display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'var(--bg-card)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ background: 'rgba(77,201,168,0.1)', color: 'var(--emerald)', padding: '16px', borderRadius: '12px', flexShrink: 0 }}>
                <Brain size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Phase 1: Intake Terminal</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  A consultative AI agent calibrates your core business problem. We score your problem against 5 Diagnostic Pillars (Context, Goal, Lens, Scope, Constraints) to lock in your exact <strong>North Star Statement</strong>. No vague questions allowed.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill">Diagnostic Chat</span>
                  <span className="pill">Intent Locking</span>
                </div>
              </div>
            </div>

            {/* PHASE 2 */}
            <div 
              className="pipeline-step" 
              style={{ opacity: 0, display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'var(--bg-card)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ background: 'rgba(77,201,168,0.1)', color: 'var(--emerald)', padding: '16px', borderRadius: '12px', flexShrink: 0 }}>
                <Network size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Phase 2: Synthesis Review</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  We transform your intent into 3 actionable artifacts. You get a Strategic Research Brief, a machine-readable Link Farming Manifest for our scrapers, and an interactive <strong>Ecosystem Map</strong> mapping your problem across 5 Strategic Forces.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill">Category Graph</span>
                  <span className="pill">Link Farming</span>
                </div>
                {/* SVG Anime.js Visualization */}
                <AnimatedEcosystem />
              </div>
            </div>

            {/* PHASE 3 */}
            <div 
              className="pipeline-step" 
              style={{ opacity: 0, display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'var(--bg-card)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ background: 'rgba(77,201,168,0.1)', color: 'var(--emerald)', padding: '16px', borderRadius: '12px', flexShrink: 0 }}>
                <Radar size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Phase 3: Discovery Audit</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  The engine takes over. We deploy a swarm of data-scouts to pull signals from Reddit, YouTube, and Amazon. Our <strong>Living Truth Map</strong> monitors data ingestion in near real-time, relying on Marginal Signal Utility (MSU) to stop extraction the moment statistical confidence is achieved.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill">Signal Sieve</span>
                  <span className="pill">Real-Time Dash</span>
                </div>
              </div>
            </div>

          </StaggerCards>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CONTACT */}
      <section id="contact" className="contact-form-section" aria-label="Contact">
        <div className="contact-inner">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="cta-strip" style={{ padding: '0 0 60px 0' }}
          >
            <h2>Initialize the Oracle.</h2>
            <p>Deploy the Nucleus Ingestion Engine to secure continuous consumer intelligence.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="contact-form"
          >
            {formSubmitted ? (
              <div className="success-message">
                <ShieldCheck size={48} style={{ margin: '0 auto 16px auto' }} />
                <h3>Signal Received</h3>
                <p>We've received your request and will securely contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input type="email" className="contact-input" placeholder="Work Email Address" required />
                <input type="text" className="contact-input" placeholder="Company Name" required />
                <button type="submit" className="btn-emerald" style={{ marginTop: '10px' }}>
                  Request V2 Early Access
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Outllyr <span style={{fontSize: '12px', opacity: 0.5}}>V2</span></div>
            <p className="footer-tagline">The Living Truth Map.</p>
          </div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#paradigm">The Pivot</a>
            <a href="#pipeline">Architecture</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Outllyr. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
