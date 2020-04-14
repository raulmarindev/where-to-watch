import Error404 from 'images/Error404.jpg';
import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <>
    <Image src={Error404} fluid />
    <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by pikisuperstar - www.freepik.com</a>
    <p style={{ textAlign: 'center' }}>
      <Link to="/">Go to Home </Link>
    </p>
  </>
);


export default NotFound;
