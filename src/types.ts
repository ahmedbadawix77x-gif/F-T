export interface VideoSlotConfig {
  id: string; // e.g. '01-intro', '02-hero', etc.
  slotNumber: string; // '01', '02', etc.
  name: string;
  targetFilename: string; // '01-intro.mp4'
  videoSrc: string | null;
  posterSrc: string | null;
  description: string;
  futureVision: string;
  themeGradient: {
    from: string;
    via: string;
    to: string;
    accent: string;
  };
  defaultOpacity: number;
  defaultBlur: number;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  tag: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
  architecturalRole: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  skills: string[];
  verificationUrl: string;
  badgeType: 'Microsoft' | 'Data' | 'Cloud' | 'Architecture';
  scoreOrHonor?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Backend Architecture' | 'Data Engineering' | 'Distributed Systems' | 'High-Load SQL';
  overview: string;
  architectureDetails: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  benchmarkComparison?: {
    metric: string;
    previous: string;
    optimized: string;
  };
  sqlHighlights?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export interface PipelineNode {
  id: string;
  step: string;
  title: string;
  tech: string;
  description: string;
  latency: string;
  throughput: string;
}
