import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function An05() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/5d/9b/0d/5d9b0d12b58f9e9bacd03462a6c49b07.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Kung Fu Panda</Text>

            </View>

        </View>


    );
}