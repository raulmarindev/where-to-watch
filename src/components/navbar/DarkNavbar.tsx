import ReactLogo from 'images/ReactLogo.png';
import { Navbar } from 'imports/bootstrap';
import React from 'react';

const DarkNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={ReactLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {'  '}
      Where To Watch
    </Navbar.Brand>
  </Navbar>
);

export default DarkNavbar;
