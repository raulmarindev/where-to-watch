import { Col, Form, Row } from 'imports/bootstrap';
import React from 'react';

interface ISearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, placeHolder }) => (
  <Row>
    <Col sm={0} md={1} />
    <Col sm={12} md={10}>
      <Form className="px-4" onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); }}>
        <Form.Group controlId="searchTerm">
          <Form.Control className="mb-3" size="lg" type="search" value={value} onChange={onChange} placeholder={placeHolder} />
          <Form.Text className="text-muted w-25 mx-auto">
            Enter at least 3 characters to start the search
          </Form.Text>
        </Form.Group>
      </Form>
    </Col>
    <Col sm={0} md={1} />
  </Row>
);

export default SearchBar;
