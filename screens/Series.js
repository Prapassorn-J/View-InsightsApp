import React from "react";
import { ScrollView, View } from "react-native";
import Sr01 from "../components/Series/Sr01";
import Sr02 from "../components/Series/Sr02";
import Sr03 from "../components/Series/Sr03";
import Sr04 from "../components/Series/Sr04";
import Sr05 from "../components/Series/Sr05";
import Sr06 from "../components/Series/Sr06";
import Sr07 from "../components/Series/Sr07";





export default function Series() {
    return (

        <ScrollView>
        <Sr01/>
        <Sr02/>
        <Sr03/>
        <Sr04/>
        <Sr05/>
        <Sr06/>
        <Sr07/>
        </ScrollView >
    );
}