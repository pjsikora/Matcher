import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import RegisterButton from "../../components/UI/RegisterButton";
import { LinearGradient } from "expo-linear-gradient";
import { RegisterUserData } from "../../types/types";
import { useSelector } from "react-redux";
import BackButton from "../../components/UI/BackButton";
import PhotoModal from "../../components/UI/PhotoModal";
interface EmailScreenProps {
  navigation: any;
}
const PhotosScreen = ({ navigation }: EmailScreenProps) => {
  const count = useSelector((state: RegisterUserData) => state);

  return (
    <View style={styles.container}>
      <PhotoModal />
      <LinearGradient
        colors={["#AD439C", "#FAAEBE"]}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <BackButton navigation={navigation} />
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
            isDisabled={false}
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
