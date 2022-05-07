import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const Button = ({
  externalButtonContainerStyle,
  externalTextStyle,
  title,
  onPress,
  loader,
  icon,
  setIcon,
  disabled
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.buttonContainer, externalButtonContainerStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.TextStyle, externalTextStyle]}>{title}</Text>

      {loader ? <ActivityIndicator size="small" color="#fff" /> : null}
      {setIcon ? icon : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    fontSize: 18,
    fontFamily: "montserrat-regular",
    paddingRight: 10,
  },
});

export default Button;
