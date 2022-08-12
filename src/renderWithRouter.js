import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (Component, initialRoute = '/') => {
  const history = createMemoryHistory({
    initialEntries: [initialRoute],
  });
  return ({
    ...render(
      <Router
        history={ history }
      >
        {Component}
      </Router>,
    ),
    history,
  });
};

export default renderWithRouter;
