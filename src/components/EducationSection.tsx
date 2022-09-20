import React from 'react';

const EducationSection: React.FunctionComponent = () => {
  return (
    <section id='education-section' className='d-flex align-items-center'>
      <div>
        <h1>EDUCATION</h1>
        <h3>ENDICOTT COLLEGE</h3>
        <h5>
          BACHELOR OF SCIENCE
          <span>&nbsp;&bull;&nbsp;</span>
          COMPUTER SCIENCE
          <span>&nbsp;&bull;&nbsp;</span>
          <span>SEPTEMBER 2020 - MAY 2023</span>
        </h5>
        <ul>
          <li>Computer Science Club President Fall 2021 to Fall 2022</li>
          <li>Endicott College Honors Program Member</li>
          <li>Dean's List Fall 2020 to Spring 2022 (3.84 GPA)</li>
        </ul>
      </div>
    </section>
  );
};

export default EducationSection;
