import React from 'react';

const SkillsSection: React.FunctionComponent = () => {
  return (
    <section id='skills-section' className='d-flex align-items-center'>
      <div>
        <h1>SKILLS</h1>
        <img src={require('../images/aws-icon.png')} alt='AWS icon' />
        <img src={require('../images/python-icon.png')} alt='Python icon' />
        <img src={require('../images/java-icon.png')} alt='Java icon' />
        <img src={require('../images/c-plus-plus-icon.png')} alt='C++ icon' />
        <img src={require('../images/go-icon.png')} alt='Go icon' />
        <img src={require('../images/react-icon.png')} alt='React icon' />
        <img
          src={require('../images/typescript-icon.png')}
          alt='TypeScript icon'
        />
        <img
          src={require('../images/javascript-icon.png')}
          alt='JavaScript icon'
        />
        <img src={require('../images/html-icon.png')} alt='HTML icon' />
        <img src={require('../images/css-icon.png')} alt='CSS icon' />
        <img src={require('../images/github-icon.png')} alt='GitHub icon' />
      </div>
    </section>
  );
};

export default SkillsSection;
