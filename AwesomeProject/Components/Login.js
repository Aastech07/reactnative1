import React from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, Alert, } from 'react-native'

import { useState } from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Login = ({ navigation }) => {

  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [secure, setSecure] = useState('')


  const togglePass = () => {
    setSecure(!secure);
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#F5F5F5' }} behavior='height'>
      <ScrollView style={{ flex: 1, top: 10 }}>


        <View style={{ bottom: 50, }}>
          <View style={{ bottom: 20, }}>
            <Text style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              marginBottom: 20,
              fontSize: 30,
              top: 120,



            }}>Welcome! </Text>


            <View style={{ top: 130, left: 5 }}>
              <Text style={styles.text}>Number</Text>
              <FontAwesome5 name="phone-volume" size={25} color="black" style={{ left: 50, top: 25, opacity: 0.3, }} />
              <TextInput style={styles.input}
                placeholder="Enter your Number"
                onChangeText={text => setNumber(text)}
                value={number}
                keyboardType='numeric' />

              <Text style={styles.text}>Password</Text>
              <FontAwesome5 name="lock" size={25} color="black" style={{ left: 50, top: 25, opacity: 0.3 }} />
              <TextInput style={styles.input}
                placeholder="Enter your Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={secure ? false : true} />


              <TouchableOpacity onPress={() => togglePass()}>
                <Text style={{ left: 310, bottom: 60 }}>{secure ? <FontAwesome5 name='eye' size={17} color={"black"} /> : <FontAwesome5 name='eye-slash' size={17} color={"black"} />}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity >
              <Text style={{ left: 225, top: 120, color: '#FC345C', fontWeight: '500' }}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{ top: 160, left: 20 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MyTab1')}
              >

                <Text style={styles.button1}>Login</Text>

              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', paddingTop: 200, right: 30 }}>
              <Text style={styles.login}>Don't have a Account:</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={styles.login1} >sign up</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default Login
const styles = StyleSheet.create({

  login: {
    fontWeight: 'bold'
  },
  login1: {
    marginTop: 8,
    fontSize: 16,
    color: '#FC345C',
    left: 110,
    bottom: 30
  },

  hip: {
    left: 15,
    marginBottom: 22

  },

  input: {
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    bottom: 20,
    left: 20,
  },

  text: {
    left: 50,
    fontWeight: 'bold'
  },

  button1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
    marginRight: 40,
    padding: 12,
    backgroundColor: '#83193f',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.00,
    elevation: 24,

  },



});
