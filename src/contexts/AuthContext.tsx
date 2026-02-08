import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  credits: number;
  purchasedModels: string[];
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  purchaseModel: (modelId: string, price: number) => boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuários pré-definidos
const PREDEFINED_USERS: Record<string, { password: string; role: UserRole }> = {
  admin: { password: '1234', role: 'admin' },
  user: { password: '1234', role: 'user' },
};

const STORAGE_KEY = 'loja_negocio_auth';
const USERS_STORAGE_KEY = 'loja_negocio_users';

const getStoredUsers = (): Record<string, User> => {
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Inicializa usuários padrão
  const defaultUsers: Record<string, User> = {
    admin: {
      id: 'admin-001',
      username: 'admin',
      role: 'admin',
      credits: 1000,
      purchasedModels: [],
    },
    user: {
      id: 'user-001',
      username: 'user',
      role: 'user',
      credits: 1000,
      purchasedModels: [],
    },
  };
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(defaultUsers));
  return defaultUsers;
};

const saveUsers = (users: Record<string, User>) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Restaura sessão do localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { username } = JSON.parse(stored);
      const users = getStoredUsers();
      if (users[username]) {
        setUser(users[username]);
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const predefined = PREDEFINED_USERS[username];
    if (predefined && predefined.password === password) {
      const users = getStoredUsers();
      const userData = users[username];
      setUser(userData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const purchaseModel = (modelId: string, price: number): boolean => {
    if (!user) return false;
    if (user.credits < price) return false;
    if (user.purchasedModels.includes(modelId)) return false;

    const users = getStoredUsers();
    const updatedUser: User = {
      ...user,
      credits: user.credits - price,
      purchasedModels: [...user.purchasedModels, modelId],
    };
    
    users[user.username] = updatedUser;
    saveUsers(users);
    setUser(updatedUser);
    
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        purchaseModel,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
