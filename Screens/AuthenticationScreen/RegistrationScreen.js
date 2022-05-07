import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { firebase } from "../../src/firebase/config";
import Input from "../../components/Forms/Input";
import Colors from "../../constant/Colors";
import Button from "../../components/Forms/Button";
//formik
import * as Yup from "yup";
import { Formik } from "formik";
import FormInputError from "../../components/FormInputError";
const RegistrationScreen = (props) => {
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [loaderLoading, setLoaderLoading] = useState(false);

  const handleSubmit = async (registrationDetails) => {
    try {
      setLoaderLoading(true);

      // Account creation with the email and password
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationDetails.email,
          registrationDetails.password
        );

      // Getting the id of just created user
      const uid = response.user.uid;
      const data = {
        ...registrationDetails,
        id: uid,
      };

      // Storing user information on the firestore collection named Users
      const usersRef = firebase.firestore().collection("Users");
      await usersRef.doc(uid).set(data);

      // Navigate to Home Screen

      setLoaderLoading(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        // Show error on the screen, for now I just console logged.
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        // Show error on the screen, for now I just console logged.
        console.log("That email address is invalid!");
      }

      // Show error on the screen, for now I just console logged.
      console.log("Something went wrong!");

      setErrorDisplay(true);
      setLoaderLoading(false);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: Yup.string()
      .required("First Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email is required"),
    phoneNo: Yup.number().required("Phone no is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        `Must Contain 8 Characters , One Uppercase , One Lowercase , One Number and One Special Case Character`
      ),
  });
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/Images/SignIn.png")}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingStyle}>Sign Up</Text>
          </View>
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>
              Taxation is the price which civilized communities pay for the
              opportunity of remaining civilized.
            </Text>
          </View>
          {errorDisplay ? (
            <Error error="An account with this email already exists" />
          ) : null}

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNo: "",
              address: "",
              password: "",
              isMobile: true,
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={styles.inputContainer}>
                    <Input
                      title="FirstName"
                      placeholder="**********"
                      value={values.firstName}
                      onChangeText={handleChange("firstName")}
                      onBlur={() => setFieldTouched("firstName")}
                    />
                    <FormInputError
                      touched={touched.firstName}
                      errors={errors.firstName}
                    />
                    <Input
                      title="LastName"
                      placeholder="**********"
                      value={values.lastName}
                      onChangeText={handleChange("lastName")}
                      onBlur={() => setFieldTouched("lastName")}
                    />
                    <FormInputError
                      touched={touched.lastName}
                      errors={errors.lastName}
                    />
                    <Input
                      title="Email"
                      placeholder="**********"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={() => setFieldTouched("email")}
                    />
                    <FormInputError
                      touched={touched.email}
                      errors={errors.email}
                    />
                    <Input
                      title="Phone No"
                      placeholder="**********"
                      value={values.phoneNo}
                      onChangeText={handleChange("phoneNo")}
                      onBlur={() => setFieldTouched("phoneNo")}
                    />
                    <FormInputError
                      touched={touched.phoneNo}
                      errors={errors.phoneNo}
                    />
                    <Input
                      title="Team name"
                      placeholder="**********"
                      value={values.address}
                      onChangeText={handleChange("address")}
                      onBlur={() => setFieldTouched("address")}
                    />
                    <FormInputError
                      touched={touched.address}
                      errors={errors.address}
                    />
                    <Input
                      title="Password"
                      placeholder="**********"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password")}
                    />
                    <FormInputError
                      touched={touched.password}
                      errors={errors.password}
                    />
                  </View>
                </View>

                <View style={styles.buttonContainer}>
                  <Button
                    title="Sign Up"
                    externalTextStyle={{
                      color: "white",
                    }}
                    externalButtonContainerStyle={styles.buttonStyle}
                    loader={loaderLoading}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </View>
              </>
            )}
          </Formik>
          <TouchableOpacity
            style={styles.signUpContainer}
            onPress={() => props.navigation.navigate("Login Screen")}
            activeOpacity={0.7}
          >
            <Text style={styles.signUptext}>
              Already have an account?
              <Text style={styles.boldStyle}>Login.</Text>
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    height: "auto",
    paddingTop: 20,
  },
  imageContainer: {
    marginTop: 25,
  },
  headingContainer: {
    paddingVertical: 10,
  },
  subHeadingContainer: {
    paddingVertical: 10,
  },
  inputContainer: {
    paddingTop: 10,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderRadius: 10,
    width: "100%",
  },

  buttonContainer: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  signUpContainer: {
    paddingVertical: 5,
    alignItems: "center",
    marginTop: 20,
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  headingStyle: {
    fontSize: 30,
    color: Colors.primary,
    fontFamily: "montserrat-bold",
  },
  subHeading: {
    fontSize: 15,
    color: Colors.accent,
    fontFamily: "montserrat-regular",
  },
  signUptext: {
    fontSize: 15,
    color: Colors.accent,
    fontFamily: "montserrat-regular",
  },
  boldStyle: {
    fontSize: 15,
    color: Colors.primary,
    fontFamily: "montserrat-bold",
  },
});
export default RegistrationScreen;
