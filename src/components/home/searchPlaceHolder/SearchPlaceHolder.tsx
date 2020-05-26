import { ReactComponent as HomeCinema } from 'images/HomeCinema.svg';
import { Col, Container, Row } from 'imports/bootstrap';
import React from 'react';

const SearchPlaceHolder = () => (
  <Container className="mt-5">
    <Row>
      <Col xs={12} className="text-center h-25">
        <HomeCinema className="w-md-25 w-50 mx-auto" />
      </Col>
    </Row>
  </Container>
);

export default SearchPlaceHolder;
