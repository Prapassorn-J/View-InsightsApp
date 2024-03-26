import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Sr05() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/dc/08/70/dc0870a012afe7a374e7dab555dbe787.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Twenty five Twenty one</Text>

            </View>

        </View>


    );
}