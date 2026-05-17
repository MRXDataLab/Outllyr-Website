"use client";

import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

export default function SignalSieveAnimation() {
  const [signals, setSignals] = useState(3);
  const [datapoints, setDatapoints] = useState(100);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const intervalTime = 50; 
    const steps = duration / intervalTime;
    
    let step = 0;
    let interval;
    let timeout;

    const startCounting = () => {
      step = 0;
      setSignals(3);
      setDatapoints(100);
      
      interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        // Easing out function for a nice deceleration effect
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        
        const currentSignals = Math.floor(3 + (85 - 3) * easeOutQuad);
        const currentDatapoints = Math.floor(100 + (24153 - 100) * easeOutQuad);
        
        setSignals(currentSignals);
        setDatapoints(currentDatapoints);
        
        if (step >= steps) {
          clearInterval(interval);
          timeout = setTimeout(startCounting, 2000); // Wait 2s, then restart
        }
      }, intervalTime);
    };

    startCounting();

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{
      width: '100%', 
      height: '350px', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
    }}>
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <Activity size={64} color="var(--emerald)" style={{
          animation: 'pulse 1.2s ease-in-out infinite'
        }} />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 12px rgba(77,201,168,0.6)); }
            100% { transform: scale(1); opacity: 0.7; }
          }
        `}} />
      </div>
      
      <div style={{fontFamily: 'DM Mono', color: 'var(--emerald)', fontSize: '15px', marginBottom: '16px', letterSpacing: '1px'}}>
        &gt; AUDITING_SOURCES...
      </div>
      <div style={{fontFamily: 'DM Mono', color: 'var(--text-secondary)', fontSize: '14px', opacity: 0.7, marginBottom: '8px'}}>
        [{signals} signals verified]
      </div>
      <div style={{fontFamily: 'DM Mono', color: 'var(--text-secondary)', fontSize: '14px', opacity: 0.7}}>
        [{datapoints.toLocaleString()} data points extracted]
      </div>
    </div>
  );
}
