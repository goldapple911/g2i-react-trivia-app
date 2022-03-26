import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-100 text-center d-flex flex-column justify-content-center">
      <h2 className="mb-3">Page Not Found</h2>
      <Link to="/home" className="text-black text-decoration-none">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
