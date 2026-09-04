import React, { useEffect, useState } from 'react';

const slots = [
  { id: '01-intro', num: '01', title: 'Intro' },
  { id: '02-hero', num: '02', title: 'Hero' },
  { id: '03-about', num: '03', title: 'About' },
  { id: '04-certificates', num: '04', title: 'Certificates' },
  { id: '05-projects', num: '05', title: 'Projects' },
  { id: '06-data', num: '06', title: 'Data Engine' },
  { id: '07-contact', num: '07', title: 'Contact' },
];

export const EditorialArchitectureRail: React.FC = () => {
  const [activeSlot, setActiveSlot] = useState<string>('01-intro');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = slots.map((s) => s.id);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSlot(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="hidden xl:flex fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 select-none pointer-events-auto"
      aria-label="Editorial Architecture Index"
    >
      {/* Editorial Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] tracking-[0.4em] text-pink-500 font-black uppercase drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">
          Architecture
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-pink-400 via-sky-300 to-transparent ml-2" />
      </div>

      {/* Numbered Slot Track */}
      <div className="flex flex-col gap-3.5 text-[11px] font-mono">
        {slots.map((slot) => {
          const isActive = activeSlot === slot.id;
          return (
            <button
              key={slot.id}
              onClick={() => scrollToSection(slot.id)}
              title={`${slot.num} — ${slot.title}`}
              className="group flex items-center gap-3 text-left transition-all duration-300 cursor-pointer"
            >
              <span
                className={`transition-all duration-300 ${
                  isActive
                    ? 'text-pink-600 font-bold scale-110 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]'
                    : 'text-slate-400 group-hover:text-sky-600'
                }`}
              >
                {slot.num}
              </span>

              {/* Indicator dot or title preview on hover / active */}
              <span
                className={`text-[9px] uppercase tracking-widest transition-all duration-300 truncate max-w-0 opacity-0 group-hover:max-w-28 group-hover:opacity-100 ${
                  isActive ? 'max-w-28 opacity-100 text-pink-600 font-semibold' : 'text-slate-500'
                }`}
              >
                {slot.title}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
