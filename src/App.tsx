import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ProtectedRoute } from './components/ProtectedRoute';
import Layout from './components/Layout';
import TaskEditor from './components/TaskEditor';

export default function App() {
  return (
    <main className="app">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route 
              path='/' 
              element={
                <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Route>
      </Routes>
    </main>
  );
}