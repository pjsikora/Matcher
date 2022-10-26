import { Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../components/UI/BackButton";

interface SettingsScreenProps {
  navigation: any;
}
const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  return (
    <View>
      <BackButton navigation={navigation} />
      <Text>SETTINGS SCREEN</Text>
    </View>
  );
};

export default SettingsScreen;
