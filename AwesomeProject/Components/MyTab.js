import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DataList1 from './DataList1';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Search from './Search';
import Alert from './Alert';
import Colors from './Colors';

const Tab = createBottomTabNavigator();
function MyTab() {





  return (

    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        style: {
          borderRadius: 15,
          height: 50,
        },
        tabBarActiveTintColor:Colors.primaryLite,
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case 'DataList':
              iconName = 'house-user';
              break;

            case 'Search':
              iconName = 'searchengin';
              break;
            case 'Alert':
              iconName = 'bell';
              break;
          }
          return <Icon name={iconName} color={color} size={22} />;
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 10,
          backgroundColor: '#ffffff',
          height: 55,
          borderRadius: 6,
        },

      })}>
      <Tab.Screen name="DataList" component={DataList1}
        options={{
          title: ' Home',
          headerStyle: {
            backgroundColor: '#FC345C',

          },
   
        }} />

      <Tab.Screen name="Search" component={Search} options={{
        title: ' Search',
        headerStyle: {
          backgroundColor: '#FC345C',
        }

      }} />
      <Tab.Screen name="Alert" component={Alert} options={{
        title: ' Alert',
        headerStyle: {
          backgroundColor: '#FC345C',
        }


      }} />

    </Tab.Navigator>

  )
}

export default MyTab
