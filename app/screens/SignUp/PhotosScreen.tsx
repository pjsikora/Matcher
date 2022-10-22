import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../../redux/registerSlice";
import BackButton from "../../components/UI/BackButton";

interface EmailScreenProps {
  navigation: any;
}
const PhotosScreen = ({ navigation }: EmailScreenProps) => {
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
          <BackButton toScreen="searchForInput" navigation={navigation} />
          <Text style={styles.title}>What do You look like?</Text>
          <View style={styles.photosContainer}>
            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.photo}>
                  <Image
                    style={styles.btnImage}
                    source={require("../../images/addBtn.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.photo}>
                  <Image
                    style={styles.btnImage}
                    source={require("../../images/addBtn.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.photo}>
                  <Image
                    style={styles.btnImage}
                    source={require("../../images/addBtn.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.photo}>
                  <Image
                    style={styles.btnImage}
                    source={require("../../images/addBtn.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.photo}>
                  <Image
                    style={styles.btnImage}
                    source={require("../../images/addBtn.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity>
                <View style={styles.photo}>
                  <Image
                    style={styles.btnImage}
                    source={require("../../images/addBtn.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <RegisterButton
            toScreen="aboutYourselfInput"
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
    minHeight: "90%",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    width: "80%",
    fontFamily: "montSBold",
  },
  btnTitle: {
    fontSize: 20,
    marginTop: "15%",
  },
  input: {
    width: "80%",
    backgroundColor: "#F7F7F7",
    height: "10%",
    marginTop: "40%",
  },
  photosContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5%",
    // marginBottom: "10%",
  },
  btn: {},
  btnImage: {
    position: "relative",
    top: "87%",
    left: "65%",
  },
  photo: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EAEAEA",
    border: "3px solid #3333",
    marginBottom: "5%",
  },
  box: {
    width: "30%",
    height: "40%",
    backgroundColor: "#333",
    border: "3px solid #3333",
    marginBottom: "10%",
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default PhotosScreen;
