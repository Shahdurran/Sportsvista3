import React, {useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar } from "react-native-paper";

const DrawerMenuDetail = (props) => {

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
      <View>
        <View style={styles.profileContainer}>
          <Avatar.Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
            }}
            size={80}
          />
          <Text style={styles.profileTextStyle}>
            {/* {lastName} {firstName} */}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Venue Screen");
            }}
            style={styles.drawerTabContainer}
          >
            {/* <MaterialCommunityIcons
              name="desktop-mac-dashboard"
              size={18}
              color="#fff"
            /> */}
            <Text style={styles.drawerTextStyle}>Venue Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Acdemy Screen");
            }}
            style={styles.drawerTabContainer}
          >
            {/* <MaterialCommunityIcons
              name="desktop-mac-dashboard"
              size={18}
              color="#fff"
            /> */}
            <Text style={styles.drawerTextStyle}>Academy Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Welcome Screen")}
          style={styles.logoutTextContainer}
        >
          {/* <MaterialIcons name="logout" size={24} color="black" /> */}
          <Text style={styles.logoutTextStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenuDetail;

const styles = StyleSheet.create({
  //Conatiner
  drawerContainer: {
    justifyContent: "space-between",
    display: "flex",
    height: "100%",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  logoutContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  logoutTextContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  drawerTabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  dropDownTabContaineer: {
    backgroundColor: "#6cbffd",
  },
  dropDownContainerStyle: {
    justifyContent: "space-between",
  },
  //Style
  profileTextStyle: {
    fontFamily: "montserrat-medium",
    fontSize: 18,
    paddingTop: 10,
    color: "#fff",
    paddingBottom: 10,
  },
  dropDownTextStyle: {
    fontSize: 13,
  },
  drawerTextStyle: {
    paddingBottom: 3,
    fontFamily: "montserrat-regular",
    color: "#fff",
    fontSize: 15,
    paddingLeft: 15,
  },
  logoutTextStyle: {
    fontSize: 20,
    color: "black",
    fontFamily: "montserrat-regular",
    paddingBottom: 2,
    paddingLeft: 5,
  },
});
