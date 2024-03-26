import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main';
import Mainbottom from './navigations/Mainbottom';
import Cartoons from './screens/Cartoons';
import Animations from './screens/Animations';
import Series from './screens/Series';
import Movies from './screens/Movies';



export default function App() {
  return (
    <View>

      {/* <Main /> */}
      {/* <Mainbottom/> */}
      {/* <Cartoons/> */}
      {/* <Animations/> */}
      {/* <Series/> */}
      <Movies/>
    </View>
  );
}
