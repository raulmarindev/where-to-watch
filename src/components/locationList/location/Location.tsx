import ILocation from 'api/models/ILocation';
import { ListGroup } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const ListGroupItem = styled(ListGroup.Item)`
  width: 142px;
  height: 65px;
  cursor: 'pointer';

  &:hover {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  &[data-tap="active"] {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    transition: border-color 0ms, #80bdff 0ms;
    transition-delay: 60ms;
}
`;

interface ILocationProps {
  location: ILocation;
}

const Location: React.FC<ILocationProps> = ({ location }) => {
  const { displayName, icon, url } = location;
  return (
    <a href={url} target="blank" data-tap>
      <ListGroupItem className="px-sm-4 px-3 border rounded d-flex flex-column justify-content-center">
        <img src={icon} alt={displayName} />
      </ListGroupItem>
    </a>
  );
};

export default Location;
