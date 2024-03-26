import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Sr04() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/5f/c8/93/5fc89331df2d14a7910f971bb2f1ad57.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Hospital Playlist</Text>

            </View>

        </View>


    );
}