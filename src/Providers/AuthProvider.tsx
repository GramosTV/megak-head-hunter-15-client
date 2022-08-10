import React, {useEffect, useState} from 'react';
import {AuthContextObj, LoginData} from "../types/interfaces/Auth";
import {useLocation, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const AuthContext = React.createContext<AuthContextObj>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  activateAccount: () => {},
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/auth/me', {
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'true',
            "Content-Type": "application/json",
          }
        });
        const data = await res.json();
        if(data.ok) {
          setUser(data);
        }
      } catch (e) {
        toast.error('Coś poszło nie tak, spróbuj później!');
      }
    })();
  }, [location]);

  const signIn = async ({ login, password}: LoginData) => {
    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin":"true",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.ok) {
        setUser(data);
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
      const res = await fetch(`/auth/activate/${userId}/${activationToken}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin":"true",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword: password,
        }),
      });
      const data = await res.json();
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
    setUser(null);
    try {
      const res = await fetch('/auth/logout', {
        credentials: 'include',
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin":"true",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.ok) {
        toast.success(data.message);
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