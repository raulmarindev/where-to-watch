import { ReactComponent as MagnifyingGlassIcon } from 'images/magnifyingGlass.svg';
import { Col, Row } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const SearchTitle = styled.span`
font-family: 'Fjalla One';
`;

const Header: React.FC<{ className?: string; }> = ({ className }) => (
  <>
    <Row className={className}>
      <Col xs={3} md={4} lg={5} />
      <Col xs={6} md={4} lg={2}>
        <h2>
          <SearchTitle className="w-100 mx-auto d-block">
            <MagnifyingGlassIcon height={32} width={32} />
            {'   Search'}
          </SearchTitle>
        </h2>
      </Col>
      <Col xs={3} md={4} lg={5} />
    </Row>
    <Row className={className}>
      <Col sm={0} md={2} lg={4} />
      <Col sm={12} md={8} lg={4}>
        <h5 className="text-black-50 w-75 mx-auto">Search the best movies and tv shows</h5>
      </Col>
      <Col sm={0} md={2} lg={4} />
    </Row>
  </>
);

export default Header;
