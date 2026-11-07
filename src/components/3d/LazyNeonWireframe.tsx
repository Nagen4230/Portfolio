import React, { Suspense, lazy } from 'react';

const Scene = lazy(() =>
  import('./NeonWireframeScene').then((mod) => ({ default: mod.NeonWireframeScene }))
);

const StaticFallback: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="w-48 h-48 rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_12s_linear_infinite]" />
    <div className="absolute w-36 h-36 rounded-full border border-violet-400/30 animate-[spin_8s_linear_infinite_reverse]" />
    <div className="absolute w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F0FF]" />
  </div>
);

export const LazyNeonWireframe: React.FC = () => {
  return (
    <Suspense fallback={<StaticFallback />}>
      <Scene />
    </Suspense>
  );
};
