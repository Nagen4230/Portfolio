import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const ringPosRef = useRef({ x: -100, y: -100 });
  const ringElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable for fine-pointer desktop devices (no touch screens)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (hasFinePointer && !reducedMotion) {
      setEnabled(true);
    } else {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect cursor context
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveElement = target.closest('[data-cursor]');
        if (interactiveElement) {
          const mode = interactiveElement.getAttribute('data-cursor');
          setCursorText(mode || '');
          setIsHovered(true);
        } else if (target.closest('a, button, input, textarea, [role="button"]')) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth lerp for trailing ring
    let animationFrame: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      ringPosRef.current.x = lerp(ringPosRef.current.x, position.x, 0.15);
      ringPosRef.current.y = lerp(ringPosRef.current.y, position.y, 0.15);

      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, [position.x, position.y]);

  if (!enabled) return null;

  return (
    <>
      {/* Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.6 : isHovered ? 1.5 : 1
          })`,
        }}
      />

      {/* Trailing Ring */}
      <div
        ref={ringElRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center transition-[width,height,background-color,border-color] duration-200 ${
          cursorText
            ? 'w-16 h-16 bg-cyan-400/10 border border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] backdrop-blur-[1px]'
            : isHovered
            ? 'w-12 h-12 bg-violet-500/10 border border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.3)]'
            : 'w-8 h-8 border border-white/20'
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-300 uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
