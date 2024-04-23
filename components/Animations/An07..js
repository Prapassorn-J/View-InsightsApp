import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function An07() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("ToyStoryTab") }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/aa/fe/81/aafe81ad393d21561ec9a2fd63bdb53e.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20 }}>Toy Story</Text>

            </View>

        </View>


    );
}