import { Toast, ToastContainer } from 'react-bootstrap';
import { ToastPosition } from 'react-bootstrap/ToastContainer';

interface IProps {
  show: boolean;
  title: string;
  content: string;
  position: ToastPosition;
}

function Toaster({ show, title, content, position }: IProps): JSX.Element {
  return (
    <ToastContainer className="p-3" position={position}>
      <Toast show={show}>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{content}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;
