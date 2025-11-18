import { useState, useEffect, createContext, useContext } from 'react';
import { authService } from '../services/authService';

type User = { id: string; username: string } | null;

type AuthContextShape = {
  user: User;
  error: string | null;
  isLoading: boolean;
  signup: (username: string, password: string) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

// 1. Create the Auth Context
const AuthContext = createContext<AuthContextShape | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const current = authService.getCurrentUser();
    if (current) setUser(current);
    setIsLoading(false);
  }, []);

  const signup = async (username: string, password: string) => {
    try {
      setError(null);
      const newUser = await authService.signup(username, password);
      setUser(newUser);
      // no session password persisted in this version
    } catch (err: any) {
      setError(err?.message ?? 'Signup failed');
    }
  };

  const login = async (username: string, password: string) => {
    try {
      setError(null);
      const loggedInUser = await authService.login(username, password);
      setUser(loggedInUser);
      // no session password persisted in this version
    } catch (err: any) {
      setError(err?.message ?? 'Login failed');
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value: AuthContextShape = { user, error, isLoading, signup, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
