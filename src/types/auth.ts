import { UserProps } from "./user";

export interface AuthContextProps {
  user?: UserProps;
  signInWithGoogle: () => void;
}

export type AuthResponseType = {
  params: {
    access_token: string;
  };
  type: string;
};
