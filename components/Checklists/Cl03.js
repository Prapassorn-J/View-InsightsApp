import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Cl03() {
    const data = [
        { id: '1', title: 'Goblin Kingdon' }, 
        { id: '2', title: 'Elf Forest' },
        { id: '3', title: 'Dragon Mountain' },
        { id: '4', title: 'Wizard Tower' },
        { id: '5', title: 'Dwarf Mines' },
        { id: '6', title: '18 Agians' },
        { id: '7', title: 'Harry Potter' },
        { id: '8', title: 'Soe Bok' },
        { id: '9', title: 'Parasite' },
        { id: '10', title: 'Home Alone' },
        { id: '11', title: 'น้องพี่ที่รัก' },
        { id: '12', title: '6/45 Lucky Lotto' },
        { id: '13', title: '20th Century Girl' },
        { id: '14', title: 'Encanto' },
        { id: '15', title: 'Wish Dragon' },
        { id: '16', title: 'Kotaro Lives Alone' },
        { id: '17', title: 'Wreck it Ralph' },
        { id: '18', title: 'The Good Dinosaur' },
        { id: '19', title: 'Coco' },
        { id: '20', title: 'Finding Dory' },
    ];

    const renderColumn = (columnData) => {
        return (
            <FlatList
                data={columnData}
                renderItem={({ item }) => (
                    <Text style={styles.text}>{item.title}</Text>
                )}
                keyExtractor={item => item.id}
            />
        );
    };

    const column1Data = data.slice(0, Math.ceil(data.length / 2));
    const column2Data = data.slice(Math.ceil(data.length / 2));

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                {renderColumn(column1Data)}
            </View>
            <View style={styles.column}>
                {renderColumn(column2Data)}
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
