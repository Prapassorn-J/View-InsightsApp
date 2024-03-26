import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, Image, Text, } from "react-native";



export default function Ct02() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <View style={{ backgroundColor: '#eeeeee', padding: 10, borderRadius: 10, width:400, height:50, marginTop:20,justifyContent:"center"}} >
                <TextInput style={{ fontSize: 20 }} >What are you looking for?</TextInput>
            </View>
            
        </View >

    );
}
