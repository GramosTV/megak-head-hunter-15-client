import React, {useEffect, useState} from 'react';
import {AuthUser} from 'types';

interface LoginData {
  login: string;
  password: string;
}

interface AuthContextObj {
  user: AuthUser | null,
  signIn: ({login, password}: LoginData) => void,
  signOut: () => void,
}

export const AuthContext = React.createContext<AuthContextObj>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/auth/me', {
          credentials: 'include',
          mode: 'cors',
          headers: {
            "Access-Control-Allow-Origin":"true",
            "Content-Type": "application/json",
          }
        });
        if(res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
}