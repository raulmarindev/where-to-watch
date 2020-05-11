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
      <Form.Group controlId="searchTerm">
        <Form.Control className="mb-3" size="lg" type="search" value={value} onChange={onChange} placeholder={placeHolder} />
      </Form.Group>
    </Form>
  </Container>
);

export default SearchBar;
