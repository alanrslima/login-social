import React from "react";
import { Button, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export const Home: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={signInWithGoogle} title="Logar" />
    </View>
  );
};
