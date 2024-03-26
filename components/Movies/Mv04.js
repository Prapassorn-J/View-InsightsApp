import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Mv04() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/34/9e/70/349e70b47508fd3a2cb48fd0bb187eaa.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Extreme Job</Text>

            </View>

        </View>


    );
}