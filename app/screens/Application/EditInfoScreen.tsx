import { Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../components/UI/BackButton";

interface EditInfoScreenProps {
  navigation: any;
}
const EditInfoScreen = ({ navigation }: EditInfoScreenProps) => {
  return (
    <View>
      <BackButton navigation={navigation} />
      <Text>EDIT INFO SCREEN</Text>
    </View>
  );
};

export default EditInfoScreen;
