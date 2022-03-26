import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';
import { Spinner, Alert } from 'react-bootstrap';

import './style.scss';

import { fetchProblems } from '../../api/problems.service';
import { MESSAGES } from '../../utils/constants';

const Home = () => {
  const { isFetching, isError, data, refetch } = useQuery('problems', fetchProblems, {
    onError: () => {
      toast.error(MESSAGES.ERRORS.LOADING_QUIZZES);
    },
  });

  const handleRetry = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    refetch();
  };

  const renderContent = () => {
    if (isFetching) {
      return (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
        </div>
      );
    }
    if (isError || !data) {
      return (
        <>
          <Alert variant="danger">
            <p>Couldn't get problems!</p>
            <p>Sorry, but please click RETRY if you want to try again.</p>
          </Alert>
          <Link to="#" onClick={handleRetry} className="text-black text-decoration-none">
            RETRY
          </Link>
        </>
      );
    }
    return (
      <>
        <p>You will be presented with 10 True or False problems.</p>
        <p>Can you score 100%?</p>
        <Link to="/problems/1" className="text-black text-decoration-none">
          BEGIN
        </Link>
      </>
    );
  };

  return (
    <div className="h-100 d-flex flex-column justify-content-between text-center">
      <h2>Welcome to the Trivia Challenge!</h2>
      {renderContent()}
    </div>
  );
};

export default Home;
