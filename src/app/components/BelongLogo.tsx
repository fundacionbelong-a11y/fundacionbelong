import React from 'react';

export default function BelongLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Infinity-Heart Symbol */}
      <g transform="translate(0, 10)">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4de53" />
            <stop offset="50%" stopColor="#c0941a" />
            <stop offset="100%" stopColor="#b07908" />
          </linearGradient>
        </defs>
        {/* Infinity loop with heart */}
        <path 
          d="M40 35 C40 20, 55 15, 65 25 C75 35, 75 45, 65 55 C55 65, 40 60, 40 45 C40 30, 25 25, 15 35 C5 45, 5 55, 15 65 C25 75, 40 70, 40 55" 
          stroke="url(#goldGradient)" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M65 25 C75 15, 90 20, 90 35 C90 50, 75 55, 65 45" 
          stroke="url(#goldGradient)" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
        {/* Heart in the center */}
        <path 
          d="M50 35 C50 30, 55 28, 57 32 C59 28, 64 30, 64 35 C64 42, 57 48, 57 48 C57 48, 50 42, 50 35Z" 
          fill="url(#goldGradient)"
        />
      </g>
      {/* Belong text */}
      <text x="100" y="55" fontFamily="'Dancing Script', cursive" fontSize="42" fill="#c18e98" fontWeight="700">
        Belong
      </text>
    </svg>
  );
}
