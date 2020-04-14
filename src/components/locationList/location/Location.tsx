import ILocation from 'api/models/ILocation';
import React from 'react';

interface ILocationProps {
  location: ILocation;
}

const Location: React.FC<ILocationProps> = ({ location }) => {
  const { displayName, icon, url } = location;
  return (
    <a href={url} target="blank">
      <img src={icon} alt={displayName} />
    </a>
  );
};

export default Location;
