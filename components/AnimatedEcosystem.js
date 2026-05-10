"use client";

import { useEffect, useRef } from 'react';
import { animate, stagger, svg } from 'animejs';

export default function AnimatedEcosystem() {
  const svgRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!svgRef.current || hasRun.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          runAnimation();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(svgRef.current);

    function runAnimation() {
      const container = svgRef.current;
      if (!container) return;

      // Get all paths and create drawables
      const paths = container.querySelectorAll('.network-path');
      paths.forEach((path, i) => {
        const drawable = svg.createDrawable(path);
        animate(drawable, {
          draw: '0 1',
          duration: 1500,
          delay: i * 200,
          ease: 'inOutSine',
          loop: true,
          alternate: true,
        });
      });

      // Animate nodes
      animate(container.querySelectorAll('.network-node'), {
        opacity: [0, 1],
        scale: [0, 1],
        duration: 800,
        delay: stagger(80),
        ease: 'outExpo',
        loop: true,
        alternate: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '20px auto' }} ref={svgRef}>
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="network-path" d="M150 100 L80 50" stroke="rgba(77,201,168,0.5)" strokeWidth="2" />
        <path className="network-path" d="M150 100 L220 50" stroke="rgba(77,201,168,0.5)" strokeWidth="2" />
        <path className="network-path" d="M150 100 L150 170" stroke="rgba(77,201,168,0.5)" strokeWidth="2" />
        <path className="network-path" d="M80 50 L40 20" stroke="rgba(255,189,46,0.5)" strokeWidth="1.5" />
        <path className="network-path" d="M220 50 L260 20" stroke="rgba(255,95,86,0.5)" strokeWidth="1.5" />
        <path className="network-path" d="M150 170 L100 190" stroke="rgba(39,201,63,0.5)" strokeWidth="1.5" />
        <path className="network-path" d="M150 170 L200 190" stroke="rgba(39,201,63,0.5)" strokeWidth="1.5" />

        <circle className="network-node" cx="150" cy="100" r="12" fill="#4DC9A8" opacity="0" />
        <circle className="network-node" cx="150" cy="100" r="20" stroke="#4DC9A8" strokeWidth="2" strokeOpacity="0.3" fill="none" opacity="0" />
        <circle className="network-node" cx="80" cy="50" r="8" fill="#FFBD2E" opacity="0" />
        <circle className="network-node" cx="220" cy="50" r="8" fill="#FF5F56" opacity="0" />
        <circle className="network-node" cx="150" cy="170" r="8" fill="#27C93F" opacity="0" />
        <circle className="network-node" cx="40" cy="20" r="5" fill="#E8ECF1" opacity="0" />
        <circle className="network-node" cx="260" cy="20" r="5" fill="#E8ECF1" opacity="0" />
        <circle className="network-node" cx="100" cy="190" r="5" fill="#E8ECF1" opacity="0" />
        <circle className="network-node" cx="200" cy="190" r="5" fill="#E8ECF1" opacity="0" />
      </svg>
    </div>
  );
}
