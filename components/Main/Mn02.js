import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, Image, Text, } from "react-native";



export default function Mn02() {
    
    return (
        <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderRadius: 20, backgroundColor: '#FFF6DC', borderColor: 'gray' }}>
            
            <View style={{ backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }} >
                <Text >What are you looking for?</Text>
            </View>
           
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around", alignItems: "center" }}>
                
               
                <Image 
                source={{ uri: 'https://i.pinimg.com/564x/cb/d2/a7/cbd2a79fee285d8d1da149f35915c022.jpg' }}
                    style={{ width: 85, height: 80, borderRadius:20 }}
                />
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/e4/44/dc/e444dcca749ac69a50429ef06b38a234.jpg' }}
                    style={{ width: 85, height: 80, borderRadius: 20 }} 
                />
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/c9/ce/1d/c9ce1d4ce99303f6e0ce329153ed20ce.jpg' }}
                    style={{ width: 85, height: 80, borderRadius: 20 }}
                />
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/10/ae/c6/10aec69109bcc1e4af4a0e9e327d2ebd.jpg' }}
                    style={{ width: 85, height: 80, borderRadius: 20 }}
                />
            </View>
        </View>
    );
}
