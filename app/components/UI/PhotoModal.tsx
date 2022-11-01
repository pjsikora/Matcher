import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

const PhotoButton = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={{ fontSize: 16, color: "#FFF", fontFamily: "montMedium" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const PhotoModal = (props: any) => {
  const [modalVisible, setModalVisible] = useState(props.modalShow);
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      props.onAddImage(result);
    }
  };

  const cameraPicker = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });

    if (!result.cancelled) {
      props.onAddImage(result);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={props.modalShow}>
      <View style={styles.container}>
        <View style={[styles.cardContainer, styles.shadowProp]}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "montSBold",
              color: "#1E1E1E",
              marginTop: "7%",
            }}
          >
            Upload photo
          </Text>
          <PhotoButton title="Take photo from camera" onPress={cameraPicker} />
          <PhotoButton title="Choose photo from library" onPress={pickImage} />
          <PhotoButton
            title="Cancel"
            onPress={() => {
              props.onCancel();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cardContainer: {
    width: "100%",
    height: "35%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#CF56A1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    borderRadius: 10,
  },
});

export default PhotoModal;
