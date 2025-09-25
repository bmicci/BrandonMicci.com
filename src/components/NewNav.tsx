'use client';

import { useState } from 'react';

export default function NewNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">BM</span>
            </div>
            <div>
              <div className="text-white font-semibold">Brandon Micci</div>
              <div className="text-xs text-white/60">AI & Digital Transformation</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#strategic-vision" className="text-white/80 hover:text-white transition-colors">
              Strategic Advantage
            </a>
            <a href="#executive-experience" className="text-white/80 hover:text-white transition-colors">
              Executive Experience
            </a>
            <a href="#transformation-leadership" className="text-white/80 hover:text-white transition-colors">
              Transformation Leadership
            </a>
            <a href="#professional-impact" className="text-white/80 hover:text-white transition-colors">
              Professional Impact
            </a>
            <a
              href="#connectwithme"
              className="bg-brand-cyan text-black px-4 py-2 rounded-lg font-medium hover:bg-brand-cyan/90 transition-colors"
            >
              Connect With Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden min-h-[44px] px-3"
            aria-controls="mobileMenu"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen((o) => !o)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-black/90 backdrop-blur
          transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'} md:static md:translate-x-0 md:hidden`}
        >
          <div className="flex flex-col h-full pt-16 px-6">
            <a href="#home" className="text-white py-3 border-b border-white/10" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#strategic-vision" className="text-white py-3 border-b border-white/10" onClick={() => setOpen(false)}>
              Strategic Advantage
            </a>
            <a href="#executive-experience" className="text-white py-3 border-b border-white/10" onClick={() => setOpen(false)}>
              Executive Experience
            </a>
            <a href="#transformation-leadership" className="text-white py-3 border-b border-white/10" onClick={() => setOpen(false)}>
              Transformation Leadership
            </a>
            <a href="#professional-impact" className="text-white py-3 border-b border-white/10" onClick={() => setOpen(false)}>
              Professional Impact
            </a>
            <a
              href="#connectwithme"
              className="bg-brand-cyan text-black px-4 py-3 rounded-lg font-medium mt-4 text-center"
              onClick={() => setOpen(false)}
            >
              Connect With Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
