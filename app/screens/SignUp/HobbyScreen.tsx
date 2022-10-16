import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../../redux/registerSlice";

const hobbies = [
  "Music",
  "Art",
  "Cooking",
  "Fishing",
  "Baking",
  "Walking",
  "Outdoors",
  "Photography",
  "Travel",
  "Movies",
  "Working out",
  "Yoga",
  "Swimming",
  "Instagram",
  "Foodie",
  "Astrology",
  "Dancing",
  "Board Games",
  "Fasion",
  "Cycling",
  "Dog lover",
  "Cat lover",
  "Netflix",
  "Politics",
  "Volunteering",
  "Wine",
  "Craft Beer",
  "History",
  "Geography",
  "Cars",
  "Camping",
  "Biology",
  "Soccer",
  "Psychology",
  "Anime",
  "DIY",
];

interface EmailScreenProps {
  navigation: any;
}
const HobbyScreen = ({ navigation }: EmailScreenProps) => {
  const hobbiesList = hobbies.map((hobby) => {
    return <Text style={styles.hobbyItem}>{hobby}</Text>;
  });

  const dispatch = useDispatch();
  const count = useSelector((state: RegisterUserData) => state);

  const emailHandler = (email: string) => {
    dispatch(addEmail(email));
    console.log(count);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>What's your hobbies?</Text>
          <View style={styles.hobbiesContainer}>
            <Text>{hobbiesList}</Text>
          </View>
          <RegisterButton toScreen="locationInput" navigation={navigation} />
        </View>
        <Image
          style={styles.bcgHearths}
          source={require("../../images/Hearts.png")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    height: "90%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    marginTop: "5%",
    marginBottom: "2%",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  hobbiesContainer: {
    width: "90%",
    height: "55%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  hobbyItem: {
    backgroundColor: "#F2F2F2",
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default HobbyScreen;
