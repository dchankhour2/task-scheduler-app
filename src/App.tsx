import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">Task Scheduler</div>
        <Header />
      </header>
      
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Welcome!</h1>
        <p className="text-center">This is the main content of the app.</p>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path='/' 
            element={
              <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  );
}