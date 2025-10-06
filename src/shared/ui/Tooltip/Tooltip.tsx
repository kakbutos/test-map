import React from 'react';
import './Tooltip.css';

interface TooltipProps {
  x: number;
  y: number;
  children: React.ReactNode;
}

export function Tooltip({ x, y, children }: TooltipProps) {
  return (
    <div
      className="tooltip"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {children}
    </div>
  );
}
