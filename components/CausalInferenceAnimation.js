"use client";

import { useEffect, useRef } from 'react';
import { animate, stagger, svg } from 'animejs';
import { Brain } from 'lucide-react';

export default function CausalInferenceAnimation() {
  const containerRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasRun.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          runAnimation();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(containerRef.current);

    function runAnimation() {
      const container = containerRef.current;
      if (!container) return;

      // Animate the central core pulsing
      animate(container.querySelector('.core-node'), {
        scale: [0.9, 1.1],
        opacity: [0.8, 1],
        duration: 1500,
        loop: true,
        alternate: true,
        ease: 'inOutSine'
      });

      // Animate the outer nodes floating
      animate(container.querySelectorAll('.outer-node'), {
        translateY: [-5, 5],
        duration: 2000,
        delay: stagger(100),
        loop: true,
        alternate: true,
        ease: 'inOutSine'
      });

      // Draw the connecting lines
      const paths = container.querySelectorAll('.inference-path');
      paths.forEach((path, i) => {
        const drawable = svg.createDrawable(path);
        animate(drawable, {
          draw: '0 1',
          duration: 1000,
          delay: i * 300,
          ease: 'easeOutQuart',
          loop: true,
          alternate: true,
        });
      });
      
      // Animate signals travelling along paths
      // Note: animejs motionPath requires the path to be a standard <path> element.
      // We will just simulate it by animating the stroke-dashoffset or simply pulsing the lines.
      // A better way is to pulse the opacity of the paths to simulate data transfer
      animate(paths, {
        opacity: [0.2, 1, 0.2],
        duration: 1200,
        delay: stagger(200),
        loop: true,
        ease: 'linear'
      });
    }

    return () => observer.disconnect();
  }, []);

  // Generate 6 outer nodes
  const nodes = [
    { x: 80, y: 80 },
    { x: 320, y: 90 },
    { x: 50, y: 220 },
    { x: 350, y: 240 },
    { x: 150, y: 40 },
    { x: 250, y: 300 }
  ];

  return (
    <div style={{
      width: '100%', 
      height: '350px', 
      background: 'var(--bg-card)', 
      border: '1px solid var(--border-subtle)', 
      borderRadius: '8px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <svg ref={containerRef} width="100%" height="100%" viewBox="0 0 400 350" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="coreGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Lines connecting outer nodes to center (200, 175) */}
        {nodes.map((node, i) => (
          <path 
            key={`path-${i}`}
            id={`path-${i}`}
            className="inference-path"
            d={`M${node.x},${node.y} L200,175`}
            fill="none"
            stroke="var(--emerald)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.2"
          />
        ))}

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`} className="outer-node" transform={`translate(${node.x}, ${node.y})`}>
            <circle cx="0" cy="0" r="6" fill="var(--bg-card)" stroke="var(--text-secondary)" strokeWidth="2" />
            <circle cx="0" cy="0" r="2" fill="var(--emerald)" />
          </g>
        ))}

        {/* Central Core */}
        <g className="core-node" style={{ transformOrigin: '200px 175px' }}>
          <circle cx="200" cy="175" r="30" fill="rgba(77,201,168,0.1)" />
          <Brain x="176" y="151" width="48" height="48" color="var(--emerald)" filter="url(#coreGlow)" />
        </g>
      </svg>
    </div>
  );
}
