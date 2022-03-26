import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

import 'bootstrap/scss/bootstrap.scss';

import { QuizContextProvider } from './contexts/QuizContext';
import Layout from './containers/Layout';
import NotFound from './containers/NotFound';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Result from './pages/Result';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QuizContextProvider>
        <Layout>
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/problems/:id" element={<Problem />} />
              <Route path="/result" element={<Result />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Layout>
        <Toaster />
      </QuizContextProvider>
    </QueryClientProvider>
  );
};

export default App;
