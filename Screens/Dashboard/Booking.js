import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { windowWidth } from "./../../src/utils/index";
import Dropdown from "./../../assets/lib/CustomDropDown";
import CustomButton from "./../../assets/lib/CustomButton";
import { firebase } from "../../src/firebase/config";
import { Sports } from "../../assets/data/SportCategories";


const Booking = () => {
  const [selectedSport, setSport] = useState(undefined);
  const [selectedVenue, setVenue] = useState(undefined);
  const [selectedTeam, setTeam] = useState(undefined);
  const [selectedTime, setTime] = useState(undefined);
  const [data, setData] = useState(["banana"]);

  useEffect (() => { async ()=>{
    
    try{
      const res = await firebase.firestore().collection('Venues')
      .getData()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);
    
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
      });
    }
    catch(err){
      console.log(err);
    }

    setData()
  }
  }, []);


  const image = require("../../assets/backgroundone.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Text style={styles.heading}>Lets Play!</Text>
        </View>
        <View style={styles.inputFields}>
          <Dropdown label="Sport" data={Sports} onSelect={setSport} />
          <Dropdown label="Venue" data={data} onSelect={setVenue} />
          <Dropdown label="Teams Available" data={data} onSelect={setTeam} />
          <Dropdown
            label="Time Slots Available"
            data={data}
            onSelect={setTime}
          />
          {/* <CustomTextInput
            placeholder="Search team to play against"
            containerStyle={{ marginVertical: 10 }}
          /> */}
        </View>
        <View>
          <CustomButton
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
            text="Request Booking"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    // justifyContent: "center"
  },
  heading: {
    marginVertical: 15,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputFields: {
    width: windowWidth / 1.2,
    alignSelf: "center",
    justifyContent: "space-around",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonStyle: {
    padding: 10,
  },
});
