import { FaPlus, FaMinus } from 'react-icons/fa';

import './style.scss';

export interface IProps {
  evaluation: boolean;
  question: string;
}

const ResultCard = ({ evaluation, question }: IProps): JSX.Element => {
  return (
    <div className="Result-card d-flex">
      <div data-testid="evaluation">{evaluation ? <FaPlus /> : <FaMinus />}</div>
      <p className="ms-3" dangerouslySetInnerHTML={{ __html: question }} />
    </div>
  );
};

export default ResultCard;
