import React from 'react';

const SideNav: React.FunctionComponent = () => {
  return (
    <div id='side-nav'>
      <img
        src={require('../images/portrait.png')}
        alt='Greg Hosking'
        onClick={() => {
          document.getElementById('about-section')?.scrollIntoView();
        }}
      ></img>
      <h5
        onClick={() => {
          document.getElementById('about-section')?.scrollIntoView();
        }}
      >
        ABOUT
      </h5>
      <h5
        onClick={() => {
          document.getElementById('education-section')?.scrollIntoView();
        }}
      >
        EDUCATION
      </h5>
      <h5
        onClick={() => {
          document.getElementById('experience-section')?.scrollIntoView();
        }}
      >
        EXPERIENCE
      </h5>
      <h5
        onClick={() => {
          document.getElementById('skills-section')?.scrollIntoView();
        }}
      >
        SKILLS
      </h5>
      <h5
        onClick={() => {
          document.getElementById('projects-section')?.scrollIntoView();
        }}
      >
        PROJECTS
      </h5>
    </div>
  );
};

export default SideNav;
