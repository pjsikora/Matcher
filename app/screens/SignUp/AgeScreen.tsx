import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";

interface EmailScreenProps {
  navigation: any;
}
const AgeScreen = ({ navigation }: EmailScreenProps) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>What's your age?</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(newText) => setText(newText)}
            value={text}
            placeholder="Age"
            placeholderTextColor="#ABABAB"
          />
          <RegisterButton toScreen="genderInput" navigation={navigation} />
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
    minHeight: "60%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    width: "80%",
    marginTop: "10%",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  input: {
    width: "20%",
    height: "10%",
    marginTop: "15%",
    marginBottom: "15%",
    textAlign: "center",
    fontSize: 24,
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
  },
  btn: {},
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default AgeScreen;
