import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
  useContext
} from 'react';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

interface UserProps {
  uid: string;
  email: string | null;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: UserProps | null;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email
        };

        setUser(userData);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();

  }, []);

  async function logout() {

    await signOut(auth);

    setUser(null);
  }

  return (

    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export {
  AuthProvider,
  useAuth
};