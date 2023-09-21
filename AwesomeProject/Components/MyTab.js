import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from './Search';
import SearchList from './SearchList';
import ViewCom from './ViewCom';
import DataList1 from './DataList1';
import { themeColors } from './Theme/ThemeColor';
const stack = createNativeStackNavigator();


const Screen3 = () => {
  return <View style={styles.Screen3} />;
};
const Screen4 = () => {
  return <View style={styles.Screen4} />;
};


export default function MyTab() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'Search':
        icon = 'search';
        break;
      case 'Alart':
        icon = 'bell';
        break;
      case 'Help':
        icon = 'hands-helping';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'red' : 'gray'}
        
      />

    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        
        circleWidth={50}
        bgColor="navy"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}
            >
              <Ionicons name={'plus'} color="gray" size={25} />
            </TouchableOpacity>

          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          position="LEFT"
          component={DataList1}
        />

        <CurvedBottomBarExpo.Screen
          name="Search"
          component={Search}
          position="LEFT"
        />

        <CurvedBottomBarExpo.Screen
          name="Alart"
          component={() => <Screen3 />}
          position="RIGHT"
        />

        <CurvedBottomBarExpo.Screen
          name="Help"
          position="RIGHT"
          component={() => <Screen4 />}
        />
        <stack.Screen name='SearchList' options={{ headerShown: true }} component={SearchList} />
        <stack.Screen name='ViewCom' options={{ headerShown: true }} component={ViewCom} />

      </CurvedBottomBarExpo.Navigator>

  
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  Screen3: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  Screen4: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
