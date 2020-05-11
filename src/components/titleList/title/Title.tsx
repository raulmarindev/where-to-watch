import ITitle from 'api/models/ITitle';
import LocationList from 'components/locationList/LocationList';
import Loading from 'images/Loading.gif';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import {
  Col, Container, ListGroup, Row, Card,
} from 'imports/bootstrap';

interface ITitleProps {
  title: ITitle;
}

const LazyLoadImageWithStyles = styled(LazyLoadImage)`
max-height: 200px;
`;

const Title: React.FC<ITitleProps> = ({ title }) => {
  const { locations, name, picture } = title;
  const characterLimit = 60;
  const titleText = name.length < characterLimit ? name : `${name.substring(0, characterLimit)}...`;
  return (
    <ListGroup.Item className="px-md-2 px-0">
      <Container fluid>
        <Row>
          <Col md={3} />
          <Col md={3}>
            <Card className="bg-dark text-white">
              <LazyLoadImageWithStyles
                loading="lazy"
                className="card-img"
                alt={name}
                src={picture}
                placeholderSrc={Loading}
              />
              <Card.ImgOverlay>
                <Card.Text className="h2 outlined">{titleText}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={8} md={3}>
            <LocationList locations={locations} />
          </Col>
          <Col sm={0} md={3} />
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default Title;
