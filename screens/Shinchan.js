import React from "react";
import { ScrollView, View } from "react-native";
import Sc01 from "../components/Shinchan/Sc01";
import Sc02 from "../components/Shinchan/Sc02";
import ShinchanTab from "../navigations/ShinchanTab";


export default function Shinchan() {
    return (

        <ScrollView>
            <Sc01/>
            <ShinchanTab/>
            {/* <Sc02/> */}
        </ScrollView >
    );
}