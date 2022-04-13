import * as AuthSession from "expo-auth-session";
import { AuthResponseType } from "../types/auth";
import Constants from "expo-constants";

export const useGoogleSignIn = () => {
  const signIn = async () => {
    try {
      const CLIENT_ID =
        "278142007373-r3jm878i04m7gi1r2au5i82t6p7mlskk.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@alanrslima/loginsocial";
      const SCOPE = encodeURIComponent("profile email");
      const RESPONSE_TYPE = "token";

      // console.log(Constants.linkingUri);

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
        // returnUrl: `${Constants.linkingUri}expo-auth-session`,
      })) as AuthResponseType;
      console.log(type, params);
    } catch (error) {
      console.log(error);
    }
  };

  return { signIn };
};
