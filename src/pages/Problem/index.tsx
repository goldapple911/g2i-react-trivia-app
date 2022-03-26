import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { fetchProblems } from '../../api';
import { Problem as ProblemType } from '../../utils/type';
import { MESSAGES } from '../../utils/constants';
import { QuizContext } from '../../contexts/QuizContext';

function Problem() {
  const quizContext = useContext(QuizContext);
  const { id } = useParams();
  const { data } = useQuery('problems', fetchProblems, {
    onError: () => {
      toast.error(MESSAGES.ERRORS.LOADING_QUIZZES);
    },
  });

  const handleAnswer = async (event: React.MouseEvent<HTMLAnchorElement>, answer: boolean) => {
    await quizContext.setAnswer(Number(id) - 1, answer);
  };

  let problem: ProblemType | undefined;
  let linkTo: string | undefined;
  if (data && id) {
    const idAsNumber = Number(id);
    problem = data[idAsNumber - 1];

    if (idAsNumber === data.length) {
      linkTo = '/result';
    } else {
      linkTo = `/problems/${(idAsNumber + 1).toString()}`;
    }
  }

  return (
    <div className="h-100 d-flex flex-column justify-content-between text-center">
      <h2>{problem?.category}</h2>
      <p dangerouslySetInnerHTML={{ __html: problem?.question ?? '' }} />
      <div>
        <p>Select your answer!</p>
        <Link to={linkTo ?? '#'} onClick={(event) => handleAnswer(event, true)} className="text-black text-decoration-none me-5">
          <b>TRUE</b>
        </Link>
        <Link to={linkTo ?? '#'} onClick={(event) => handleAnswer(event, false)} className="text-black text-decoration-none">
          <b>FALSE</b>
        </Link>
      </div>
    </div>
  );
}

export default Problem;
