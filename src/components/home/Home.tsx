import Titles from 'api/agents/titles';
import ITitle from 'api/models/ITitle';
import SearchBar from 'components/searchBar/SearchBar';
import TitleList from 'components/titleList/TitleList';
import { Jumbotron } from 'imports/bootstrap';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [titles, setTitles] = useState([] as ITitle[]);
  const minSearchTermLength = 3;
  const [noResults, setNoResults] = useState(false);

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
        const filteredTitles = await Titles.getFiltered(debouncedSearchTerm);
        if (filteredTitles.length > 0) {
          setNoResults(false);
        } else {
          setNoResults(true);
        }
        setTitles(filteredTitles);
      }
    })();
  }, [debouncedSearchTerm]);

  return (
    <>
      <Jumbotron className="mt-3 mt-md-4 mb-3 mb-md-4" fluid>
        <SearchBar value={searchTerm} onChange={onSearchTermChangeHandler} placeHolder="Search for series or movie titles..." />
      </Jumbotron>
      {titles.length > 0 && <TitleList titles={titles} />}
      {noResults && <h3>Your search returned no results</h3>}
    </>
  );
};

export default Home;
