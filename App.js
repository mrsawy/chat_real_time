import { StatusBar } from "expo-status-bar";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// console.log(SafeAreaProvider);
// import { GiftedChat } from "react-native-gifted-chat";
// console.log(GiftedChat);
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import DetailsScreen from "./screens/Details";
import HomeScreen from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp";
import { AuthCntx, AuthcontextProvidor } from "./contexts/Authcontext";
import { useContext, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase/firebase";

import React from "react";

import Chat from "./screens/Chat.js";

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
const Root = () => {
  const { user, setUser } = useContext(AuthCntx);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      try {
        u ? setUser(u) : setUser(null);
      } catch (e) {
        console.log(e);
      }
    });
    return unsub;
  }, [user]);
  return (
    <NavigationContainer>
      {!user && (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}

      {user && (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

////////////////
////////////////
////////////////
export default function App() {
  return (
    <AuthcontextProvidor>
      <Root />
    </AuthcontextProvidor>
  );
}

//--------------------
//--------------------
//--------------------
//--------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
