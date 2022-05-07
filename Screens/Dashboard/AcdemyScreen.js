import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
// import { Feather } from "@expo/vector-icons";

const AcdemyScreen = (props) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );
  const [search, setSearch] = useState([]);
  const [noValueFond, setNoValueFond] = useState("");
  const Acdemy = [
    {
      Title: "Moin khan Academy",
      Time: "7 AM to 5 PM",

      Images: [
        {
          imges: require("../../assets/AcdemyImages/MoinKhanAcdemy/FirstImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/MoinKhanAcdemy/SecondImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/MoinKhanAcdemy/ThirdImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/MoinKhanAcdemy/FourthImage.jpeg"),
        },
      ],
      location: {
        latitude: 23.259933,
        longitude: 77.412613,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      cordinate: { latitude: 23.259933, longitude: 77.412613 },
    },
    {
      Title: "NBP Academy",
      Time: "10 AM to 10 PM",
      Images: [
        {
          imges: require("../../assets/AcdemyImages/NBP/FirstImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/NBP/SecondImage.jpeg"),
        },
      ],
      location: {
        latitude: 23.259933,
        longitude: 77.412613,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      cordinate: { latitude: 23.259933, longitude: 77.412613 },
    },
    {
      Title: "vital five",
      Time: "10 AM to 5 PM",
      Images: [
        {
          imges: require("../../assets/AcdemyImages/VitalFive/FirstImage.png"),
        },
        {
          imges: require("../../assets/AcdemyImages/VitalFive/SecondImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/VitalFive/ThirdImage.jpeg"),
        },
      ],
      location: {
        latitude: 23.259933,
        longitude: 77.412613,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      cordinate: { latitude: 23.259933, longitude: 77.412613 },
    },
    {
      Title: "PIA cricket Academy",
      Time: "9 AM to 6 PM",
      Images: [
        {
          imges: require("../../assets/AcdemyImages/PIA/FirstImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/PIA/SecondImage.jpeg"),
        },
      ],
      location: {
        latitude: 23.259933,
        longitude: 77.412613,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      cordinate: { latitude: 23.259933, longitude: 77.412613 },
    },
    {
      Title: "National Cricket Academy",
      Time: "8 AM to 6 PM",
      Images: [
        {
          imges: require("../../assets/AcdemyImages/Natation/FirstImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/Natation/SecondImage.jpeg"),
        },
        {
          imges: require("../../assets/AcdemyImages/Natation/ThirdImage.jpeg"),
        },
      ],
      location: {
        latitude: 23.259933,
        longitude: 77.412613,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      cordinate: { latitude: 23.259933, longitude: 77.412613 },
    },
  ];

  const AcdemyCard = (item) => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cardContainer}
          onPress={() =>
            props.navigation.navigate("Acdemy Detail Screen", {
              route: item,
            })
          }
        >
          <Text style={styles.acdemyTextStyle}>{item?.item?.Title}</Text>
        </TouchableOpacity>
      </>
    );
  };

  const handlerSearch = (e) => {
    try {
      const arrayOfSearch = [];
      const filterValue = Acdemy.filter((item) => {
        let title = item?.Title?.toLowerCase();
        let searchWord = e?.toLowerCase();
        if (title.includes(searchWord)) {
          console.log("enter");
          arrayOfSearch?.push(item);
        }
      });
      console.log(arrayOfSearch);
      if (arrayOfSearch?.length != 0) {
        setSearch(arrayOfSearch);
        setNoValueFond("")
      } else {
        setNoValueFond("No Acdemy Found");
      }
    } catch (error) {}
  };
  console.log("set-search" ,search)
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search By Acdemy Name"
            style={styles.searchTextStyle}
            onChangeText={(e) => {
              // setSearchValue(e);
              handlerSearch(e);
              if (e.length == 0) {
                setSearch([]);
                setNoValueFond("");
              }
            }}
          />
          <TouchableOpacity>
            {/* <Feather name="search" size={20} color="gray" /> */}
          </TouchableOpacity>
        </View>
        {noValueFond ? (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: "montserrat-medium" }}>
              {noValueFond}
            </Text>
          </View>
        ) : search?.length != 0 ? (
          <FlatList data={search} renderItem={AcdemyCard} />
        ) : (
          <FlatList data={Acdemy} renderItem={AcdemyCard} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: "black",
    borderRadius: 10,
    height: 100,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2d415a",
  },
  acdemyTextStyle: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
    backgroundColor: "#fff",
  },
  searchTextStyle: { fontFamily: "montserrat-bold", width: "80%" },
});
export default AcdemyScreen;
