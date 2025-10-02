import { useState, useEffect, createContext, useContext } from 'react';
import { authService } from '../services/authService';

type User = { id: string; username: string } | null;

// 1. Create the Auth Context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const current = authService.getCurrentUser();
    if (current) setUser(current);
  }, []);

  const signup = async (username: string, password: string) => {
    try {
      setError(null);
      const newUser = await authService.signup(username, password);
      setUser(newUser);
    } catch (err: any) {
      setError(err?.message ?? 'Signup failed');
    }
  };

  const login = async (username: string, password: string) => {
    try {
      setError(null);
      const loggedInUser = await authService.login(username, password);
      setUser(loggedInUser);
    } catch (err: any) {
      setError(err?.message ?? 'Login failed');
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = { user, error, signup, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext)
};
