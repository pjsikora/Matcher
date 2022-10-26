import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const EditInfoAddPhotoTile = () => {
  return (
    <View style={styles.boxContainer}>
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
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
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
