import ITitle from 'api/models/ITitle';
import LocationList from 'components/locationList/LocationList';
import React from 'react';

interface ITitleProps {
  title: ITitle
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  const { locations, name, picture } = title;
  return (
    <div>
      <img src={picture} alt={name} />
      <LocationList locations={locations} />
    </div>
  );
};

export default Title;
