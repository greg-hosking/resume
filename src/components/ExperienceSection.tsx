import React from 'react';

const ExperienceSection: React.FunctionComponent = () => {
  return (
    <section id='experience-section' className='d-flex align-items-center'>
      <div>
        <h1>EXPERIENCE</h1>

        <h3>CLOUD ENGINEERING INTERN</h3>
        <h5>
          ZENDESK
          <span>&nbsp;&bull;&nbsp;</span>
          <span>JUNE 2022 - AUGUST 2022</span>
        </h5>
        <ul>
          <li>
            Increased uptime and stability of Hashicorp Vault cluster by
            designing and implementing serverless solution to manage Vault
            instances running on AWS EC2 in Auto Scaling groups.
          </li>
          <li>
            Wrote AWS Lambda function in Go and allocated and deployed resources
            via Terraform.
          </li>
          <li>
            Developed custom React components used in front-end interface for
            internal API, increasing productivity of engineers across multiple
            teams.
          </li>
        </ul>

        <h3>SOFTWARE ENGINEERING INTERN</h3>
        <h5>
          ENDICOTT COLLEGE
          <span>&nbsp;&bull;&nbsp;</span>
          <span>JANUARY 2021 - JUNE 2021</span>
        </h5>
        <ul>
          <li>
            Programmed custom back-end Flask app in Python to automate
            collection of social media metrics, cutting manual data entry time
            by 50%.
          </li>
          <li>
            Utilized Django REST API to perform CRUD operations with MySQL
            database.
          </li>
        </ul>

        <h3>INFORMATION TECHNOLOGY INTERN</h3>
        <h5>
          ENDICOTT COLLEGE
          <span>&nbsp;&bull;&nbsp;</span>
          <span>JULY 2021 - AUGUST 2021</span>
        </h5>
        <ul>
          <li>
            Wrote Excel script to increase productivity by cutting manual data
            entry time by 92%.
          </li>
          <li>
            Configured and installed over 500 wireless access points in
            residential buildings on campus.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
