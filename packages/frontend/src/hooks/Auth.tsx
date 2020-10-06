/* eslint-disable no-console */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: Record<string, unknown>;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@OnBoarding:token');
    const userStorage = localStorage.getItem('@OnBoarding:user');

    if (token && userStorage) return { token, user: JSON.parse(userStorage) };

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const { data: dataResponse } = await api.post('/session', {
        email,
        password,
      });

      const { token, user } = dataResponse;

      localStorage.setItem('@OnBoarding:token', token);
      localStorage.setItem('@OnBoarding:user', JSON.stringify(user));

      setData({ token, user });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@OnBoarding:token');
    localStorage.removeItem('@OnBoarding:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within and AuthProvider');

  return context;
}
