import Titles from 'api/agents/titles';
import ITitle from 'api/models/ITitle';
import SearchBar from 'components/searchBar/SearchBar';
import TitleList from 'components/titleList/TitleList';
import React, { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useDebouncedCallback } from 'use-debounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [titles, setTitles] = useState([] as ITitle[]);
  const minSearchTermLength = 3;

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
    (async () => {
      if (debouncedSearchTerm.length > minSearchTermLength) {
        const response = await Titles.filter(debouncedSearchTerm);
        if (response) {
          setTitles(response);
        }
      }
    })();
  }, [debouncedSearchTerm]);

  return (
    <>
      <Jumbotron fluid>
        <SearchBar value={searchTerm} onChange={onSearchTermChangeHandler} placeHolder="Search for series or movie titles..." />
      </Jumbotron>
      {titles.length > 0 && <TitleList titles={titles} />}
      {titles.length === 0 && debouncedSearchTerm.length > minSearchTermLength
        && <h2>Your search returned no results. Please try again with a different term.</h2>}
    </>
  );
};

export default Home;
