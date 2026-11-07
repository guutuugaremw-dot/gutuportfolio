export type ProjectCategory = 
  | 'All' 
  | 'Web Applications' 
  | 'E-Commerce' 
  | 'Mobile & Tablet' 
  | 'Design Systems';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface DesignTokens {
  primaryColor: string;
  accentColor: string;
  typeface: string;
  gridSystem: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  takeaways?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  client: string;
  liveUrl: string;
  role: string;
  duration: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  techStack: string[];
  keyFeatures: string[];
  designTokens: DesignTokens;
  previewType: 'abenezer' | 'netflix' | 'amazon' | 'nexus' | 'aetheria' | 'vanguard' | 'pulse' | 'solaar' | 'hyperion';
  desktopPreviewTag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metricImpact: string;
  avatarText: string;
}

export interface Capability {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metricHighlight: string;
}

export interface ProcessPhase {
  number: string;
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}
