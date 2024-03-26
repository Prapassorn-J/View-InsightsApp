import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default function Ct05() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/6c/bc/4e/6cbc4e57f30de3d368fa235cc094d159.jpg' }}
                style={{ width: 400, height: 200, borderRadius: 15 }}
            />
            <View>
                <Text style={{ fontSize: 20 }}>Adventure Time</Text>
                {/* <Text style={{ fontSize: 15, color: '#aaaaaa' }}>Adventure Time follows the adventures of a boy named Finn the Human (voiced by Jeremy Shada), and his best friend and adoptive brother Jake the Dog (John DiMaggio), who has magical powers to change shape and size at will. Pendleton Ward, the series' creator, describes Finn as a "fiery little kid with strong morals". Jake, on the other hand, is based on Tripper Harrison, Bill Murray's character in Meatballs. This means that while Jake is somewhat carefree, he will "sit [Finn] down and give him some decent advice if he really needs it". Finn and Jake live in the post-apocalyptic Land of Ooo, which was ravaged by a cataclysmic event known as the "Mushroom War", a nuclear war that destroyed civilization a thousand years before the series' events. Throughout the series, Finn and Jake interact with major characters, including Princess Bubblegum (Hynden Walch), the sovereign of the Candy Kingdom and a sentient piece of gum; the Ice King (Tom Kenny), a menacing but largely misunderstood ice wizard; Marceline the Vampire Queen (Olivia Olson), a thousand-year-old vampire and rock music enthusiast; Lumpy Space Princess (Pendleton Ward), a melodramatic and immature princess made out of "lumps"; BMO (Niki Yang), a sentient video game console-shaped robot that lives with Finn and Jake; and Flame Princess (Jessica DiCicco), a flame elemental and ruler of the Fire Kingdom</Text> */}

            </View>

        </View>


    );
}
