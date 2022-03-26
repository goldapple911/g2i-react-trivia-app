import fetchWithErrorHandler from '.';
import { Problem } from '../utils/type';

export type ResponseType = {
  response_code: number;
  results: Problem[];
};

export const fetchProblems = async () => {
  const response: Response = await fetchWithErrorHandler(process.env.REACT_APP_API_URL ?? '');
  const data: ResponseType = await response.json();
  const problems: Problem[] = data.results;
  return problems;
};
