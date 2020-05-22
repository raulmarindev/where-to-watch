import React from 'react';
import styled from 'styled-components';
import {
  Form, Container,
} from 'imports/bootstrap';

const FormControlWithStyles = styled(Form.Control)`
  -webkit-appearance: searchfield-cancel-button;
`;

interface ISearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, placeHolder }) => (
  <Container className="px-0">
    <Form onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); }}>
      <Form.Group className="mb-0" controlId="searchTerm">
        <FormControlWithStyles size="lg" type="search" value={value} onChange={onChange} placeholder={placeHolder} />
      </Form.Group>
    </Form>
  </Container>
);

export default SearchBar;
