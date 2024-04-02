import React from "react";
import { ScrollView, View } from "react-native";
import Mn02 from "../components/Main/Mn02";
import Mn03 from "../components/Main/Mn03";
import Mn04 from "../components/Main/Mn04";
import Mn05 from "../components/Main/Mn05";
import Mn06 from "../components/Main/Mn06";
import Mn01 from "../components/Main/Mn01";


export default function Main() {
    return (

        <ScrollView>
            <Mn01/>
            <Mn02/>
            <Mn03/>
            <Mn04/>
            <Mn05/>
            <Mn06/>

        </ScrollView >
    );
}