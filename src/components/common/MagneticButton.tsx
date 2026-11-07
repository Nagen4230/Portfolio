import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  'data-cursor'?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  download,
  target,
  rel,
  'data-cursor': dataCursor,
  ...props
}) => {
  const magneticRef = useMagnetic<HTMLButtonElement | HTMLAnchorElement>(strength);

  const baseStyles = "relative inline-flex items-center justify-center font-mono text-sm tracking-wide transition-all duration-300 rounded-full px-6 py-3 cursor-pointer select-none group overflow-hidden";
  
  const variantStyles = {
    primary: "bg-cyan-500/10 text-cyan-300 border border-cyan-400/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95",
    secondary: "bg-violet-500/10 text-violet-300 border border-violet-400/40 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95",
    ghost: "bg-transparent text-slate-300 border border-white/10 hover:border-white/30 hover:bg-white/5 active:scale-95",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a
        ref={magneticRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClasses}
        data-cursor={dataCursor}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-transparent transition-transform duration-500 ease-out pointer-events-none" />
      </a>
    );
  }

  return (
    <button
      ref={magneticRef as React.RefObject<HTMLButtonElement>}
      className={combinedClasses}
      data-cursor={dataCursor}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-transparent transition-transform duration-500 ease-out pointer-events-none" />
    </button>
  );
};
