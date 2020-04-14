import ITitle from 'api/models/ITitle';
import Title from 'components/titleList/title/Title';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface ITitleListProps {
  titles: ITitle[];
}

const TitleList: React.FC<ITitleListProps> = ({ titles }) => (
  <ListGroup>
    {titles.map((title) => <Title key={title.id} title={title} />)}
  </ListGroup>
);

export default TitleList;
