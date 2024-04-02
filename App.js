import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main';
import { NavigationContainer } from '@react-navigation/native';
// import Shinchan from './screens/Shinchan';
// import Mainbottom from './navigations/Mainbottom';
// import Cartoons from './screens/Cartoons';
// import Animations from './screens/Animations';
// import Series from './screens/Series';
// import Movies from './screens/Movies';
// import Mustwatch from './screens/Mustwatch';
import RootStack from './navigations/RootStack';
// import { NavigationContainer } from '@react-navigation/native';



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
