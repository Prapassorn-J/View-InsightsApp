import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Mn04(props) {


    const cartoon = [
        { "title": "Ponyo", "uri": "https://i.pinimg.com/564x/a5/ea/12/a5ea1228ece925a6a88999d13bd7712a.jpg" },
        { "title": "Lilo & Stitch", "uri": "https://raw.githubusercontent.com/JN-JANE/image/main/download.jpg" },
        { "title": "KUNG FU PANDA", "uri": "https://i.pinimg.com/564x/86/98/a2/8698a2382b800da316b9d4396d0497d5.jpg" },
        { "title": "Luca", "uri": "https://i.pinimg.com/564x/a3/1e/24/a31e24829c59e0a1ee138f33208c2d0c.jpg" },
        { "title": "Toy Story", "uri": "https://i.pinimg.com/564x/97/af/97/97af9792529fa4d73052eed90cd868dc.jpg" },

    ];



    return (
        <View style={props.style}>
            <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 48, width: 175, paddingHorizontal: 10, backgroundColor: '#C8C6C6', opacity: 1, borderWidth: 1, borderColor: 'white', }}>
                <Text style={{ fontSize: 30 }}>Animations </Text>
            </View>

            <FlatList
                horizontal={true}
                data={cartoon}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View>
                                <View style={{ margin: 15 }}>
                                    <Image style={{ width: 400, height: 300, borderRadius: 10 }} source={{ uri: item.uri }} />
                                    <View style={{
                                        flexDirection: 'row', marginTop: -10, height: 50, width: 400, paddingHorizontal: 10, backgroundColor: '#C8C6C6', opacity: 0.9, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
                                    }}>
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 20, color: "black", }}>{item.title}</Text>

                                        </View>
                                    </View>

                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />

        </View>
    );
}