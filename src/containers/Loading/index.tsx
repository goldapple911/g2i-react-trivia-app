import { Spinner } from 'react-bootstrap';

type AnimationType = 'border' | 'grow';

interface IProps {
  animation: AnimationType;
}

function Loading({ animation }: IProps): JSX.Element {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Spinner animation={animation} role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
