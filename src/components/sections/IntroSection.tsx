import React from 'react';
import { VideoSlotConfig } from '../../types';
import { VideoBackground } from '../common/VideoBackground';
import { GlassButton } from '../common/GlassButton';
import { ChevronDown, Sparkles, Binary } from 'lucide-react';

interface IntroSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const IntroSection: React.FC<IntroSectionProps> = ({
  config,
  videoOverride,
}) => {
  return (
    <section id="01-intro" className="relative min-h-screen flex items-center justify-center">
      <VideoBackground
        config={config}
        customVideoUrl={videoOverride?.url}
        customOpacity={videoOverride?.opacity}
        customBlur={videoOverride?.blur}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="relative w-full max-w-5xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center text-center justify-center min-h-screen">
          {/* Editorial Aesthetic Eyebrow Pill */}
          <div className="mb-6 inline-block px-5 py-1.5 bg-white/80 backdrop-blur-xl border border-white/95 rounded-full text-[10px] tracking-[0.5em] uppercase font-bold text-pink-600 shadow-[0_4px_20px_rgba(244,114,182,0.25)] animate-pulse-glow">
            Backend Developer | Data Engineer
          </div>

          {/* Central Typographic Monument - Editorial Serif with Gradient */}
          <div className="relative my-2 space-y-4 max-w-5xl">
            {/* Ambient Backlight Halo behind Name */}
            <div
              className="absolute -inset-10 -z-10 rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, #f472b6 0%, #38bdf8 50%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <h1 className="font-editorial text-6xl sm:text-8xl md:text-9xl lg:text-[110px] leading-none font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow uppercase">
              FATMA SWAILEM
            </h1>

            {/* Editorial Luxury Subtitle */}
            <p className="pt-2 text-base sm:text-xl font-light tracking-[0.2em] text-slate-700 uppercase italic font-cormorant max-w-2xl mx-auto">
              Architecting High-Velocity Digital & Data Worlds
            </p>

            {/* Subtle Slot Indicator Pill */}
            <div className="pt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
              <span className="text-pink-600 font-semibold">Slot 01</span>
              <span>•</span>
              <span className="tracking-wider uppercase text-[10px]">Cinematic Butterfly Trail (01-intro.mp4)</span>
            </div>
          </div>

          {/* Enter / Scroll Indicator */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4">
            <a href="#02-hero">
              <GlassButton
                variant="primary"
                size="lg"
                icon={<ChevronDown className="w-4 h-4 animate-bounce" />}
                iconPosition="right"
              >
                Enter Portfolio
              </GlassButton>
            </a>
            <span className="text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase">
              Scroll to explore the cinematic journey
            </span>
          </div>

          {/* Bottom Editorial Metadata Strip */}
          <div className="mt-14 sm:mt-20 pt-6 border-t border-sky-200/70 w-full max-w-3xl flex flex-wrap items-center justify-around gap-6 text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-pink-600 font-extrabold">Tech Stack</span>
              <span className="text-sky-800 font-mono tracking-wider">C# • .NET 9 • SQL Server • Kafka</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-pink-600 font-extrabold">Design System</span>
              <span className="text-sky-800 font-mono tracking-wider">Editorial Aesthetic • Glass v2.0</span>
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-pink-600 font-extrabold">Core Engine</span>
              <span className="text-sky-800 font-mono tracking-wider">Sub-12ms p99 Latency</span>
            </div>
          </div>
        </div>
      </VideoBackground>
    </section>
  );
};
