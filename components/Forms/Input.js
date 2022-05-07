import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputPlacholderContainer}>
          <View style={styles.inputLabelContainer}>
            <Text style={styles.labelStyle}>{props.title}</Text>
          </View>
        <View style={styles.inputContainer}>
          <TextInput
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={"#88a1ae"}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
            secureTextEntry={props.secureTextEntry}
          />
        </View>
      </View>
      {props.showIcon && (
        <View style={styles.iconContainer}>
          {/* <AntDesign name="questioncircleo" size={18} color="#88a1ae" /> */}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 65,
    borderRadius: 8,
    backgroundColor: "#F6F7F9",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  inputPlacholderContainer: {
    width: "90%",
    height: "100%",
  },
  iconContainer: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabelContainer: {
    height: "45%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  inputContainer: {
    height: "55%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontSize: 15,
    fontFamily: "montserrat-regular",
  },
});

export default Input;
