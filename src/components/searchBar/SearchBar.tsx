import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeHolder }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeHolder}
  />
);

export default SearchBar;
