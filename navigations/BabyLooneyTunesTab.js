import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function BabyLooneyTuneTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray", }} >
            <Tab.Screen
                name="FlashScreen"
                component={FlashScreen}
                options={{
                    tabBarLabel: "Short Story",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="FlameScreen"
                component={FlameScreen}
                options={{
                    tabBarLabel: "Characters",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="LeafScreen"
                component={LeafScreen}
                options={{
                    tabBarLabel: "Others",
                    headerShown: false
                }}
            />
        </Tab.Navigator>


    );
}
function FlashScreen() {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={{ uri: "https://i.pinimg.com/736x/8e/e8/c1/8ee8c111fe0fe861dcc3b0aa3442632e.jpg" }}
                    style={{ width: '100%', height: 300 }}
                />

                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Image
                        source={{ uri: "https://i.makeagif.com/media/9-14-2023/dC3Y4O.gif" }}
                        style={{ width: 210, height: 150, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.makeagif.com/media/7-04-2023/SCNJMs.gif" }}
                        style={{ width: 210, height: 150, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Baby Looney Tunes</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   "Baby Looney Tunes" เป็นซีรีส์การ์ตูนที่เน้นไปที่ตัวละครแบบเด็กของตัวละครหนังการ์ตูนชื่อดังจาก Warner Bros. Looney Tunes เช่น Bugs Bunny, Daffy Duck, Tweety Bird, Sylvester the Cat, Lola Bunny, และอื่น ๆ ในรูปแบบที่เป็นเด็ก ซีรีส์นี้เน้นเรื่องราวที่เป็นมิตรและการเรียนรู้ของเด็ก ๆ ในโรงเรียนที่น่ารักและมีความสนุกสนาน

                    ในแต่ละตอนของ "Baby Looney Tunes" จะมีเรื่องราวที่น่ารักและสถานการณ์ตลกที่เกิดขึ้นกับเด็ก ๆ Looney Tunes ที่อาศัยอยู่ในบ้านเดียวกัน ซีรีส์นี้ช่วยสร้างความสนุกสนานและเรียนรู้เกี่ยวกับการทำงานร่วมกัน การแก้ปัญหา และความสำคัญของมิตรภาพ</Text>
            </View>
        </ScrollView >
    );
}

function FlameScreen() {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                <Text style={{ padding: 15, fontSize: 28 }}>ตัวละครหลัก</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: "https://i.pinimg.com/564x/d4/5e/db/d45edbe9f2026b27a3b0308f502a9bde.jpg" }}
                    style={{ width: 380, height: 310, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีบักส์</Text>

                <Image source={{ uri: "https://static.wikia.nocookie.net/babylooneytunes/images/c/c4/Baby_Looney_Tunes_-_003_-_A_Secret_Tweet-%28003125%2922-29-20-.jpg" }}
                    style={{ width: 380, height: 350, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีทวิตตี้</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/44/fc/6e/44fc6ef821f6e3a4df2cfa9c7057d22f.jpg" }}
                    style={{ width: 380, height: 250, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีดาฟฟี่</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/f5/37/2c/f5372cf2c46398bc6014d71ad433ffdc.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีโลล่า</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/79/37/cb/7937cb825fb607dfa709c9835ad5aa66.jpg" }}
                    style={{ width: 380, height: 260, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีแทส</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/ce/8c/af/ce8cafb99f431c7d15b869b4d8536ea6.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีซิลเวสเตอร์</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/92/b9/6d/92b96db55fbc4b8de950c4a53aa3d86b.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบบีพิกทูเนียร์</Text>

                <Image source={{ uri: "https://pbs.twimg.com/media/EwCqq3oUYAEsbFk?format=jpg&name=900x900" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>คุณยายแกรนนี่</Text>

            </View>
        </ScrollView >

    );
}

function LeafScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "" }}
                style={{ width: '100%', height: 500 }}
            />
            <Text style={{ fontSize: 30, paddingTop: 20 }}>"Baby Looney Tunes"</Text>
        </View>
    );
}
