import React, {useEffect, useState} from 'react';
import {AuthContextObj, LoginData} from "../types/interfaces/Auth";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useFetch} from "../hooks/useFetch";
import { AuthUser } from 'types';

export const AuthContext = React.createContext<AuthContextObj>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  activateAccount: () => {},
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const {sendReq} = useFetch();
  const [user, setUser] = useState<AuthUser | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await sendReq('auth/me') as AuthUser;
        if(data.ok) {
          setUser(data);
        }
      } catch (e) {
        toast.error('Coś poszło nie tak, spróbuj później!');
      }
    })();
  }, [location, sendReq]);

  const signIn = async ({ login, password}: LoginData) => {
    try {
      const data = await sendReq('auth/login', 'POST', {
            email: login,
            password,
          }) as {ok: boolean; message?: string}
      if (data.ok) {
        navigate('/');
        toast.success('Zalogowano!');
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      toast.error('Coś poszło nie tak, spróbuj później!');
    }
  }

  const activateAccount = async (userId: string, activationToken: string, password: string) => {
    try {
      const data = await sendReq(`auth/activate/${userId}/${activationToken}`, 'PATCH', {
            newPassword: password,
          }) as {ok: boolean; message: string}
      if (data.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (e) {
      toast.error('Coś poszło nie tak, spróbuj później!');
    }
  }

  const signOut = async () => {
    try {
      const data = await sendReq('auth/logout') as {ok: boolean; message: string};
      if (data.ok) {
        toast.success(data.message);
        setUser(null);
      } else {
        toast.error('Coś poszło nie tak, spróbuj później!');
      }
    } catch (e) {
      toast.error('Coś poszło nie tak, spróbuj później!');
    }
  }

  return (
    <AuthContext.Provider value={{user, signIn, signOut, activateAccount}}>
      {children}
    </AuthContext.Provider>
  )
}