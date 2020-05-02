import { Col, Form, Row } from 'imports/bootstrap';
import React from 'react';

interface ISearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, placeHolder }) => (
  <Row>
    <Col xs={0} md={1} />
    <Col xs={12} md={10}>
      <Form className="px-4" onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); }}>
        <Form.Group controlId="searchTerm">
          <Form.Control className="mb-3" size="lg" type="search" value={value} onChange={onChange} placeholder={placeHolder} />
        </Form.Group>
      </Form>
    </Col>
    <Col xs={0} md={1} />
  </Row>
);

export default SearchBar;
