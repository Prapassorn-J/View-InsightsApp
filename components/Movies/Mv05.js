import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sr05() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("TheMediumTab") }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/8b/fa/89/8bfa89b4e6ea1f88a67d6cbd1c87d1a4.jpg' }}
                style={{ width: 400, height: 400, borderRadius: 15 }}
            />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20 }}>The Medium</Text>

            </View>

        </View>


    );
}