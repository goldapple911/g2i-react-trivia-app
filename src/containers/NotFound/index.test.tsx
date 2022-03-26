import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NotFound from '.';

afterEach(() => {
  cleanup();
});

describe('render NotFound container', () => {
  it('renders text and a link', () => {
    const { getByRole } = render(
      <Router>
        <NotFound />
      </Router>,
    );
    expect(getByRole('heading').textContent).toEqual('Page Not Found');
    expect(getByRole('link').textContent).toEqual('Return to Home');
  });

  it('should navigate to home', () => {
    const { getByRole } = render(
      <Router>
        <NotFound />
      </Router>,
    );
    expect(getByRole('link')).toHaveAttribute('href', '/home');
  });
});
