import React, { useState, useCallback, useEffect } from 'react'
import { Text, View, TouchableOpacity,  Image, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import { themeColors } from './Theme/ThemeColor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';



const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secure, setSecure] = useState('')

  const togglePass = () => {
    setSecure(!secure);
  }

  return (

    <SafeAreaView style={{ backgroundColor: themeColors.bg, flex: 1 }} >
      <LinearGradient colors={[themeColors.bg, themeColors.bg, '#79155B']} style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: responsiveHeight(50),
      }} />
      <Image source={require("../assets/myimage.jpg")} style={{
        position: 'absolute', alignSelf: 'center', top: 50, borderRadius: responsiveWidth(30), height: responsiveHeight(10),
        width: responsiveWidth(10), padding: responsiveWidth(15)
      }}/>

      <View style={{
        paddingTop: responsiveHeight(7), backgroundColor: '#fff', top: responsiveHeight(28), flex: 1, borderTopLeftRadius: responsiveWidth(12), borderTopRightRadius: responsiveWidth(11),
      }}>
        <View style={{ bottom: 50 }}>
          <View style={{ bottom: 130, }}>
            <Text style={{

              alignSelf: 'center',
              fontWeight: 'bold',
              marginBottom: 20,
              fontSize: responsiveFontSize(4),
              top: responsiveHeight(20),
              left: responsiveHeight(1),

            }}>Welcome! </Text>

            <View style={{ top: 150, right: 10 }}>
              <Text style={styles.text}>Number</Text>
              <FontAwesome5 name="phone-alt" size={25} color={themeColors.bg1} style={{ left: 45, top: 20, opacity: 0.3 }} />
              <TextInput style={styles.input}
                placeholder="Enter your Number"
                onChangeText={text => setEmail(text)}
                value={email}
                keyboardType='numeric' />

              <Text style={styles.text}>Password</Text>
              <FontAwesome5 name="lock" size={25} color={themeColors.bg1} style={{ left: 50, top: 20, opacity: 0.3 }} />
              <TextInput style={styles.input}
                placeholder="Enter your Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={secure ? false : true} />

              <TouchableOpacity onPress={() => togglePass()}>
                <Text style={{ left: responsiveWidth(85), bottom: 55 }}>{secure ? <FontAwesome5 name='eye' size={17} color={"black"} /> : <FontAwesome5 name='eye-slash' size={17} color={"black"} />}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity >
              <Text style={{ left: 230, top: 130, color: themeColors.bg, fontWeight: '500' }}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{ top: 160, }}>
              <TouchableOpacity style={{
                padding: 10,
                borderRadius: 5, backgroundColor: themeColors.bg,
                shadowColor: themeColors.bg,
                shadowOffset: {
                  width: 0,
                  height: 50,
                },
                shadowOpacity: 0.8,
                shadowRadius: 16.00,
                elevation: 24,
                marginLeft: responsiveWidth(9),
                marginRight: responsiveWidth(9)
              }} onPress={() => navigation.navigate('MyTab')}>
                <Text style={{
                  alignSelf: "center", color: 'white', fontWeight: '700', fontSize: 17
                }}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', paddingTop: 200, right: 30 }}>
              <Text style={styles.login}>Don't have a Account:</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.login1} >sign up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

    </SafeAreaView>



  );
};

export default Login;
const styles = StyleSheet.create({

  login: {
    fontWeight: 'bold'
  },
  login1: {
    marginTop: 8,
    fontSize: 16,
    color: themeColors.bg,
    left: responsiveWidth(27),
    bottom: responsiveHeight(4)
  },

  hip: {
    left: 15,
    marginBottom: 22

  },

  input: {
    marginLeft: responsiveWidth(14),
    marginRight: responsiveWidth(14),
    padding: 8,
    bottom: 20,
    left: 26,
    borderWidth: 1,
    borderRadius: 6

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
  },



});