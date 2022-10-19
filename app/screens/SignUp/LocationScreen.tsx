import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/registerSlice";
import { registerCall } from "../../controllers/registerController";

interface EmailScreenProps {
  navigation: any;
}
const LocationScreen = ({ navigation }: EmailScreenProps) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: RegisterUserData) => state);

  const [isDisabled, setIsDisabled] = useState(true);

  const registerHandler = async () => {
    const result = await registerCall(state.registerData);

    if (result) {
      navigation.navigate("success");
      console.log(result);
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (city.length > 2) {
        setIsDisabled(false);
        dispatch(addItem({ value: "city", data: city }));
        console.log(state);
      } else {
        setIsDisabled(true);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [city]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Your Localization is...</Text>
          <TextInput
            style={styles.input}
            onChangeText={(city) => setCity(city)}
            value={city}
            placeholder="Enter your city"
            placeholderTextColor="#ABABAB"
          />
          <Text style={styles.desc}>Your location will be public</Text>
          <TouchableOpacity
            onPress={() => registerHandler()}
            style={isDisabled ? styles.disabledBtn : styles.btn}
            disabled={isDisabled ? true : false}
          >
            <LinearGradient
              colors={["#F5A3BA", "#CF56A1"]}
              start={{ x: 0, y: 0 }}
              style={styles.linearGradient}
            >
              <Text style={styles.registerBtnTitle}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>
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
    fontSize: 50,
    marginTop: "5%",
    marginBottom: "2%",
    width: "80%",
    fontFamily: "montMedium",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  input: {
    width: "80%",
    height: "10%",
    marginTop: "20%",
    borderBottomColor: "#1E1E1E",
    borderBottomWidth: 1,
    lineHeight: 35,
    fontSize: 20,
    fontFamily: "montRegular",
  },
  desc: {
    fontSize: 12,
    marginBottom: "10%",
    color: "#ABABAB",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginTop: 2,
    fontFamily: "montRegular",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C04D9F",
    borderRadius: 15,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
    marginBottom: 50,
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
  disabledBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C04D9F",
    borderRadius: 15,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
    marginBottom: 50,
    opacity: 0.5,
  },
  registerBtnTitle: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 28,
  },
});
export default LocationScreen;
