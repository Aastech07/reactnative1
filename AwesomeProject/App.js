import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Login from './Components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import MyTab from './Components/MyTab';
import Register from './Components/Registers';
import SearchList from './Components/SearchList';
import ViewCom from './Components/ViewCom';
import MyTab1 from './Components/MyTab1';
import Search from './Components/Search';
import Media from './Components/Media';
import { themeColors } from './Components/Theme/ThemeColor';
import DataList1 from './Components/DataList1';
const stack = createNativeStackNavigator();

export default function App() {

  return (
    <><StatusBar barStyle="dark-content" hidden={false} backgroundColor={themeColors.bg} translucent={true} />
      <NavigationContainer >
        <stack.Navigator>
          <stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
          <stack.Screen name='Register' options={{
            headerStyle: {
              backgroundColor: "#FC345C"
            }
          }} component={Register} />

          <stack.Screen name='MyTab' options={{ headerShown: false }} component={MyTab} />
          <stack.Screen name='Datalist1' options={{ headerShown: false }} component={DataList1} />
          <stack.Screen name='SearchList' options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#FC345C"
            }
          }} component={SearchList} />

          <stack.Screen name='ViewCom' options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#FC345C"
            }
          }} component={ViewCom} />

          <stack.Screen name='MyTab1' options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#FC345C"
            }
          }} component={MyTab1} />
          <stack.Screen name='Search' options={{ headerShown: false }} component={Search} />
          <stack.Screen name='Media' options={{ headerShown: false }} component={Media} />
        </stack.Navigator>
      </NavigationContainer></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
