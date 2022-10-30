import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const EditInfoAddPhotoTile = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <TouchableOpacity>
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={require("../../images/users/zdj1.jpg")}
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
        <TouchableOpacity>
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={require("../../images/users/zdj2.jpg")}
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
        <TouchableOpacity>
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={require("../../images/users/zdj3.jpg")}
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
        <TouchableOpacity>
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={require("../../images/users/zdj4.jpg")}
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
        <TouchableOpacity>
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={require("../../images/users/zdj5.jpg")}
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
        <TouchableOpacity>
          <View style={styles.photo}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              imageStyle={{ borderRadius: 10 }}
              source={require("../../images/users/zdj6.png")}
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
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "5%",
  },
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
    marginBottom: "10%",
    borderRadius: 10,
    shadowOpacity: 33,
    shadowColor: "rgba(65,65,65,0.05)",
  },
});

export default EditInfoAddPhotoTile;
