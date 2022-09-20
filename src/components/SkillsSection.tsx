import React from 'react';

const SkillsSection: React.FunctionComponent = () => {
  return (
    <section id='skills-section' className='d-flex align-items-center'>
      <div>
        <h1>SKILLS</h1>
        <img src={require('../images/aws-icon.png')} />
        <img src={require('../images/python-icon.png')} />
        <img src={require('../images/java-icon.png')} />
        <img src={require('../images/c-plus-plus-icon.png')} />
        <img src={require('../images/go-icon.png')} />
        <img src={require('../images/react-icon.png')} />
        <img src={require('../images/typescript-icon.png')} />
        <img src={require('../images/javascript-icon.png')} />
        <img src={require('../images/html-icon.png')} />
        <img src={require('../images/css-icon.png')} />
        <img src={require('../images/github-icon.png')} />
      </div>
    </section>
  );
};

export default SkillsSection;
