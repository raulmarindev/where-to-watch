import ITitle from 'api/models/ITitle';
import LocationList from 'components/locationList/LocationList';
import React from 'react';
import {
  Col, Container, ListGroup, Row, Card,
} from 'react-bootstrap';

interface ITitleProps {
  title: ITitle;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  const { locations, name, picture } = title;
  return (
    <ListGroup.Item>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Card className="bg-dark text-white">
              <Card.Img src={picture} alt={name} />
              <Card.ImgOverlay>
                <Card.Text className="h2 outlined">{name}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={8}>
            <LocationList locations={locations} />
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default Title;
