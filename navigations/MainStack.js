import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Mn01 from '../components/Main/Mn01';
import Mustwatch from '../screens/Mustwatch';
import Cartoons from '../screens/Cartoons';
import Animations from '../screens/Animations';
import Movies from '../screens/Movies';
import Series from '../screens/Series';
import Shinchan from '../screens/Shinchan';
import AdventureTime from '../screens/AdventureTime';
import Doraemon from '../screens/Doraemon';
import WeBareBares from '../screens/WeBareBares';
import BabyLooneyTunes from '../screens/BabyLooneyTunes';


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
                name="Cartoons"
                component={Cartoons}
                options={{ title: "Cartoons" }}
            />
            <Stack.Screen
                name="Animations"
                component={Animations}
                options={{ title: "Animations" }}
            />
            <Stack.Screen
                name="Series"
                component={Series}
                options={{ title: "Series" }}
            />
            <Stack.Screen
                name="Movies"
                component={Movies}
                options={{ title: "Movies" }}
            />
            <Stack.Screen
                name="Shinchan"
                component={Shinchan}
                options={{ title: "shinchan" }}
            />
            
            <Stack.Screen
                name="Doraemon"
                component={Doraemon}
                options={{ title: "Doraemon" }}
            />
            <Stack.Screen
                name="AdventureTime"
                component={AdventureTime}
                options={{ title: "AdventureTime" }}
            />
            <Stack.Screen
                name="WeBareBares"
                component={WeBareBares}
                options={{ title: "WeBareBares" }}
            
            />           
             <Stack.Screen
                name="BabyLooneyTunes"
                component={BabyLooneyTunes}
                options={{ title: "BabyLooneyTunes" }}
            /> 

        </Stack.Navigator>
    );


}
