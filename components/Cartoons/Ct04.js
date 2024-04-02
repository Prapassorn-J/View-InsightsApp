import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct04() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("DoraemonTab") }}>
            <Image    source={{ uri: 'https://raw.githubusercontent.com/JN-JANE/image/main/download%20(2).jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 20 }}>Doraemon</Text>
                

            </View>

        </View>

        

    );
}
