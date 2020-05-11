import { ReactComponent as GithubLogo } from 'images/GitHubLogo.svg';
import { ReactComponent as TwitterLogo } from 'images/TwitterLogo.svg';
import WhereToWatchLogo from 'images/WhereToWatchLogo.png';
import { Container, Nav, Navbar } from 'imports/bootstrap';
import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.span`
font-family: 'Fjalla One';
`;

const baseNetworkLogoStyles = css`
width: 16px;
`;

const GitHubLogoWithStyles = styled(GithubLogo)`
${baseNetworkLogoStyles}
`;

const TwitterLogoWithStyles = styled(TwitterLogo)`
${baseNetworkLogoStyles}
`;

const CustomNavbar: React.FC<{ variant: 'dark' | 'light'; backgroundColor?: string; }> = ({ backgroundColor, variant }) => (
  <header>
    <Navbar className="text-secondary" bg={backgroundColor} variant={variant}>
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
        <Nav>
          <Nav.Item>
            <Nav.Link href="https://github.com/raulmarindev/where-to-watch" target="_blank"><GitHubLogoWithStyles title="GitHub" className="float-right" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://twitter.com/raulmarindev" target="_blank"><TwitterLogoWithStyles title="Twitter" className="float-right" /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  </header>
);

export default CustomNavbar;
