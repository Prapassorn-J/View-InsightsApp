import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ExtremeJobTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/74/58/c9/7458c9cd003735a2a635df6e906b92a9.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/1a0f69393fb167451a86411de6cd0fa1/7a30d92a7357e2f7-81/s540x810/a98e1a7344ea4bde778dffc899f9d348244bfb6f.gifv" }}
                        style={{ width: 220, height: 160, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/83f5677d96ff18429fd45a88b02a22b5/7a30d92a7357e2f7-87/s540x810/a40be4742b3bc03ab67e1fee70c4934fbc22f173.gifv" }}
                        style={{ width: 210, height: 160, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Extreme Job</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>    เมื่อเหล่าตำรวจสายสืบ 5 คนที่ขึ้นชื่อสุดยอดการทำงานเป็นทีมมารวมตัวกันในการทำคดี แต่มักจะจบลงด้วยการคว้าน้ำเหลวตลอด จนทำให้ถูกดองตำแหน่งกันจนแทบจะไม่มีงาน แต่แล้ววันหนึ่งรุ่นน้องของหัวหน้าได้เลื่อนขั้นตัดหน้าไปอย่างต่อหน้าต่อตา จึงทำให้ทั้งทีมต้องฮึดขึ้นสู้อีกครั้งเพื่อหน้าตาของตนเอง และ เพื่อตำแหน่งใหม่ จะให้ใครมาหยามไม่ได้เด็ดขาด โดยภารกิจที่พวกเขาจะต้องทำนั้นคือการซุ่มจับ เจ้าพ่อ ค้ายาเสพติดรายใหญ่ระดับชาติ อีกทั้งยังมีลูกน้องที่มากฝีมือหลายคนที่รวมอยู่ในแก๊งค์ และยังมีระบบการรักษาความปลอดภัยที่เข้มงวดอีกด้วย พวกเขาทั้ง 5 คนจึงต้องแอบซุ่มจับตามองแก๊งค์ค้ายาเสพติดนี้อยู่ภายในร้านขายไก่ทอด แต่แล้วโชคชะตาก็เล่นตลกอีกครั้ง เมื่อร้านไก่ทอดนี้กำลังจะปิดตัวลง เนื่องจากไม่มีลูกค้าสักคนเข้ามาซื้อ พวกเขาจึงตัดสินใจอย่างเด็ดเดี่ยวด้วยการขอเงินทุนก้อนสุดท้ายมาลงทุนซื้อกิจการร้านไก่ทอดนี้  เพื่อที่พวกเขาจะได้จับตาดูแก๊งค์ค้ายาเสพติดนี้ได้ต่อไป ถ้าจะเปิดร้านไว้อย่างเดียวก็คงไม่ได้ เพราะอาจจะไม่แนบเนียน พวกเขาจึงตัดสินใจอีกครั้งด้วยการแกล้งขายไก่ทอดด้วย เพราะคิดว่าคงจะไม่มีใครสั่งอย่างแน่นอน แถมยังไม่ผิดสังเกตอีกด้วย แต่แล้วเรื่องทุกอย่างก็กลับจากหน้ามือเป็นหลังมือ เมื่อไก่ทอดของพวกเขาอร่อยถูกปากใครต่อใคร ทำให้บอกต่อกันเป็นทอดๆ จนขายดี แทบจะไม่มีเวลามานั่งจับตาดูแก๊งค์ค้ายาเสพติดเลย แล้วภารกิจที่เหลือจะสำเร็จหรือไม่ พวกเขาจะทำภารกิจซุ่มจับคนร้ายได้หรือไม่ หรือว่าจะเปลี่ยนใจมาขายไก่ทอดกันอย่างจริงจัง</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#DC9146', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                {/* <Text style={{ padding: 15, fontSize: 28 }}>ของเล่นของแอนดี้</Text> */}
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ryu_Seung-Ryong_in_2019.png/375px-Ryu_Seung-Ryong_in_2019.png" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Squad chief Go</Text>

                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lee_Hanee%2C_2022_%28cropped%29.png/330px-Lee_Hanee%2C_2022_%28cropped%29.png" }}
                        style={{ width: 350, height:400 , borderRadius: 20 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Detective Jang</Text>


                    <Image source={{ uri: "https://fims.kofic.or.kr/common/mast/people/2018/09/e615f56e16964371853441b151d731ea.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Detective Ma</Text>

                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/4b/160305_%EC%9D%91%EB%8B%B5%ED%95%98%EB%9D%BC_1988_%EC%BD%98%EC%84%9C%ED%8A%B8_%EC%9D%B4%EB%8F%99%ED%9C%98_%28Lee_Dong_Hwi%29_cropped.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Detective Young-ho</Text>


                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Actor_Gong_Myung_%28%EA%B3%B5%EB%AA%85%29_Marie_Clarie_January_2024.png/330px-Actor_Gong_Myung_%28%EA%B3%B5%EB%AA%85%29_Marie_Clarie_January_2024.png" }}
                        style={{ width: 350, height: 360, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Detective Jae-hoon</Text>

                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>"Extreme Job"</Text>
            </View>
        </ScrollView>

    );
}