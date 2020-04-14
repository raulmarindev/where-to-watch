import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface ISearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange, placeHolder }) => (
  <Row>
    <Col sm={0} md={4} />
    <Col sm={12} md={4}>
      <Form className="px-4" onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); }}>
        <Form.Group controlId="searchTerm">
          <Form.Control type="search" value={value} onChange={onChange} placeholder={placeHolder} />
          <Form.Text className="text-muted">
            Enter at least 3 characters to start the search
          </Form.Text>
        </Form.Group>
      </Form>
    </Col>
    <Col sm={0} md={4} />
  </Row>
);

export default SearchBar;
