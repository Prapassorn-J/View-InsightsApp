import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Mainbottom from "./Mainbottom";
import ShinchanTab from "./ShinchanTab";
import DoraemonTab from "./DoraemonTab";
import AdventureTimeTab from "./AdventureTimeTab";
import WeBareBearsTab from "./WeBareBearsTab";
import BabyLooneyTuneTab from "./BabyLooneyTunesTab";
import PonyoTab from "./PonyoTab";
import LiloandStitchTab from "./Lilo&StitchTab";
import KungFuPandaTab from "./KungFuPandaTab";
import LucaTab from "./LucaTab";
import ToyStoryTab from "./ToyStoryTab";
import Reply1988Tab from "./Reply1988Tab";
import HospitalPlaylistTab from "./HospitalPlaylistTab";
import TwentyfiveTwentyoneTab from "./TwentyfiveTwentyoneTab";
import AllOfUsAreDeadTab from "./AllOfUsAreDeadTab";
import TheFirstRespondersTab from "./TheFirstRespondersTab";
import TrainToBusanTab from "./TrianToBusanTab";
import ExtremeJobTab from "./ExtremeJobTab";
import TheMediumTab from "./TheMediumTab";
import ParasiteTab from "./ParasiteTab";
import ForrestGumpTab from "./ForrestGumpTab";




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

            <Stack.Screen name="PonyoTab" component={PonyoTab} options={{ title: "Insight Ponyo" }} />
            <Stack.Screen name="LiloandStitchTab" component={LiloandStitchTab} options={{ title: "Insight Lilo and Stitch" }} />
            <Stack.Screen name="KungFuPandaTab" component={KungFuPandaTab} options={{ title: "Insight Kung Fu Panda" }} />
            <Stack.Screen name="LucaTab" component={LucaTab} options={{ title: "Insight Luca" }} />
            <Stack.Screen name="ToyStoryTab" component={ToyStoryTab} options={{ title: "Insight Toy Story" }} />

            <Stack.Screen name="Reply1988Tab" component={Reply1988Tab} options={{ title: "Insight Reply 1988" }} />
            <Stack.Screen name="HospitalPlaylistTab" component={HospitalPlaylistTab} options={{ title: "Insight Hospital Playlist" }} />
            <Stack.Screen name="TwentyfiveTwentyoneTab" component={TwentyfiveTwentyoneTab} options={{ title: "Insight Twenty five Twenty one" }} />
            <Stack.Screen name="AllOfUsAreDeadTab" component={AllOfUsAreDeadTab} options={{ title: "Insight All Of Us Are Dead" }} />
            <Stack.Screen name="TheFirstRespondersTab" component={TheFirstRespondersTab} options={{ title: "Insight TheFirst Responders" }} />

            <Stack.Screen name="TrainToBusanTab" component={TrainToBusanTab} options={{ title: "Insight Trian To Busan" }} />
            <Stack.Screen name="ExtremeJobTab" component={ExtremeJobTab} options={{ title: "Insight Extreme Job" }} />
            <Stack.Screen name="TheMediumTab" component={TheMediumTab} options={{ title: "Insight The Medium" }} />
            <Stack.Screen name="ParasiteTab" component={ParasiteTab} options={{ title: "Insight Parasite" }} />
            <Stack.Screen name="ForrestGumpTab" component={ForrestGumpTab} options={{ title: "Insight Forrest Gump" }} />


        </Stack.Navigator>
    );
}