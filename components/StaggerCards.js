"use client";

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export default function StaggerCards({ children }) {
  const containerRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasRun.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;

          const cards = containerRef.current.querySelectorAll('.pipeline-step');
          
          animate(cards, {
            opacity: [0, 1],
            translateY: [40, 0],
            scale: [0.95, 1],
            duration: 800,
            delay: stagger(200, { from: 'first' }),
            ease: 'outExpo',
          });

          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="v2-pipeline-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {children}
    </div>
  );
}
