import React from 'react';
import { VideoSlotConfig } from '../../types';
import { VideoBackground } from '../common/VideoBackground';
import { GlassCard } from '../common/GlassCard';
import { GlassButton } from '../common/GlassButton';
import { personalInfo } from '../../data/portfolioData';
import { Database, Terminal, Cpu, ArrowRight, FileCode2, Sparkles, Layers } from 'lucide-react';
import portraitImg from '../../assets/images/fatma_swailem_portrait_1788526507463.jpg';

interface HeroSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  videoOverride,
}) => {
  return (
    <section id="02-hero" className="relative min-h-screen flex items-center justify-center py-24 lg:py-0">
      <VideoBackground
        config={config}
        customVideoUrl={videoOverride?.url}
        customOpacity={videoOverride?.opacity}
        customBlur={videoOverride?.blur}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24 relative z-10">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & Interactive Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Architecture Slot Tag - Editorial Aesthetic */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/95 text-[10px] tracking-[0.4em] uppercase font-bold text-pink-600 shadow-[0_4px_16px_rgba(244,114,182,0.2)]">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span>Slot 02 • High-Velocity Core Engine</span>
              </div>

              {/* Title & Role - Editorial Serif with Gradient */}
              <div className="space-y-3">
                <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-slate-900 leading-[1.05]">
                  Architecting <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow font-normal">
                    High-Velocity
                  </span>{' '}
                  Data & Backends
                </h2>
                <p className="font-cormorant text-2xl sm:text-3xl text-pink-600/90 font-light italic tracking-wide">
                  Engineered with Mathematical Precision by Fatma Swailem
                </p>
              </div>

              {/* Short Bio Glass Card */}
              <GlassCard variant="surface" padding="md" className="max-w-2xl border-white/90 rounded-[32px]">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                  {personalInfo.shortBio}
                </p>
                <div className="mt-4 pt-4 border-t border-sky-200/60 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                  <span className="flex items-center gap-1.5 text-pink-600 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    C# 13 & .NET 9
                  </span>
                  <span className="text-sky-300">•</span>
                  <span className="flex items-center gap-1.5 text-sky-600 font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    SQL Server Internals
                  </span>
                  <span className="text-sky-300">•</span>
                  <span className="flex items-center gap-1.5 text-purple-600 font-semibold">
                    <Cpu className="w-3.5 h-3.5" />
                    Distributed Pipelines
                  </span>
                </div>
              </GlassCard>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#05-projects">
                  <GlassButton
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Explore Flagship Projects
                  </GlassButton>
                </a>
                <a href="#06-data">
                  <GlassButton
                    variant="secondary"
                    size="lg"
                    icon={<Layers className="w-4 h-4 text-sky-600" />}
                  >
                    Data Architecture
                  </GlassButton>
                </a>
              </div>

              {/* Real-time System Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-xl">
                <div className="p-3.5 rounded-[24px] glass-surface-subtle border-white/90 text-center">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900">180K+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-mono">Events / Sec</div>
                </div>
                <div className="p-3.5 rounded-[24px] glass-surface-subtle border-white/90 text-center">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-pink-600">&lt; 12ms</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-mono">p99 Latency</div>
                </div>
                <div className="p-3.5 rounded-[24px] glass-surface-subtle border-white/90 text-center">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-sky-600">99.99%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-mono">Reliability</div>
                </div>
              </div>
            </div>

            {/* Right Column: Fatma's Portrait (Separate Foreground Layer) (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              {/* Outer Ethereal Holographic Halo */}
              <div
                className="absolute -inset-6 rounded-[64px] blur-3xl opacity-40 -z-10 animate-pulse-glow pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, rgba(56, 189, 248, 0.35) 50%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              {/* Luxury Editorial Glass Frame for Portrait (Sculpted rounded curve with subtle tilt) */}
              <div className="relative w-full max-w-md rounded-[52px] sm:rounded-[68px] p-3.5 sm:p-4 glass-surface border border-white/95 shadow-[0_25px_60px_-15px_rgba(56,189,248,0.22),0_0_35px_rgba(244,114,182,0.18)] -rotate-1 hover:rotate-0 transition-transform duration-500 group">
                
                {/* Image Container with Smooth Rounded Corners & Corner Highlights */}
                <div className="relative aspect-[3/4] w-full rounded-[42px] sm:rounded-[56px] overflow-hidden bg-sky-50">
                  <img
                    src={portraitImg}
                    alt="Fatma Swailem — Backend Developer & Data Engineer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Lighting Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20 pointer-events-none" />

                  {/* Top Glass Badge on Portrait */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full glass-pill text-[10px] tracking-wider uppercase font-mono text-slate-800 border border-white/90 backdrop-blur-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-pink-500" />
                      Lead Architect
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-800 border border-emerald-400/50 text-[10px] font-mono flex items-center gap-1 backdrop-blur-md font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available
                    </span>
                  </div>

                  {/* Bottom Caption on Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[28px] glass-surface border border-white/90 backdrop-blur-xl pointer-events-none">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-editorial text-base font-bold text-slate-900 tracking-wide">
                          Fatma Swailem
                        </div>
                        <div className="text-[10px] text-pink-600 font-mono tracking-wider uppercase">
                          Backend & Data Systems
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-pink-600 shadow-sm">
                        <Terminal className="w-3.5 h-3.5 text-pink-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Satellite Tag (Top Right) */}
                <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-surface border border-white/95 shadow-lg text-xs font-mono text-slate-800 animate-float-slow">
                  <Database className="w-4 h-4 text-sky-600" />
                  <span>SQL Tuning: Top 1%</span>
                </div>

                {/* Floating Glass Satellite Tag (Bottom Left) */}
                <div
                  className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-surface border border-white/95 shadow-lg text-xs font-mono text-slate-800 animate-float-slow"
                  style={{ animationDelay: '-3s' }}
                >
                  <Cpu className="w-4 h-4 text-pink-500" />
                  <span>.NET 9 Clean Architecture</span>
                </div>
              </div>

              {/* Active Video Layer Telemetry Card (Editorial Aesthetic Pattern) */}
              <div className="mt-6 w-full max-w-md p-4 bg-white/75 backdrop-blur-2xl border border-white/90 rounded-[28px] shadow-lg relative overflow-hidden group">
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-pink-400/20 blur-2xl rounded-full pointer-events-none" />
                <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-pink-600 font-bold mb-1">
                  <span>Active Layer</span>
                  <span className="font-mono text-emerald-700 font-semibold">Slot 02 Ingress</span>
                </div>
                <div className="text-xs font-mono font-medium text-slate-800">
                  02 — HERO_STATE.MP4
                </div>
                <div className="mt-3 h-[3px] w-full bg-sky-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-sky-400 via-pink-400 to-rose-400 shadow-[0_0_10px_rgba(244,114,182,0.8)] animate-pulse" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </VideoBackground>
    </section>
  );
};
