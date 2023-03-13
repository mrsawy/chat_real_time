import { View, Text } from "react-native";
import { Button, lightColors, createTheme, ThemeProvider } from "@rneui/themed";
import LoginInput from "../components/LoginInput";
import PasswordInput from "../components/PasswordInput";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";
import { useCallback, useState, useRef } from "react";

const Login = ({ navigation }) => {
  const handleLogin = useCallback(async (email, password) => {
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
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
  const [error, setError] = useState(false);

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  return (
    <View style={{ padding: 20 }}>
      <LoginInput error={error} value={email} onChangeText={setEmail} />
      <PasswordInput value={password} onChangeText={setPassword} />

      <Button
        title="Log In"
        onPress={() => {
          handleLogin(email, password);
        }}
        style={{ width: `50%`, alignSelf: "center", marginTop: 20 }}
      />

      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={{ width: `50%`, alignSelf: "center", marginTop: 20 }}
      />
    </View>
  );
};

export default Login;
