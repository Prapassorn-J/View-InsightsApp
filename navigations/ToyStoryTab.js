import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ToyStoryTab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/d6/67/46/d66746f5a7b7d87009d6199dbbd8a34f.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/5b/14/71/5b1471a9637282500aeb871f9b40ed9d.gif" }}
                        style={{ width: 220, height: 160, marginRight: 5 }}
                    />
                    <Image
                        source={{ uri: "https://i.pinimg.com/originals/43/88/ed/4388edabf7c7107dfc9c308ad17c19d2.gif" }}
                        style={{ width: 210, height: 160, marginLeft: 5 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Toy Story </Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   วูดดี้ ของเล่นคาวบอยยุคคลาสสิก ในฐานะของเล่นตัวโปรดของแอนดี้ เด็กชายวัย 6 ขวบ ทำให้วูดดี้กลายเป็นหัวหน้าบรรดาของเล่น ด้วยความมาดมั่น ใกล้วันที่ย้ายบ้าน แอนดี้ จึงจัดวันเกิดก่อนวันเกิดจริง แต่เมื่อบัซ ไลท์เยียร์ ตุ๊กตาตำรวจอวกาศที่แม่ให้เป็นของขวัญเซอร์ไพรส์ ได้ก้าวเข้าในถิ่นของวูดดี้ ในฐานะของขวัญวันเกิดชิ้นโปรดของแอนดี้ การชิงดีชิงเด่น เพื่อเป็นขวัญใจ ของเจ้านายตัวน้อยจึงเกิดขึ้น และส่งผลให้ทั้งคู่ต้องตกไปอยู่ในบ้านของซิด เด็กชายข้างบ้านผู้รักที่จะทำลายของเล่นเป็นชีวิตจิตใจ และการร่วมมือระหว่างวูดดี้กับบัซ เพื่อหลบหนีกลับมานี่เองที่ทำให้พวกเขาตระหนักถึงมิตรแท้ วูดดี้ และ บัซ ไลท์เยียร์ ได้พยายามไปให้ทันรถขนส่งให้ได้ คู่หูที่ดูไม่น่าจะเข้ากันได้ทั้งสองต้องเรียนรู้ที่จะปล่อยวางความแตกต่างของแต่ละคนเพื่อที่จะเอาชนะอุปสรรคที่จะทำให้ทั้งคู่ต้องแยกจาก แอนดี้ เจ้าของพวกเขา กับการผจญภัยสุดป่วน ภารกิจสุดฮา กับเพื่อนพ้องของเล่นอีกมากมาย</Text>

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

                <Text style={{ padding: 15, fontSize: 28 }}>ของเล่นของแอนดี้</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/4d/4c/c9/4d4cc982590bd34066ec979460d5b209.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>วูดดี้ (Woody)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/2e/99/9f/2e999fda423f301e3b8df579dad0100d.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>บัซ ไลท์เยียร์ (Buzz Lightyear)</Text>


                    <Image source={{ uri: "https://i.pinimg.com/736x/5b/51/25/5b512584c9e25961cc478eeed24e533a.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> มิสเตอร์โปเตโต้เฮด  (Mr.Potato Head)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/ed/cc/b1/edccb19c16f6121bfda1d4e58e25ba9a.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>มิสซิสโปเตโต้เฮด  (Mrs. Potato Head)</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/bf/6f/33/bf6f33527b808b3d39d877e22a6e6c15.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โบ พีป (Bo peep)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/ed/f0/52/edf05235c7bc4919533ac9aa179bbb60.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>สลิงกี้ด็อก (Slinky dog)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/3b/58/33/3b58330ba2cfedcb4ff2dc8753a19389.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>เร็กซ์ (Rex)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/6c/1c/a3/6c1ca3c8336f3133a8de6e3713058013.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>แฮมม์ (Hamm)</Text>

                    
                </View>

                <Text style={{ padding: 15, fontSize: 28 }}>มนุษย์</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/0c/20/f2/0c20f2fafcb3f1454f1a27740178a788.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>แอนดี้ เดวิส (Andy Davis)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/9e/cc/6a/9ecc6a7c09c16e343aa14b38ad428ca6.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>มอลลี่ เดวิส (Molly Davis)</Text>


                    <Image source={{ uri: "https://static.wikia.nocookie.net/disney/images/e/ea/Profile_-_Mrs._Davis.jpg/revision/latest?cb=20230915203610" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> แม่ของแอนดี้ (Mrs.Davis)</Text>

                    <Image source={{ uri: "https://disneynews.us/wp-content/uploads/2022/10/Hannah-Phillips-Toy-Story-disney-300x265.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ฮันนา (Hanna)</Text>


                    <Image source={{ uri: "https://images.bigbadtoystore.com/images/p/full/2023/01/cc4b8442-cd67-4de1-892f-3589c2fcb5a2.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>อัล แมควิลกิ้น (Ai Mcwiggin)</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/9d/e9/e3/9de9e3ecfdeaec7ac8bf4d9d1e9721f9.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>บอนนี่ แอนเดอร์สัน (Bonnie Anderson)</Text>

                    <Image source={{ uri: "https://static.wikia.nocookie.net/disney/images/a/a1/Profile_-_Mrs._Anderson.png/revision/latest?cb=20201228075848" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>แม่ของบอนนี่ (Mrs.Anderson)</Text>

                    <Image source={{ uri: "https://static.wikia.nocookie.net/disney/images/a/a1/Bonnie%E2%80%99s_Dad.jpg/revision/latest?cb=20200222224520" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>พ่อของบอนนี่ (Mr.Anderson)</Text>


                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>5 สิ่งที่ TOY STORY สอนเราเกี่ยวกับการใช้ชีวิต</Text>
            </View>

            <View>

                <Text style={{ fontSize: 25, padding: 10 }}>1.มีการบินขึ้น ก็มีการหล่นลงมาอย่างมีสไตล์</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>ทุกคนต่างต้องการมีชีวิตที่บินทะยานสูงขึ้นไป สู่จุดที่สูงที่สุดและควบคุมชีวิตได้อย่างสมบูรณ์แบบ แต่บัซ ไลท์เยียร์ (Buzz Lightyear) ได้แสดงให้เราเห็นอย่างน่าอัศจรรย์ว่า การบินนั้นไม่ใช่สิ่งที่เป็นไปได้เสมอไป แต่ไม่ว่าคุณจะเจอกับอุปสรรคแบบไหน คุณก็สามารถหล่นลงมาได้อย่างมีสไตล์เสมอ ก็เปรียบกับชีวิตที่มีขึ้นแล้วก็มีลง แต่เราจะลงมาอย่างมีสไตล์ อย่างที่บัซบอกไว้</Text>

                <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/download%20(5).jpg" }}
                    style={{ width: 450, height: 310, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>2.เพื่อนแท้จะอยู่เคียงข้างคุณเสมอ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>ไม่มีภาพยนตร์เรื่องไหนที่แสดงให้เห็นถึงเรื่องเพื่อนได้ดีไปกว่า Toy Story อีกแล้ว พวกเพื่อนเหล่านี้ได้ออกผจญภัย ซึ่งมีอันตรายที่ยิ่งใหญ่ที่สุดเท่าที่ของเล่นจะเคยพบรออยู่ หมายถึงว่ามันน่ากลัวแค่ไหนที่ของเล่นได้ไปถึง Al’s Toy Barn (ร้านขายของเล่นของอัล) ด้วยความหวังที่ว่าจะช่วยของเล่นหนึ่งชีวิตที่เป็นเพื่อนพวกเขา ในภาพยนตร์ Toy Story ทุกภาคพวกเขาต้องรับบทที่ต้องตกอยู่ในอันตราย เพียงเพื่อให้แน่ใจว่า ตัวพวกเขาเองจะสามารถช่วยเพื่อนของพวกเขาไว้ได้</Text>

                <Text style={{ fontSize: 25, padding: 10 }}>3.ทุกคนมีหัวใจ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>หากคุณคือแฟนคลับของ Toy Story คุณจะรู้ว่า ไม่ว่าจะเป็นของเล่นชิ้นเล็ก ๆ แต่พวกเขาก็มีหัวใจ แม้แต่ของเล่นที่ถูกวางทิ้งไว้จนฝุ่นเกาะบนชั้นวางของอย่างเจ้า Wheezy (ตุ๊กตาเพนกวินร้องเพลงได้) ที่น่าสงสารก็มีหัวใจเหมือนกัน ทุกคนต่างมีความรู้สึกและมีหัวใจ ดังนั้นพวกเราควรจดจำเกี่ยวกับคนทุกคน สัตว์ทุกตัว และของเล่นทุกชิ้นที่เราได้พบ</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/e3/5a/85/e35a855de4931bb762aff2c15930ac7a.jpg" }}
                    style={{ width: 450, height: 320, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>4.จำไว้ว่าหัวใจของคุณเป็นเด็กอยู่เสมอ</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>ในขณะที่เราดูแอนดี้เติบโตขึ้นในภาพยนตร์ภาค 2 และภาค 3 ก็ทำให้เราเจ็บปวดเมื่อเขาไม่ได้มีจินตนาการกับของเล่นและการผจญภัยของพวกเขาอีกต่อไป จนกระทั่งถึงตอนจบของภาค 3 ตอนที่แอนดี้ส่งต่อของเล่นของเขาและความทรงจำของเขา ในตอนนั้นเองเขาก็ได้นึกถึงของเล่นของเขา เช่นเดียวกับพวกเราที่ว่า ไม่ว่าคุณจะอายุเท่าไหร่ คุณจะมีความเป็นเด็กอยู่ในหัวใจเสมอ</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/3b/18/0f/3b180fd302ac5afea6236fc8b1fe3148.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>5.ใช้ชีวิตไปสู่ความเวิ้งว้างอันไกลโพ้น</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>ไม่ต้องเป็นแฟนคลับ Toy Story แต่ทุกคนก็น่าจะรู้จักวลี “สู่ความเวิ้งว้างอันไกลโพ้น” กันเป็นอย่างดี แต่มีเพียงแฟน Toy Story ที่จะเข้าใจความหมายอย่างแท้จริง ทุกคนที่รักภาพยนตร์เรื่องนี้รู้ดีว่าต้องจดจำคำพูดนี้ไว้เสมอเมื่อคุณกำลังต่อสู้กับชีวิต ซึ่งคุณต้องการใช้ชีวิตไปให้ไกลที่สุดถึงจักรวาลอันกว้างใหญ่และไปให้ไกลกว่านั้น

</Text>

                <Image source={{ uri: "https://i.pinimg.com/564x/51/a7/b0/51a7b0506a8a6c48ddc5ec6a0da2660f.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                

            </View>
        </ScrollView>

    );
}