import { Problem } from '../utils/type';
import { getProblemsURL } from './urls';

type ResponseType = {
  response_code: number;
  results: Problem[];
};

export const fetchProblems = async () => {
  const response: Response = await fetch(getProblemsURL);
  if (!response.ok) {
    throw new Error('Network response failed');
  }

  const data: ResponseType = await response.json();
  const problems: Problem[] = data.results;

  return problems;
};
