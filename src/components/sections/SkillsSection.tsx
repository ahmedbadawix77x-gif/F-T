import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { Server, Database, Workflow, Cloud, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-pink-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-500" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-purple-500" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-500" />;
      default:
        return <Cpu className="w-5 h-5 text-pink-500" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="03-skills-tech" className="relative py-20 px-6 sm:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-slate-700 border border-white/90">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>Technical Competency Matrix</span>
        </div>
        <h3 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Backend & Data Engineering Stack
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-light">
          Deep specialization in the Microsoft .NET ecosystem, high-throughput SQL architecture, and cloud data warehousing.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-pink-500 via-pink-400 to-sky-400 border border-white/90 text-white shadow-[0_4px_16px_rgba(244,114,182,0.3)]'
                : 'bg-white/70 border border-white/85 text-slate-600 hover:text-pink-600 hover:bg-white/90'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-pink-500 via-pink-400 to-sky-400 border border-white/90 text-white shadow-[0_4px_16px_rgba(244,114,182,0.3)]'
                  : 'bg-white/70 border border-white/85 text-slate-600 hover:text-pink-600 hover:bg-white/90'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filteredCategories.map((category) => (
          <GlassCard
            key={category.id}
            variant="surface"
            padding="lg"
            className="border-white/90 bg-white/75 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/80 border border-white/90 flex items-center justify-center shadow-sm">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h4 className="font-syne text-lg font-bold text-slate-900 tracking-wide">
                      {category.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">{category.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Architectural Role Description */}
              <p className="text-xs text-pink-700 mb-5 italic bg-pink-50/70 p-3 rounded-xl border border-pink-200/50 font-medium">
                "{category.architecturalRole}"
              </p>

              {/* Skill Bars & Tags */}
              <div className="space-y-3.5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-800 flex items-center gap-1.5">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        )}
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/80 text-slate-600 border border-sky-200/60">
                          {skill.tag}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="h-1.5 w-full rounded-full bg-sky-100/80 overflow-hidden p-[1px] border border-sky-200/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-sky-400 transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Production Tested</span>
              <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Production Grade
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

    </section>
  );
};
