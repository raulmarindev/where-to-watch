import ITitle from 'api/models/ITitle';
import ImageLoader from 'components/imageLoader/ImageLoader';
import LocationList from 'components/locationList/LocationList';
import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import {
  Col, Container, ListGroup, Row, Card,
} from 'imports/bootstrap';

interface ITitleProps {
  title: ITitle;
}

const ImgContainer = styled.div`
width: 100%;
position: relative;
background: #fff;
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
              <ImgContainer>
                <LazyLoad
                  debounce={false}
                  throttle={250}
                  offset={500}
                >
                  <ImageLoader
                    className="card-img"
                    alt={name}
                    src={`${picture}?w=${imageWidth}`}
                    srcSet={imageSrcSet}
                  />
                </LazyLoad>
              </ImgContainer>
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
