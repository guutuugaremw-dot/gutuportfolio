import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { InteractiveDeviceSandbox } from './components/InteractiveDeviceSandbox';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectPlannerSection } from './components/ProjectPlannerSection';
import { CredentialsSection } from './components/CredentialsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('gutu-theme');
        if (stored) return stored === 'dark';
      } catch {
        // Fallback if localStorage access is denied
      }
    }
    return true; // default futuristic dark
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sandboxProjectId, setSandboxProjectId] = useState<string>(PROJECTS[0]?.id || 'abenezer-bed-room');

  // Sync dark class on html document
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('gutu-theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('gutu-theme', 'light');
      }
    } catch {
      // Ignored for restrictive sandboxes
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleOpenPlanner = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviewInSandbox = (projectId: string) => {
    setSandboxProjectId(projectId);
    const el = document.getElementById('sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenPlanner={handleOpenPlanner}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section with 2-column split and full-width metric strip */}
        <Hero
          onOpenPlanner={handleOpenPlanner}
          onExploreProjects={handleExploreProjects}
        />

        {/* Selected Works Bento Grid */}
        <ProjectGallery
          projects={PROJECTS}
          onSelectProject={setSelectedProject}
          onPreviewInSandbox={handlePreviewInSandbox}
        />

        {/* Interactive Responsive Device Preview Sandbox */}
        <InteractiveDeviceSandbox
          projects={PROJECTS}
          activeProjectId={sandboxProjectId}
          onSelectProject={setSandboxProjectId}
          onOpenCaseStudy={setSelectedProject}
        />

        {/* Core Capabilities */}
        <CapabilitiesSection />

        {/* Structured 4-Phase Process */}
        <ProcessSection />

        {/* Client Endorsements & Proof */}
        <TestimonialsSection />

        {/* Credentials & Experience Timeline */}
        <CredentialsSection />

        {/* Interactive Project Inquiry & Planner */}
        <ProjectPlannerSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
