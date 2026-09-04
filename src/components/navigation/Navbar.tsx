import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Database, Terminal, ArrowUpRight } from 'lucide-react';
import { GlassButton } from '../common/GlassButton';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#02-hero' },
  { label: 'About', href: '#03-about' },
  { label: 'Skills', href: '#03-skills-tech' },
  { label: 'Certificates', href: '#04-certificates' },
  { label: 'Projects', href: '#05-projects' },
  { label: 'Backend & Data', href: '#06-data' },
  { label: 'Contact', href: '#07-contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('02-hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sectionIds = ['01-intro', '02-hero', '03-about', '03-skills-tech', '04-certificates', '05-projects', '06-data', '07-contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 rounded-full px-5 sm:px-7 py-3 flex items-center justify-between ${
          scrolled
            ? 'glass-surface border-white/90 shadow-[0_15px_35px_rgba(56,189,248,0.18),0_0_25px_rgba(244,114,182,0.15)] bg-white/75'
            : 'glass-surface-subtle border-white/80 bg-white/55'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Signet */}
        <a
          href="#01-intro"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 via-pink-300 to-sky-300 border border-white/90 flex items-center justify-center text-white shadow-[0_0_15px_rgba(244,114,182,0.4)] group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-syne text-sm font-bold tracking-wider text-slate-900 group-hover:text-pink-600 transition-colors uppercase">
              Fatma Swailem
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono text-sky-700/80 -mt-0.5">
              .NET • SQL Architect
            </span>
          </div>
        </a>

        {/* Desktop Links - Editorial Aesthetic Typography */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 px-6 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative ${
                  isActive
                    ? 'text-pink-600 drop-shadow-[0_0_8px_rgba(236,72,153,0.4)] font-extrabold'
                    : 'text-slate-600 hover:text-pink-600'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA & Tech Pill */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#07-contact"
            className="hidden md:inline-flex"
          >
            <GlassButton
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Connect
            </GlassButton>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-9 h-9 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-slate-700 cursor-pointer hover:bg-white/90 hover:text-pink-600 transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed top-20 left-4 right-4 z-50 glass-surface rounded-3xl p-6 border border-white/90 shadow-[0_20px_50px_rgba(56,189,248,0.2)] bg-white/85 text-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 hover:text-pink-600 hover:bg-white/60 border border-transparent hover:border-pink-200/50 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-pink-500 opacity-70" />
              </a>
            ))}
            <div className="pt-3 border-t border-sky-100">
              <a
                href="#07-contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block"
              >
                <GlassButton variant="primary" size="md" className="w-full">
                  Initiate Discussion
                </GlassButton>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
