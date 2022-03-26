import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Result from '.';

afterEach(() => {
  cleanup();
});

describe('render Result page', () => {
  it('renders content', () => {
    const queryClient = new QueryClient();
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Result />
        </Router>
      </QueryClientProvider>,
    );
    expect(getByRole('heading').textContent).toBe('You scored');
    expect(getByRole('link')?.firstChild?.textContent).toBe('PLAY AGAIN?');
  });

  it('should navigate to home', () => {
    const queryClient = new QueryClient();
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Result />
        </Router>
      </QueryClientProvider>,
    );
    expect(getByRole('link')).toHaveAttribute('href', '/home');
  });
});
