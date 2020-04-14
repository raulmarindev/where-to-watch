import ILocation from 'api/models/ILocation';
import Location from 'components/locationList/location/Location';
import React from 'react';

interface ILocationListProps {
  locations: ILocation[];
}

// eslint-disable-next-line max-len
const LocationList: React.FC<ILocationListProps> = ({ locations }) => <>{locations.map((location) => <Location key={location.id} location={location} />)}</>;

export default LocationList;
