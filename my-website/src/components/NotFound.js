import React from 'react';
import withPageView from './withPageView';
import { compose } from 'recompose';

const NotFound = () => (
  <div>
    <h1>404</h1>
    <h1>Page not found</h1>
  </div>
);

export default compose(withPageView)(NotFound);
