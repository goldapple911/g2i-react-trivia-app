import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Problem from '.';

afterEach(() => {
  cleanup();
});

describe('render Problem page', () => {
  it('renders content', () => {
    const queryClient = new QueryClient();
    const { getByText, getByRole, getAllByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Problem />
        </Router>
      </QueryClientProvider>,
    );
    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByText('Select your answer!')).toBeInTheDocument();
    expect(getAllByRole('link').at(0)?.firstChild?.textContent).toBe('TRUE');
    expect(getAllByRole('link').at(1)?.firstChild?.textContent).toBe('FALSE');
  });
});
