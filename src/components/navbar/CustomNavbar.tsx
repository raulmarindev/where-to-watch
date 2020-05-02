import WhereToWatchLogo from 'images/WhereToWatchLogo.png';
import { Container, Navbar } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const Logo = styled.span`
font-family: 'Fjalla One';
`;

const CustomNavbar: React.FC<{ variant: 'dark' | 'light'; backgroundColor?: string; }> = ({ backgroundColor, variant }) => (
  <header>
    <Navbar bg={backgroundColor} variant={variant}>
      <Container>
        <Navbar.Brand href="/">
          <Logo className="font-weight-bold">
            <img
              alt=""
              src={WhereToWatchLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' WhereToWatch'}
          </Logo>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </header>
);

export default CustomNavbar;
