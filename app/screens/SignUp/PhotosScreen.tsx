import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useSelector } from "react-redux";
import BackButton from "../../components/UI/BackButton";
import PhotoModal from "../../components/UI/PhotoModal";
import { set } from "react-native-reanimated";
import { preventAutoHideAsync } from "expo-splash-screen";
interface EmailScreenProps {
  navigation: any;
}
const PhotosScreen = ({ navigation }: EmailScreenProps) => {
  const count = useSelector((state: RegisterUserData) => state);
  const [isModalShowedUp, setIsModalShowedUp] = useState(false);
  const [images, setImages] = useState([{}]);
  const [isDisabled, setIsDisabled] = useState(true);

  const addImagesHandler = (items: any) => {
    setImages((current) => [...current, items]);
    if (images.length >= 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <View style={styles.container}>
      <PhotoModal
        modalShow={isModalShowedUp}
        onCancel={() => {
          setIsModalShowedUp(false);
        }}
        onAddImage={addImagesHandler}
      />
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>What do You look like?</Text>
          <View style={styles.photosContainer}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalShowedUp(true);
                }}
              >
                <View style={styles.photo}>
                  <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    imageStyle={{ borderRadius: 10 }}
                    source={images[1]}
                  >
                    <Image
                      style={styles.btnImage}
                      source={require("../../images/addBtn.png")}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalShowedUp(true);
                }}
              >
                <View style={styles.photo}>
                  <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    imageStyle={{ borderRadius: 10 }}
                    source={images[2]}
                  >
                    <Image
                      style={styles.btnImage}
                      source={require("../../images/addBtn.png")}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalShowedUp(true);
                }}
              >
                <View style={styles.photo}>
                  <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    imageStyle={{ borderRadius: 10 }}
                    source={images[3]}
                  >
                    <Image
                      style={styles.btnImage}
                      source={require("../../images/addBtn.png")}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalShowedUp(true);
                }}
              >
                <View style={styles.photo}>
                  <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    imageStyle={{ borderRadius: 10 }}
                    source={images[4]}
                  >
                    <Image
                      style={styles.btnImage}
                      source={require("../../images/addBtn.png")}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalShowedUp(true);
                }}
              >
                <View style={styles.photo}>
                  <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    imageStyle={{ borderRadius: 10 }}
                    source={images[5]}
                  >
                    <Image
                      style={styles.btnImage}
                      source={require("../../images/addBtn.png")}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalShowedUp(true);
                }}
              >
                <View style={styles.photo}>
                  <ImageBackground
                    style={{ width: "100%", height: "100%" }}
                    imageStyle={{ borderRadius: 10 }}
                    source={images[6]}
                  >
                    <Image
                      style={styles.btnImage}
                      source={require("../../images/addBtn.png")}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <RegisterButton
            isDisabled={isDisabled}
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
  },
  box: {
    width: "30%",
    height: "40%",
    backgroundColor: "#F2F2F2",
    borderWidth: 3,
    borderColor: "#EAEAEA",
    borderRadius: 10,
    marginBottom: "10%",
  },
  bcgHearths: {
    position: "absolute",
    top: "60%",
    zIndex: -1,
  },
});
export default PhotosScreen;
