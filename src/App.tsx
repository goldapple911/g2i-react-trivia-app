import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/scss/bootstrap.scss';

import Layout from './containers/Layout';
import NotFound from './containers/NotFound';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes';
import Result from './pages/Result';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
