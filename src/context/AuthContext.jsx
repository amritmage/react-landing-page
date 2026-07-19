import React, { createContext, useContext, useEffect, useState } from 'react';

const AUTH_STORAGE_KEY = 'urban-worn-auth-user';

const AuthContext = createContext(null);

const readStoredUser = () => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    if (!user?.email || !user?.name) return null;
    return user;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readStoredUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const login = ({ name, email }) => {
    setUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
    });
  };

  const signup = ({ name, email }) => {
    // Demo only — no database insert. Session is saved locally in the browser.
    setUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
