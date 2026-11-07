import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ParticleCanvas } from './components/common/ParticleCanvas';
import { AIAssistantDrawer } from './components/common/AIAssistantDrawer';
import { ProjectModal } from './components/common/ProjectModal';
import { SkipLink } from './components/common/SkipLink';
import { ProjectItem } from './data/content';

export const App: React.FC = () => {
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <BrowserRouter>
      {/* Accessibility Skip Link */}
      <SkipLink />

      {/* Floating Animated Grid Particles Canvas (WebGL / 2D Canvas) */}
      <ParticleCanvas />

      {/* AI Career Assistant Drawer */}
      <AIAssistantDrawer
        isOpen={aiDrawerOpen}
        onClose={() => setAiDrawerOpen(false)}
        onOpen={() => setAiDrawerOpen(true)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <div className="relative min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col justify-between selection:bg-crimson-600 selection:text-white">
        {/* Sticky Header / Navigation */}
        <Navbar onOpenAI={() => setAiDrawerOpen(true)} />

        {/* Dynamic Routes / Single Page Container */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenAI={() => setAiDrawerOpen(true)}
                  onSelectProject={(project) => setActiveModalProject(project)}
                />
              }
            />
          </Routes>
        </div>

        {/* Footer with Contact Links & Back-to-Top */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
