import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function PonyoTab() {

    return(
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={{ uri: "https://i.pinimg.com/564x/6d/0b/95/6d0b9530f0b24b342975ba9b4bf5d15b.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/71/bc/e6/71bce62f21f963213445f0b03fc6dda5.gif" }}
                        style={{ width: 210, height: 170, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/9f/10/f4/9f10f4b814f646c31ac1b022c46df079.gif" }}
                        style={{ width: 210, height: 170, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Ponyo </Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   ที่เมืองเล็กๆ ริมทะเล เด็กน้อยวัย 5 ขวบ โซะสุเกะ อาศัยอยู่ในบ้านบนหน้าผาสูงติดทะเลอินแลนด์ เช้าวันหนึ่ง ระหว่างที่เล่นเพลินอยู่บนหาดหินใต้หน้าผา เขาพบปลาทองหน้าเหมือนคน ติดอยู่ในโหลแยมเก่าๆ โซสุเกะ จึงช่วยชีวิตและเลี้ยงเธอไว้ในถังน้ำพลาสติกสีเขียว เขาให้ชื่อมันว่า 'โปเนียว' โปเนียวชอบโซสุเกะ โซสุเกะก็รู้สึกกับโปเนียวไม่ต่างกัน เด็กน้อยบอกกับว่า “ไม่ต้องกลัวนะ ฉันจะปกป้องดูแลเธอเอง” แต่แล้วฟุจิโมะโตะพ่อของโปเนียว ซึ่งครั้งหนึ่งเคยเป็นมนุษย์ แต่ตอนนี้กลายเป็นเจ้าสมุทรมีชีวิตอยู่ใต้ทะเลลึก ก็บังคับลูกสาวตัวน้อยๆ ให้กลับสู่ท้องทะเล “หนูอยากเป็นมนุษย์ค่ะ!” เธอบอกกับพ่อ ก่อนจะหนีออกมา กลายร่างเป็นเด็กสาว และกลับมาหาโซสุเกะ แต่ระหว่างทาง เธอทำน้ำแห่งชีวิตซึ่งเป็นของเหลวศักดิ์สิทธิ์ของพ่อหลุดรั่วไปในท้องทะเลจนหมดขวด เป็นเหตุให้น้ำทะเลยกตัวขึ้นสูงเกิดสึนามิ น้ำทะเลล้นเข้าท่วมจนเมืองเล็กๆ จมอยู่ใต้น้ำ</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#FF607F', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/3a/9e/7c/3a9e7ce5cb2e3747c9150b20e20f6a8a.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โปเนียว - Ponyo</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/6b/36/18/6b36183d7eb01e9ba5b06c255abe89e9.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โซสุเกะ - Sosuke</Text>

                    <Image source={{ uri: "https://www.metalbridges.com/wp-content/uploads/2014/11/Ponyo-15.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>แกรน มามาเร่ - Granmamare</Text>


                    <Image source={{ uri: "https://www.metalbridges.com/wp-content/uploads/2014/11/Ponyo-4.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ฟูจิโมโตะ - Fujimoto</Text>

                    <Image source={{ uri: "https://www.metalbridges.com/wp-content/uploads/2014/11/lisa.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ลิซ่า - Lisa</Text>
                </View>
                
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://www.metalbridges.com/wp-content/uploads/2014/11/Vlcsnap-36741.png" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โคอิจิ - Koichi</Text>
                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>
            <View style={{alignItems: 'center' }}>
            <Text style={{ fontSize: 35, padding:20 , alignItems:'center'}}>"Ponyo"</Text>
        </View>
        </ScrollView >
    );
}
