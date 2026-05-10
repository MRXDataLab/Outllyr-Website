"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Signal Alpha', value: 87, rank: 'High' },
  { name: 'Node Beta', value: 65, rank: 'Medium' },
  { name: 'Vector Gamma', value: 92, rank: 'Critical' },
  { name: 'Pulse Delta', value: 43, rank: 'Low' },
  { name: 'Echo Epsilon', value: 78, rank: 'High' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'var(--background-panel)',
        border: '1px solid var(--border-purple)',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        color: 'var(--text-primary)'
      }}>
        <p style={{ margin: '0 0 8px', fontWeight: 'bold' }}>{payload[0].payload.name}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Signal Strength:</span>
          <span style={{ color: 'var(--accent-cyan)' }}>{payload[0].value}%</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', marginTop: '4px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Priority:</span>
          <span style={{ color: 'var(--accent-lime)' }}>{payload[0].payload.rank}</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function HypothesisRanking() {
  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="var(--accent-purple)" style={{
                filter: 'drop-shadow(0px 0px 8px var(--accent-purple-glow))'
              }} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
