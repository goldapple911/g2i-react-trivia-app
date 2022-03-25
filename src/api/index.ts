import { getQuizzesURL } from './urls';

export const fetchQuizzes = async () => {
  const response = await fetch(getQuizzesURL);

  return response;
};
