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
  const imageWidth = 350;
  const imageSrcSet = `${picture}?w=${imageWidth} 1x,${picture}?w=${imageWidth}&dpr=2 2x,${picture}?w=${imageWidth}&dpr=3 3x,${picture}?w=${imageWidth}&dpr=4 4x`;
  return (
    <ListGroup.Item className="px-md-2 px-0 border-left-0 border-right-0">
      <Container fluid>
        <Row>
          <Col lg={1} />
          <Col md={6} lg={5} sm={8} xs={12}>
            <Card className="bg-dark text-white border-0">
              <LazyLoadImageWithStyles
                loading="lazy"
                className="card-img"
                alt={name}
                src={`${picture}?w=${imageWidth}`}
                placeholderSrc={Loading}
                srcSet={imageSrcSet}
              />
              <Card.ImgOverlay>
                <Card.Text className="h2 outlined">{titleText}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6} sm={8} lg={5}>
            <LocationList locations={locations} />
          </Col>
          <Col lg={1} />
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default Title;
