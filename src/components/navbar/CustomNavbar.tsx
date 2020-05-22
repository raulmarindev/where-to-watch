import countries from 'components/navbar/countrySelect/countries';
import { ReactComponent as GithubLogo } from 'images/GitHubLogo.svg';
import { ReactComponent as TwitterLogo } from 'images/TwitterLogo.svg';
import WhereToWatchLogo from 'images/WhereToWatchLogo.png';
import { Container, Nav, Navbar } from 'imports/bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Logo = styled.span`
font-family: 'Fjalla One';
`;

const BaseNetworkLogoStyles = css`
width: 16px;
color: white;
`;

const GitHubLogoWithStyles = styled(GithubLogo)`
${BaseNetworkLogoStyles}
`;

const TwitterLogoWithStyles = styled(TwitterLogo)`
${BaseNetworkLogoStyles}
`;

const NavbarWithStyles = styled(Navbar)`
  background-color: #e76f51;
  `;

interface ICustomNavbarProps {
  variant: 'dark' | 'light';
  backgroundColor?: string;
  selectedCountryCode: string;
}

// eslint-disable-next-line max-len
const CustomNavbar: React.FC<ICustomNavbarProps> = ({ backgroundColor, selectedCountryCode, variant }) => (
  <header>
    <NavbarWithStyles className="text-white" bg={backgroundColor} variant={variant}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <Logo className="font-weight-bold text-white">
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
        </NavLink>
        <Nav>
          {selectedCountryCode && selectedCountryCode.length > 0 && (
            <Nav.Item>
              <NavLink className="text-white dropdown-toggle nav-link mr-md-2" to="countries">{countries.find((c) => c.code === selectedCountryCode)?.name}</NavLink>
            </Nav.Item>
          )}
          <Nav.Item>
            <Nav.Link className="pl-2 pr-1 mx-1 py-3 my-n2" href="https://github.com/raulmarindev/where-to-watch" target="_blank"><GitHubLogoWithStyles title="GitHub" className="float-right navbar-nav-svg" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link px-1 mx-1 py-3 my-n2" href="https://twitter.com/raulmarindev" target="_blank"><TwitterLogoWithStyles title="Twitter" className="float-right navbar-nav-svg" /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </NavbarWithStyles>
  </header>
);

export default CustomNavbar;
