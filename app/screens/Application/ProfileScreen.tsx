import { Text, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import { useEffect } from 'react'
import { DrawerActions, useFocusEffect } from '@react-navigation/native'

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      defaultStatus='open'
      useLegacyImplementation={true}
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
    </Drawer.Navigator>
  )
}

export default ProfileScreen
