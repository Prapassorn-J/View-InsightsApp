import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function WeBareBearsTab() {

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
                source={{ uri: "https://i.pinimg.com/564x/91/fc/fa/91fcfa02ba70679097ce7136f6e97a8c.jpg" }}
                style={{ width: '100%', height: 300}}
            />

                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/b4/18/b0/b418b0aa623e474b66484274a338177d.gif" }}
                        style={{ width: 210, height: 150, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/57/4f/e6/574fe67a747fd76cdcd225026bcb90af.gif" }}
                        style={{ width: 210, height: 150, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>We Bare Bares</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   3 หมีจอมป่วน คือหมีพี่น้องบุญธรรมสามตัว ได้แก่ กริซลี่ (มักเรียกว่า กริซ) แพนด้า (มักเรียกว่า แพนแพน) และ ไอซ์แบร์ (มักเรียกว่า หมีแข็ง) หมี 3 ตัวพยายามที่จะรวมเข้ากับสังคมมนุษย์ เช่น การซื้ออาหารเพื่อนมนุษย์หรือพยายามที่จะมีชื่อเสียงบนอินเทอร์เน็ตแม้ว่าความพยายามเหล่านี้จะเห็นว่าหมีพยายามทำเช่นนั้นเนื่องจากธรรมชาติที่มีอารยธรรมของมนุษย์และสัญชาตญาณของสัตว์ อย่างไรก็ตามในท้ายที่สุดพวกเขาคิดว่าการมีกันและกันเพื่อการสนับสนุนก็เพียงพอแล้ว

                    หมีมักจะรวมตัวกันเป็น "กองที่ซ้อนกัน" โดยเรียงลำดับจากบนลงล่างเป็น กริซลี่ แพนด้า และไอซ์แบร์ ซึ่งพวกมันใช้ในการเดินทางรอบเมือง ภาพ “กอง” ที่ว่าอาจกลายเป็นภาพที่เป็นที่รู้จักมากที่สุดจากเรื่องนี้แม้ว่าพวกมันจะเดินสองขาด้วยตัวเองเช่นกัน บางครั้งพวกหมีแบ่งปันการผจญภัยกับเพื่อนๆ เช่นเด็กอัจฉริยะอย่าง โคลอี้ ปาร์ค, บิ๊กฟุต ชาร์ลี, เน็ตไอดอล โคล่า งั่มงั่ม, เจ้าหน้าที่เทบส์ และแม่ค้าสาว ลูซี บางตอนย้อนเหตุการณ์เล่าถึงการผจญภัยของหมีในขณะที่ยังเป็นลูกหมีพยายามหาบ้าน</Text>
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
                <Image source={{ uri: "https://i.pinimg.com/564x/9d/81/4f/9d814fbd9f35bb5e4e20bd7b3f6759b5.jpg" }}
                    style={{ width: 380, height: 310, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Grizzly Bear</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/da/91/c8/da91c83a42311d65a404b65f4a19357e.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Panda Bear</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/6f/5a/34/6f5a34181beb2c2de8185d39255ad08a.jpg" }}
                    style={{ width: 380, height: 250, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Ice bear</Text>

                <Text style={{ padding: 15, fontSize: 28 }}>ตัวละครสมทบ</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/23/61/33/236133ef36cb0572f26a6cda04ff9f7c.jpg" }}
                    style={{ width: 380, height: 260, borderRadius: 20, marginTop: 10 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Chloe Park</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/cc/d5/30/ccd5301944c188421702a67e58d2947f.jpg" }}
                    style={{ width: 380, height: 260, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Nom Nom</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/69/6a/2b/696a2be769cdd693924b9dfa24a5797c.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Charlie</Text>

                <Image source={{ uri: "https://thehybridone.files.wordpress.com/2017/04/screenshot-2017-04-13-17-29-30.png" }}
                    style={{ width: 380, height: 260, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>ราล์ฟ Big foot </Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/f0/5c/7d/f05c7da5bd9c09e36a73d30a8d65926c.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Yuri</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/8c/4f/47/8c4f4722e4d9a87d7e8e02fe932222ef.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>Ranger Dana Tabes</Text>

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
            <Text style={{ fontSize: 30, paddingTop: 20 }}>"We Bare Bears"</Text>
        </View>
    );
}
