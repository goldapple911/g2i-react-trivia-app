import { FaPlus, FaMinus } from 'react-icons/fa';

import './style.scss';

interface IProps {
  evaluation: boolean;
  question: string;
}

function ResultCard({ evaluation, question }: IProps): JSX.Element {
  return (
    <p className="Result-card">
      {evaluation ? <FaPlus /> : <FaMinus />}
      <span className="ms-3" dangerouslySetInnerHTML={{ __html: question }} />
    </p>
  );
}

export default ResultCard;
