import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Mv03() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/74/4f/12/744f12a7685ef2031174ac6826f80c24.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Train To Busan</Text>

            </View>

        </View>


    );
}