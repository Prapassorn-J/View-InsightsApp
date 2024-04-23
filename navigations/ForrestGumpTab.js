import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ForrestGumpTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/d2/e8/06/d2e8063473532a8eb500fca84bc418c6.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/24/b3/b6/24b3b6d2eeeb40daa9d2f9fb16eb6e87.gif" }}
                        style={{ width: 220, height: 160, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/60/d7/14/60d71493041ec3e3a97bc890ae58d901.gif" }}
                        style={{ width: 210, height: 160, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Forrest Gump </Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เนื้อเรื่องของหนังเล่าถึงชีวิตของ Forrest Gump ผู้ที่เกิดมาพร้อมกับขาที่ไม่แข็งแรงและไอคิวที่ต่ำกว่าคนปกติทั่วไป แต่ทั้งชีวิตของเขานั้นบอกเลยว่าต้องแตกต่างและไม่เหมือนใครในโลกอย่างแน่นอน เพราะในชีวิตของชายคนนี้ เขาได้พบเจอกับเหตุการณ์ต่างๆ ผู้คน แรงกดดัน ความเศร้า การมีความสุข ทุกสิ่งเหล่านี้คือทั้งหมดที่เขาได้เจอในชีวิตและเขาพร้อมที่จะเล่าให้ผู้คนแปลกหน้ามากมายที่มานั่งรอรถเป็นเพื่อนของเขา ไปติดตามชมกันได้ กับ Forrest Gump อัจฉริยะปัญญานิ่ม</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#C18282', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/44/1b/11/441b111658c82281180dda586bde3559.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ฟอร์เรสท์ กัมพ์</Text>

                    <Image source={{ uri: "https://www.bangkokbanksme.com/uploads/topics/15903992225161.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>เจนนี่ เคอร์แรน กัมพ์</Text>


                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrTc1f4-HHZHGioCWXu9OwfLTOPWhlye6ZNaPHMuh7g&s" }}
                        style={{ width: 350, height: 360, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>นายร้อย แดน เทย์เลอร์</Text>

                    <Image source={{ uri: "https://static.wikia.nocookie.net/p__/images/f/f6/Bubba.jpg/revision/latest?cb=20130722223832&path-prefix=protagonist" }}
                        style={{ width: 350, height: 410, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>เบนจามิน บูฟอร์ด บลู (บับบา)</Text>


                    <Image source={{ uri: "https://static.wikia.nocookie.net/f__/images/f/fa/Mrs-Gump-forrest-gump.jpg/revision/latest/smart/width/386/height/259?cb=20110727022645&path-prefix=forrestgump" }}
                        style={{ width: 350, height: 360, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>นางกัมพ์ (แม่ของฟอร์เรสท์)</Text>

                    <Image source={{ uri: "https://static.wikia.nocookie.net/fosterpedia/images/5/5e/Forrest_Gump_Jr..jpg/revision/latest?cb=20200505193715" }}
                        style={{ width: 350, height:400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ลูกของฟอร์เรสท์</Text>

                    <Image source={{ uri: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/ba8ea8d8-4254-448a-85db-a03290716b01/accd96f5-5bb2-43e2-a79f-fd9fee65a9cc.jpg" }}
                        style={{ width: 350, height: 360, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คนขับรถโรงเรียน</Text>

                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>8 สิ่ง ที่คุณสามารถเรียนรู้ได้จากหนังเรื่อง “Forest Gump (1994)”</Text>
            </View>

            <View>

                <Text style={{ fontSize: 25, padding: 10 }}>1.“อย่ากลัวที่จะพูดความจริง” </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   Forest Gump มักจะพูดสิ่งที่เขาคิดเสมอซึ่งทำให้ทุกคนมักหัวเราะเยาะ แต่เมื่อรู้จักตัวตนของเขาทุกคนจะสัมผัสได้ถึงความจริงใจของเขา ทำให้คุณอดไม่ได้ที่จะรักเขาในที่สุด</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/f9/5f/e0/f95fe0dba84a0dc5592301de75d57460.jpg" }}
                    style={{ width: 450, height: 310, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>2.“คุย กับ ทุกคน ให้เหมือนกัน”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   ไม่ว่าจะเป็น ภารโรง พี่เลี้ยง ป้าที่ป้ายรถเมย์ หรือ ประธานาธบดี Forest Gump จะมีความสม่ำเสมอในการพูดคุยกับทุกคน ทำให้เขาเป็นที่รักเข้าได้กับทุกคน ๆ</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>3.“บอกความรู้สึกคุณ ให้คนที่คุณรักรู้เสมอ”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   Forest Gump ไม่เคยกลัวที่จะบอกรักกับแม่ของเขา ในหนังเราจะได้ยิน Forest Gump บอกรักแม่ทุกครั้งก่อนที่จะจากลา และเมื่อพบเจอเสมอเค้าจะทำเช่นนี้กับทุก ๆ คนที่มีความสำคัญกับเขาเสมอ</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/da/0a/61/da0a611d42b27f9930938fe1e3928faa.jpg" }}
                    style={{ width: 450, height: 320, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>4.“กล้าทำในสิ่งใหม่”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   ในหนังจะเห็นได้ว่า Forest Gump จะเป็นคนที่กล้าทำในสิ่งใหม่ ๆ ถึงแม้ว่าคนทั่วไปอาจจะมองว่ามันตลกและเป็นไปไม่ได้ Forest Gump สอนให้เรารู้ว่า คุณจะไม่รู้เลยว่ามันจะเป็นไปได้หรือไม่ หากคุณไม่ลงมือทำแล้วใครจะรู้ คุณอาจจะทำมันได้อย่างยอดเยี่ยมเกินคาดก็เป็นได้</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>5.“อย่ากลัวความผิดหวัง”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   ในหลาย ๆ ตอนของหนัง คุณจะสังเกตได้ว่า Forest Gump มักพบกับความผิดหวัง แต่เพราะเขาไม่ได้จมปักกับมันและไม่ได้มองมันในแง่ลบ เขากลับเรียนรู้จากมันแล้วพยายามใหม่ สิ่งที่ส่งผลคือ เขาจะกลับมาประสบความสำเร็จเสมอ</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/40/11/94/401194e308da08241377376365355939.jpg" }}
                    style={{ width: 450, height: 250, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>6.“อย่าให้ใครมาบอกเราว่า เขาดีกว่าเรา”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   เพราะความที่ Forest Gump มีบุคลิคที่ไม่เหมือนเด็กคนอื่น บวกกับขาที่ใช้การไม่ได้เต็ม 100% เพื่อน ๆ จึงมองว่าเขาแปลและเหยียดหยามเขาในวัยเด็ก จงจำไว้ว่าทุกคนมีความแตกต่าง เราจึงไม่สามารถนิยามได้ว่าอะไรคือสิ่งปกติและอะไรคือสิ่งไม่ปกติ จงมั่นใจในสิ่งที่ตนมี และตนเป็น</Text>


                <Text style={{ fontSize: 25, padding: 10 }}>7.“คุณไม่รู้หรอกว่า ชีวิตคุณจะเปลี่ยนเมื่อใด”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   คำพูดที่ได้ยินแล้วเจ็บไปทั้งหัวใจ จาก จางฮารี รุ่นพี่นักยิงธนูที่สวย เก่ง ฉลาด แต่ในหัวใจเต็มไปด้วยความว่างเปล่า เพราะไม่รู้เลยว่าโลกหลังจากนี้จะมีอะไรที่คนอย่างเธอสามารถทำได้อยู่
                    สิ่งที่กัดกินความหวังในซีรีส์ All of Us Are Dead คือฝูงซอมบี้ที่น่ากลัว ตัดภาพมาที่โลกแห่งความเป็นจริง ถึงแม้จะไม่มีซอมบี้ แต่เด็กรุ่นใหม่ก็ยังมีผู้ใหญ่ ความไม่ยุติธรรม ความเหลื่อมล้ำ โลกที่โหดร้าย และอุปสรรคมากมายที่อาจน่ากลัวกว่าฝูงซอมบี้ เพราะหลายอย่างพร้อมที่จะรุมทึ้งความฝันของเด็กๆ หลายคนให้สลายหายไปในพริบตา
                    และถ้าความโหดร้ายนั้นกัดกินความหวังของพวกเขาไปจนหมด อีกไม่นานชีวิตของเด็กๆ เหล่านี้ อาจเหลือเพียงแค่ซากศพที่ยังมีลมหายใจ</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>8.“ทำในสิ่งที่รัก”</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   คุณจะสังเกตได้ว่า Forest Gump จะเลือกทำในสิ่งที่เขารักเสมอ โดยไม่ได้มองถึงเกียรติยศ เงินทอง เป็นหลัก เมื่อเขาไม่มีเงินเขาก็จะอยู่อย่างประหยัด เมื่อเขามีเงินเขาก็ไม่ได้หลงใหลไปกับมัน ทำให้ทุก ๆ สิ่งที่เขาทำนั้นทำได้ดี และที่สำคัญมีความสุขกับการได้ทำมันอย่างแท้จริง</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/77/f3/83/77f3830cccda58175fcc4b18406833fd.jpg" }}
                    style={{ width: 450, height: 350, marginTop: 15 }} />

            </View>
        </ScrollView>

    );
}