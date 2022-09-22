import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';

const App: React.FunctionComponent = () => {
  return (
    <>
      <header className='d-xs-block d-md-none'>
        <TopNav />
      </header>
      <main>
        <div id='side-nav-container' className='d-none d-md-block'>
          <SideNav />
        </div>
        <div id='content-container'>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
        </div>
      </main>
    </>
  );
};

export default App;
