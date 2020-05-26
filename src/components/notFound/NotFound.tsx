import Error404 from 'images/Error404.svg';
import { Container } from 'imports/bootstrap';
import React from 'react';

const NotFound: React.FC = () => (
  <Container className="w-xl-50">
    <img src={Error404} alt="Error404" />
  </Container>
);


export default NotFound;
