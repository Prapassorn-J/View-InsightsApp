import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function AdventureTimeTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/9d/da/eb/9ddaeb34215c479309e719b1ca8d0a7f.jpg" }}
                    style={{ width: 450, height: 490 }}
                />
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/35/4d/1f/354d1ff3cfa818ff0388e62f5a5e68c5.gif" }}
                        style={{ width: 210, height: 200, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/08/b4/f3/08b4f35b31e0ea0948ca7b5778e32b54.gif" }}
                        style={{ width: 210, height: 200, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Adventure Time</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เป็นเรื่องราวการผจญภัยของเจ้นนักผจญภัยหนุ่มชื่อ Finn และเพื่อนสมัยกลางคืนของเขา ได้แก่หมาป่าชื่อ Jake ที่สามารถยืดเหยียดร่างกายได้ตามสะดือเพื่อเข้าถึงพลังพิเศษต่างๆ สิ่งที่ทำให้เรื่องราวนี้น่าสนใจคือการผจญภัยในโลกที่เต็มไปด้วยสิ่งมหัศจรรย์และตัวละครที่น่ารัก รวมถึงการเผชิญหน้ากับศัตรูที่มีพลังมากมายต่างๆ ในการปกป้องโลกแห่งความรู้สึกที่เรามีความรักให้แก่ตัวละคร</Text>

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
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: "https://i.pinimg.com/564x/0e/1d/17/0e1d17cdf0d582c3c767261b1b2fef3c.jpg" }}
                    style={{ width: 380, height: 310, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>ฟินน์ (Finn)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/9d/b3/c8/9db3c8739725061c426d405d120e9b0d.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>ฟิโอน่า (Fiona)</Text>
                <Text style={{ fontSize: 18, color:'#828282'}}>เป็นตัวละครเวอร์ชันสลับเพศของฟินน์</Text>

                <Image source={{ uri: "https://i.pinimg.com/736x/3b/fc/a3/3bfca3381125a07186c03fa9d1492e11.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เจค (Jake)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/63/2a/9a/632a9af2af60087c14905a68ea65f0bc.jpg" }}
                    style={{ width: 380, height: 260, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เค้ก (Cake)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/01/24/c6/0124c68bd9dfef23adc6eb076d347eb3.jpg" }}
                    style={{ width: 380, height: 260, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>กันเธอร์ (Gunter)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/33/47/a1/3347a173ca9063c5d7c77fa102ad6a3f.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เจ้าหญิงบั๊บเบิ้ลกัม (Princess Bubblegum)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/0c/84/ea/0c84ea1df7ed709c03c11f14d57ec1c6.jpg" }}
                    style={{ width: 380, height: 280, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เจ้าชายกัมบอล (Prince Gumball)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/19/f7/44/19f744567f90fc630fc259be0cc568ba.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>บีโม่ (BMO)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/8e/24/14/8e2414020de10157971e3e250e0a5483.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>มาซีลีน (Marcelline)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/7b/64/2e/7b642e8e9ae555f12fe3588b584f31fe.jpg" }}
                    style={{ width: 380, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>มาแชล ลี (Marshall Lee)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/0a/73/75/0a7375abc08c8492074c277418787638.jpg" }}
                    style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เจ้าหญิงลัมปี้สเปซ (Lumpy Space Princess)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/c6/8a/bf/c68abf7493d9ebb92f7f487d156dab3c.jpg" }}
                    style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เจ้าหญิงเฟลม (Flame Princess)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/05/76/38/057638d582cd0eee270c270499bc50c1.jpg" }}
                    style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เจ้าหญิงสไลม์ (Slime Princess)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/f1/f8/27/f1f827bd67663cbfc5e3979fd1558d35.jpg" }}
                    style={{ width: 350, height: 200, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เลดี้ เรนนิคอร์น (Lady Rainicorn)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/b6/96/71/b69671d0949fb7d0b2ed85dfc368c5dc.jpg" }}
                    style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เบ็ตตี้ กรอฟ (Betty Grof)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/73/fb/e3/73fbe378ab46f33b9282614b7a178712.jpg" }}
                    style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>คิง ออฟ อู (King of Ooo)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/49/cd/4e/49cd4e7be2ac8ea0f54c07dce1aef876.jpg" }}
                    style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เอิร์ล ออฟ เลมอนแกรป (Earl of Lemongrab)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/f2/4e/4a/f24e4ab986db6d76a5efcdf10252c5ee.jpg" }}
                    style={{ width: 350, height: 220, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เฟิร์น (Fern)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/fa/50/f0/fa50f01b08935f65461e7ca356b124e2.jpg" }}
                    style={{ width: 350, height: 260, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>GOLB</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/b1/ef/94/b1ef94767e89a30d9200fd522dd6d4cb.jpg" }}
                    style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>เดอะลิช (The Lich)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/23/8b/d2/238bd237b2f24b4f747f3629d5740f89.jpg" }}
                    style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>ไอซ์คิง (Ice King)</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/5a/a4/dc/5aa4dc169c312a8819b8be1328648e74.jpg" }}
                    style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                <Text style={{ fontSize: 25, paddingTop: 10 }}>ไอซ์ควีน (Ice Queen)</Text>
            
            </View>

        </ScrollView >
    );
}

function LeafScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "https://today-obs.line-scdn.net/0h4kl-CzQJa0RRVH6cOGMUE2kCZzViMnFNc2EjdSRQZyQueH4TP2A4JyMBYmgvYiwbcTolKyRUPHB9NHtGag/w1200" }}
                style={{ width: '100%', height: 500 }}
            />
            <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   Adventure Time มีทฤษฎีสมคบคิดที่แฟนคลับพากันเชื่อมโยงอีสเตอร์เอ้กในเรื่องกับเหตุการณ์จริงว่าจริงๆเมืองแห่งกาพยากรณ์อูในเรื่องเป็นเหตุการณ์หลังวันโลกแตก และช่วงต้นของซีซั่นแรกตัวละครเจคได้พูดถึงสงครามมหาเห็ดที่เกิดขึ้นเมื่อ 1,000 ปีก่อนจากพลังนิวเคลียร์ ซึ่งทฤษฎีนี้ได้รับการยืนยันจาก Pendleton Ward ผู้สร้าง Adventure Time ว่าเป็นเรื่องจริง  นอกจากนี้ยังมีทฤษฎีที่ว่า เรื่องราวทั้งหมดนั้นเป็นการเล่าเรื่องผ่านมุมมองของฟินน์และพ่อของเขาที่เล่นเกมด้วยกันนั่นเอง</Text>
        </View>
    );
}