import React from 'react';
import { Project } from '../../types';
import { X, Cpu, Database, GitBranch, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { GlassButton } from '../common/GlassButton';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-sky-950/20 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/95 shadow-[0_25px_60px_rgba(56,189,248,0.22),0_0_50px_rgba(244,114,182,0.2)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-sky-100 flex items-start justify-between bg-white/50">
          <div className="space-y-1.5 pr-6">
            <span className="text-xs font-mono uppercase tracking-widest text-pink-600 font-bold">
              {project.category}
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold text-slate-900">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-mono">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-pink-50 hover:bg-pink-100 border border-pink-200 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-colors cursor-pointer shrink-0 shadow-sm"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              System Purpose & Impact
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Performance Benchmark Callout */}
          {project.benchmarkComparison && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-50 via-sky-50 to-purple-50 border border-pink-200/60 flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-pink-600 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Benchmark Optimization Result
                </span>
                <div className="text-xs text-slate-700">
                  {project.benchmarkComparison.metric}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 line-through font-mono">
                  {project.benchmarkComparison.previous}
                </div>
                <div className="text-sm sm:text-base font-bold text-emerald-700 font-mono">
                  {project.benchmarkComparison.optimized}
                </div>
              </div>
            </div>
          )}

          {/* Architecture Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-600" />
              Core Architecture & Design Patterns
            </h4>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/80 border border-sky-200/50 text-xs sm:text-sm text-slate-700 flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SQL Specific Highlights */}
          {project.sqlHighlights && project.sqlHighlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold flex items-center gap-2">
                <Database className="w-4 h-4 text-pink-600" />
                Database Engine & Query Tuning Details
              </h4>
              <ul className="space-y-2">
                {project.sqlHighlights.map((sql, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-xl bg-sky-50/70 border border-sky-200/50 text-xs font-mono text-slate-800"
                  >
                    • {sql}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/90 border border-sky-200/60 text-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-sky-100 bg-white/60 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {project.metrics.map(m => `${m.label}: ${m.value}`).join(' • ')}
          </span>
          <GlassButton variant="primary" size="sm" onClick={onClose}>
            Done Reviewing
          </GlassButton>
        </div>
      </div>
    </div>
  );
};
