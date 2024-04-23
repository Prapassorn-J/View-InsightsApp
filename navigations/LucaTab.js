import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function LucaTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/66/14/4e/66144e120e8659d9ffbfae40b5e8fd28.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/d1/2f/00/d12f002039f9184ea28c0a21df290b1d.gif" }}
                        style={{ width: 220, height: 180, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/05/fb/0d/05fb0d036274fc3086849161a3f9d9a6.gif" }}
                        style={{ width: 210, height: 180, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Luca</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เนื้อเรื่องตามด้วยในคริสต์ทศวรรษ 1950 ลูก้า พากูโร เป็นเด็กหนุ่มสัตว์ประหลาดทะเลที่ขี้อาย ฝูงปลาแพะนอกชายฝั่งเมืองอิตาลีของปอร์โตรอสโซ มีพ่อแม่ของลูก้าคือ แดเนียลา และลอเรนโซ กลัวว่ามนุษย์จะล่ามันเพื่อเป็นอาหารห้ามมิให้เข้าใกล้ผิวน้ำ วันหนึ่งลูก้าพบกับอัลเบอร์โต สคอร์ฟาโน เด็กสัตว์ประหลาดทะเลเพื่อนที่อาศัยอยู่คนเดียวเหนือผิวน้ำ อ้างว่าพ่อของเขาไม่ได้อยู่ใกล้มาก อัลเบอร์โตกระตุ้นให้ลูก้าออกไปผจญภัยในมหาสมุทร แสดงให้เขาเห็นว่าสัตว์ทะเลกลายเป็นมนุษย์เมื่อแห้ง แต่กลับคืนร่างที่แท้จริงเมื่อเปียกน้ำ ลูก้าตามอัลเบอร์โตไปที่ที่หลบภัยของเขาบนอีโซลาเดลมาเร ที่ซึ่งเด็กๆ เชื่อมต่อกันขณะทำและขี่รถเวสป้าที่บอบบางชั่วคราว

                    เมื่อได้รู้การกระทำของลูกชาย พ่อแม่ของลูก้าตัดสินใจส่งลูก้าไปอาศัยอยู่ในส่วนทะเลลึกกับลุงของเขา ในการตอบโต้ ลูก้าหนีไปกับอัลเบอร์โตเพื่อที่จะซ่อนตัวในปอร์โตรอสโซ เหล่าเด็กหนุ่มๆวิ่งตามเออร์โคล วิสคอนติ คนพาลในท้องถิ่นและแชมป์ห้าสมัยแห่งปร์โตรอสโซคัพ ไตรกีฬาว่ายน้ำ กินพาสต้า และปั่นจักรยานสำหรับเด็ก เมื่อเออร์โคลพยายามที่จะแช่ลูก้าในน้ำพุ จูเลีย มาร์โควัลโด เด็กสาวที่จะหยุดเขา หวังว่าจะได้เงินที่จำเป็นสำหรับเวสป้า เหล่าเด็กๆร่วมทีมกับจูเลียเพื่อเล่นไตรกีฬา

                    จูเลียเชิญมาพักที่บ้านจูเลียและแนะนำพ่อชาวประมงของจูเลียคือ แมสซิโม ผู้ซึ่งมีความขุ่นเคืองต่อสัตว์ทะเล ในขณะเดียวกัน ครอบครัวของลูก้าแทรกซึมเข้าไปในเมืองเพื่อค้นหาลูกชายของพวกเขา จูเลียและลูก้าผูกพันกับความรักในการเรียนรู้ ทำให้อัลเบอร์โตอิจฉา เมื่อลูก้าแสดงความสนใจเข้าโรงเรียน อัลเบอร์โตตั้งใจเปิดเผยร่างอสูรทะเลของอัลเบอร์โตให้จูเลียเพื่อป้องกัน ไม่ยอมเสียสละตัวเอง ลูก้าแสร้งทำเป็นแปลกใจที่จะอยู่กับจูเลียต่อไป และทรยศต่ออัลเบอร์โตหนีไปเป็นแก๊งค์ของเออร์โคลปรากฏตัวขึ้นและพยายามตามล่าลูก้า ในช่วงเวลาอกหัก อัลเบอร์โตทิ้งทุกอย่างในที่ซ่อนของอัลเบอร์โต ไม่นานจูเลียพบว่าลูก้าเป็นสัตว์ปะหลาดทะเลเช่นกัน และส่งลูก้าออกไปเพื่อความปลอดภัยของลูก้า</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#EBC680', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/ee/43/4b/ee434b68c440f05e0c781dbc777705b7.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Luca Paguro</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/f7/78/55/f7785506f69a4df19afd70bee625baa4.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Alberto Scorfano</Text>


                    <Image source={{ uri: "https://i.pinimg.com/736x/11/70/4b/11704ba185cc3a4d76e113291b61088b.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> Giulia Marcovaldo</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/29/20/1e/29201edcff645cc285888a235cdea82e.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Massimo ,Marcovaldo</Text>


                    <Image source={{ uri: "https://static.wikia.nocookie.net/disney/images/6/68/Uncle_Ugo_%282%29.jpg/revision/latest?cb=20210621155941" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Uncle Ugo</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/69/36/b4/6936b426bff08210a62648a6f47971a0.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Daniela Paguro</Text>

                    <Image source={{ uri: "https://static.wikia.nocookie.net/disney/images/3/3f/Lorenzo_Paguro_2.png/revision/latest?cb=20210607194030" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Lorenzo Paguro</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/96/94/70/969470a8bbb37414181038b0aec569c3.jpg" }}
                        style={{ width: 350, height: 250, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Nonna</Text>

                    <Image source={{ uri: "https://i.pinimg.com/736x/9e/27/ff/9e27ffbef5a534aec0643287961eb436.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Ercole</Text>

                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
               
                <Text style={{ fontSize: 30, padding: 10, marginTop: 10 }}>7 ข้อคิดจากการ์ตูนเรื่อง LUCA </Text>
            </View>

            <View>
                
                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่1</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>การเลี้ยงดูลูกเหมือนไข่ในหิน ประคบประหงมลูกจนเกินไปอาจเป็นการปิดกั้นลูกจากเรียนรู้สิ่งใหม่ ๆ 
                อาจทำให้ลูกไม่กล้าตัดสินใจ ไม่พร้อมเติบโต</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/c8/aa/53/c8aa531d9c449bdda81061dc6f7cd3da.jpg" }}
                    style={{ width: 450, height: 310, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่2</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>พ่อแม่อาจจะหวังดีกับลูก แต่การบังคับลูกไม่ใช่เรื่องที่ดี เช่นที่พ่อแม่ของลูก้าทำ อาจเป็นการปกป้องลูกจากอันตรายแต่การบังคับขืนใจลูกยิ่งสร้างปมขัดแย้งในใจ และเป็นเหตุให้ลูก้าต้องหนีออกจากบ้าน</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่3</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>คนเราแตกต่างกันเพียงแค่รูปร่างหน้าตา คนที่แตกต่าง ไม่ใช่คนแปลก และความแตกต่างไม่ใช่สิ่งที่ทำให้เราต้องเกลียดหรือทำร้ายกัน</Text>
                
                <Image source={{ uri: "https://i.pinimg.com/564x/e1/fd/77/e1fd77a3b0a450dec00bcf4506a5805a.jpg" }}
                    style={{ width: 450, height: 380, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่4</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>การปรับตัวไม่ใช่เรื่องน่ากังวล เราสามารถเรียนรู้และใช้ชีวิตร่วมกันในสังคมได้ เช่นการที่ลูก้าและอัลแบโต้เรียนรู้วิถีการใช้ชีวิตบนฝั่งจากจูเลียและพ่อของเธอ</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่5</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>ให้โอกาสลูกได้ทำสิ่งใหม่ แล้วเราจะเห็นความพยายาม</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/59/6b/1a/596b1a53ae28c54575b5198fd510487f.jpg" }}
                    style={{ width: 450, height: 350, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่6</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>จงเชื่อมั่นและไว้วางใจลูก ดังคำพูดของคุณยายที่บอกกับพ่อแม่ของลูก้าในช่วงท้ายว่า “คนบางคนจะไม่มีวันยอมรับเขา แต่บางคนยอมรับ และดูเขาจะรู้จักคบคนดี ๆ ซะด้วยนะ” สะท้อนให้เห็นว่าเด็ก ๆ เขาสามารถตัดสินใจและคิดได้เองว่าจะคบหรือไม่คบใครเป็นเพื่อน พ่อแม่อาจเป็นห่วงลูกกลัวคบคนไม่ดี แต่หากเราเลี้ยงลูกมาดีแล้ว เขาจะรู้จักเลือกคบคนได้เอง  </Text>

                <Text style={{ fontSize: 25, padding: 10 }}>ข้อที่7</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}> ไม่ว่าลูกจะเป็นอย่างไร พ่อแม่พร้อมสนับสนุนเสมอ แม้ลูก้าจะทำผิดที่หนีพ่อแม่ออกมาจากโลกใต้น้ำ แต่เมื่อต้องการทำตามความฝัน พ่อแม่เองก็พร้อมสนับสนุนลูก้าเช่นกัน</Text>

                <Image source={{ uri: "https://www.rakluke.com/images/2021/News_Update/5391-4.webp" }}
                    style={{ width: 450, height: 380, marginTop: 15 }} />

            </View>

        </ScrollView>

    );
}