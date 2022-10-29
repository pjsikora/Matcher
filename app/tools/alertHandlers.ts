import { Alert } from 'react-native'

export const showError = () => {
  Alert.alert('Error', 'Something went wrong, please try again', [
    {
      text: 'Ok',
      onPress: () => {},
    },
  ])
}
export const showSuccess = (navigation: any) => {
  Alert.alert('Success', 'Successfully completed!', [
    {
      text: 'Ok',
      onPress: () => {
        navigation.goBack()
        navigation.openDrawer()
      },
    },
  ])
}
