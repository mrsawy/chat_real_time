// import { ThemeProvider, createTheme } from '@rneui/themed';
import { View, Text } from "react-native";
import { Button, lightColors, createTheme, ThemeProvider } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import LoginInput from "../components/LoginInput";
import PasswordInput from "../components/PasswordInput";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import { Button, StyleSheet, Text, View } from "react-native";

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase/firebase";
import { useState, useCallback } from "react";
import Chat from "./../screens/Chat";
import { set } from "react-hook-form";
// import { GiftedChat } from "react-native-gifted-chat";

////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [error, setError] = useState(false);

  const handleSignUp = useCallback(async (email, password) => {
    console.log(email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user account:", errorCode, errorMessage);
      setError(true);
      setEmail(``);
      setPassword(``);
    }
  });

  return (
    <View style={{ padding: 20 }}>
      <LoginInput
        value={email}
        onChangeText={setEmail}
        error={error}
      />
      <PasswordInput
        value={password}
        onChangeText={setPassword}
      />
      <PasswordInput placeHolder={`Confirm password`} />

      <Button
        title="Sign Up"
        onPress={(e) => {
          handleSignUp(email, password);
        }}
        style={{ width: `50%`, alignSelf: "center", marginTop: 20 }}
      />
    </View>
  );
};

export default SignUp;

// {/* <SafeAreaProvider>
// <SafeAreaView>
// </SafeAreaView>

// </SafeAreaProvider> */}
