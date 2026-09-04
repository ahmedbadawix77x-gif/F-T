import React from 'react';
import { VideoSlotConfig } from '../../types';
import { VideoBackground } from '../common/VideoBackground';
import { GlassCard } from '../common/GlassCard';
import { personalInfo } from '../../data/portfolioData';
import { Sparkles, Compass, ShieldCheck, Zap, Server } from 'lucide-react';

interface AboutSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  config,
  videoOverride,
}) => {
  return (
    <section id="03-about" className="relative min-h-screen flex items-center justify-center py-24">
      <VideoBackground
        config={config}
        customVideoUrl={videoOverride?.url}
        customOpacity={videoOverride?.opacity}
        customBlur={videoOverride?.blur}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 relative z-10">
          
          {/* Section Header with Generous Negative Space */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/95 text-[10px] tracking-[0.4em] uppercase font-bold text-pink-600 shadow-[0_4px_16px_rgba(244,114,182,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Slot 03 • Skills & Architecture</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900">
              Engineering with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow font-normal">
                Mechanical Sympathy
              </span>
            </h2>
            <p className="font-cormorant text-xl sm:text-2xl text-slate-600 italic font-light tracking-wide">
              Bridging robust software architecture with relentless database performance
            </p>
          </div>

          {/* Luxury Floating Glass Panels Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Main Narrative Glass Panel (7 cols) */}
            <GlassCard
              variant="floating"
              padding="lg"
              className="md:col-span-7 flex flex-col justify-between border-white/90 rounded-[36px]"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-sky-100">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 to-sky-400 border border-white/90 flex items-center justify-center text-white shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne text-lg font-bold text-slate-900">The Engineering Ethos</h3>
                    <p className="text-xs text-slate-500 font-mono">Fatma Swailem's Architectural Focus</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                  {personalInfo.extendedBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Quote Footer inside Panel */}
              <div className="mt-8 pt-6 border-t border-sky-200/60 bg-white/60 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl">
                <p className="font-cormorant text-lg sm:text-xl text-pink-700 italic leading-relaxed">
                  {personalInfo.quote}
                </p>
                <div className="mt-2 text-right text-xs font-mono text-slate-500 tracking-wider">
                  — FATMA SWAILEM
                </div>
              </div>
            </GlassCard>

            {/* Architectural Pillars (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              
              {/* Pillar 1 */}
              <GlassCard variant="interactive" padding="md" className="border-white/90 bg-white/75">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-300/60 flex items-center justify-center text-pink-600 shrink-0 shadow-sm">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-syne text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Zero-Allocation Pipelines
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Exploiting <code className="text-pink-600 font-mono bg-pink-50 px-1.5 py-0.5 rounded border border-pink-200">Span&lt;T&gt;</code>, custom memory pooling, and minimal heap pressure for deterministic microsecond execution.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Pillar 2 */}
              <GlassCard variant="interactive" padding="md" className="border-white/90 bg-white/75">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-300/60 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                    <Server className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-syne text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Relational SQL Internals
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Deep forensics into DMV statistics, memory grant warnings, and covering indexes to replace slow table scans with laser-focused seeks.
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Pillar 3 */}
              <GlassCard variant="interactive" padding="md" className="border-white/90 bg-white/75">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-300/60 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-syne text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Idempotent Fault Tolerance
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Transactional outbox patterns, distributed saga coordinators, and resilient exponential backoff preserving data consistency.
                    </p>
                  </div>
                </div>
              </GlassCard>

            </div>

          </div>

        </div>
      </VideoBackground>
    </section>
  );
};
