import ITitle from 'api/models/ITitle';
import LocationList from 'components/locationList/LocationList';
import React from 'react';
import {
  Col, Container, ListGroup, Row, Card,
} from 'imports/bootstrap';

interface ITitleProps {
  title: ITitle;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  const { locations, name, picture } = title;
  return (
    <ListGroup.Item className="px-md-2 px-0">
      <Container fluid>
        <Row>
          <Col md={3} />
          <Col md={3}>
            <Card className="bg-dark text-white">
              <Card.Img src={picture} alt={name} />
              <Card.ImgOverlay>
                <Card.Text className="h2 outlined">{name}</Card.Text>
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
