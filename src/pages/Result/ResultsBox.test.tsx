import { render, cleanup } from '@testing-library/react';

import ResultsBox from './ResultsBox';
import { mockResultsBoxProps } from '../../utils/mock';

afterEach(() => {
  cleanup();
});

describe('render ResultsBox sub component', () => {
  it('renders content', () => {
    const { problems } = mockResultsBoxProps();
    const { getByText } = render(<ResultsBox problems={problems} />);

    problems?.forEach((problem) => {
      expect(getByText(problem.question)).toBeInTheDocument();
    });
  });
});
