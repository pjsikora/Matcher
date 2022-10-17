import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";

interface EmailScreenProps {
  navigation: any;
}
const GenderScreen = ({ navigation }: EmailScreenProps) => {
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>You are a ...</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setGender("Male");
            }}
          >
            <Text style={gender === "Male" ? styles.textM : styles.text}>
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setGender("Female");
            }}
          >
            <Text style={gender === "Female" ? styles.textF : styles.text}>
              Female
            </Text>
          </TouchableOpacity>
          <RegisterButton toScreen="searchForInput" navigation={navigation} />
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
    display: "flex",
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
    minHeight: "64%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    marginTop: "5%",
    marginBottom: "15%",
    width: "80%",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 70,
    backgroundColor: "transparent",
    borderColor: "#C04D9F",
    borderWidth: 3,
    marginBottom: "10%",
    borderRadius: 55,
  },
  text: {
    color: "#333",
    fontSize: 30,
  },
  textM: {
    color: "#1c72fc",
    fontSize: 30,
  },
  textF: {
    color: "#e317d9",
    fontSize: 30,
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default GenderScreen;
