import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Sr07() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/78/50/f6/7850f6a7cf60373049178d4c9414be73.jpg' }}
                style={{ width: 400, height: 460, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>The First Responders</Text>

            </View>

        </View>


    );
}