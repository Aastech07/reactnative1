import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DataList1 from './DataList1';
import Alert from './Alert';
import Search from './Search';
import Colors from './Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();
const MyTab1 = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                swipeEnabled: true,
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                  position: 'absolute',
                  top: 0,
                  
                  
                },
                tabBarItemStyle: { flexDirection: 'row' },
             
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                style: {
                    borderRadius: 15,
                    height: 50,
                },
                tabBarActiveTintColor: Colors.primaryLite,
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

            })}
        >
            <Tab.Screen
                name="DataList"
                component={DataList1}
                options={{ tabBarLabel: 'Home' }}
                
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{ tabBarLabel: 'Search' }}
            />
            <Tab.Screen
                name="Alert"
                component={Alert}
                options={{ tabBarLabel: 'Alert' }}
            />
        </Tab.Navigator>
    )
}

export default MyTab1
