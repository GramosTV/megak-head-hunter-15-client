import React, {useEffect, useState} from 'react';
import {AuthContextObj, LoginData} from "../types/interfaces/Auth";

export const AuthContext = React.createContext<AuthContextObj>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState(null);

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
        if(res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

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
      if (data.ok) {
        console.log(data);
      } else {
        console.log(data.error);
      }
    } catch (e) {
      console.log(e);
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
      if (res.ok) {
        console.log('Succesfully logout!')
      } else {
        console.log('You must be logged in first to log out!');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}