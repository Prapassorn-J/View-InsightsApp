import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct07() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("BabyLooneyTuneTab") }}>
            <Image
                    source={{ uri: 'https://i.pinimg.com/564x/9b/7f/6c/9b7f6c8a514d0b7bc9aeee4ef861943b.jpg' }}
                style={{ width: 400, height: 250, borderRadius: 15 }}
            />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20 }}>Baby Looney Tunes</Text>
                

            </View>

        </View>


    );
}