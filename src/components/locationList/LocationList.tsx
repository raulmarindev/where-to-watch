import ILocation from 'api/models/ILocation';
import Location from 'components/locationList/location/Location';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface ILocationListProps {
  locations: ILocation[];
}

// eslint-disable-next-line max-len
const LocationList: React.FC<ILocationListProps> = ({ locations }) => (
  <ListGroup className="flex-wrap justify-content-around" horizontal>
    {locations.map((location) => <Location key={location.id} location={location} />)}
  </ListGroup>
);

export default LocationList;
