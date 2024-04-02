import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Ms03() {
    const data = [
        { id: '1', title: 'Goblin Kingdon' },
        { id: '2', title: 'Vagabond' },
        { id: '3', title: 'Moon Lovers' },
        { id: '4', title: 'Touch your heart' },
        { id: '5', title: 'It\'s ok to not be okay' },
        { id: '6', title: '18 again' },
    ];

    return (

        <View style={styles.container}>
            <View style={styles.column}>
                <FlatList
                    data={data.slice(0, Math.ceil(data.length / 2))}
                    renderItem={({ item }) => (
                        <Text style={styles.text}>{item.title}</Text>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.column}>
                <FlatList
                    data={data.slice(Math.ceil(data.length / 2))}
                    renderItem={({ item }) => (
                        <Text style={styles.text}>{item.title}</Text>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
    },
    text: {
        padding: 15,
        fontSize: 15,
    },
});
