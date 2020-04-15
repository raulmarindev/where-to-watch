import ILocation from 'api/models/ILocation';
import { ListGroup } from 'imports/bootstrap';
import React from 'react';

interface ILocationProps {
  location: ILocation;
}

const Location: React.FC<ILocationProps> = ({ location }) => {
  const { displayName, icon, url } = location;
  return (
    <a href={url} target="blank">
      <ListGroup.Item className="px-sm-4 px-3 border rounded">
        <img src={icon} alt={displayName} />
      </ListGroup.Item>
    </a>
  );
};

export default Location;
