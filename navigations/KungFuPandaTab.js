import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function KungFuPandaTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/dc/66/f2/dc66f2e9acc63228b3aa154bf9ca0b58.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/bd/8d/e3/bd8de356ee3c8e54098983f4fcf2fe37.gif" }}
                        style={{ width: 220, height: 160, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/80/23/19/8023191850dd2562cde06f22e027ccbd.gif" }}
                        style={{ width: 210, height: 160, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Kung Fu Panda </Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   กังฟูแพนด้า จอมยุทธ์พลิกล็อก ช็อคยุทธภพ (อังกฤษ: Kung Fu Panda) เป็นภาพยนตร์แอนิเมชันแนวตลกและบันเทิงคดีกำลังภายในอเมริกัน ออกฉายใน ค.ศ. 2008 ผลิตโดยดรีมเวิกส์แอนิเมชันและจัดจำหน่ายโดยพาราเมาต์พิกเจอส์1 ภาพยนตร์เรื่องนี้กำกับโดยจอห์น สตีเฟนสัน และมาร์ก ออสบอร์น ร่วมผลิตโดยมาลิสซา คอบบ์ และพากย์เสียงโดยแจ็ก แบล็ก, ดัสติน ฮอฟแมน, แอนเจลีนา โจลี, เอียน แม็คเชน, เซท โรเกน, ลูซี ลิว, เดวิด ครอส, แรนดัล ดุก คิม, เจมส์ ฮง, แดน ฟอกเลอร์, ไมเคิล คลาร์ก ดันแคน และแจ๊กกี้ ชาน ภาพยนตร์มีฉากในประเทศจีนโบราณ ซึ่งเต็มไปด้วยประชากรสัตว์ที่สามารถพูดได้เหมือนมนุษย์ และดำเนินเรื่องเกี่ยวกับแพนด้าอ้วนใหญ่ที่ชื่อโป ผู้คลั่งไคล้ในกังฟู เขาถูกคัดเลือกให้เป็น "นักรบมังกร" โดยบังเอิญ เพื่อรับมือกับไต้ลุง นักรบกังฟูตัวร้ายที่หลบหนีออกจากคุก

                    ภาพยนตร์เรื่องนี้ถูกแต่งขึ้นโดนมิชาเอล ลาชานซ์ หนึ่งในทีมงานบริหารของดรีมเวิกส์ ในตอนแรกภาพยนตร์ถูกวางโครงเรื่องให้เป็นแนวล้อเลียน แต่ผู้กำกับ สตีเฟนสัน ตัดสินใจวางโครงเรื่องเป็นแนวตลกกำลังภายใน ซึ่งนำไปรวมการบรรยายของตัวละครหลัก โดยให้ตัวละครหลักมีบทบาทในการดำเนินเรื่องตามต้นแบบดั้งเดิม (archetype) ของการเดินทางของวีรบุรุษ การจัดทำแอนิเมชันของภาพยนตร์เรื่องนี้ ถือว่าซับซ้อนกว่าภาพยนตร์ของดรีมเวิกส์ที่ผ่านมา โดยฮันส์ ซิมเมอร์ (ในครั้งนี้ทำงานร่วมกับจอห์น โพเวล) ได้เดินทางไปยังประเทศจีนเพื่อศึกษาวัฒนธรรมและพบปะกับวงออร์เคสตราแห่งประเทศจีน เพื่อเตรียมการในครั้งนี้

                    กังฟูแพนด้า จัดฉายรอบปฐมทัศน์ในสหรัฐเมื่อวันที่ 6 มิถุนายน ค.ศ. 2008 โดยได้รับคำวิจารณ์เชิงบวกอยู่พอสมควร ภาพยนตร์ถูกฉายในโรงภาพยนตร์ 4,114 แห่ง ทำรายได้ในวันเปิดตัว 20.3 ล้านเหรียญสหรัฐ และทำรายได้ในสัปดาห์แรกถึง 60.2 ล้านเหรียญสหรัฐ จนขึ้นอันดับที่ 1 ของบ็อกซ์อฟฟิศ กลายเป็นภาพยนตร์ที่ไม่ใช่ภาคต่อที่เปิดตัวได้ดีที่สุดของดรีมเวิกส์ และเป็นภาพยนตร์แอนิเมชันที่ทำรายได้สูงที่สุดในปีนั้น นอกจากนี้ยังเป็นภาพยนตร์แอนิเมชันที่เปิดตัวได้ดีเป็นอันดับที่ 4 ของดรีมเวิกส์ในบ็อกซ์ออฟฟิศอเมริกันและแคนาดา เป็นรองเพียง เชร็ค 2, เชร็ค 3 และเชร็ค สุขสันต์ นิรันดร ภาพยนตร์ภาคต่อ กังฟูแพนด้า 2 ปล่อยฉายเมื่อวันที่ 26 พฤษภาคม ค.ศ. 2011 พร้อมกับซีรีส์โทรทัศน์ ตำนานสะท้านโลกันต์ ในช่องนิคเกิลโลเดิน โดยเป็นส่วนหนึ่งของแฟรนไชส์นี้ ภาพยนตร์ภาคต่อที่สอง กังฟูแพนด้า 3 ปล่อยฉายวันที่ 29 มกราคม ค.ศ. 2016

                    เนื้อเรื่อง
                    ในหุบเขาสันติในจีนโบราณ ซึ่งมีประชากรเป็นสัตว์ที่พูดได้ โป เป็นผู้คลั่งไคล้ในกังฟู และมีห้าผู้พิทักษ์ (นางพยัคฆ์, วานร, ตั๊กแตน, อสรพิษ, กระเรียน) ลูกศิษย์ของอาจารย์ชิฟู เป็นไอดอล อย่างไรก็ตาม เขาคิดว่าคงไม่สามารถเรียนรู้กังฟูได้แน่เพราะเขาต้องช่วยบิดาบุญธรรมอย่างอาปิง ขายก๋วยเตี๋ยว

                    ปรมาจารย์อูเกว ผู้เป็นที่ชี้แนะให้กับชิฟู เห็นนิมิตรว่าไต้ลุง อดีตลูกศิษย์ของชิฟู จะทำลายคุกและกลับมาล้างแค้นที่หุบเขาสันติเพื่อเอาคัมภีร์มังกร เมื่อชิฟูทราบเรื่องนี้ เขาจึงสั่งเซ็งให้ไปบอกผู้คุมคุกชอว์กัมให้มีการควบคุมที่แน่นหนาขึ้น นอกจากนี้ ชิฟูยังจัดการแข่งขันเพื่อค้นหาผู้ชนะที่จะได้เป็น "นักรบมังกร" และรับคัมภีร์มังกร โปเดินทางไปถึงสนามแข่งขันช้าและประตูปิดไปก่อน เขาจึงใช้เก้าอี้ติดชนวนระเบิดขึ้นไปบนฟ้า และตกลงมาที่ลานแข่งขัน โปลืมตัวขึ้นมาเห็นว่าอูเกวชี้นิ้วมายังตน และกล่าวว่าตนเป็นนักรบมังกร สร้างความประหลาดใจให้กับโป ห้าผู้พิทักษ์ และชิฟู ซึ่งเชื่อว่ามันเป็นเรื่องบังเอิญ

                    ชิฟูไม่เต็มใจในการยอมรับคำตัดสินของอูเกว เขาจึงพยายามกำจัดโปให้ออกไปจากเขตวังหยก ด้วยการฝึกอย่างโหดเหี้ยม ส่วนห้าผู้พิทักษ์เห็นว่าโปไม่มีศักยภาพที่จะเป็นนักรบมังกร โปในตอนแรกคิดว่าจะเลิกฝึกและกลับไปขายก๋วยเตี๋ยว แต่เมื่อได้ยินคำสอนของอูเกว เขาจึงตัดสินใจอยู่ที่วังหยกต่อ และตีสนิทกับห้าผู้พิทักษ์ด้วยการทำก๋วยเตี๋ยวให้พวกเขากิน

                    ขณะเดียวกัน ไต้ลุงหลบหนีออกจากคุกชอว์กัมได้ โดยใช้ขนห่านของเซ็งที่ร่วงลงมาปลดตัวล็อก เมื่อชิฟูทราบข่าว จึงรีบไปบอกอูเกว อูเกวบอกว่าชิฟูต้องเชื่อมั่นในโป และอูเกวก็เดินทางกลับสู่สวรรค์ ชิฟูไปบอกข่าวให้กับโปและห้าผู้พิทักษ์ โปตกใจคิดว่าตนเองไม่น่าสู้ได้แน่ ส่วนนางพยัคฆ์ก็ขออาสาออกไปปราบไต้ลุงเอง ในคืนนั้น ห้าผู้พิทักษ์แอบหลบหนีชิฟูเพื่อเดินทางไปสู้กับไต้ลุง วันถัดมา ชิฟูพบว่าต้องใช้อาหารเป็นตัวล่อจึงจะสามารถฝึกโปได้ เขาพาโปไปฝึกที่สระน้ำตาศักดิ์สิทธิ์ ก่อนที่โปจะฝึกจนมีทักษะกังฟูที่ดีขึ้น

                    ห้าผู้พิทักษ์ถูกไต้ลุงสกัดจุดทางประสาท และเดินทางกลับมายังวังหยกอย่างอิดโรย ชิฟูตัดสินใจมอบคัมภีร์มังกรให้แก่โป แต่เมื่อเปิดออกมา พบว่าคัมภีร์ว่างเปล่าและมีแต่แผ่นกระดาษสะท้อน ชิฟูเห็นว่าคัมภีร์ไม่มีประโยชน์ จึงสั่งให้โปกับห้าผู้พิทักษ์อพยพชาวบ้าน ส่วนตนจะขอสู้กับไต้ลุงเอง โปได้พบกับอาปิงอีกครั้ง ปิงบอกว่าสูตรลับน้ำซุปก๋วยเตี๋ยวนั้นคือ "ไม่มีอะไรเลย" ทำให้โปตระหนักถึงเนื้อหาที่ว่างเปล่าในคัมภีร์ และกลับไปเผชิญหน้ากับไต้ลุง

                    โปขึ้นไปที่วังหยกพบว่าชิฟูได้รับบาดเจ็บสาหัสจากการต่อสู้กับไต้ลุง โปท้าไต้ลุงให้มาสู้กันเพื่อแย่งคัมภีร์ หลังที่จากที่ยื้อแย่งกันสักพัก ไต้ลุงได้ทีใช้เท้าฟาดโปตกลงพื้นและเอาคัมภีร์มาเปิดอ่าน แต่เขาไม่เข้าใจในความว่างเปล่านั้น ไต้ลุงโกรธจึงต่อยโป แต่หุ่นของโปทำให้เขาสะท้อนกลับมาชกไต้ลุงคืน ไต้ลุงพลาดท่าจึงถูกโปใช้ดัชนีวูชีส่งเขาไปยังปรภพ โปได้รับการสรรเสริญจากพลเมืองหุบเขาสันติ และได้รับความนับถือจากห้าผู้พิทักษ์ ที่เชื่อว่าโปคืออาจารย์กังฟูที่แท้จริง หลังจากนั้น โปได้กลับไปชิฟูอีกครั้ง ทั้งคู่นอนสงบจิตกันอยู่สักพัก โปจึงขัดจังหวะโดยถามชิฟูว่า "ไปหาไรกินกันมั้ย?"</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#AE905E', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/0e/b8/88/0eb888343fd3028204e60d07acc1223b.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โป</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/e0/26/7d/e0267d01306d80970e7aa01485773a32.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>นางพยัคฆ์</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/f3/de/ef/f3deefb31aebb223da38ced56ee9e7fc.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> อสรพิษ</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/6e/52/3c/6e523c4a9a7168a0734a97e41e693e6c.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>วานร</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/a2/ab/2d/a2ab2d21370a4336d465db16b48a0f6c.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>กระเรียน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/e7/3e/4e/e73e4e8c0b8de1f95af9463b1e2f4fa0.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ตั๊กแตน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/70/70/33/707033f819c4e1c420bfe22668259742.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อาจารย์ชิฟู</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/ad/5b/d5/ad5bd5e2b4da9f908eb6784742141df3.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ปรมาจารย์ อูเกว</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/f5/86/52/f58652d529e4973b84a95193b09b9a6c.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อาปิง</Text>

                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>

            
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ padding:15, fontSize:25}}>ข้อคิดจากกังฟูแพนด้า</Text>
                

                <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/13680101_1760053344273953_5487164877679952912_o.jpg" }}
                    style={{ width: 450, height: 440, marginTop: 15 }} />

                <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/13710704_1755193654759922_928933005495373_o.jpg" }}
                    style={{ width: 450, height: 440, marginTop: 15 }} />

                <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/13913597_1762436637368957_6559108619393349201_o.jpg" }}
                    style={{ width: 450, height: 440, marginTop: 15 }} />

            </View>


        </ScrollView>

    );
}