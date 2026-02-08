import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  username: string;
  name?: string;
  email?: string;
  role: UserRole;
  credits: number;
  purchasedModels: string[];
}

interface StoredUserData {
  password: string;
  role: UserRole;
  name?: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (name: string, email: string, username: string, password: string) => boolean;
  logout: () => void;
  purchaseModel: (modelId: string, price: number) => boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'loja_negocio_auth';
const USERS_STORAGE_KEY = 'loja_negocio_users';
const CREDENTIALS_STORAGE_KEY = 'loja_negocio_credentials';

const getStoredCredentials = (): Record<string, StoredUserData> => {
  const stored = localStorage.getItem(CREDENTIALS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {};
};

const saveCredentials = (credentials: Record<string, StoredUserData>) => {
  localStorage.setItem(CREDENTIALS_STORAGE_KEY, JSON.stringify(credentials));
};

const getStoredUsers = (): Record<string, User> => {
  const stored = localStorage.getItem(USERS_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {};
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
    const credentials = getStoredCredentials();
    const userCred = credentials[username];
    
    if (userCred && userCred.password === password) {
      const users = getStoredUsers();
      const userData = users[username];
      if (userData) {
        setUser(userData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ username }));
        return true;
      }
    }
    return false;
  };

  const register = (name: string, email: string, username: string, password: string): boolean => {
    const credentials = getStoredCredentials();
    
    // Verifica se usuário já existe
    if (credentials[username]) {
      return false;
    }
    
    // Cria novo usuário
    const newUser: User = {
      id: `user-${Date.now()}`,
      username,
      name,
      email,
      role: 'user',
      credits: 100, // Créditos iniciais
      purchasedModels: [],
    };
    
    // Salva credenciais
    credentials[username] = {
      password,
      role: 'user',
      name,
      email,
    };
    saveCredentials(credentials);
    
    // Salva dados do usuário
    const users = getStoredUsers();
    users[username] = newUser;
    saveUsers(users);
    
    return true;
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
        register,
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
