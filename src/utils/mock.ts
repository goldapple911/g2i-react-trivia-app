import faker from '@faker-js/faker';

import { Problem } from './type';
import { IProps as ResultCardProps } from '../components/ResultCard';
import { IProps as LoadingProps } from '../containers/Loading';
import { IProps as ResultsBoxProps } from '../pages/Result/ResultsBox';

export const mockProblem = (): Problem => {
  const correctAnswer = faker.random.arrayElement(['True', 'False']);

  return {
    category: faker.lorem.word(),
    type: faker.random.arrayElement(['boolean', 'multiple']),
    difficulty: faker.random.arrayElement(['hard', 'medium', 'easy']),
    question: faker.lorem.sentence(),
    correct_answer: correctAnswer,
    incorrect_answers: [correctAnswer === 'True' ? 'False' : 'True'],
  };
};

export const mockResultCardProps = (): ResultCardProps => {
  return {
    evaluation: faker.random.arrayElement([true, false]),
    question: faker.lorem.sentence(),
  };
};

export const mockLoadingProps = (): LoadingProps => {
  return {
    animation: faker.random.arrayElement(['grow', 'border']),
  };
};

export const mockResultsBoxProps = (): ResultsBoxProps => {
  const problems: Problem[] = [];
  const { length } = faker.random.word();

  for (let i = 0; i < length; i += 1) {
    problems.push(mockProblem());
  }

  return {
    problems,
  };
};
