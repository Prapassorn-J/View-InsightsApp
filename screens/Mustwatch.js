import React from 'react';
import { View, Image } from 'react-native';

export default function Mustwatch() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: "https://i.kym-cdn.com/photos/images/original/002/738/958/9e9" }}
                style={{ width: '100%', height: 250 }}
            />

        </View>
    );
}