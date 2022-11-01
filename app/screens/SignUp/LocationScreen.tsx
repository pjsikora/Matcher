import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/registerSlice";
import {
  registerCall,
  uploadPhotosCall,
} from "../../controllers/registerController";
import BackButton from "../../components/UI/BackButton";
import { validators } from "../../validators/validators";

interface EmailScreenProps {
  navigation: any;
}
const LocationScreen = ({ navigation }: EmailScreenProps) => {
  const [city, setCity] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.registerData);

  console.log(state.pending);

  const registerHandler = async () => {
    ////const result = await registerCall(state.data, dispatch);
    const uploadResult = await uploadPhotosCall(state.data.photos, dispatch);
    console.log(uploadResult);
    if (uploadResult.success) {
      // dispatch(addItem({ value: "images", data: uploadResult.message }));
      console.log(state.data);
      const registerResult = await registerCall(
        { ...state.data, images: uploadResult.message },
        dispatch
      );
      if (registerResult.success) navigation.navigate("success");
      else setError(registerResult.message);
    } else setError(uploadResult.message);
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (city.trim())
        if (validators.city.test(city)) {
          setError("");
          setIsDisabled(false);
          dispatch(addItem({ value: "city", data: city }));
        } else {
          setError("Invalid value");
          setIsDisabled(true);
        }
    }

    return () => {
      isMounted = false;
    };
  }, [city]);

  useEffect(() => {
    let isMounted = true;

    isMounted && setLoading(state.pending);
    return () => {
      isMounted = false;
    };
  }, [state.pending]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#AD439C", "#FAAEBE"]}
          style={styles.linearGradient}
        >
          <View style={styles.whiteContainer}>
            <BackButton navigation={navigation} />
            <Text style={styles.title}>Your Localization is...</Text>
            <TextInput
              pointerEvents="box-only"
              style={styles.input}
              onChangeText={(city) => setCity(city)}
              value={city}
              placeholder="Enter your city"
              placeholderTextColor="#ABABAB"
            />
            <Text style={styles.desc}>Your location will be public</Text>
            <Text style={styles.error}>{city && error && error}</Text>
            <TouchableOpacity
              onPress={registerHandler}
              style={isDisabled ? styles.disabledBtn : styles.btn}
              disabled={isDisabled ? true : false}
            >
              <LinearGradient
                colors={["#F5A3BA", "#CF56A1"]}
                start={{ x: 0, y: 0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.registerBtnTitle}>
                  {!loading ? "Register" : "Loading..."}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.bcgHearths}
            source={require("../../images/Hearts.png")}
          />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: "montSBold",
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
    display: "flex",
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
    fontFamily: "montMedium",
  },
  error: {
    marginBottom: "2%",
    color: "red",
  },
});
export default LocationScreen;
