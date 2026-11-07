import React from 'react';

export const FilmGrainOverlay: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 film-grain opacity-40 mix-blend-screen" 
      aria-hidden="true"
    />
  );
};
