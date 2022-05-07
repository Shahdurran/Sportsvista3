import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenuDetail from "./DrawerMenu";
import AcdemyScreen from "../Screens/Dashboard/AcdemyScreen";
import AcdemyDetailScreen from "../Screens/Dashboard/AcdemyDetailScreen";
import VenueScreen from "../Screens/Dashboard/VenueScreen";
import Booking from "../Screens/Dashboard/Booking";
import Home from "./../Screens/Dashboard/Home";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const DrawerScreen = (props) => {
  const leftHeaderBack = () => {
    const navigation = useNavigation();
    return (
      <Icon.Button
        name="arrow-back-outline"
        size={25}
        color="#E60023"
        backgroundColor="#fff"
        style={{ paddingLeft: 11 }}
        onPress={() => navigation.goBack()}
      ></Icon.Button>
    );
  };
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home Screen"
        screenOptions={{
          headerTitle: "",
          drawerStyle: {
            backgroundColor: "#2d415a",
            width: 220,
          },
        }}
        drawerContent={() => <DrawerMenuDetail {...props} />}
      >
        <Drawer.Screen name="Home Screen" component={Home} />
        <Drawer.Screen name="Venue Screen" component={VenueScreen} />
        <Drawer.Screen name="Academy Screen" component={AcdemyScreen} />
        <Drawer.Screen
          name="Booking"
          component={Booking}
          options={{
            headerTitle: "Booking",
            headerLeft: () => leftHeaderBack(),
          }}
        />
        <Drawer.Group
          screenOptions={{
            //disabling drawer header
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="Acdemy Detail Screen"
            component={AcdemyDetailScreen}
          />
        </Drawer.Group>
      </Drawer.Navigator>
    </>
  );
};
export default DrawerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 80,
  },
});
