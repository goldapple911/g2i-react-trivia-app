import { render, cleanup } from '@testing-library/react';

import ResultCard from '.';
import { mockResultCardProps } from '../../utils/mock';

afterEach(() => {
  cleanup();
});

describe('render ResultCard component', () => {
  it('renders a question', () => {
    const { evaluation, question } = mockResultCardProps();
    const { getByText } = render(<ResultCard evaluation={evaluation} question={question} />);
    expect(getByText(question)).toBeInTheDocument();
  });

  it('renders an evaluation icon', () => {
    const { evaluation, question } = mockResultCardProps();
    const { getByTestId } = render(<ResultCard evaluation={evaluation} question={question} />);
    expect(getByTestId('evaluation')).toBeInTheDocument();
  });
});
