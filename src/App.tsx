import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ProtectedRoute } from './components/ProtectedRoute';
import Layout from './components/Layout';
import Home from './pages/Home';
import LandingLayout from './components/LandingLayout';

export default function App() {
  return (
    <main className="app">
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<Layout />}>
          <Route 
              path='/dashboard' 
              element={
                <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Route>
      </Routes>
    </main>
  );
}
