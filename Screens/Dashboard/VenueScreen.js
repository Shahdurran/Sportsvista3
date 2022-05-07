import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  BackHandler,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useFocusEffect } from "@react-navigation/native";
// import { Feather } from "@expo/vector-icons";
const VenueScreen = (props) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        props.navigation.navigate("Acdemy Screen");
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  const [item, setItem] = useState([]);
  const Venues = [
    {
      name: "Moin khan Academy",
      coordinates: { latitude: 23.259933, longitude: 71.412613 },
    },
    {
      name: "NBP Academy",
      coordinates: { latitude: 20.259933, longitude: 72.412613 },
    },
    {
      name: "vital five",
      coordinates: { latitude: 25.259933, longitude: 73.412613 },
    },
    {
      name: "PIA cricket Academy",
      coordinates: { latitude: 26.259933, longitude: 77.412613  },
    },
    {
      name: "National Cricket Academy",
      coordinates: { latitude: 23.259933, longitude: 77.412613 },
    },
  ];
  const handlerSearch = (e) => {
    try {
      const arrayOfSearch = [];
      const filterValue = Venues.filter((item) => {
        let title = item?.name?.toLowerCase();
        let searchWord = e?.toLowerCase();
        if (title.includes(searchWord)) {
          arrayOfSearch?.push(item);
        }
      });
      console.log(arrayOfSearch);
      if (arrayOfSearch?.length != 0) {
        setItem(arrayOfSearch);
      } else {
      }
    } catch (error) {}
  };
  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "montserrat-bold",
            paddingTop: 10,
          }}
        >
          Location
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search By Acdemy Name"
            style={styles.searchTextStyle}
            onChangeText={(e) => {
              // setSearchValue(e);
              handlerSearch(e);
              if (e.length == 0) {
                setItem(Venues);
              }
            }}
          />
          <TouchableOpacity>
            {/* <Feather name="search" size={20} color="gray" /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            height: 320,
            marginTop: -50,
            borderWidth: 2,
          }}
        >
          <MapView
            region={{
              latitude: 23.279933,
              longitude: 71.402613,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009,
            }}
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            mapType="standard"
          >
            {item?.length == 0
              ? Venues?.map((marker) => (
                  <MapView.Marker coordinate={marker.coordinates} />
                ))
              : item?.map((marker) => (
                  <MapView.Marker coordinate={marker.coordinates} />
                ))}
          </MapView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 30,
    backgroundColor: "#fff",
    zIndex: 999,
  },
  searchTextStyle: { fontFamily: "montserrat-bold", width: "80%" },
});

export default VenueScreen;
