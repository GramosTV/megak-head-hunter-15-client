import { AuthUser } from "types";

export interface LoginData {
  login: string;
  password: string;
}

export interface AuthContextObj {
  user: AuthUser | null,
  signIn: ({login, password}: LoginData) => void,
  signOut: () => void,
}