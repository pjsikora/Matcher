import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const RegisterButton = ({
  toScreen,
  navigation,
}: {
  toScreen: string
  navigation: any
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(toScreen)}
      style={styles.btn}
    >
      <LinearGradient colors={['#F5A3BA', '##CF56A1', '#FCB2BF']}>
        <Text style={styles.btnTitle}>Continue</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C04D9F',
    borderRadius: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '10%',
    marginTop: '10%',
  },
  btnTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
})
export default RegisterButton
