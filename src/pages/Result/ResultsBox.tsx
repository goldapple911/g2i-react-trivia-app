import { useContext } from 'react';

import { QuizContext } from '../../contexts/QuizContext';
import ResultCard from '../../components/ResultCard';
import { evaluateAnswer, getRandomHash } from '../../utils';
import { Problem } from '../../utils/type';

export interface IProps {
  problems: Problem[] | undefined;
}

function ResultsBox({ problems }: IProps): JSX.Element {
  const { answers } = useContext(QuizContext);

  return (
    <div className="overflow-auto">
      {problems?.map((problem: Problem, index: number) => (
        <ResultCard key={getRandomHash()} evaluation={evaluateAnswer(answers[index], problem.correct_answer)} question={problem.question} />
      ))}
    </div>
  );
}

export default ResultsBox;
