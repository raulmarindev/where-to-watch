import ITitle from 'api/models/ITitle';
import ResultsCount from 'components/home/resultsCount/ResultsCount';
import Title from 'components/titleList/title/Title';
import { ListGroup } from 'imports/bootstrap';
import React from 'react';

interface ITitleListProps {
  titles: ITitle[];
}

const TitleList: React.FC<ITitleListProps> = ({ titles }) => (
  <ListGroup className="mb-5">
    <ResultsCount resultsQuantity={titles.length} />
    {titles.map((title) => <Title key={title.id} title={title} />)}
  </ListGroup>
);

export default TitleList;
