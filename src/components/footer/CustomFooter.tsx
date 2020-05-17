import { Container, Nav } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: rgb(51,51,51);
  height: 5%;
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
  `;

const NavLinkWithStyles = styled(Nav.Link)`
color: #fff;
&:hover {
  color: rgb(6, 141, 254);
}
`;

const CustomFooter = () => (
  <Footer className="fixed-bottom">
    <Container className="fluid p-0">
      <Nav>
        <Nav.Item>
          <NavLinkWithStyles href="https://github.com/raulmarindev/where-to-watch" target="_blank">GitHub</NavLinkWithStyles>
        </Nav.Item>
        <Nav.Item>
          <NavLinkWithStyles href="https://twitter.com/raulmarindev" target="_blank">Twitter</NavLinkWithStyles>
        </Nav.Item>
      </Nav>
    </Container>
  </Footer>
);

export default CustomFooter;
