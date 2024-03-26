import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Mn03(props) {


    const cartoon = [
        { "title": "Crayon Shinchan", "uri": "https://i.pinimg.com/564x/1c/63/f4/1c63f4ef03db1a3a2d8cc66b1a69194e.jpg" },
        { "title": "Doraemon", "uri": "https://i.pinimg.com/564x/ad/05/b7/ad05b75b1d33cf964de88f98c8c3ec13.jpg" },
        { "title": "Adventure Time", "uri": "https://i.pinimg.com/564x/dc/26/0b/dc260b3c2dc0bbb4a2b7f99f12355394.jpg" },
        { "title": "We Bare Bears", "uri": "https://i.pinimg.com/564x/fa/27/d5/fa27d5f04b44bb336dbaa78c1451bce1.jpg" },
        { "title": "Baby Looney Tunes", "uri": "https://i.pinimg.com/564x/23/e0/7a/23e07ac27fb410d1edb5f887ec56cb43.jpg" },

    ];



    return (
        <View style={props.style}>
            <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 48, width: 145, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 1, borderWidth: 1, borderColor: 'white', }}>
                <Text style={{ fontSize: 30 }}>Cartoons </Text>
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
                                        flexDirection: 'row', marginTop: -10, height: 50, width: 400, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 0.9, borderRadius: 5, borderWidth: 1, borderColor: 'grey', }}>
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