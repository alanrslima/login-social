import React, { useState } from "react";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";
import { UserProps } from "../../types/user";
import { AuthContext } from "./authContext";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>();

  const { signIn } = useGoogleSignIn();

  const signInWithGoogle = () => {
    signIn();
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
