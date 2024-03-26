import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct03() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/fa/30/bc/fa30bcea337ed3236f1c8c5b5a2be5ce.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Crayon Shinchan</Text>
                {/* <Text style={{ fontSize: 15, color: '#aaaaaa' }}>Set in the city of Kasukabe of Saitama Prefecture within the Greater Tokyo Area of Japan, the series follows the adventures of the five-year-old Shinnosuke "Shin" Nohara and his parents, baby sister, dog, neighbours, and best friends. Most of the plot is about Shin-chan's daily life, but it is also often interspersed with a lot of fantastic and incredible elements.</Text> */}

            </View>
            
        </View>
        

    );
}


