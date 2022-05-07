import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
// import Colors from "../../constant/Colors";
const SearchBar = (props) => {
  return (
    <>
      <View style={styles.searchConatiner}>
        <TextInput
          placeholderTextColor={"#88a1ae"}
          placeholder={props.placeholder}
          fontSize={15}
          style={styles.searchTextStyle}
          onChangeText={(e) => {
            props.getSearchByNo(e);
          }}
        />
        {props.isAdvanceSearch ? (
          <TouchableOpacity onPress={()=>props.cancelButton()}>
            {/* <Entypo name="circle-with-cross" size={20} color={Colors.primary} /> */}
          </TouchableOpacity>
        ) : (
          <View></View>
          // <MaterialCommunityIcons
          //   name="text-box-search-outline"
          //   size={20}
          //   color={Colors.primary}
          // />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  searchConatiner: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 6,
    width: "90%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchTextStyle: {
    fontFamily: "montserrat-regular",
    width: "90%",
  },
});

export default SearchBar;
