import React from 'react';

const AboutSection: React.FunctionComponent = () => {
  return (
    <section id='about-section' className='d-flex align-items-center'>
      <div>
        <h1>
          GREG <span>HOSKING</span>
        </h1>
        <h5>
          SWAMPSCOTT, MA &nbsp;<span>&bull;</span>&nbsp; (978) 751-2753 &nbsp;
          <span>&bull;</span>&nbsp;
          <a href='mailto: hoskinggregory@gmail.com'>
            HOSKINGGREGORY@GMAIL.COM
          </a>
        </h5>
        <p>
          Hi, my name is Greg and I am a senior studying Computer Science at
          Endicott College. I am an aspiring Software Engineer with internship
          experience in building front-end apps with React and
          TypeScript/JavaScript and designing and implementing back-end
          solutions using AWS, Go, and Python. I am actively seeking a position
          as a Software or Cloud Engineering intern to learn more and strengthen
          my skillset. I am a team player offering great communication and
          problem-solving skills, a strong work ethic, and a desire to learn on
          the job.
        </p>
        <a
          href='https://www.linkedin.com/in/greg-hosking/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../images/linkedin-icon.png')}
            alt='Visit my LinkedIn profile.'
            id='linkedin-icon'
          />
        </a>
        <a
          href='https://github.com/greg-hosking'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../images/github-icon.png')}
            alt='Visit my GitHub profile.'
            id='github-icon'
          />
        </a>
        <a
          href='https://github.com/greg-hosking/resume'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../images/source-code-icon.png')}
            alt='View the source code for this website.'
            id='source-code-icon'
          />
        </a>
        <a
          href={require('../Greg_Hosking_Resume.pdf')}
          download='Greg_Hosking_Resume'
        >
          <img
            src={require('../images/download-icon.png')}
            alt='Download my resume.'
            id='download-icon'
          />
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
