import ResultsCount from './resultsCount/ResultsCount';
import Titles from 'api/agents/titles';
import ITitle from 'api/models/ITitle';
import SearchBar from 'components/home/searchBar/SearchBar';
import SearchHeader from 'components/home/searchHeader/SearchHeader';
import TitleList from 'components/titleList/TitleList';
import { Jumbotron, Spinner } from 'imports/bootstrap';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [titles, setTitles] = useState([] as ITitle[]);
  const minSearchTermLength = 2;
  const [isFetching, setIsFetching] = useState(false);

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

  const userIsSearching = debouncedSearchTerm.length > minSearchTermLength;

  useEffect(() => {
    (async () => {
      if (userIsSearching) {
        setIsFetching(true);
        const filteredTitles = await Titles.getFiltered(debouncedSearchTerm);
        setTitles(filteredTitles);
        setIsFetching(false);
      }
    })();
  }, [userIsSearching, debouncedSearchTerm]);


  return (
    <>
      <Jumbotron className="mb-3 mb-md-4 py-5">
        <SearchHeader className="mb-4" />
        <SearchBar value={searchTerm} onChange={onSearchTermChangeHandler} />
      </Jumbotron>
      {isFetching && <Spinner className="d-block mx-auto" animation="border" />}
      {!isFetching && userIsSearching && <ResultsCount resultsQuantity={titles.length} />}
      {!isFetching && userIsSearching && <TitleList titles={titles} />}
    </>
  );
};

export default Home;
