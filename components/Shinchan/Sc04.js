import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";


export default function Sc4() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: "https://i.kym-cdn.com/photos/images/original/002/738/958/9e9" }}
                style={{ width: '100%', height: 250 }}
            />

        </View>
    );
}