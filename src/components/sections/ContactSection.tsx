import React, { useState } from 'react';
import { VideoSlotConfig } from '../../types';
import { personalInfo } from '../../data/portfolioData';
import { VideoBackground } from '../common/VideoBackground';
import { GlassCard } from '../common/GlassCard';
import { GlassButton } from '../common/GlassButton';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface ContactSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  videoOverride,
}) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Backend Architecture',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="07-contact" className="relative min-h-screen flex items-center justify-center py-24">
      <VideoBackground
        config={config}
        customVideoUrl={videoOverride?.url}
        customOpacity={videoOverride?.opacity}
        customBlur={videoOverride?.blur}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/95 text-[10px] tracking-[0.4em] uppercase font-bold text-pink-600 shadow-[0_4px_16px_rgba(244,114,182,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Slot 07 • Initiate Collaboration</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900">
              Initiate{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow font-normal">
                Collaboration
              </span>
            </h2>
            <p className="font-cormorant text-xl sm:text-2xl text-slate-600 italic font-light tracking-wide">
              Available for mission-critical backend systems, data pipeline design, and high-scale consultations
            </p>
          </div>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Info & Socials (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <GlassCard variant="surface" padding="lg" className="border-white/90 bg-white/80 shadow-md space-y-6">
                <div>
                  <h3 className="font-syne text-xl font-bold text-slate-900 mb-2">
                    Let's Build Resilient Systems
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Whether you are architecting a new C# .NET 9 microservices cluster or optimizing a high-load SQL Server database, feel free to reach out directly.
                  </p>
                </div>

                {/* Email Direct Copy Capsule */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/60 space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                    Direct Email
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs sm:text-sm text-slate-800 font-bold truncate">
                      {personalInfo.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl bg-white hover:bg-pink-50 border border-sky-200 text-slate-700 hover:text-pink-600 transition-all cursor-pointer shrink-0 shadow-sm"
                      title="Copy Email Address"
                      aria-label="Copy Email Address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <div className="text-[11px] font-mono text-emerald-700 font-semibold">
                      ✓ Email copied to clipboard!
                    </div>
                  )}
                </div>

                {/* Availability & Location */}
                <div className="space-y-3 pt-2 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-pink-600 shrink-0" />
                    <span>{personalInfo.status}</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-sky-100 flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/90 border border-sky-200/70 text-xs font-mono text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-pink-500" />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/90 border border-sky-200/70 text-xs font-mono text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Github className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold">GitHub</span>
                  </a>
                </div>
              </GlassCard>
            </div>

            {/* Right Column: Minimal Transparent Glass Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <GlassCard variant="surface" padding="lg" className="border-white/90 bg-white/80 shadow-md">
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 mx-auto flex items-center justify-center text-emerald-600 shadow-[0_4px_16px_rgba(52,211,153,0.25)]">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <h4 className="font-syne text-2xl font-bold text-slate-900">
                      Message Received
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Fatma will review your project requirements and respond promptly.
                    </p>
                    <div className="pt-4">
                      <GlassButton
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', topic: 'Backend Architecture', message: '' });
                        }}
                      >
                        Send Another Message
                      </GlassButton>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-slate-700 font-semibold block mb-1.5 uppercase tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/90 border border-sky-200/70 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-colors shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-700 font-semibold block mb-1.5 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/90 border border-sky-200/70 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-colors shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-700 font-semibold block mb-1.5 uppercase tracking-wider">
                        Discussion Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-sky-200/70 text-sm text-slate-800 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-colors cursor-pointer shadow-sm"
                      >
                        <option value="Backend Architecture">.NET 9 Backend Architecture</option>
                        <option value="SQL Optimization">SQL Server / Query Performance Tuning</option>
                        <option value="Data Pipeline">Distributed Data Pipeline & Kafka</option>
                        <option value="Full-time Engineering">Full-time Engineering Role</option>
                        <option value="General Inquiry">General Technical Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-700 font-semibold block mb-1.5 uppercase tracking-wider">
                        Message / Project Scope
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell Fatma about your application scale, database workload, or engineering challenge..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/90 border border-sky-200/70 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-colors resize-none shadow-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <GlassButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        icon={<Send className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Send Direct Inquiry
                      </GlassButton>
                    </div>
                  </form>
                )}
              </GlassCard>
            </div>

          </div>

        </div>
      </VideoBackground>
    </section>
  );
};
