import React from 'react'
import { Text, View, TouchableOpacity, Button, Image, StyleSheet, SafeAreaView, KeyboardAvoidingViewBase } from 'react-native'
import { themeColors } from './Theme/ThemeColor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Sae } from 'react-native-textinput-effects';


const Login = ({ navigation }) => {
  const saeInput = (
    <Sae
      label={'Number'}
      iconClass={FontAwesome5}
      iconName={'phone-alt'}
      iconColor={'#150485'}
      inputPadding={16}
      labelHeight={24}
      borderHeight={2}
      autoCapitalize={'none'}
      autoCorrect={false}
      keyboardType='numeric'
      style={{ marginLeft: 30, marginRight: 30, }}
    />

  );
  const saeInput1 = (
    <Sae
      label={'Password'}
      iconClass={FontAwesome5}
      iconName={'lock'}
      iconColor={'#150485'}
      inputPadding={16}
      labelHeight={30}
      borderHeight={2}
      autoCapitalize={'none'}
      autoCorrect={false}

      style={{ marginLeft: 30, marginRight: 30, padding: 10, }}

    />
  );

  return (


    <SafeAreaView style={{ backgroundColor: "#150485", flex: 1 }}>
      <Image source={require("../assets/myimage.jpg")} style={{ position: 'absolute', alignSelf: 'center', top: 100, borderRadius: 50, height: 60, width: 60, padding: 50 }} />
      <View style={{
        paddingTop: 50, backgroundColor: '#fff', top: 250, flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50,
        shadowColor: "#FC345C",
        shadowOffset: {
          width: 0,
          height: 50,
        },
        shadowOpacity: 0.8,
        shadowRadius: 16.00,
        elevation: 24,
      }}>
        <View style={{ alignItems: 'center', justifyContent: "center" }}>
          <Text style={{
            color: '#150485', fontSize: 30, fontWeight: '800', bottom: 20,


          }}>Welcome!</Text>
          <TouchableOpacity >
            <Text style={{ color: '#3E54AC', fontWeight: '500', top: 160, left: 100, }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 13,
            borderRadius: 5, backgroundColor: "#150485",
            shadowColor: themeColors.bg,
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 0.8,
            shadowRadius: 16.00,
            elevation: 24,
            top: 250, position: 'absolute',
            paddingLeft: 150,
            paddingRight: 150

          }}   onPress={() => navigation.navigate('MyTab')}>
            <Text style={{
              alignSelf: "center", color: 'white', fontWeight: '700'
            }}>Login</Text>
          </TouchableOpacity>
          <View style={{ alignContent: 'center', alignItems: "center", right: 20 }}>
            <Text style={styles.login}>Don't have a Account:</Text>
            <TouchableOpacity>
              <Text style={styles.login1} >sign up</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ flex: 1, bottom: 25 }}>
          {saeInput}
          {saeInput1}
        </View>

      </View>

    </SafeAreaView>

  );
};

export default Login;
const styles = StyleSheet.create({

  login: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 292
  },
  login1: {

    fontSize: 16,
    color: '#150485',
    left: 75,
    position: 'absolute',
    top: 290
  },
});