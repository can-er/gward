import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer Ring */}
    <circle cx="50" cy="50" r="45" stroke="#1B3A2D" strokeWidth="2" />
    
    {/* Inner Ring */}
    <circle cx="50" cy="50" r="35" stroke="#1B3A2D" strokeWidth="2" />
    
    {/* Crosshairs */}
    <line x1="50" y1="0" x2="50" y2="10" stroke="#6B9E87" strokeWidth="2" />
    <line x1="50" y1="90" x2="50" y2="100" stroke="#6B9E87" strokeWidth="2" />
    <line x1="0" y1="50" x2="10" y2="50" stroke="#6B9E87" strokeWidth="2" />
    <line x1="90" y1="50" x2="100" y2="50" stroke="#6B9E87" strokeWidth="2" />
    
    {/* The Eye / Radar Core */}
    <circle cx="50" cy="50" r="22" fill="#1B3A2D" />
    <circle cx="50" cy="50" r="14" fill="#3D7A5F" />
    <circle cx="45" cy="45" r="4" fill="#8FC1AA" />
  </svg>
);
