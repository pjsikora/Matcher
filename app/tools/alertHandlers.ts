import { Alert } from 'react-native'

export const showError = (
  customText = 'Something went wrong, please try again'
) => {
  Alert.alert('Error', customText, [
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
