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
const BackButtonLogin = ({ navigation }: BackButtonProps) => {
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
    marginLeft: "5%",
    marginBottom: "2%",
    paddingLeft: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {},
});
export default BackButtonLogin;
