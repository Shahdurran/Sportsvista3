import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/AuthenticationScreen/WelcomeScreen";
import LogInScreen from "../Screens/AuthenticationScreen/LoginScreen";
import RegistrationScreen from "../Screens/AuthenticationScreen/RegistrationScreen";
import DrawerScreen from "./DrawerNavigation";


const Stack = createStackNavigator();

const AuthenticationStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Drawer Screen">
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
        <Stack.Screen name="Login Screen" component={LogInScreen} />
        <Stack.Screen name="Registration Screen" component={RegistrationScreen} />     
        <Stack.Screen name="Drawer Screen" component={DrawerScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthenticationStackNavigation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
