import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function HospitalPlaylistTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/be/09/a2/be09a2d4c65a7315ce0978c9c57d23e2.jpg" }}
                    style={{ width: 450, height: 265 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/03/40/1c/03401c0ae347b38fde733346f56e23cd.gif" }}
                        style={{ width: 220, height: 150, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/75/72/d1/7572d1345d6cfc7e408a99737d8e736c.gif" }}
                        style={{ width: 210, height: 150, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Hospital Playlist </Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เรื่องราวความสัมพันธ์ของแพทย์ทั้ง 5 คน ที่เป็นเพื่อนสนิทกันมา 20 ปี และใช้ชีวิตที่เต็มไปด้วยเรื่องราวมากมายในโรงพยาบาล ซีรีส์เรื่องนี้จะสะท้อนให้เห็นถึงการทำงานของแพทย์ในแต่ละวัน รวมถึงชีวิตของผู้ป่วยในโรงพยาบาล</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#B4C3D0', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                <Text style={{ padding: 15, fontSize: 28 }}>นักแสดงหลัก</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/bb/16/0f/bb160fb14e0841d80b0008e9c36f43cf.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อี อิก-จุน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/b3/c8/06/b3c806a1d491f2c747c325c657a9b2ba.jpg" }}
                        style={{ width: 350, height: 340, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อัน จ็อง-ว็อน</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/97/fa/2e/97fa2e2cbb9a3c24c683401c8b77c8e0.jpg" }}
                        style={{ width: 350, height: 420, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> คิม จุน-วาน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/1e/3a/2b/1e3a2bc37ce048f71a7c9fc672971adb.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ยัง ซ็อก-ฮย็อง</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/f7/a7/db/f7a7db367b759e7ca0e1e3e386464c2f.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>แช ซง-ฮวา</Text>
                </View>

                <Text style={{ padding: 15, fontSize: 28 }}>นักแสดงสมทบ</Text>
                <Text style={{ padding: 15, fontSize: 20 }}>แพทย์ของศูนย์การแพทย์โรงพยาบาลยุลเจ</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/c4/2d/39/c42d397f029b608d637454c90a563b8b.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โด แจ-ฮัก</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/51/d8/3b/51d83b2f99a01282ca3539fe617d6617.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ยง ซ็อก-มิน</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/fc/f5/b7/fcf5b73667d45838e38a63c60f865aaf.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> จาง คย็อ-อุล</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/31/22/c5/3122c5a97feca1c4574a72739d52c6f3.jpg" }}
                        style={{ width: 350, height: 430, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อัน ชี-ฮง</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/c5/68/89/c56889d99b61db992bad808cc1071600.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ฮอ ซ็อน-บิน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/af/46/a1/af46a1c74c93ca248cb8f6a54da495a8.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ชู มิน-ฮา</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/c7/ce/eb/c7ceebee06391ee0856280c4a30dd46a.jpg" }}
                        style={{ width: 350, height: 450, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อิม ชาง-มิน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/db/37/51/db3751395a5ca37918723c67fefee352.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}> จู จุน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/24/9f/c8/249fc86b3b0b3b8e9f9ba4d841c77c37.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ยู แจม-มยอง</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/54/32/3d/54323d482f2771d5ad39a72021853cfd.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>จาง ยุน-บก และ จาง ฮง-โด</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/1c/a7/51/1ca751264bb6cc48da048eb6da69024a.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อี อิก-ซุน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/a6/5b/a6/a65ba6cb6a7803b894d8c3cd3f0bf5e7.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อี อู-จู</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/85/b3/d9/85b3d92d19be43cb0c7389b0d27e08b7.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ช็อง โร-ซา </Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/cc/1c/6c/cc1c6c433126f514f7eb56f2f0f52ada.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>จู จ็อง-ซู</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/ad/c2/8b/adc28bd56133b5f46898b714c5e14d92.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> พี่ชายคนโตของ อัน จ็อง-ว็อน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/cf/d2/5b/cfd25bd60c4735fd41cf5e8199a50d27.jpg" }}
                        style={{ width: 350, height: 350, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โช ฮี-กย็อง</Text>


                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>7 คำพูดเรียกน้ำตา จาก Hospital Playlist ซีซัน 1 </Text>
            </View>

            <View>
                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/1-60.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 15 }} />

                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/2-54.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/3-43.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/4-39.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/5-27.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/6-24.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

                <Image source={{ uri: "https://thestandard.co/wp-content/uploads/2021/06/7-18.jpg" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>“ทำไมซีรีส์ Hospital Playlist ถึงขึ้นหิ้งในใจคนดู” </Text>
            </View>
            <View>
                <Text style={{ fontSize: 25, padding: 10 }}>1. ซีรีส์หมอที่ไม่ได้นำเสนอแค่แง่มุมการแพทย์</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   อย่างที่เรารู้ๆ กันว่า พอเป็นหนังที่เกี่ยวกับหมอ หรือ ซีรีส์ที่นำเสนอเรื่องราวทางการแพทย์นั้น ก็จะหนีไม่พ้น การนำเสนอแง่มุม วิธีการทำงานของแพทย์ คุณหมอ และบุคลากรทางการแพทย์ต่างๆ ไม่ว่าจะเป็นการผ่าตัด การวินิจฉัย และอื่นๆ อีกมากมาย เราจะได้สนุกกับการวิเคราะห์

                    และเรียนรู้เรื่องราวการรักษาคนไข้ หรือ เทคนิคการผ่าตัดใดๆ อยู่ตลอดเวลา แต่ทว่าในซีรีส์เรื่องนี้ไม่ได้แค่นำเสนอแง่มุมเหล่านี้เพียงเท่านั้น แต่เขาตั้งการนำเสนอชีวิตประจำวันของ “หมอ” ในอีกแง่มุมหนึ่งที่ใครหลายๆ คนไม่รู้ ผ่านตัวละครหลัก ทั้ง 5 ตัว</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/a2/10/a2/a210a2aa7bb24c2f314869ad1b00db53.jpg" }}
                    style={{ width: 450, height: 260, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>2. เรื่องราวชีวิตที่จับต้องได้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   อย่างที่เราบอกไปเมื่อข้อที่ 1 ซีรีส์เรื่องนี้ไม่ได้นำเสนอที่มุมมองหรือการถ่ายทอดเรื่องราวของทางการแพทย์และการทำงานเพียงอย่างเดียวเท่านั้น ซีรีส์เรื่องนี้ได้สะท้อนให้เราเห็นมุมมองและการใช้ชีวิตของ “ตัวละครทั้ง 5 ตัว” ที่ใครๆ อาจจะมองว่าเขาก็ทำงานเป็นหมอ เขาจะต้องพิเศษกว่าใครๆ

                    แต่ไม่ใช่เลย ซีรีส์เรื่องนี้กำลังจะบอกเราว่า “การใช้ชีวิตของพวกเขา ไม่ได้มีแค่การทำงานเพียงอย่างเดียวเท่านั้น แต่เขายังมีแง่มุมอื่นๆ ที่อยากให้เราเห็นตั้งแต่อดีตจนถึงปัจจุบันด้วยเช่นกัน”</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>3. ถ่ายทอดความสัมพันธ์ที่มีอยู่หลากหลายรูปแบบ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   Hospital Playlist เป็นซีรีส์ที่นำเสนอแง่มุมทางการแพทย์และชีวิตของตัวละครที่เป็นหมอทั้ง 5 คนแล้วนั้น อีกสิ่งหนึ่งที่เราสัมผัสได้เลยตั้งแต่ Ep.แรกๆ ของเรื่องคือเรื่องความสัมพันธ์ที่มีหลากหลายรูปแบบไม่ว่าจะเป็นเพื่อน , คนรัก ครอบครัว เพื่อนร่วมงาน หรือแม้กระทั่งความสัมพันธ์และปมความรู้สึกที่มีต่อตนเอง เราจะได้เห็นอารมณ์ และความรู้สึกเหล่านี้ถ่ายทอดผ่านตัวละครที่มีความแตกต่างแต่ลงตัวในเรื่อง</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/5b/fb/ac/5bfbacc3f538d848fa12f9476e3c40c4.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>4. เพื่อน ที่เป็นครอบครัวเดียวกัน</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   ด้วยความที่เป็นเพื่อนร่วมมหาวิทยาลัยเดียวกันมาตั้งแต่ปี 1999 รู้จักและทำงานร่วมกันมาเป็นเวลา 20 ปี นั่นจึงไม่แปลกใจเลยว่า ทำไมความสัมพันธ์ของพวกเขาถึง แน่นแฟ้นและเป็นปึกแผ่นเดียวกันขนาดนี้ จากตัวเนื้อเรื่องของซีรีส์เรื่องนี้ จะทำให้คนดูอย่างเรา เรียนรู้และเข้าถึงความหมาย ของความสัมพันธ์ที่เป็นเพื่อน จนกลายเป็นคนในครอบครัว ว่ามันลึกซึ้งและอบอุ่นเพียงใด</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>5. ใครว่าผู้หญิงกับผู้ชายเป็นเพื่อนกันไม่ได้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   ในชีวิตประจำวันเรามักได้ยินอยู่บ่อยๆ ว่า “ผู้หญิงเขาไม่เป็นเพื่อนกับผู้ชายกันหรอก” แต่ซีรีส์เรื่องนี้จะลบล้างความคิดและคำพูดของประโยคเหล่านี้ออกไป เพราะ Hospital Playlist กำลังจะบอกกับเราว่า “การเป็นเพื่อนกัน ไม่จำเป็นต้องมีเพศเข้ามาเกี่ยวข้อง”</Text>

                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   อย่างที่เรารู้ๆ กันว่า พอเป็นหนังที่เกี่ยวกับหมอ หรือ ซีรีส์ที่นำเสนอเรื่องราวทางการแพทย์นั้น ก็จะหนีไม่พ้น การนำเสนอแง่มุม วิธีการทำงานของแพทย์ คุณหมอ และบุคลากรทางการแพทย์ต่างๆ ไม่ว่าจะเป็นการผ่าตัด การวินิจฉัย และอื่นๆ อีกมากมาย เราจะได้สนุกกับการวิเคราะห์

                    และเรียนรู้เรื่องราวการรักษาคนไข้ หรือ เทคนิคการผ่าตัดใดๆ อยู่ตลอดเวลา แต่ทว่าในซีรีส์เรื่องนี้ไม่ได้แค่นำเสนอแง่มุมเหล่านี้เพียงเท่านั้น แต่เขาตั้งการนำเสนอชีวิตประจำวันของ “หมอ” ในอีกแง่มุมหนึ่งที่ใครหลายๆ คนไม่รู้ ผ่านตัวละครหลัก ทั้ง 5 ตัว</Text>


                <Text style={{ fontSize: 25, padding: 10 }}>6. ทุกคนสามารถผิดพลาดได้</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   หากใครที่เคยได้ดูซีรีส์เรื่องนี้จะรู้ได้เลยว่า ถึงแม้พวกเขาจะเป็นอาจารย์หมอ หรือ แพทย์ผู้เชี่ยวชาญในด้านต่างๆ แต่กว่าที่พวกเขาจะมาถึงจุดนี้ พวกเขาได้ผ่านความผิดพลาด เสียใจ และท้อแท้ กับเรื่องราวในชีวิตไม่ต่างกัน ไม่ใช่แค่กับเรื่องหน้าที่การงานเพียงอย่างเดียว
                    ไม่เพียงแค่เรื่องราวในอดีตที่ผิดพลาด ณ ปัจจุบันพวกเขาก็สามารถทำผิดพลาดได้อยู่ตลอดเวลา

                    ดังนั้นซีรีส์เรื่องนี้จะถ่ายทอดความหมายของชีวิตเล็กๆ น้อยๆ ที่เราอาจจะมองข้าม หรือ พยายามหลีกเลี่ยงมัน นั่นก็คือ “ความผิดพลาด” ซีรีส์เรื่องนี้จะคอยบอกกับเราว่า “ทุกคนพลาดกันได้ จงอยู่กับมัน ยอมรับ แก้ไข และเริ่มใหม่ พร้อมจงจดจำความปิดพลาดเหล่านั้นไว้เป็นบทเรียน” นอกจากคำว่า “ผิดพลาด” แล้วนั้น สิ่งที่เรื่องนี้คอยบอกเราอยู่ตลอดเวลานั่นก็คือ “ไม่เป็นไร”</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>7. หมอ คือ ซุปเปอร์ฮีโร่ ที่ไม่มีพลังวิเศษ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   เรามั่นใจว่าหากใครที่ติดตาม Hospital Playlist มาโดยตลอด หรือแม้กระทั่งซีรีส์ทางการแพทย์เรื่องอื่นๆ เราจะรู้ได้เลยว่า “หมอ” นั้นเปรียมเสมือนซุปเปอร์ฮีโร่ของประชาชน แต่เพียงแค่หมอ ไม่ได้มีพลังวิเศษเหมือนกับใครๆ หมอไม่สามารถหายตัวได้ ไม่สามารถสั่งสิ่งของให้ลอยได้ หรือแม้กระทั่งหมอไม่สามารถเคลื่อนย้ายได้ภายในพริบตา

                    เพราะสุดท้ายแล้ว หมอ ก็ยังเป็นคนเหมือนกับพวกเรา มีความรู้สึกเหนื่อย เสียใจ ดีใจ ต้องการชีวิตส่วนตัว มีอารมณ์ในเรื่องต่างๆ เหมือนกับมนุษย์ทั่วไป โดยซีรีส์เรื่องนี้จะนำเสนอแง่มุมเหล่านี้ให้กับคนดูทุกคน เห็นมุมนี้ของซุปเปอร์ฮีโร่เดินดินของเราได้ชัดเจนมากยิ่งขึ้น</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/0f/c8/54/0fc854af2dbd0b9d953e48a49deb3d3d.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>8. มนุษย์ก็เหมือนกับเหรียญ มีสองด้านเสมอ
                </Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   ถึงแม้ว่าซีรีส์เรื่องนี้จะไม่ใช่ซีรีส์สืบสวนสอบถาม หรือซีรีส์แนวกฏหมายต่างๆ ที่สะท้อนปม หรือ ภูมิหลังตัวละครได้ชัดเจนขนาดนั้น แต่! เป็นอีกหนึ่งซีรีส์ที่ทำให้เราเห็น มุมมองในแต่ละด้านของตัวละครที่คล้ายกับคนธรรมดา พร้อมสะท้อนให้เห็นว่า ไม่ว่าใครก็มีสองด้านเสมอ ทุกคนมีอดีต มีความเชื่อ และเรื่องราวความเป็นมาที่แตกต่างกัน อยู่ที่ว่าเขาจะนำเสนอมุมไหนให้เราเห็นแค่นั้นเอง</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>9. ความอบอุ่นที่พัดมาถึงคนดู</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   และเหตุผลหลักๆ ของการอยากจะชักชวนให้สาวๆ ได้มาดูเรื่องนี้กันนั้น คงหนีพ้นเรื่องนี้ นั่นก็คือ “ความอบอุ่น” ของเรื่อง ที่ไม่ใช่แค่ความอบอุ่นที่เราได้จากตัวละครหลักเพียงอย่างเดียว แต่ความอบอุ่นเหล่านี้มาจากการได้มองดูชีวิตประจำวันของพวกเขา การได้สัมผัสถึงอารมณ์ที่แต่ละตัวละครที่แตกต่างกัน นำพามาให้คนดูอย่างเราได้รับความรู้สึกเหล่านี้เอาไว้</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>10. ความเรียบง่ายที่ลงตัว</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>   เหตุผลสุดท้ายที่อยากจะบอกนั่นก็คือ Hospital Playlist เป็นซีรีส์ที่ถึงแม้จะนำเสนอมุมมอง การทำงาน และชีวิตของบุคลากรทางการแพทย์ต่างๆ แต่ทว่า ซีรีส์เรื่องนี้ไม่ได้ทำให้คนดูอย่างเรา รู้สึกเข้าไม่ถึงหรือต้องใช้ความคิดอะไรกับการดูเยอะแยะ เนื้อเรื่องสะท้อนแง่มุม ความเรียบง่าย เข้ากับเรื่องที่คิดว่าซับซ้อนได้เป็นอย่างดี ทำให้คนดูซึมซับและสัมผัสถึงสิ่งที่เนื้อเรื่องและซีรีส์ต้องการจะสื่อได้อย่างไม่ผิดเพี้ยน</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/05/ed/a7/05eda7f60e2b5af20473aee02dd42348.jpg" }}
                    style={{ width: 450, height: 290, marginTop: 15 }} />




            </View>
        </ScrollView>

    );
}