import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";

const SearchForScreen = ({ navigation }) => {
  const [lfGender, setLfGender] = useState("");

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
              setLfGender("Male");
            }}
          >
            <Text style={lfGender === "Male" ? styles.textM : styles.text}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setLfGender("Female");
            }}
          >
            <Text style={lfGender === "Female" ? styles.textF : styles.text}>
              Female
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setLfGender("Both");
            }}
          >
            <Text style={lfGender === "Both" ? styles.textF : styles.text}>
              Both
            </Text>
          </TouchableOpacity>
          <RegisterButton toScreen="searchForInput" navigation={navigation} />
        </View>
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
    height: "64%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    marginTop: "15%",
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
    height: "15%",
    backgroundColor: "#333",
    marginTop: "4%",
    borderRadius: 55,
  },
  text: {
    color: "#fff",
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
});
export default SearchForScreen;
