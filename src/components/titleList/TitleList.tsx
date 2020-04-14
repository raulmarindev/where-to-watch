import ITitle from 'api/models/ITitle';
import Title from 'components/title/Title';
import React from 'react';

interface ITitleListProps {
  titles: ITitle[];
}

const TitleList: React.FC<ITitleListProps> = ({ titles }) => (
  <div>
    {titles.map((title) => <Title key={title.id} title={title} />)}
  </div>
);

export default TitleList;
