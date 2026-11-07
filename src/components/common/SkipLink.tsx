import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/50 outline-none"
    >
      Skip to main content
    </a>
  );
};
