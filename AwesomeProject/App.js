import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTab from './Components/MyTab';
import Register from './Components/Registers';
import SearchList from './Components/SearchList';
import ViewCom from './Components/ViewCom';
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
        <stack.Screen name='Register' options={{
          headerStyle: {
            backgroundColor: "#FC345C"
          }
        }} component={Register} />
        <stack.Screen name='MyTab' options={{ headerShown: false }} component={MyTab} />
        <stack.Screen name='SearchList' options={{ headerShown: true ,
                headerStyle: {
                  backgroundColor: "#FC345C"
                }
        
        
        }} component={SearchList} />

<stack.Screen name='ViewCom' options={{ headerShown: true ,
                headerStyle: {
                  backgroundColor: "#FC345C"
                }
        
        
        }} component={ViewCom} />




      </stack.Navigator>
    </NavigationContainer>
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
