import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function LiloandStitchTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/24/ac/3a/24ac3ac9eb863b969cb1942f26dfa9c4.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/88/30/fa/8830fac2b139fac2ff0c98d943b35c76.gif" }}
                        style={{ width: 220, height: 200, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/a6/17/3e/a6173e88a036437095cb7ffb1f656cef.gif" }}
                        style={{ width: 210, height: 200, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Ponyo </Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เมื่ออุกกาบาตตกลงที่ฮาวาย ลีโล่ เด็กที่ดูเหมือนจะถูกสังคมของเพื่อนๆรังเกียจ ได้ขออธิษฐานว่า ขอใครสักคนที่จะมาเป็นเพื่อนและไม่ทอดทิ้งเค้าไป และก็ได้สมตั้งใจจริงๆ (มั้ง) ในขณะเดียวกัน ที่สภาคมมติชนแห่งกาแล็คซี่ ได้ตั้งสปายพริกลี่ ทูตแห่งดวงดาวสีน้ำเงินที่ชื่อว่าโลก และจัมบ้าผู้สร้างสิ่งมีชีวิตทดลอง 626 (สติทช์ในเวลาต่อมา) ให้ไปจับสิ่งมีชีวิตลึกลับที่เขาทำหายกลับคืนมา เพราะหากปล่อยไว้อาจสร้างความเสียหายต่อสถานที่ๆมันอยู่ก็ได้ ขณะเดียวกัน ลีโล่ได้สุนัขตัวใหม่มา แต่เมื่อมาถึงบ้าน มันคือสิ่งมีชีวิตที่สร้างมาเพื่อการทำลายอย่างเดียว ลีโล่รู้สึกอึดอัดใจที่สติทช์ สุนัขของเธอเอาแต่ทำลายไปวันๆโดยไม่มีทางเป็นพลเมืองดีเลย แต่ซวยซ้ำซาก เมื่อแนนนี่พี่สาวลีโล่ถูกนักสังคมสงเคราะห์จะตามเรียกตัวลีโล่ไปในอีก 3 วันข้างหน้าหากเธอยังดูแลลีโล่ไม่ดีพอ.ท่ามกลางความวุ่นวายของสมาชิกในครอบครัว ลีโล่ได้สั่งสอนต่อสติทช์ให้เป็นพลเมืองดีกับเขาบ้าง แต่แทนที่จะดีขึ้น นับวัน เรื่องราวก็ยิ่งเริ่มเลวร้ายขึ้นอีก.วันต่อมา ที่สมาคม ได้ส่งกัปตันแกนตูไปเพื่อส่งสปายพริกลี่และจัมบ้ากลับมาที่สมาคมพร้อมข้อหาทำงานล่วงเวลาที่กำหนดให้ไว้ และจับสิ่งมีชีวิตทดลอง 626 กลับคืนมา. ในขณะเดียวกัน นานี่เพิ่งได้งานใหม่จากเพื่อนสนิทของเธอ เดวิด .ยังไม่ทันจบซีน จัมบ้าและพริกลี่ได้ไปบุกบ้านลีโล่จนพังทลายไม่มีสภาพความเป็นบ้านเลย ลีโล่และสติทช์ไหวตัวออกจากบ้านได้ทันท่วงทีจึงไม่เป็นอันตรายมาก. หลังจากแนนนี่ได้งานมาสำเร็จ เธอก็เดินกำลังจะกลับบ้านไปยังซอยๆหนึ่ง โฉบตาแนนนี่สักพัก รถดับเพลิงได้บึ่งไปยังซอยบ้านของแนนนี่ด้วยความเร็ว เธอจึงรีบตามรถดับเพลิงไปทันที ยังไม่ทันจะถึงบ้าน ซีไอเอคอบร้าแห่งสมาคมนักสงเคราะห์ก็มาจับลีโล่ไปเข้ารถ เหลือไว้เพียงสติทช์เท่านั้น แนนนี่มาขอตัวลีโล่แต่ไม่สำเร็จ เมื่อพ้นตา ลีโล่ได้ออกจากรถ ลีโล่กับสติทช์สนทนาไปสักพัก แกนตูก็จับลีโล่และสติทช์ไปแล้ว สติทช์ใช้ความสามารถของเขาออกมาจากแคปซูลฉิวเฉียด เมื่อลีโล่หายไป สติทช์ก็ถูกจัมบ้าจับอีก แนนนี่ได้เห็นจัมบ้าและพริกลี่จึงสนทนากัน แล้วพบสติทช์จึงถามว่าลีโล่อยู่ไหนด้วยความห่วงใย สติทช์จึงบอกมาแล้วใช้จรวดจัมบ้าขับตาม กวดไปมากันจนแกนตูเสียหลัก เดวิดที่กำลังเล่นโต้คลื่นอยู่นั้นเห็นสติทช์กับพวกจึงไปช่วย แต่ก็ยังไม่ทันช่วยได้นาน หัวหน้าสมาคมมติชนแห่งกาแล็คซี่ได้จับสติทช์และปลดกัปตันแกนตูออกในฐานะทำงานไม่สำเร็จ คอบร้า บับเบิ้ลได้ถามลีโล่ว่า " มีใบอนุญาตฺเลี้ยงสติทช์ไม่ใช่เหรอ " ลีโล่จึงส่งใบอนุญาตไป คอบร้า บับเบิ้ล จึงบอกกับหัวหน้าสมาคมว่า " เอเลี่ยน ต้องเคารพสิทธิของมนุษย์โลก " หัวหน้าสมาคมจึงปล่อยลีโล่ พร้อมปล่อยจัมบ้าและพริกลี่ตามยถากรรม และให้สิทธิเลี้ยงสิ่งมีชีวิตลอง 626 พร้อมช่วยเหลือในทุกด้านตลอดไปจนกว่าจะเลิกเลี้ยงสติทช์ไป แนนนี่จึงได้จัมบ้าและพริกลี่มาเป็นสมาชิกใหม่ของบ้าน และร่วมกันสร้างบ้านใหม่และสามารถกลับมาเป็นเหมือนเดิมได้อย่างมีความสุข</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#3CA0E1', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/7d/0f/89/7d0f89557d87418bb11508b305294e89.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Stitch</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/7b/19/08/7b1908f97e268b98c21cc9caafec48c3.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Lilo Pelekai</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/19/4e/04/194e042a4bde404e6039445925c3b9c7.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Scrump (ตุ๊กตาเศษผ้าส่วนตัวของ Lilo)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/c5/95/e2/c595e29589ab297a1c10b69bbda5abf2.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Nani Pelekai</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/1c/a2/cb/1ca2cbc7dc5ff76fa12dfc5c4a6baf9e.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Jumba Jookiba</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/93/5a/43/935a43b4851ae9d1ec20e4477ad2d539.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Gantu</Text>
               
                    <Image source={{ uri: "https://i.pinimg.com/564x/ea/ad/d7/eaadd776aada7699dca11be301505b6b.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Wendell Pleakley</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/fc/58/1b/fc581b84a2856a8abd0b0ec939bec9bc.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Cobra Bubbles</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/97/ee/c7/97eec7466dee41225bafd07afdf036e1.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>David Kawena</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/5e/45/fa/5e45fa5bc82f8345987f028b24907dd9.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>Reuben</Text>

                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>
           
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 100, width: 450, paddingHorizontal: 10, backgroundColor: '#3CA0E1', opacity: 1, borderWidth: 1, borderColor: 'white', borderRadius:5 }}>
                    <Text style={{ fontSize: 38 }}> 5 เรื่องน่าสนใจของสติชท์ ที่คุณอาจไม่เคยรู้</Text>
                </View>
                </View>
            <View>
                <Text style={{ fontSize: 25, padding: 10 }}>1.สติชไปอยู่กับ ลีโล่ ได้อย่างไร</Text>
                <Text style={{ fontSize: 20, padding: 10, color: '#828282' }}>ขณะลีโล่ เห็นดาวตกผ่านหน้าต่างห้องนอน เธออธิษฐานขอ "ใครซักคนก็ได้มาเป็นเพื่อน ใครซักคนที่จะไม่วิ่งหนีไปไหน " และเสริมด้วยว่า "ท่านส่งเทวดามาให้หนูก็ได้"แต่ ในความจริง ดาวตกดวงนั้นคือยานอวกาศของ สติทช์ สิ่งมีชีวิตที่เป็นสัตว์ประหลาด  ได้หนีบังคับยานมาถึงดาวเคราะห์ และเคราะห์ร้ายดิ่งเข้าใส่รถบรรทุกน้ำตาลทรายเต็มเปา เมื่อฟื้นขึ้นมาอีกทีก็พบว่า ตัวเองอยู่ในบ้านดูแลสัตว์หลังหนึ่งและฉายแววเสน่ห์น่ารักเข้าตา จนลีโล่เก็บมันไปเลี้ยง (พร้อมกับตั้งชื่อให้ว่า สติทช์)  </Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/fd/d9/d8/fdd9d8a33dec74c5f094f97761e37856.jpg" }}
                    style={{ width: 450, height: 280, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10, marginTop: 10 }}>2.รู้หรือไม่ ทำไมสติชถึงหนีมาจากดาวทูโร่</Text>
                <Text style={{ fontSize: 20, padding: 10, color: '#828282' }}> สติทช์ สิ่งมีชีวิตประหลาด (ที่รู้จักกันในชื่อ “การทดลอง 626″) นักวิทยาศาสตร์ชื่อ จัมบ้า ผู้สร้างมันขึ้นมาพูดถึงสติทช์ว่า เป็นอะไรที่ “กันกระสุน กันไฟ และคิดได้เร็วยิ่งกว่าซูเปอร์คอมพิวเตอร์ซะอีก มันมองเห็นได้ในความมืด และยกวัตถุอะไรๆ ที่ใหญ่โตกว่าตัวมันถึง 3 พันเท่าได้ สัญชาตญาณอย่างเดียวของมันก็คือ.. ทำลายทุกสิ่งทุกอย่างที่มันสัมผัส” ซึ่งเป็นคุณสมบัติที่ไม่น่าประทับใจเอาเสียเลย ในสายตาของสมาชิกสภาหญิง แห่งสหพันธ์กาแล็กติค เธอจึงจับจัมบ้าเข้าคุก และพิพากษาให้ส่งตัวสติทช์ ไปยังดาวเคราะห์น้อยไกลลิบ แต่ก่อนที่กัปตันแกนทู จะลงมือกำจัดสติทช์ตามคำสั่ง มันก็ขโมยยานของตำรวจ และบังคับให้พุ่งด้วยความเร็วสูง หนีมายังโลกได้ทันเวลา สมาชิกสภาไม่มีทางเลือกอื่นอีก จึงต้องเสนอว่า จะปล่อยตัวจัมบ้าเป็นอิสระ หากเขาตามจับสติทช์กลับมาได้ และเพื่อจะคอยควบคุมปฏิบัติการของจัมบ้าไว้ ไม่ให้คลาดสายตา เธอจึงส่ง พลีคลี่ย์ เอเลี่ยนผู้สนใจศึกษาโลกมนุษย์เป็นพิเศษ และมีสามขากับตาหนึ่งข้างให้ติดตามมาด้วย</Text>

                <Text style={{ fontSize: 25, padding: 10, marginTop: 10 }}>3.รู้หรือไม่ ทักษะพิเศษของสติชคืออะไร</Text>
                <Text style={{ fontSize: 20, padding: 10, color: '#828282' }}>สติชสามารถเก็บซ่อนแขนขาพิเศษ (จาก 6 เหลือ 4 ข้าง), เสาอากาศและเดือยบนหลังได้ เพื่อให้ตัวเองดูเหมือนหมา ตัวหนึ่ง "กันกระสุน กันไฟ และคิดได้เร็วยิ่งกว่าซูเปอร์คอมพิวเตอร์ซะอีก มันมองเห็นได้ในความมืด และยกวัตถุอะไรๆ ที่ใหญ่โตกว่าตัวมันถึง 3 พันเท่าได้ แต่สัญชาตญาณอย่างเดียวของมันก็คือ.. ทำลายทุกสิ่งทุกอย่างที่มันสัมผัสได้" </Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/b9/31/3a/b9313aefa850cc1be19ef0e5007576da.jpg" }}
                    style={{ width: 450, height: 280, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10, marginTop: 10 }}>4.รู้ไม่สติชกลายพันธ์ุเป็นสัตว์ประหลาดได้อย่างไร </Text>
                <Text style={{ fontSize: 20, padding: 10, color: '#828282' }}>เริ่มจากเป็นสุนัขธรรมดาบนโลกมนุษย์ถูกจับตัวไปนำเข้าเป็นสัตว์ทดลอง จับเป็นเชลยในกาแล๊คซี่รับคำสั่งให้สร้างสัตว์ประหลาดไปคุกคามโลกโดยจับสิ่งมีชีวิตในโลกไปเป็นสัตว์ ทดลองหลายพันธ์จนเป็นอสูรกายหลายเผ่าพันธ์ ครั้งแล้วครั้งเล่าหลายจนกลายพันธ์ในชื่อรหัสลับว่า การทดลองที่ 626 โดยมีอุดมการณ์ให้กลับไปทำลายล้างโลกมนุษย์   Stitch ถูกทำลายด้วยรังสี จนพิกลรูป คือกลายร่างจากสุนัขกลายเป็นสัตว์ประหลาดสีน้ำเงิน มีแขน ( ขาหน้า) เพิ่มอีก 1 คู่ พันธุกรรมแฝงของ เอเลียน ปน หมีโคล่า มีเสาอากาศ เหมือนมังกร ฟันเป็นปลาฉลาม หูเหมือนค้างคาว จมูกเป็นหมีแพนด้า จิตใจ อารมณ์ก็แปรปรวน และดุร้าย และมีคุณสมบัติเฉพาะคือ แข็งแรง ,รวดเร็ว , ฉลาด ไหวพริบดี ,มีอำนาจการทำลายล้างสูงและที่สำคัญ ไม่มีสิ่งใดสามารถโค่น Stitch ได้จนร่างกายจิตใจ Stitch ถูกกลายพันธุ์เต็มที่เป็นอสูรกายน้อย</Text>

                <Text style={{ fontSize: 25, padding: 10, marginTop: 10 }}>5. รู้หรือไม่ ลีโล่ทำให้สติช  คืนสภาพ จิตใจที่ดีงาม  ความพิกลรูปเริ่มดีขึ้น อย่างไร </Text>
                <Text style={{ fontSize: 20, padding: 10, color: '#828282' }}> สติทช์เป็นสัตว์ประหลาด  เพราะถูกทำลายด้วยรังสี จนพิกลรูป คือกลายร่างจากสุนัขกลายเป็นสัตว์ประหลาดสีน้ำเงิน มีแขน       ลีโล  จึงการอบรม การปลูกฝังนิสัยที่ดีงามให้กับ Stich ด้วยจิตใจที่ดีงาม และสัมผัสด้วยการกอด การสัมผัส การพูดจา เสียงเพลง ความห่วงใย ความเอื้ออาทร ธรรมชาติบำบัด สุนทรียบำบัด ความพิกล พิการก็หาย แขนที่เกินออกมาก็หายไป กลายเป็นสัตว์ที่มีลักษณะใกล้เคียงสุนัขมากที่สุด ขนสีน้ำเงิน มีฟันคมและยิ้มง่าย ไม่ดุร้าย และเริ่มเป็นมิตรกับทุกคน และมีจิตใจดีงาม เข้าสมาคมดนตรี ซ้อมเพลง " กากีนั้ง " พา เที่ยวชมธรรมชาติ และป่าเขาลำเนาไพร Stitch สามารถ ปรับสภาพที่ถูกผลการทดลองทำลายสมอง จิตประสาท อารมณ์ ความรัก ความรู้สึก ไปจนสามารถคืนสภาพ เพราะคำสอนที่ Lilo ใช้สอน Stitch จนมีจิตใจที่ดีงาม  ความพิกลรูปเริ่มดีขึ้น แขนที่เกินมาเริ่มหดหายไป</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/24/be/83/24be83fe3292565d423bd3f4cf7bc07d.jpg" }}
                    style={{ width: 450, height: 350, marginTop: 15 }} />

            </View>


        </ScrollView>

    );
}

   