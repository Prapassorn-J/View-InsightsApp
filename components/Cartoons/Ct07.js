import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct07() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/c0/df/47/c0df47cd2d8c0120c3576118921360dc.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Toy Story</Text>
                {/* <Text style={{ fontSize: 15, color: '#aaaaaa' }}>Sentient when humans are not around, a group of toys are preparing to move into a new house with their owner, child Andy Davis, his younger sister Molly and their single mother Mrs. Davis. Sheriff Woody, Andy's favorite toy and their de facto leader, sends Sarge and his green army men to spy on Andy's birthday party with a baby monitor, as the toys are nervous about him receiving new toys that could replace them. The other toys include Mr. Potato Head, Slinky Dog, Rex the tyrannosaur, Hamm the piggy bank, and Bo Peep the porcelain doll. Andy receives a Buzz Lightyear action figure who believes he is an actual Space Ranger and does not know he is a toy. Buzz impresses the others with his high-tech features and becomes Andy's new favorite toy, making Woody jealous.</Text> */}

            </View>

        </View>


    );
}