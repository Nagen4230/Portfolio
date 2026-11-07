import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsMatrixSection } from '../components/sections/SkillsOrbitSection';
import { ProjectsCarouselSection } from '../components/sections/ProjectsCarouselSection';
import { JourneyTimelineSection } from '../components/sections/JourneyTimelineSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ProjectItem } from '../data/content';

interface HomePageProps {
  onOpenAI: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAI, onSelectProject }) => {
  return (
    <main id="main-content" className="relative w-full">
      <HeroSection onOpenAI={onOpenAI} />
      <AboutSection />
      <SkillsMatrixSection />
      <ProjectsCarouselSection onSelectProject={onSelectProject} />
      <JourneyTimelineSection />
      <ContactSection />
    </main>
  );
};
