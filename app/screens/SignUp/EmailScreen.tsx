import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import RegisterButton from '../../components/UI/RegisterButton'
import { LinearGradient } from 'expo-linear-gradient'
import { RegisterUserData } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/registerSlice'

interface EmailScreenProps {
  navigation: any
}
const EmailScreen = ({ navigation }: EmailScreenProps) => {
  const dispatch = useDispatch()
  const count = useSelector((state: RegisterUserData) => state)

  const emailHandler = (email: string) => {
    dispatch(addItem({ value: 'email', data: email }))
    console.log(count)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#AD439C', '#FAAEBE']}
        style={styles.linearGradient}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>Your Email is...</Text>
          <View style={styles.textInputContainer}>
            <Image
              style={styles.icon}
              source={require('../../images/mailVector.png')}
            />
            <TextInput
              style={styles.input}
              onChangeText={(newText) => emailHandler(newText)}
              placeholder='Enter your email'
              placeholderTextColor='#ABABAB'
            />
          </View>
          <RegisterButton toScreen='passwordInput' navigation={navigation} />
        </View>
        <Image
          style={styles.bcgHearths}
          source={require('../../images/Hearts.png')}
        />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  whiteContainer: {
    backgroundColor: '#FFFFFF',
    minHeight: '50%',
    width: '100%',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 55,
    marginTop: '5%',
    marginBottom: '5%',
    width: '80%',
  },
  btnTitle: {
    fontSize: 20,
    marginTop: '15%',
  },
  textInputContainer: {
    width: '80%',
    backgroundColor: '#F7F7F7',
    height: '15%',
    padding: 10,
    marginTop: '15%',
    marginBottom: '15%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    height: '100%',
    color: '#ABABAB',
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 1,
    lineHeight: 23,
  },
  icon: {
    marginTop: '7%',
    marginRight: '2%',
  },
  btn: {},
  bcgHearths: {
    position: 'absolute',
    top: '60%',
    zIndex: -1,
  },
})
export default EmailScreen
