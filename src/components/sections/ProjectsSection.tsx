import React, { useState } from 'react';
import { VideoSlotConfig, Project } from '../../types';
import { projectsData } from '../../data/portfolioData';
import { VideoBackground } from '../common/VideoBackground';
import { GlassCard } from '../common/GlassCard';
import { GlassButton } from '../common/GlassButton';
import { ProjectDetailsModal } from '../modals/ProjectDetailsModal';
import { Sparkles, ArrowUpRight, Activity, Terminal, Database, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  config: VideoSlotConfig;
  videoOverride?: { url: string; opacity: number; blur: number };
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  config,
  videoOverride,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="05-projects" className="relative min-h-screen flex items-center justify-center py-24">
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
              <span>Slot 05 • Flagship Projects</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900">
              Selected{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-pink-500 to-rose-500 editorial-title-shadow font-normal">
                Engineering Projects
              </span>
            </h2>
            <p className="font-cormorant text-xl sm:text-2xl text-slate-600 italic font-light tracking-wide">
              High-concurrency systems, low-latency APIs, and automated data pipelines
            </p>
          </div>

          {/* Transparent Glass Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {projectsData.map((project) => (
              <GlassCard
                key={project.id}
                variant="interactive"
                padding="lg"
                className="group border-white/90 bg-white/75 flex flex-col justify-between rounded-[36px]"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-sky-100 mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-sky-600 uppercase font-bold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-pink-100 text-pink-700 border border-pink-300 flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3 h-3 text-pink-500" /> Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-syne text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Tagline / Core Impact */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light mb-6">
                    {project.tagline}
                  </p>

                  {/* High-Impact Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2.5 py-3 px-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/60 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-base sm:text-lg font-bold font-mono text-slate-900 group-hover:text-sky-600 transition-colors">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-slate-700 bg-white/80 border border-sky-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 bg-white/50 border border-slate-200">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 group-hover:text-slate-700 transition-colors">
                    Click to view complete architecture
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-pink-600 group-hover:translate-x-1 transition-transform">
                    <span>Architecture Deep-Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </VideoBackground>

      {/* Interactive Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
