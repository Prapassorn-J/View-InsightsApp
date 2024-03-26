import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct06() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/f5/44/05/f54405875a2db55a1107768f740c9e1d.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>We Bare Bares</Text>
                {/* <Text style={{ fontSize: 15, color: '#aaaaaa' }}>The Bears attempt to integrate with human society, such as by purchasing food, making human companions, or trying to become famous on the Internet, although these attempts see the Bears struggle to do so due to the civilized nature of humans and their own animal instincts. However, in the end, they figure out that they have each other for support.</Text> */}

            </View>

        </View>


    );
}
