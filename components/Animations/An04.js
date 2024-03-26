import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function An04() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://belcourt-production.s3.amazonaws.com/wp-content/uploads/2023/09/19085339/LiloStitch-web.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Lilo & Stitch</Text>

            </View>

        </View>


    );
}