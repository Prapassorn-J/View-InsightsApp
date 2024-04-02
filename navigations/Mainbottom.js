import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import { FontAwesome } from "@expo/vector-icons";
import Mustwatch from '../screens/Mustwatch';
import MainStack from './MainStack';
import Checklists from '../screens/Checklists';


const Tab = createBottomTabNavigator();

export default function Mainbottom() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#90AFFF', tabBarInactiveTintColor: 'gray' }}>
            <Tab.Screen
                name="MainStack"
                component={MainStack}
                options={{
                    tabBarLabel: "Main",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Must watch!"
                component={Mustwatch}
                options={{
                    tabBarLabel: "Must Watch",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="tv" color={color} size={size} />),
                }}

            />
            <Tab.Screen
                name="Checklists"
                component={Checklists}
                options={{
                    tabBarLabel: "Checklists",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="list-ul" color={color} size={size} />),
                }}

            />

        </Tab.Navigator>
    );
}
