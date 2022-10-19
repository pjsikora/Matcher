import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserData } from "../../types/types";
import { addItem } from "../../redux/registerSlice";

interface EmailScreenProps {
  navigation: any;
}
const SearchForScreen = ({ navigation }: EmailScreenProps) => {
  const [lfGender, setLfGender] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state: RegisterUserData) => state);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (lfGender.length > 1) {
        setIsDisabled(false);
        dispatch(addItem({ value: "searchFor", data: lfGender }));
        console.log(state);
      } else {
        setIsDisabled(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [lfGender]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>You are looking for...</Text>
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
          <RegisterButton
            isDisabled={isDisabled}
            toScreen="photosInput"
            navigation={navigation}
          />
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
    minHeight: "70%",
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
    fontFamily: "montMedium",
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
    height: 60,
    backgroundColor: "transparent",
    borderColor: "#C04D9F",
    borderWidth: 3,
    marginBottom: "10%",
    borderRadius: 25,
  },
  text: {
    color: "#333",
    fontSize: 24,
    fontFamily: "montMedium",
  },
  textM: {
    color: "#1c72fc",
    fontSize: 24,
    fontFamily: "montMedium",
  },
  textF: {
    color: "#e317d9",
    fontSize: 24,
    fontFamily: "montMedium",
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default SearchForScreen;
