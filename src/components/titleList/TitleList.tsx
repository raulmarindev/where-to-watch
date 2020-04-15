import ITitle from 'api/models/ITitle';
import Title from 'components/titleList/title/Title';
import { ListGroup } from 'imports/bootstrap';
import React from 'react';

interface ITitleListProps {
  titles: ITitle[];
}

const TitleList: React.FC<ITitleListProps> = ({ titles }) => (
  <ListGroup className="mb-3">
    {titles.map((title) => <Title key={title.id} title={title} />)}
  </ListGroup>
);

export default TitleList;
