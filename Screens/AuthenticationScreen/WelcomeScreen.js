import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { View, StyleSheet, Text, Image } from "react-native";

import Colors from "../../constant/Colors";
import Button from "../../components/Forms/Button";

const WelcomeScreen = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [item, setItem] = useState([
    {
      image: require("../../assets/Images/sportsVista.jpeg"),
      title: `Welcome to `,
      boldText: "sports Vista",
      subText:
        "where team meets team Sports vista is app where we promote our local teams to showcase their talents ",
    },
    {
      image: require("../../assets/Images/Football.jpeg"),
      boldText: `sports Vista`,
      subText:
        "where team meets team Sports vista is app where we promote our local teams to showcase their talents ",
    },
    {
      image: require("../../assets/Images/Baskitball.jpeg"),
      boldText: `sports Vista`,
      subText:
        "where team meets team Sports vista is app where we promote our local teams to showcase their talents ",
    },
  ]);
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slideContainer}>
        <View>
        <Image
          style={styles.imagesStyle}
          source={item.image}
          resizeMode="contain"
        />
        </View>
        <Text style={styles.titleStyle}>
          {item.title}
          <Text style={styles.boldStyle}>{item.boldText}</Text>
        </Text>
        <Text style={styles.subTextStyle}>{item.subText}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.sliderContainer}>
        <Carousel
          data={item}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
          autoplay={true}
          loop={true}
          onSnapToItem={(index) => setActiveIndex(index)}
          autoplayInterval={8000}
        />
        <Pagination
          dotsLength={item.length}
          activeDotIndex={activeIndex}
          containerStyle={{
            backgroundColor: "white",
            height: 5,
            width: 65,
          }}
          dotStyle={{
            width: 11,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: Colors.primary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          externalButtonContainerStyle={styles.buttonStyle}
          externalTextStyle={styles.buttonTextColor}
          onPress={() => props.navigation.navigate("Registration Screen")}
        />
        <Button
          title="Login"
          externalButtonContainerStyle={styles.loginButtonStyle}
          externalTextStyle={styles.LoginButtonTextColor}
          onPress={() => props.navigation.navigate("Login Screen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Screen
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop:50
  },

  sliderContainer: {
    height: "65%",
    width: "100%",
    marginTop: "5%",
    alignItems: "center",
  },
  buttonContainer: {
    height: "30%",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F9FF",
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextColor: {
    color: "#fff",
  },
  loginButtonStyle: {
    backgroundColor: "white",
    borderColor: Colors.primary,
    width: "90%",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginButtonTextColor: {
    color: Colors.primary,
  },

  //Slider Container
  slideContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imagesStyle: {
    marginBottom: 40,
    height:200
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: "montserrat-medium",
    paddingVertical: 20,
  },
  subTextStyle: {
    fontSize: 15,
    fontFamily: "montserrat-regular",
    textAlign: "center",
  },
  boldStyle: {
    color: Colors.primary,
  },
});

export default WelcomeScreen;
