import { render, cleanup } from '@testing-library/react';

import Layout from '.';

afterEach(() => {
  cleanup();
});

describe('render Layout container', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid="children1">Children 1</div>
        <div data-testid="children2">Children 2</div>
      </Layout>,
    );
    expect(getByTestId('children1')).toBeInTheDocument();
    expect(getByTestId('children2')).toBeInTheDocument();
  });
});
