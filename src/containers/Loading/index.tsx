import { Spinner } from 'react-bootstrap';

type AnimationType = 'border' | 'grow';

export interface IProps {
  animation: AnimationType;
}

const Loading = ({ animation }: IProps): JSX.Element => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Spinner data-testid="loading-spinner" animation={animation} role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
