import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './hooks/useAuth';
import { TasksProvider } from './context/TasksContext';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  </React.StrictMode>
);
