import React from 'react';

interface InputProps {
  placeholder?: string;
}

export function Input({ placeholder = '', }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
