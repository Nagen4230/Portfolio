import React, { useState, useEffect } from 'react';
import { Bot, FileDown, Menu, X } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

interface NavbarProps {
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Badge */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Nagendran Murugan Homepage"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-obsidian-900 to-neutral-900 border border-crimson-600/50 flex items-center justify-center font-mono font-bold text-sm text-white group-hover:border-crimson-500 group-hover:shadow-[0_0_18px_rgba(220,38,38,0.5)] transition duration-300">
            <span className="text-crimson-500 font-extrabold group-hover:text-crimson-400">N</span>
            <span className="text-gold-400">M</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-crimson-600 animate-ping" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-white text-sm sm:text-base group-hover:text-crimson-400 transition">
              {RESUME_DATA.candidate.name}
            </span>
            <p className="text-[10px] font-mono text-neutral-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              UM Software Engineering
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase font-mono tracking-wider text-neutral-300 hover:text-crimson-400 transition relative py-1 hover:border-b-2 hover:border-crimson-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* AI Career Assistant Button */}
          <button
            onClick={onOpenAI}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-obsidian-900 hover:bg-neutral-800 text-gold-400 border border-gold-500/40 hover:border-gold-400 transition shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          >
            <Bot className="w-4 h-4 text-gold-400 animate-pulse" />
            <span>Chat with AI</span>
          </button>

          {/* Resume Download CTA */}
          <a
            href={RESUME_DATA.candidate.resumeUrl}
            download="Nagendran_Murugan_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-crimson-600 hover:bg-crimson-500 text-white border border-crimson-500 shadow-[0_0_18px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAI}
            className="p-2 rounded-lg bg-obsidian-900 border border-gold-500/40 text-gold-400"
            aria-label="Open AI Assistant"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-950/98 border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-neutral-300 hover:text-crimson-400 transition py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={RESUME_DATA.candidate.resumeUrl}
              download="Nagendran_Murugan_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-crimson-600 text-white"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
