import ILocation from 'api/models/ILocation';
import { ListGroup } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const ListGroupItem = styled(ListGroup.Item)`
width: 142px;
height: 65px;
cursor: 'pointer';
`;

interface ILocationProps {
  location: ILocation;
}

const Location: React.FC<ILocationProps> = ({ location }) => {
  const { displayName, icon, url } = location;
  return (
    <a href={url} target="blank">
      <ListGroupItem className="px-sm-4 px-3 border rounded d-flex flex-column justify-content-center">
        <img src={icon} alt={displayName} />
      </ListGroupItem>
    </a>
  );
};

export default Location;
