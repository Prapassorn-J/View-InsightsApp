import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Mn01 from '../components/Main/Mn01';


const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ title: "Main" }}
            />

            <Stack.Screen
                name="Mn01"
                component={Mn01}
                options={{ title: "Main01" }}
            

            />
            
        </Stack.Navigator>
    );


}
