import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`font-medium py-2 px-6 rounded-lg transition-all bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
}