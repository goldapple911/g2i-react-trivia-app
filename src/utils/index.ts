import { Problem } from './type';

export const evaluateAnswer = (answer: boolean, correctAnswer: string): boolean => {
  return (answer === true && correctAnswer === 'True') || (answer === false && correctAnswer === 'False');
};

export const evaluateQuiz = (answers: boolean[], problems: Problem[] | undefined): [number, number] => {
  let countOfRightAnswers = 0;
  let countOfProblems = 0;

  if (problems) {
    countOfProblems = problems.length;

    for (let i = 0; i < countOfProblems; i += 1) {
      countOfRightAnswers += evaluateAnswer(answers[i], problems[i].correct_answer) ? 1 : 0;
    }
  }

  return [countOfRightAnswers, countOfProblems];
};

export const getRandomHash = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
