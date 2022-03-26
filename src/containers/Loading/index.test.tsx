import { render, cleanup } from '@testing-library/react';

import Loading from '.';
import { mockLoadingProps } from '../../utils/mock';

afterEach(() => {
  cleanup();
});

describe('render Loading container', () => {
  it('renders a spinner', () => {
    const { animation } = mockLoadingProps();
    const { getByText, getByTestId } = render(<Loading animation={animation} />);
    expect(getByText('Loading...')).toBeInTheDocument();
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
