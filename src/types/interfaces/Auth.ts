import { AuthUser } from "types";
import React from "react";

export interface LoginData {
  login: string;
  password: string;
}

export interface AuthContextObj {
  user: AuthUser | null,
  signIn: ({login, password}: LoginData) => void,
  signOut: () => void,
  activateAccount: (userId: string, activationToken: string, password: string) => void,
}

export interface ProtectedRouteInterface {
  isAllowed: boolean;
  children?: React.ReactNode;
}