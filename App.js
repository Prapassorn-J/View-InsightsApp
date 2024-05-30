import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigations/RootStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";


export default function App() {
  return (
  // <View>
    // <Main/>
  // </View>
 
  <NavigationContainer>
     <RootStack /> 
 </NavigationContainer> 
    
  );
}
