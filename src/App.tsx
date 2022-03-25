import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

import 'bootstrap/scss/bootstrap.scss';

import Layout from './containers/Layout';
import NotFound from './containers/NotFound';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes';
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
