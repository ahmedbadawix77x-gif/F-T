import React from 'react';
import { Sparkles, ArrowUp, Heart, Terminal } from 'lucide-react';
import { GlassButton } from '../common/GlassButton';

export const EndingSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 sm:px-8 border-t border-white/10 overflow-hidden bg-gradient-to-b from-transparent to-[#070810]">
      {/* Background Soft Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, #ff69b4 0%, #38bdf8 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center space-y-8 z-10">
        
        {/* Butterfly Icon & Name Monogram */}
        <div className="w-12 h-12 rounded-full glass-surface border border-white/30 flex items-center justify-center text-pink-300 shadow-[0_0_25px_rgba(255,105,180,0.3)]">
          <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
        </div>

        <div className="space-y-2">
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            FATMA SWAILEM
          </h2>
          <p className="font-cormorant text-xl text-white/70 italic">
            Backend Developer • Data Engineer • C# & .NET • SQL
          </p>
        </div>

        {/* Cinematic Creative Direction Tag */}
        <div className="p-4 max-w-lg rounded-2xl glass-surface-subtle border-white/15 text-xs text-white/70 space-y-1">
          <div className="font-mono text-pink-300 font-semibold uppercase tracking-wider text-[10px]">
            Cinematic Architecture Foundation
          </div>
          <p className="leading-relaxed">
            Dreamy Sky × Luxury Glass × Barbie-inspired Pink × Futuristic Technology
          </p>
          <p className="text-[11px] text-white/40 pt-1 font-mono">
            Prepared for 7-Layer Video Background Composition
          </p>
        </div>

        {/* Back to Top */}
        <div>
          <GlassButton
            variant="secondary"
            size="sm"
            onClick={scrollToTop}
            icon={<ArrowUp className="w-3.5 h-3.5" />}
          >
            Return to Horizon
          </GlassButton>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
          <div>
            © {new Date().getFullYear()} Fatma Swailem. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with .NET Precision</span>
            <span>•</span>
            <span className="text-pink-300">Glass Layer System</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
