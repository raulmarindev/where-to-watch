import Titles from 'api/agents/titles';
import ITitle from 'api/models/ITitle';
import SearchBar from 'components/home/searchBar/SearchBar';
import SearchHeader from 'components/home/searchHeader/SearchHeader';
import TitleList from 'components/titleList/TitleList';
import { Jumbotron, Spinner } from 'imports/bootstrap';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';

const JumbotronStyled = styled(Jumbotron)`
background-color: #ECECEC;
`;

const Home: React.FC<{ countryCode: string; }> = ({ countryCode }) => {
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
        const filteredTitles = await Titles.getFiltered(debouncedSearchTerm, countryCode);
        setTitles(filteredTitles);
        setIsFetching(false);
      }
    })();
  }, [userIsSearching, countryCode, debouncedSearchTerm]);


  return (
    <>
      <JumbotronStyled className="mb-2 mb-md-4 py-4 py-md-5">
        <SearchHeader className="mb-2 mb-md-4" />
        <SearchBar value={searchTerm} onChange={onSearchTermChangeHandler} />
      </JumbotronStyled>
      {isFetching && <Spinner className="d-block mx-auto" animation="border" />}
      {!isFetching && userIsSearching && <TitleList titles={titles} />}
    </>
  );
};

export default Home;
