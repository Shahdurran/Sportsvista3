import { View, Text, Image, StyleSheet,ImageBackground } from "react-native";
import React from "react";
import SportsBtn from "../../components/Sportbtn";
import { windowWidth,windowHeight } from '../../src/utils';

const Home = () => {
  const image = require("../../assets/backgroundone.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo2.png")}
          />
        </View>
        <View style={styles.btnContainer}>
        <View style={{ position:"absolute",top:-30,width:windowWidth/2,left:windowWidth/4 - 7,backgroundColor:"red"}}>
          <Text
            style={{ fontSize: 26, fontWeight: "bold", textAlign: "center",color:"white" }}
          >
            Game on hai!
          </Text>
        </View>
          <SportsBtn
            ImgSource={require("../../assets/cricket.png")}
            sportsName="Cricket"
          />
          <SportsBtn
            ImgSource={require("../../assets/football.png")}
            sportsName="Football"
          />
          <SportsBtn
            ImgSource={require("../../assets/basketball.png")}
            sportsName="Basketball"
          />
          <SportsBtn
            ImgSource={require("../../assets/tennis-player.png")}
            sportsName="Tennis"
          />
        </View>
        <View>
          <SportsBtn
            ImgSource={require("../../assets/vs.png")}
            sportsName="Find Match!"
          />
          </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    paddingTop: 10,
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
  btnContainer: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 5,
    paddingVertical: 25,
    paddingHorizontal: 4,
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 10,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
});
