import { ListGroup } from 'imports/bootstrap';
import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
width: 75px
`;

const ResultsCount: React.FC<{ resultsQuantity: number; }> = ({ resultsQuantity }) => (
  <ListGroup.Item className="px-md-2 px-0 border-top">
    <Span className="d-block mx-auto">
      {resultsQuantity}
      {' '}
      result
      {resultsQuantity > 1 ? 's' : ''}
    </Span>
  </ListGroup.Item>
);

export default ResultsCount;
