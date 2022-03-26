import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';

function Result() {
  const { answers } = useContext(QuizContext);
  return <div>{answers.join(', ')}</div>;
}

export default Result;
