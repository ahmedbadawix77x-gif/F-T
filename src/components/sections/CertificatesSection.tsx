import React from 'react';
import { VideoSlotConfig, Certificate } from '../../types';
import { certificatesData } from '../../data/portfolioData';
import { VideoBackground } from '../common/VideoBackground';
import { GlassCard } from '../common/GlassCard';
import { Award, CheckCircle2, ExternalLink, Sparkles, Shield, BookmarkCheck } from 'lucide-react';

interface CertificatesSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  config,
  videoOverride,
}) => {
  return (
    <section id="04-certificates" className="relative min-h-screen flex items-center justify-center py-24">
      <VideoBackground
        config={config}
        customVideoUrl={videoOverride?.url}
        customOpacity={videoOverride?.opacity}
        customBlur={videoOverride?.blur}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/95 text-[10px] tracking-[0.4em] uppercase font-bold text-pink-600 shadow-[0_4px_16px_rgba(244,114,182,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Slot 04 • Credentials & Accreditations</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900">
              Verified Credentials &{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow font-normal">
                Certifications
              </span>
            </h2>
            <p className="font-cormorant text-xl sm:text-2xl text-slate-600 italic font-light tracking-wide">
              Formal industry accreditations in enterprise cloud data and high-performance databases
            </p>
          </div>

          {/* Floating Glass Relics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {certificatesData.map((cert) => (
              <GlassCard
                key={cert.id}
                variant="interactive"
                padding="lg"
                className="group border-white/90 bg-white/75 flex flex-col justify-between rounded-[36px]"
              >
                <div>
                  {/* Top Bar with Seal & Badge */}
                  <div className="flex items-start justify-between pb-4 border-b border-sky-100 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-400 via-pink-300 to-sky-300 border border-white/90 flex items-center justify-center text-white shadow-sm group-hover:rotate-6 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-pink-600 uppercase block font-bold">
                          {cert.issuer}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-mono text-slate-500">Issued {cert.issueDate}</span>
                          {cert.scoreOrHonor && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold">
                              {cert.scoreOrHonor}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-slate-400 group-hover:text-pink-600 group-hover:border-pink-300 transition-colors shadow-sm">
                      <BookmarkCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-syne text-lg sm:text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-700 bg-white/80 border border-sky-200/60 group-hover:border-pink-300/60 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Credential ID & Verify Link */}
                <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <Shield className="w-3.5 h-3.5 text-sky-600" />
                    <span className="truncate max-w-[170px] sm:max-w-none">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </VideoBackground>
    </section>
  );
};
