import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Mv06() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/ec/7b/0c/ec7b0c34c30a1e9c76af8ab220dee5ea.jpg' }}
                style={{ width: 400, height: 220, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Parasite</Text>

            </View>

        </View>


    );
}