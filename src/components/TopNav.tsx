import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNav: React.FunctionComponent = () => {
  return (
    <Navbar expand='md' variant='dark' sticky='top'>
      <Container fluid>
        <Navbar.Brand href='#about-section'>GREG HOSKING</Navbar.Brand>
        <Navbar.Toggle aria-controls='top-nav' />
        <Navbar.Collapse id='top-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#about-section'>ABOUT</Nav.Link>
            <Nav.Link href='#education-section'>EDUCATION</Nav.Link>
            <Nav.Link href='#experience-section'>EXPERIENCE</Nav.Link>
            <Nav.Link href='#skills-section'>SKILLS</Nav.Link>
            <Nav.Link href='#projects-section'>PROJECTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
