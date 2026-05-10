"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function NetworkGraph() {
  const nodes = [
    { id: 1, cx: '20%', cy: '30%', r: 6 },
    { id: 2, cx: '40%', cy: '70%', r: 8 },
    { id: 3, cx: '70%', cy: '40%', r: 10 },
    { id: 4, cx: '80%', cy: '80%', r: 5 },
    { id: 5, cx: '50%', cy: '20%', r: 7 },
  ];

  const edges = [
    { id: '1-2', x1: '20%', y1: '30%', x2: '40%', y2: '70%' },
    { id: '2-3', x1: '40%', y1: '70%', x2: '70%', y2: '40%' },
    { id: '3-4', x1: '70%', y1: '40%', x2: '80%', y2: '80%' },
    { id: '1-5', x1: '20%', y1: '30%', x2: '50%', y2: '20%' },
    { id: '5-3', x1: '50%', y1: '20%', x2: '70%', y2: '40%' },
    { id: '2-5', x1: '40%', y1: '70%', x2: '50%', y2: '20%' },
  ];

  return (
    <div style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Draw edges with a pulsing glowing effect */}
        {edges.map((edge) => (
          <motion.line
            key={edge.id}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="var(--accent-cyan)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.2] }}
            transition={{
              pathLength: { duration: 1.5, ease: "easeInOut" },
              opacity: {
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                ease: "easeInOut",
              }
            }}
            style={{ filter: 'drop-shadow(0px 0px 4px var(--accent-cyan-glow))' }}
          />
        ))}

        {/* Draw nodes with floating animations */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#ffffff"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + node.id,
              ease: "easeInOut"
            }}
            style={{ filter: 'drop-shadow(0px 0px 6px #ffffff)' }}
          />
        ))}
      </svg>
      
      {/* Central "Energy Burst" aesthetic */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, var(--accent-cyan-glow) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
