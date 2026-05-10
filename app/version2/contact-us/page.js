"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShieldCheck, PlayCircle, Plus, Minus } from 'lucide-react';
import { faqs } from '../../../data/faqs';
import '../v2-overrides.css';

export default function ContactUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="v2-theme" style={{ paddingBottom: '100px' }}>
      {/* NAV */}
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/version2" className="nav-logo">Outllyr <span style={{fontSize: '12px', opacity: 0.5}}>V2</span></a>
          <div className="nav-right">
            <a href="/version2" className="nav-link">Home</a>
            <a href="/version2#paradigm" className="nav-link">The Pivot</a>
            <a href="/version2#pipeline" className="nav-link">Engine Pipeline</a>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '100px auto 0', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>
        
        {/* TOP SPLIT SECTION */}
        <div className="contact-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
          
          {/* LEFT COLUMN - VALUE PROP */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="hero-eyebrow" style={{ color: 'var(--emerald)' }}>Outllyr Nucleus Ingestion Engine</p>
            <h1 className="hero-headline" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '16px 0 24px' }}>
              Book a <em style={{ color: 'var(--emerald)', fontFamily: 'Instrument Serif, serif' }}>Demo</em> — Tailored to Your Decisions
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '32px' }}>
              For Strategy & Analytics Teams: See continuous, cross-functional ecosystem mapping in action on your real market scenarios. No generic walkthrough.
            </p>

            <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-subtle)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Powering 30,000+ Business Decisions</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Trusted by Chiefs of Staff, Strategy teams, and GTM leaders to surface blindspots and drive confident decisions.</p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid var(--border-subtle)', overflow: 'hidden', position: 'relative' }}>
              <div style={{ padding: '60px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <PlayCircle size={48} color="var(--emerald)" style={{ opacity: 0.8 }} />
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Watch how Outllyr turns signals into a Living Truth Map.</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - FORM */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="contact-form" style={{ position: 'sticky', top: '100px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Initialize Intake</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Leave your details and a strategist will reach out to configure your terminal.</p>
              
              {formSubmitted ? (
                <div className="success-message">
                  <ShieldCheck size={48} style={{ margin: '0 auto 16px auto' }} />
                  <h3>Request Received</h3>
                  <p>Your demo request is locked in. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <input type="text" className="contact-input" placeholder="First Name" required style={{ flex: 1 }} />
                    <input type="text" className="contact-input" placeholder="Last Name" required style={{ flex: 1 }} />
                  </div>
                  <input type="email" className="contact-input" placeholder="Work Email Address" required />
                  <input type="text" className="contact-input" placeholder="Company Name" required />
                  <select className="contact-input" required style={{ color: 'var(--text-secondary)' }}>
                    <option value="" disabled selected>Primary Use Case</option>
                    <option value="marketing">Marketing & Brand Health</option>
                    <option value="product">Product Strategy</option>
                    <option value="sales">Sales & Revenue Operations</option>
                    <option value="other">Other</option>
                  </select>
                  <button type="submit" className="btn-emerald" style={{ marginTop: '10px' }}>
                    Request Demo
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <div className="section-divider" style={{ margin: '40px 0' }}></div>

        {/* BOTTOM SECTION - FAQS */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Knowledge Base</p>
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                onClick={() => toggleFaq(index)}
                style={{ 
                  background: 'var(--bg-card)', 
                  border: `1px solid ${openFaq === index ? 'var(--emerald)' : 'var(--border-subtle)'}`,
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '500', color: openFaq === index ? 'var(--emerald)' : 'var(--text-primary)' }}>{faq.question}</h3>
                  {openFaq === index ? <Minus size={20} color="var(--emerald)" /> : <Plus size={20} color="var(--text-muted)" />}
                </div>
                {openFaq === index && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    style={{ marginTop: '16px', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '15px' }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
