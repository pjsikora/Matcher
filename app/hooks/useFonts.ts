import * as Font from 'expo-font'

export const useFonts = async () =>
  await Font.loadAsync({
    limelight: require('../assets/fonts/Montserrat-Black.ttf'),
  })
