import React from 'react';
import {
  Form, Container,
} from 'imports/bootstrap';

interface ISearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, placeHolder }) => (
  <Container className="px-0">
    <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); }}>
      <Form.Group className="mb-0" controlId="searchTerm">
        <Form.Control size="lg" type="search" value={value} onChange={onChange} placeholder={placeHolder} autoFocus />
      </Form.Group>
    </Form>
  </Container>
);

export default SearchBar;
