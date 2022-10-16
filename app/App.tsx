import useCachedResources from './hooks/useCachedResources'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './screens/WelcomeScreen'
import EmailScreen from './screens/SignUp/EmailScreen'
import PasswordScreen from './screens/SignUp/PasswordScreen'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const Stack = createNativeStackNavigator()

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Welcome'
              component={WelcomeScreen}
              options={{ title: '' }}
            />
            <Stack.Screen
              name='emailInput'
              component={EmailScreen}
              options={{ title: '' }}
            />
            <Stack.Screen
              name='passwordInput'
              component={PasswordScreen}
              options={{ title: '' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
