import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TheFirstRespondersTab() {

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
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={{ uri: "https://i.pinimg.com/564x/4d/56/fc/4d56fcbce743eba3ff8249b1f7ffd87a.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/079924e1776bf828bdbe9f52ba6c4eeb/b1f079dcd93fdb66-0f/s540x810/ab543967f33dc4ec42d7b982bc37acd4a22aa0d1.gifv" }}
                        style={{ width: 220, height: 160, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/7c3550e1d1a32bad23e996b1d363a848/5ef8c988d8aacced-03/s540x810/2bc7621cb94e489ba9824b55e3961714c71d662a.gifv" }}
                        style={{ width: 210, height: 160, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>The First Responders</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เรื่องราวจะเป็นเหตุการณ์ที่วนเวียนรอบ ๆ สถานีตำรวจซึ่งมีหน้าที่จับอาชญากรและสถานีดับเพลิงที่ต้องทำหน้าที่ในการดับไฟ ตำรวจนักสืบหนุ่มที่ทั้งดุและดิบพยายามจะจับคนร้าย, แพทย์ประจำที่เกิดเหตุซึ่งเธอคอยรักษาทั้งบาดแผลทางกายและดูแลจิตใจของผู้เคราะห์ร้าย และ นักดับเพลิงหนุ่มที่รีบเข้าไปดับไฟในที่เกิดเหตุ ทั้ง 3 คนต่างจะมาเผยเรื่องราวการทำงานสุดระทึกที่มีจุดเชื่อมโยงกัน</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#5D8A5D', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/15/7a/f4/157af4a3408fef2dd1691cd4b6dafa21.jpg" }}
                        style={{ width: 350, height: 380, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>จิน โด-แก</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/58/57/ef/5857ef76aa0816d7af69d38b04f77852.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>พง โด-จิน</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/5b/67/7c/5b677c24fc96b474bf71bb94546e7b9a.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซ็อง ช็อล</Text>

                    <Image source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/08/The-first-responders-2-sbs-250823-son-ji-yoon.jpg?resize=1024%2C1024&ssl=1" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ยุนฮง</Text>


                    <Image source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/08/The-first-responders-2-sbs-250823-oh-eui-sik.jpg?resize=1024%2C1024&ssl=1" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คังโดฮา</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/5e/2a/0d/5e2a0d452c3e6f4ebe13ba4247ba1d8c.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คังกีดุง</Text>

                </View>

            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>3 วิธีเอาตัวรอดจากวิกฤตที่คิดไม่ถึงจาก The First Responders</Text>
            </View>

            <View>

                <Text style={{ fontSize: 25, padding: 10 }}>1.ทำอย่างไร ถ้าถูกแทง</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>1.อย่าดึงของมีคม เช่น มีด ดาบ เหล็ก หรืออื่นๆ ที่เสียบอยู่ออกเด็ดขาด ให้ปักคาไว้แบบนั้น
                </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>2.สังเกตจากเลือดที่ไหลออกมา ถ้าไหลเป็นจังหวะตามการเต้นของหัวใจแปลว่ามีดไปโดนเส้นเลือดใหญ่ ซึ่งจะทำให้ผู้บาดเจ็บเสียเลือดจนอาจเกิดภาวะช็อกได้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>3.ห้ามเลือดด้วยผ้าสะอาด กดรอบแผล และใช้ผ้าพันไว้ เพื่อให้ของมีคมอยู่นิ่งที่สุด</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>4.หากไม่ได้ไปโรงพยาบาลโดยเร็ว อาจเกิดอาการตัวเย็นและช็อกจากการเสียเลือด สามารถตรวจเช็คได้ง่ายๆด้วยการกดเล็บไปบนนิ้วมือ ถ้าไม่กลับมาเป็นสีชมพูอาจจะเกิดภาวะเขียวคล้ำ คือเนื้อเยื่อขาดออกซิเจนไปเลี้ยง</Text>


                <Text style={{ fontSize: 25, padding: 10 }}>2.ทำอย่างไร เมื่อเกิดเหตุไฟไหม้ และออกจากห้องไม่ได้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>1.หากเกิดเพลิงไหม้ภายในห้อง สิ่งแรกที่ต้องทำคือตั้งสติ
                </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>2หาผ้าชุบน้ำมาปิดปาก ปิดจมูก หรือหาผ้าห่มชุบน้ำมาห่มตัวไว้ เพื่อป้องกันการสูดดมควันไฟ และการป้องกันความร้อนจากเปลวไฟ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>3.ก้มตัวลงต่ำ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>4.ใช้ผผ้าชุบน้ำอุดบริเวณขอบบานประตู</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>5.จีบแจ้งเหตุ เพื่อให้เจ้าหน้าที่เข้ามาช่วยเหลือได้ทันท่วงที</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/bd/b4/a7/bdb4a7f6312d5b6f8dfabcebdc8ec68f.jpg" }}
                    style={{ width: 450, height: 360, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>3.ทำอย่างไร ถ้าเกิดภาสะเป็นพิษจากพาราควอท</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   พาราควอท เป็นสารที่กำจัดวัชพืชได้อย่างมีประสิทธิภาพและได้ผลรวดเร็ว แต่ขณะเดียวกันก็มีพิษต่อร่างกายรุนแรง ถ้ากินเข้าไปเพียงปริมาณเล็กน้อยก็อาจทำให้ระบบอวัยวะภายในล้มเหลว ปอดเกิดผังผืดจนไม่สมารถทำหน้าที่แลกเปลี่ยนแก๊สได้ ระบบหายใจล้มเหลว และเสียชีวิต 
                </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>The First Responders สอนวิธีการรักษาอาการพิษจากพาราควอทไว้ดังนี้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>1.เช็กทางเดินหายใจ ถ้าไม่หายใจ ให้เช็กสัญญาณชีพจรและให้สารน้ำอย่างเพียงพอ เนื่องจากพาราควอทมีพิษต่อไต ซึ่งอาจทำให้ไตวายหากให้สารน้ำไม่เพียงพอ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>2.ตรวจร่างกายเพื่อดูรอยไหม้ในปากและลำคอว่ามีหรือไม่ ใส่สายล้างกระเพาะเพื่อดูดน้ำในกระเพาะออกให้มากที่สุด และให้สารดูดซับอย่างใดอย่างหนึ่งในสองอย่างนี้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   -ผงถ่านกัมมันต์ขนาด 100 กรัม ให้ผู้ใหญ่ หรือสำหรับเด็กคือ 2 กรัมต่อน้ำหนักตัว 1 กิโลกรัม</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   -สารละลายดินเหนียว 15% Fuller's earth ขนาด 1 ลิครในผู้ใหญ่ หรือ 15 มิลลิกรัมต่อน้ำหนักตัวของเด็ก เพื่อลดการดูดซึมเข้าสู่ทางเดินอาหาร</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/ea/df/2f/eadf2f197f8de243dd8b2ac8c178fc54.jpg" }}
                    style={{ width: 450, height: 320, marginTop: 15 }} />


            </View>
        </ScrollView>

    );
}