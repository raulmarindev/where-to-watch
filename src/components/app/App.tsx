import Titles from '../../api/titles';
import SearchBar from '../searchBar/SearchBar';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchTermChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm && searchTerm.length > 3) {
      Titles.filter(searchTerm).then((response) => {
        console.log(`response retrieved ${JSON.stringify(response)}`);
      }).catch((error) => { console.log(error); });
    }
  }, [searchTerm]);

  return (
    <SearchBar value={searchTerm} onChange={onSearchTermChangeHandler} />
  );
};

export default App;
