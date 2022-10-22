import {
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

interface BackButtonProps {
  navigation: any;
}
const BackButton = ({ navigation }: BackButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.backIconContainer}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        style={styles.backIcon}
        source={require("../../images/backIcon.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backIconContainer: {
    marginRight: "auto",
    marginTop: "15%",
    marginLeft: "5%",
    marginBottom: "2%",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {},
});
export default BackButton;
