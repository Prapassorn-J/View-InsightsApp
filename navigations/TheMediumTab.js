import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TheMediumTab() {

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
                    source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/download%20(6).jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/c1e4e3d8d0ab2850ce598c7784572853/18a9845119b0bf01-42/s540x810/7dadaa365ce571e17dfad7bf93427e6719568e0f.gifv" }}
                        style={{ width: 220, height: 160, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/15e6362577a73bddf60a717cdaa8bc3d/18a9845119b0bf01-80/s540x810/ee061683343b2e822f7e050176b68fb7607c52ce.gifv" }}
                        style={{ width: 210, height: 160, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>The Medium</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เรื่องราวการถ่ายทำสารคดีติดตามชีวิตครอบครัวที่สืบเชื้อสายร่างทรง "ย่าบาหยัน" มาหลายชั่วอายุคน ซึ่งเชื่อกันว่าจะเลือกแต่ร่างของผู้หญิงเพื่อสืบทอดทายาท โดยมี ป้านิ่ม  เป็นผู้สืบทอดสายเลือดร่างทรงคนปัจจุบัน ระหว่างการถ่ายทำกำลังดำเนินอยู่นั้น ทุกคนเริ่มพบอาการแปลกประหลาดหลายอย่างเกิดขึ้นกับ มิ้ง หลานสาวคนเดียวของตระกูล ทุกคนจึงคาดกันว่ามิ้งน่าจะถูกรับเลือกให้เป็นทายาทร่างทรงคนต่อไป แต่เมื่อเวลาผ่านไปมิ้งกลับมีอาการน่ากลัวขึ้นเรื่อย ๆ จนสมาชิกในครอบครัวเริ่มสงสัยกันว่าจริง ๆ แล้วสิ่งที่เข้ามาอยู่ในร่างของมิ้งอาจจะไม่ใช่ย่าบาหยันอย่างที่ทุกคนคิด</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{
                    flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#969696', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                {/* <Text style={{ padding: 15, fontSize: 28 }}>ของเล่นของแอนดี้</Text> */}
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/YDA.jpg/480px-YDA.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>มิ้ง</Text>

                    <Image source={{ uri: "https://media.thairath.co.th/image/6xCMY8N9kWHlhXgKloqBIQyYFeiZfNZCE8Y5p1V2eZCV5ce9vA1.png" }}
                        style={{ width: 350, height: 360, borderRadius: 20 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>นิ่ม (น้าของมิ้ง)</Text>


                    <Image source={{ uri: "https://files.gqthailand.com/uploads/d_20211101150041.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>น้อย (แม่ของมิ้ง)</Text>

                    <Image source={{ uri: "https://contentthailand.com/wp-content/uploads/2021/11/%E0%B8%A2%E0%B8%B0%E0%B8%AA%E0%B8%B0%E0%B8%81%E0%B8%B0-%E0%B9%84%E0%B8%8A%E0%B8%A2%E0%B8%AA%E0%B8%A3-scaled.jpeg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>มานิต (ลุงของมิ้ง)</Text>
 
                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>ถอดรหัสหนัง"ร่างทรง"</Text>
            </View>

            <View>

                <Text style={{ fontSize: 25, padding: 10 }}>1.ปักธูปกลับหัว</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   การปักธูปกลับหัวเป็นความเชื่ออย่างหนึ่งทางไสยศาสตร์ ซึ่งไม่ใช่การกระทำที่ดีนัก เพราะถือเป็นการทำร้ายวิญญาณหรือเป็นการทำให้วิญญาณไม่ได้ไปอย่างสงบสุข ซึ่งขัดกับหลักของพระพุทธศาสนา ความหมายของการปักธูปกลับหัวมีอยู่ 3 ความหมาย คือ เป็นการทำให้ศพฟื้นคืนชีพ, เป็นการอัญเชิญวิญญาณเร่ร่อน และ เป็นการสะกดวิญญาณไม่ให้มาทำร้ายผู้ปักธูปกลับหัว</Text>

                <Image source={{ uri: "https://s.isanook.com/mv/0/ui/22/112393/Sanook_IMG_1825.jpg?ip/crop/w263h263/q80/jpg" }}
                    style={{ width: 450, height: 310, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>2.ใครเรียก...ห้ามขานรับ </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   เคยได้ยินไหม โบราณเขากล่าวว่า เวลากลางคืนได้ยินเสียงเรียกทัก ห้ามขานรับเด็ดขาด เพราะเชื่อว่าเป็นเสียงเรียกของดวงวิญญาณที่อาจจะมาหลอกมาหลอน หากเราขานรับ จะถือเป็นการอนุญาตให้วิญญาณเข้ามา ของจะเข้าตัว หรือเป็นการเชิญวิญญาณเข้าบ้าน จากตัวอย่างหนัง จะเห็นฉากที่ มิ้ง ขานรับเสียงที่ทักเธอตอนกลางคืน หลังจากนั้นเธอก็ถูกสิง</Text>
                <Image source={{ uri: "https://s.isanook.com/mv/0/ui/22/112393/Sanook_IMG_1838.jpg?ip/crop/w263h263/q80/jpg" }}
                    style={{ width: 450, height: 330, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>3.ลากไข่ถอนคุณไสย </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   เป็นความเชื่อทางไสยศาสตร์อย่างหนึ่งของชาวเขมร หรือที่เรียกในภาษาเขมรว่า “เลียกดอก” ซึ่งแปลว่า ลากถอน เป็นวิธีรักษาอาการของคนถูกคุณไสย โดยการนำไข่ลากถูไปมาตามร่างกายของคนที่ถูกคุณไสย จากนั้นจึงนำไข่ไปวางในกระทงกาบแก้ว ไข่ที่โดนคุณไสย เมื่อตอกออกมาจะมีสีดำ กลิ่นเหม็นเน่า เลือด หรือ สิ่งของที่ถูกทำใส่ เช่น เส้นผม ตะปู เข็ม</Text>

                <Image source={{ uri: "https://s.isanook.com/mv/0/ui/22/112393/Sanook_IMG_1827.jpg?ip/crop/w263h263/q80/jpg" }}
                    style={{ width: 450, height: 320, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>4.สังเวยเนื้อควายสด</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   จากฉากที่หมอผีและลูกศิษย์กำลังจูงควายเข้าไปยังสถานที่หนึ่ง และฉากหมอผีที่จับเขาควายที่ถูกชำแหละแล้ว คาดว่าผู้เขียนบทน่าจะได้รับแรงบันดาลใจมาจากความเชื่อทางภาคเหนืออย่าง ประเพณีเลี้ยงดง ซึ่งจัดก่อนฤดูทำนาทุกปี โดยอาศัยร่างทรงอัญเชิญวิญญาณ ปู่แสะ ย่าแสะ มารับเครื่องเซ่นสังเวย ซึ่งในอดีตปู่แสะ ย่าแสะ เป็นยักษ์ที่จับมนุษย์และสัตว์ป่ามากินเป็นอาหาร แต่หลังจากได้ฟังธรรมะจากพระพุทธเจ้า จึงละเว้นจากการกินเนื้อ แต่มันผิดวิสัยยักษ์ จึงไม่สามารถทำได้ เลยขอต่อพระพุทธเจ้าว่า ขอให้ตนได้กินเนื้อสัตว์ปีละตัวแลกกับการดูแลบ้านเมืองให้มีความสงบสุขร่มเย็น ชาวบ้านจึงสังเวยควายหนุ่มสดๆ ให้กับปู่แสะ ย่าแสะทุกปี </Text>
                <Image source={{ uri: "https://s.isanook.com/mv/0/ui/22/112393/Sanook_IMG_1822.jpg?ip/crop/w263h263/q80/jpg" }}
                    style={{ width: 450, height: 320, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>5. อาบน้ำมนต์ไล่มนต์ดำ </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   น้ำมนต์ ถือเป็นน้ำอาคม ที่ถูกเสกคาถาไว้ นำมาใช้เพื่อชำระร่างกาย ขับไล่มนต์ดำ คุณไสย สิ่งสกปรกชั่วร้ายให้ออกไปจากร่างกาย โดยผู้ที่ทำพิธีขับไล่คุณไสย คือ ร่างทรง หรือ หมอผี นั่นเอง
                </Text>

                <Image source={{
                    uri: "https://s.isanook.com/mv/0/ui/22/112393/Sanook_IMG_1820.jpg?ip/crop/w263h263/q80/jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>6.อาการขณะโดนขับคุณไสย</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   จากตัวอย่างภาพยนตร์ จะเห็นว่า มิ้ง มีอาการกรีดร้องขณะที่มีการสวดมนต์และมีสายสิญจน์วางไว้บนหัว พร้อมอาเจียนออกมาเป็นสีดำ หรือมีท่าทางแข็งกร้าวจนใครต่อใครก็หวาดกลัว ขณะกำลังทำพิธีขับคุณไสย ซึ่งชาวบ้านเชื่อว่านี่เป็นอาการของคนโดนคุณไสย มนต์ดำ หรือ ถูกสิง และแสดงอาการต่อต้านจากการถูกขับไล่ </Text>
                <Image source={{ uri: "https://s.isanook.com/mv/0/ui/22/112393/Sanook_IMG_1831.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />


            </View>
        </ScrollView>

    );
}