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

}