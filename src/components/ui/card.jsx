import React from 'react';

export function Card({ className, children, ...props }) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
} 