import { ReactComponent as MagnifyingGlassIcon } from 'images/magnifyingGlass.svg';
import { Col, Row } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const H2WithStyles = styled.h2`
@media (max-width: 768px) {
  font-size: 22px
  }
`;

const H5WithStyles = styled.h5`
@media (max-width: 768px) {
  font-size: 14px
  }
`;

const Header: React.FC<{ className?: string; }> = ({ className }) => (
  <>
    <Row className={className}>
      <Col xs={12} className="text-center">
        <H2WithStyles>
          <span className="w-xs-100 w-md-75 mx-auto d-block">
            <MagnifyingGlassIcon height={22} width={22} />
            {'   Search'}
          </span>
        </H2WithStyles>
      </Col>
    </Row>
    <Row className={className}>
      <Col xs={12} className="text-center">
        <H5WithStyles className="text-black-50 w-75 mx-auto">Search the best movies and tv shows</H5WithStyles>
      </Col>
    </Row>
  </>
);

export default Header;
