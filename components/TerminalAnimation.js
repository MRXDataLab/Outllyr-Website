"use client";

import { useEffect, useRef } from 'react';
import { animate, text } from 'animejs';

const LINES = [
  { prefix: '[Intake_Terminal]', prefixColor: 'var(--emerald)', text: ' Loading Diagnostic Pillar 1: Market Context...', textColor: 'var(--text-secondary)' },
  { prefix: 'Agent:', prefixColor: '#fff', text: ' What specific event or market shift triggered this research request?', textColor: 'var(--text-secondary)' },
  { prefix: 'User:', prefixColor: '#fff', text: ' We are seeing a 14% drop in repeat purchases among Gen-Z users following our competitor\'s price cut.', textColor: 'var(--text-secondary)' },
  { prefix: 'System:', prefixColor: 'var(--emerald)', text: ' Analyzed. Locking "Strategic Intent". Commencing graph generation...', textColor: 'var(--emerald)' },
];

export default function TerminalAnimation() {
  const containerRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasRun.current) return;
    hasRun.current = true;

    const lineEls = containerRef.current.querySelectorAll('.terminal-line-text');

    let cumulativeDelay = 800;
    lineEls.forEach((el, i) => {
      const finalText = el.dataset.text;

      setTimeout(() => {
        // Make line visible
        const lineContainer = el.closest('.terminal-line');
        lineContainer.style.opacity = '1';
        lineContainer.style.transform = 'translateY(0)';

        // Scramble the text content
        animate(el, {
          textContent: text.scrambleText({
            text: finalText,
            chars: '01_-=+[]{}|;:.<>?/~',
            cursor: '▌',
            revealRate: 50,
            revealDelay: 30,
            settleDuration: 80,
          }),
          duration: 1200 + (finalText.length * 3),
          ease: 'linear',
        });
      }, cumulativeDelay);

      cumulativeDelay += 1800 + (finalText.length * 3);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '700px',
        textAlign: 'left',
      }}
    >
      {/* macOS dots */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
      </div>

      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '14px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {LINES.map((line, i) => (
          <div
            key={i}
            className="terminal-line"
            style={{
              opacity: 0,
              transform: 'translateY(8px)',
              transition: 'opacity 0.3s, transform 0.3s'
            }}
          >
            <span style={{ color: line.prefixColor, fontWeight: 'bold' }}>{line.prefix}</span>
            <span
              className="terminal-line-text"
              data-text={line.text}
              style={{ color: line.textColor }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
