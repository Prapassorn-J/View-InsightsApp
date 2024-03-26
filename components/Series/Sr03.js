import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Sr03() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://raw.githubusercontent.com/JN-JANE/image/main/download%20(3).jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Reply 1988</Text>

            </View>

        </View>


    );
}