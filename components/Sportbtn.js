import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "./../src/utils/index";

const SportsBtn = (props) => {
  const navigation = useNavigation();
  const searchTeamsBySport = () => {
    navigation.navigate("Booking", { category: props.sportsName });
  };

  if (props.sportsName == "Find Match!") {
    return (
      <View>
        <TouchableOpacity
          style={styles.findBtn}
          onPress={() => searchTeamsBySport()}
        >
          <Image style={{ width: 50, height: 50 }} source={props.ImgSource} />
          <Text style={styles.btnTxt}>{props.sportsName}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        <TouchableOpacity
          style={styles.srvBtn}
          onPress={() => searchTeamsBySport()}
        >
          <Image style={{ width: 50, height: 50 }} source={props.ImgSource} />
          <Text style={{ color: "#000", fontWeight: "500" }}>
            {props.sportsName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // return (
  //   <View>
  //     <TouchableOpacity style={styles.srvBtn} onPress={() => searchTeamsBySport()}>
  //       <Image style={{width: 50, height: 50}} source={props.ImgSource} />
  //       <Text style={{color: '#000', fontWeight: '500'}}>
  //         {props.sportsName}
  //       </Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};

export default SportsBtn;

const styles = StyleSheet.create({
  srvBtn: {
    width: 85,
    height: 85,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#cdcdcd",
  },
  findBtn: {
    paddingVertical: 10,
    paddingHorizontal: windowWidth / 5,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 10,
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#000",
  },
  btnTxt: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginLeft: 10,
  },
});
