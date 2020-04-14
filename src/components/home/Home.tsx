import Titles from 'api/agents/titles';
import ILocation from 'api/models/ILocation';
import LocationList from 'components/locationList/LocationList';
import SearchBar from 'components/searchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [locations, setLocations] = useState([] as ILocation[]);

  const [debouncedCallback] = useDebouncedCallback(
    // function
    (newSearchTerm: string) => {
      setDebouncedSearchTerm(newSearchTerm);
    },
    // delay in ms
    1200,
  );

  const onSearchTermChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedCallback(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm.length > 3) {
      Titles.filter(debouncedSearchTerm).then((response) => {
        console.log(`response retrieved ${JSON.stringify(response)}`);
        if (response) {
          setLocations(response[0].locations);
        }
      }).catch((error) => { console.log(error); });
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <SearchBar value={searchTerm} onChange={onSearchTermChangeHandler} />
      <LocationList locations={locations} />
    </>
  );
};

export default Home;
