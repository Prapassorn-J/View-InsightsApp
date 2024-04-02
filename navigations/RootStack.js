import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Mainbottom from "./Mainbottom";
import ShinchanTab from "./ShinchanTab";
import DoraemonTab from "./DoraemonTab";
import AdventureTimeTab from "./AdventureTimeTab";
import WeBareBearsTab from "./WeBareBearsTab";
import BabyLooneyTuneTab from "./BabyLooneyTunesTab";



const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="MainBottom">
            <Stack.Screen name="Mainbottom" component={Mainbottom} options={{ headerShown: false }} />
            <Stack.Screen name="ShinchanTab" component={ShinchanTab} options={{ title: "Insight Crayon Shinchan" }} />
            <Stack.Screen name="DoraemonTab" component={DoraemonTab} options={{ title: "Insight Doraemon" }} />
            <Stack.Screen name="AdventureTimeTab" component={AdventureTimeTab} options={{ title: "Insight Adventure Time" }} />
            
            <Stack.Screen name="WeBareBearsTab" component={WeBareBearsTab} options={{ title: "Insight Adventure Time" }} />
            <Stack.Screen name="BabyLooneyTuneTab" component={BabyLooneyTuneTab} options={{ title: "Insight Baby Looney Tunes" }} />

        </Stack.Navigator>
    );
}