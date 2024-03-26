import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct04() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://raw.githubusercontent.com/JN-JANE/image/main/download%20(2).jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Doraemon</Text>
                {/* <Text style={{ fontSize: 15, color: '#aaaaaa' }}>Nobita Nobi is a ten-year-old Japanese school boy, who is kind-hearted and honest, but also lazy, unlucky, weak, gets bad grades and is bad at sports. One day, a robot cat from the 22nd century named Doraemon is sent back to the past by Nobita's future grandchild, Sewashi Nobi, to take care of Nobita so that his descendants can have a better life. Doraemon has a four-dimensional pouch in which he stores tools, inventions, and gadgets from the future to aid Nobita whenever he is faced with a problem. Although Doraemon is a cat robot, he has a fear of mice because of an incident where robotic mice chewed off his ears. This is why Doraemon lost his original yellow color and turned blue, from sadness.</Text> */}

            </View>

        </View>


    );
}
