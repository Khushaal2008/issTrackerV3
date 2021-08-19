import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack =createStackNavigator();

  function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "HomeScreen" screenOptions={{
        headerShown :false
      }} >
        <Stack.Screen name = "HomeScreen" component= {HomeScreen}/>
        <Stack.Screen name = "IssLocationScreen" component={IssLocationScreen}/>
        <Stack.Screen name = "MeteorScreen" component={MeteorScreen}/>
        <Stack.Screen name="UpdateScreen" component={UpdateScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
 export default App;