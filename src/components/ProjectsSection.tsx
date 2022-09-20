import React from 'react';

const ProjectsSection: React.FunctionComponent = () => {
  return (
    <section id='projects-section' className='d-flex align-items-center'>
      <div>
        <h1>PROJECTS</h1>

        <h3>RESUME/PORTFOLIO</h3>
        <h5>
          SIDE PROJECT
          <span>&nbsp;&bull;&nbsp;</span>
          <span>COMPLETE</span>
        </h5>
        <ul>
          <li>Developed a responsive website for professional use.</li>
          <li>Built with React, TypeScript, and Bootstrap.</li>
        </ul>
        <img src={require('../images/react-icon.png')} alt='React icon' />
        <img
          src={require('../images/typescript-icon.png')}
          alt='TypeScript icon'
        />
        <img src={require('../images/html-icon.png')} alt='HTML icon' />
        <img src={require('../images/css-icon.png')} alt='CSS icon' />
        <a
          href='https://github.com/greg-hosking/resume'
          target='_blank'
          rel='noreferrer'
          id='github-link'
        >
          <img
            src={require('../images/github-icon.png')}
            alt='View the source code for this project.'
          />
        </a>

        <h3>BRAWL STARS MASTER</h3>
        <h5>
          SIDE PROJECT
          <span>&nbsp;&bull;&nbsp;</span>
          <span>IN PROGRESS</span>
        </h5>
        <ul>
          <li>
            Created a web companion app for mobile game Brawl Stars that allows
            the user to explore detailed data about brawlers, events,
            leaderboards, players, clubs, and win rates.
          </li>
          <li>
            Utilized React, TypeScript, and Bootstrap, and custom API and CDN.
          </li>
        </ul>
        <img src={require('../images/react-icon.png')} alt='React icon' />
        <img
          src={require('../images/typescript-icon.png')}
          alt='TypeScript icon'
        />
        <img src={require('../images/html-icon.png')} alt='HTML icon' />
        <img src={require('../images/css-icon.png')} alt='CSS icon' />
        <a
          href='https://github.com/greg-hosking/brawl-stars-master'
          target='_blank'
          rel='noreferrer'
          id='github-link'
        >
          <img
            src={require('../images/github-icon.png')}
            alt='View the source code for this project.'
          />
        </a>

        <h3>BRAWL STARS MASTER API</h3>
        <h5>
          SIDE PROJECT
          <span>&nbsp;&bull;&nbsp;</span>
          <span>IN PROGRESS</span>
        </h5>
        <ul>
          <li>
            Implemented a custom HTTP API for mobile game Brawl Stars to provide
            additional data, assets, and functionality on top of official API.
          </li>
          <li>
            Built with AWS API Gateway, AWS Lambda, AWS S3, and TypeScript.
          </li>
        </ul>
        <img src={require('../images/aws-icon.png')} alt='AWS icon' />
        <img
          src={require('../images/typescript-icon.png')}
          alt='TypeScript icon'
        />
        <a
          href='https://github.com/greg-hosking/brawl-stars-master-api'
          target='_blank'
          rel='noreferrer'
          id='github-link'
        >
          <img
            src={require('../images/github-icon.png')}
            alt='View the source code for this project.'
          />
        </a>

        <h3>LEGENDS OF RUNETERRA MASTER</h3>
        <h5>
          COURSE PROJECT
          <span>&nbsp;&bull;&nbsp;</span>
          <span>COMPLETE</span>
        </h5>
        <ul>
          <li>
            Built a desktop companion app for digital card game Legends of
            Runeterra that allows the user to view cards, create and share
            decks, review match history, explore leaderboards and high win rate
            decks, and track their deck during live matches.
          </li>
          <li>
            Programmed in Java using JavaFX and official Legends of Runeterra
            API.
          </li>
        </ul>
        <img src={require('../images/java-icon.png')} alt='Java icon' />
        <a
          href='https://github.com/greg-hosking/lor-master'
          target='_blank'
          rel='noreferrer'
          id='github-link'
        >
          <img
            src={require('../images/github-icon.png')}
            alt='View the source code for this project.'
          />
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
