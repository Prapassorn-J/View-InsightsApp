import React from "react";
import { ScrollView, View } from "react-native";

import Ct01 from "../components/Cartoons/Ct01";
import Ct02 from "../components/Cartoons/Ct02";
import Ct03 from "../components/Cartoons/Ct03";
import Ct04 from "../components/Cartoons/Ct04";
import Ct05 from "../components/Cartoons/Ct05";
import Ct06 from "../components/Cartoons/Ct06";
import Ct07 from "../components/Cartoons/Ct07";


export default function Cartoons() {
    return (

        <ScrollView>
            <Ct01/>
            <Ct02/>
            <Ct03/>
            <Ct04/>
            <Ct05/>
            <Ct06/>
            <Ct07/>
        </ScrollView >
    );
}