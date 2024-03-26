import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Mn05(props) {


    const cartoon = [
        { "title": "Reply 1988", "uri": "https://raw.githubusercontent.com/JN-JANE/image/main/download%20(1).jpg" },
        { "title": "Hospital Playlists", "uri": "https://i.pinimg.com/564x/11/2a/b6/112ab6f376ec8f40548b1d5aa1fea2ac.jpg" },
        { "title": "Twenty five Twenty one", "uri": "https://i.pinimg.com/564x/1e/69/a6/1e69a6c8e9b1766ff3d43d57ef676567.jpg" },
        { "title": "All Of Us Are Dead", "uri": "https://i.pinimg.com/564x/d7/ea/f4/d7eaf4bbd3115428e78bd238efeef808.jpg" },
        { "title": "The First Responders", "uri": "https://raw.githubusercontent.com/JN-JANE/image/main/the%20first%20responders.jpg" },

    ];



    return (
        <View style={props.style}>
            <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 48, width: 108, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 1, borderWidth: 1, borderColor: 'white', }}>
                <Text style={{ fontSize: 30 }}>Series </Text>
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
                                        flexDirection: 'row', marginTop: -10, height: 50, width: 400, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 0.9, borderRadius: 5, borderWidth: 1, borderColor: 'grey',
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