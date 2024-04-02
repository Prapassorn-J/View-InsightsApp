import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Mn02() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("ShinchanTab") }}>
                <Image
                source={{ uri: 'https://i.pinimg.com/564x/fa/30/bc/fa30bcea337ed3236f1c8c5b5a2be5ce.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            </TouchableOpacity>

            <View>
                <Text style={{ fontSize: 20 }}>Crayon Shinchan</Text>
                

            </View>
            
        </View>
        

    );
}


