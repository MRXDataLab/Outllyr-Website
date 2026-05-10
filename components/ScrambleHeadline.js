"use client";

import { useEffect, useRef } from 'react';
import { animate, text } from 'animejs';

export default function ScrambleHeadline({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!ref.current || hasRun.current) return;
    hasRun.current = true;

    const el = ref.current;

    const timer = setTimeout(() => {
      animate(el, {
        textContent: text.scrambleText({
          chars: '01!@#$%^&*_+-=[]{}|;:,.<>?',
          cursor: '▌',
          revealRate: 40,
          revealDelay: 50,
          settleDuration: 100,
        }),
        duration: 2000,
        ease: 'linear',
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span ref={ref} className={className} style={style}>
      {children}
    </span>
  );
}
