import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FormInputError = (status) => {

  return (
    <View>
      {status.touched && status.errors && (
        <Text style={styles.errorTextStyle}>
          {status.errors}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize:10,
    color: "red",
    fontFamily:"montserrat-semiBold",
    paddingBottom:8,
    paddingLeft:8
  },
});
export default FormInputError;
