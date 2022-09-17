import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

const App: React.FunctionComponent = () => {
  return (
    <>
      <header>
        <div id='top-nav-container' className='d-xs-block d-md-none'>
          <TopNav />
        </div>
      </header>
      <main>
        <div id='side-nav-container' className='d-none d-md-block'>
          <SideNav />
        </div>
        <div id='content-container'>
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
        </div>
      </main>
    </>
  );
};

export default App;
