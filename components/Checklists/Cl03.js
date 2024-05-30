import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/JN-JANE/API-for-Application-Project/main/api01.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
            {data.map(item => (
                <View key={item.id} style={styles.item}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'column', 
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 350,
        height: 500,
        borderRadius: 10, 
        marginBottom: 5, 
    },
    name: {
        fontSize: 24,
    },
});
