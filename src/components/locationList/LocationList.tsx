import ILocation from 'api/models/ILocation';
import Location from 'components/locationList/location/Location';
import { ListGroup } from 'imports/bootstrap';
import React from 'react';

interface ILocationListProps {
  locations: ILocation[];
}

// eslint-disable-next-line max-len
const LocationList: React.FC<ILocationListProps> = ({ locations }) => (
  <ListGroup className="flex-wrap mt-md-0 mt-2 justify-content-around" horizontal>
    {locations.map((location) => <Location key={location.id} location={location} />)}
  </ListGroup>
);

export default LocationList;
