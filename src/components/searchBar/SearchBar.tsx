import React from 'react';

interface ISearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, placeHolder }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeHolder}
  />
);

export default SearchBar;
