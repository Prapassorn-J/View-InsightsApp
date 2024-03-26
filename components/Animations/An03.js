import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function An03() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/1e/07/88/1e07883d83c425e4767bb79d2b273d2c.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Ponyo</Text>

            </View>

        </View>


    );
}