import React from "react";
import { AuthProvider } from "./auth/authProvider";

export const Contexts: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
