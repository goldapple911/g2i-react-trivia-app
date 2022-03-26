import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import { fetchProblems } from '../../api';
import { QuizContext } from '../../contexts/QuizContext';
import ResultsBox from './ResultsBox';
import { evaluateQuiz } from '../../utils';
import { MESSAGES } from '../../utils/constants';

function Result() {
  const { answers, clearAnswers } = useContext(QuizContext);

  const { data } = useQuery('problems', fetchProblems, {
    onError: () => {
      toast.error(MESSAGES.ERRORS.LOADING_QUIZZES);
    },
  });

  const [countOfRightAnswers, countOfTotalProblems] = evaluateQuiz(answers, data);

  const handlePlayAgain = async () => {
    await clearAnswers();
  };

  return (
    <div className="h-100 d-flex flex-column justify-content-between text-center">
      <div>
        <h2 className="mb-0">You scored</h2>
        <p>
          <b>{`${countOfRightAnswers}/${countOfTotalProblems}`}</b>
        </p>
      </div>
      <ResultsBox problems={data} />
      <Link to="/home" onClick={handlePlayAgain} className="text-black text-decoration-none">
        PLAY AGAIN?
      </Link>
    </div>
  );
}

export default Result;
