import React from "react";
import { ScrollView, View } from "react-native";
import Mv01 from "../components/Movies/Mv01";
import Mv02 from "../components/Movies/Mv02";
import Mv03 from "../components/Movies/Mv03";
import Mv04 from "../components/Movies/Mv04";
import Mv05 from "../components/Movies/Mv05";
import Mv06 from "../components/Movies/Mv06";
import Mv07 from "../components/Movies/Mv07";







export default function Movies() {
    return (

        <ScrollView>
           <Mv01/>
           <Mv02/>
           <Mv03/>
           <Mv04/>
           <Mv05/>
           <Mv06/>
           <Mv07/>
        </ScrollView >
    );
}