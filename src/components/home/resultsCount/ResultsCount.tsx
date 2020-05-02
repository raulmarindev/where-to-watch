import { ListGroup } from 'imports/bootstrap';
import React from 'react';

const ResultsCount: React.FC<{ resultsQuantity: number; }> = ({ resultsQuantity }) => (
  <ListGroup.Item className="px-md-2 px-0 border-top">
    <span className="d-block mx-auto">
      {resultsQuantity}
      {' '}
      results
    </span>
  </ListGroup.Item>
);

export default ResultsCount;
