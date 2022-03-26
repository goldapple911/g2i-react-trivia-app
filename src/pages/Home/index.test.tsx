import { render, cleanup } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from '.';

afterEach(() => {
  cleanup();
});

describe('render Home page', () => {
  it('renders content', () => {
    const queryClient = new QueryClient();
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>,
    );
    expect(getByRole('heading').textContent).toEqual('Welcome to the Trivia Challenge!');
  });
});
