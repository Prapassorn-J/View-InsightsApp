import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Mn06(props) {


    const cartoon = [
        { "title": "Train To Busan", "uri": "https://i.pinimg.com/564x/10/ae/c6/10aec69109bcc1e4af4a0e9e327d2ebd.jpg" },
        { "title": "Extreme Job", "uri": "https://i.pinimg.com/564x/19/e0/4b/19e04bca920af9d96674f9f98c5bf27d.jpg" },
        { "title": "The Medium", "uri": "https://raw.githubusercontent.com/JN-JANE/image/main/The%20Medium%20(%E0%B8%A3%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%A3%E0%B8%87).jpg" },
        { "title": "Parasite", "uri": "https://i.pinimg.com/736x/5e/24/ca/5e24ca5266644f92d331fc6e88930b85.jpg" },
        { "title": "Forrest Gump", "uri": "https://i.pinimg.com/564x/3d/5c/e5/3d5ce5668b07bf8dee25ade268ff07e0.jpg" },

    ];



    return (
        <View style={props.style}>
            <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 48, width: 120, paddingHorizontal: 10, backgroundColor: '#C8C6C6', opacity: 1, borderWidth: 1, borderColor: 'white', }}>
                <Text style={{ fontSize: 30 }}>Movies </Text>
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