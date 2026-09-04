import React, { useState } from 'react';
import { videoSlotsData } from './data/portfolioData';
import { Navbar } from './components/navigation/Navbar';
import { EditorialArchitectureRail } from './components/navigation/EditorialArchitectureRail';
import { ButterflyParticles } from './components/common/ButterflyParticles';
import { VideoArchitectureDrawer } from './components/common/VideoArchitectureDrawer';

// Sections
import { IntroSection } from './components/sections/IntroSection';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { BackendDataSection } from './components/sections/BackendDataSection';
import { ContactSection } from './components/sections/ContactSection';
import { EndingSection } from './components/sections/EndingSection';

export default function App() {
  // State for video layer overrides (custom test URLs, opacity, blur)
  const [videoOverrides, setVideoOverrides] = useState<
    Record<string, { url: string; opacity: number; blur: number }>
  >({});

  const handleUpdateOverride = (
    slotId: string,
    values: { url?: string; opacity?: number; blur?: number }
  ) => {
    setVideoOverrides((prev) => {
      const current = prev[slotId] || {
        url: '',
        opacity: videoSlotsData[slotId]?.defaultOpacity ?? 0.8,
        blur: videoSlotsData[slotId]?.defaultBlur ?? 0,
      };
      return {
        ...prev,
        [slotId]: {
          ...current,
          ...values,
        },
      };
    });
  };

  const handleResetSlot = (slotId: string) => {
    setVideoOverrides((prev) => {
      const copy = { ...prev };
      delete copy[slotId];
      return copy;
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#fdf2f8] to-[#e0f2fe] text-slate-800 selection:bg-pink-400/30 selection:text-pink-900">
      {/* 1. Global Ambient Floating Butterfly Layer */}
      <ButterflyParticles density="medium" />

      {/* 2. Floating Luxury Glass Navigation Bar */}
      <Navbar />

      {/* 2b. Editorial Architecture Index Rail (Left-aligned numbered track) */}
      <EditorialArchitectureRail />

      {/* 3. Main Sequential Cinematic Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* 01 — Cinematic Intro Placeholder (01-intro.mp4) */}
        <IntroSection
          config={videoSlotsData['01-intro']}
          videoOverride={videoOverrides['01-intro']}
        />

        {/* 02 — Hero Section with Foreground Portrait & Badges (02-hero.mp4) */}
        <HeroSection
          config={videoSlotsData['02-hero']}
          videoOverride={videoOverrides['02-hero']}
        />

        {/* 03 — Glass-based About Section (03-skills.mp4) */}
        <AboutSection
          config={videoSlotsData['03-skills']}
          videoOverride={videoOverrides['03-skills']}
        />

        {/* Technical Skills Competency Breakdown */}
        <SkillsSection />

        {/* 04 — Certificates Floating Relics (04-certificates.mp4) */}
        <CertificatesSection
          config={videoSlotsData['04-certificates']}
          videoOverride={videoOverrides['04-certificates']}
        />

        {/* 05 — Immersive Projects Showcase (05-projects.mp4) */}
        <ProjectsSection
          config={videoSlotsData['05-projects']}
          videoOverride={videoOverrides['05-projects']}
        />

        {/* 06 — Backend & Data Engineering Interactive Lab (06-data.mp4) */}
        <BackendDataSection
          config={videoSlotsData['06-data']}
          videoOverride={videoOverrides['06-data']}
        />

        {/* 07 — Minimal Glass Contact (07-contact.mp4) */}
        <ContactSection
          config={videoSlotsData['07-contact']}
          videoOverride={videoOverrides['07-contact']}
        />

        {/* 09 — Cinematic Ending */}
        <EndingSection />
      </main>

      {/* 4. Video Architecture Inspector Drawer (01 - 07) */}
      <VideoArchitectureDrawer
        videoOverrides={videoOverrides}
        onUpdateOverride={handleUpdateOverride}
        onResetSlot={handleResetSlot}
      />
    </div>
  );
}
