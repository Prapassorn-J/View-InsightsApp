import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Reply1988Tab() {

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
                    source={{ uri: "https://i.pinimg.com/564x/5b/52/e5/5b52e5b9e2330b364a56a7f1b098dab1.jpg" }}
                    style={{ width: 450, height: 280 }}
                />
                <View style={{ flexDirection: 'column', margin: 8 }}>
                    <Image
                        source={{ uri: "https://pa1.narvii.com/6555/cada19c1577c3e65fc6f5c41dbb50ae2de1478c6_hq.gif" }}
                        style={{ width: 450, height: 250, marginTop: 5 }}
                    />
                    <Image
                        source={{ uri: "https://64.media.tumblr.com/68201cb6e3bf34eb45504f62d4c0d546/312f30f76a450b7b-e8/s540x810/882aa16c02d794c428d02a2167a116880e604665.gifv" }}
                        style={{ width: 450, height: 250, marginTop: 10 }}
                    />

                </View>

                <Text style={{ fontSize: 30, paddingTop: 20 }}>Reply 1988</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เรื่องราวของการดำเนินชีวิต ความสัมพันธ์และความรักของห้าครอบครัวในชุมชนเล็กๆ แห่งหนึ่งในแขวงซังมุน เขตโทบง ทางตอนเหนือของโซล ในปี 1988 ซึ่งแต่ละครอบครัวจะพาไปรัก ร้องไห้กับเรื่องราวที่เกิดขึ้น ทั้งในวันที่ล้ม ในวันที่มีความสุข ทุกคนในชุมชนเล็กๆนี้ก็จะอยู่ข้างกันและกันคล้ายครอบครัวขนาดย่อมที่ไม่ต้องใช้สายเลือดเพื่อสร้างความสัมพันธ์อันเหนียวเน้นนี้ ซีรีย์นี้ได้นำเสนอถึงมุมที่ทั้งเรื่องตลกที่เจอด้วยกัน เรื่องความรักที่เกิดขึ้นภายในกลุ่มเพื่อนและการช่วยเหลือกันข้ามผ่านอุปสรรคที่เผชิญ ซึ่ง Reply 1988 ได้เลือกนำเสนอให้เห็นมุมของคนสองวัย ทั้งในวัยของพ่อแม่ที่ต้องหาทางดูแลลูกและมีสังคมที่ใจเขาใจเราและในวัยรุ่นของรุ่นลูกวัยใกล้เคียงกันที่แสบซ่า ก๋ากั๋นและค่อยๆเติบโตจากเรื่องราวใหม่ๆที่เกิดขึ้นในช่วงชีวิตของแต่ละคน</Text>

            </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView >
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 242, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#89807A', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>รายชื่อตัวละคร </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/4a/0f/55/4a0f55a919815e19f9b1aad587cb2754.jpg" }}
                        style={{ width: 350, height: 480, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซอง ด็อกซอน</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/60/4d/75/604d7566363a9509db33117e2af26c86.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คิม จองฮวัน</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/e5/83/b1/e583b1501c2c945eb9332001dc7f1312.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> ชเว แท็ก</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/5f/2a/36/5f2a36146c28bb49c2e1ac226735c681.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซอง ซอนอู</Text>


                    <Image source={{ uri: "https://i.pinimg.com/564x/1e/31/9f/1e319f9df5a01f4b5a03e3f18cff13c9.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>รยู ดงรยง</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/9e/87/e8/9e87e827f2c62395ba5eaf37b0122649.jpg" }}
                        style={{ width: 350, height: 480, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซอง โบรา (Slinky dog)</Text>

                    <Image source={{ uri: "https://www.popcornfor2.com/upload/user_15/files/116/answer16-00160.jpg" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คิม จองบง</Text>

                    <Image source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2017/07/S__3620895.jpg?resize=600%2C890" }}
                        style={{ width: 350, height: 400, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซอง โนอึล</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/4d/a1/dc/4da1dc18e26f863469b064c5e879c184.jpg" }}
                        style={{ width: 350, height: 320, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซอง จินจู</Text>

                    <Image source={{ uri: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2020/12/16/kqzazkjc_01999a9752006a0c405135f003a7c7b1d3_296_168.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซอง ดงกิล และ อี อิลฮวา (พ่อแม่ด็อกซอน)</Text>


                    <Image source={{ uri: "https://f.ptcdn.info/028/039/000/o0lawwhg7VWvTa11try-o.jpg" }}
                        style={{ width: 350, height: 260, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}> คิม ซองกยุน และ รา มีรัน (พ่อแม่จองฮวัน)</Text>

                    <Image source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2020/07/kim-sun-young-reply-1988.jpg?resize=750%2C422&ssl=1" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คิม ซอนยอง (แม่ซอนอู) </Text>


                    <Image source={{ uri: "https://pbs.twimg.com/media/Ek1cP9sVkAAyYy9.png" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ชเว มูซอง (พ่อแท็ก)</Text>

                    <Image source={{ uri: "https://pbs.twimg.com/media/E9KhThvUcAIBTRM.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>รยู แจมยอง (พ่อดงรยง)</Text>


                </View>
            </View>
        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>ซีรีส์ ‘Reply 1988’ กับ 10 คำพูดที่ชวนเราคิดถึง ครอบครัว ความรัก และมิตรภาพ</Text>
            </View>

            <View>
                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-edit-01.png" }}
                    style={{ width: 450, height: 430, marginTop: 15 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-edit-02.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-02-2.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-03.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-04.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />
                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-05.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-06.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-07.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />
                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-08.png" }}
                    style={{ width: 450, height: 460, marginTop: 10 }} />

                <Image source={{ uri: "https://thematter.co/wp-content/uploads/2020/11/reply1988-09.png" }}
                    style={{ width: 450, height: 430, marginTop: 10 }} />

            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 15, fontSize: 28 }}>5 เหตุผลที่จะทำให้คุณตกหลุมรัก Reply1988</Text>
            </View>

            <View>
                <Text style={{ fontSize: 25, padding: 10 }}>1. มิตรภาพระหว่างเพื่อน และรักแรก</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>หากพูดถึงความทรงจำในวันวานที่ทำให้หัวใจเราพองโตคงหนีไม่พ้นมิตรภาพ และ รักแรก เราทุกคนต่างมีมิตรภาพระหว่างเพื่อนในวัยเด็ก และ รักแรกที่อยู่ในความทรงจำแต่บางทีเราอาจลืมมันไปแล้วในบางช่วงเวลา แต่ตัวซีรีส์สามารถทำให้เรากับมานั้งนึกถึงและยิ้มให้กับความทรงจำนั้นอีกครั้งได้</Text>

                <Image source={{ uri: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/150935/S__27508740_4.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>2. ครอบครัว และความเป็นอยู่</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>Reply1988 เป็นหนังอีกเรื่องที่สามารถนำเสนอเสน่ห์ของความเป็นครอบครัวได้ดีมากและสามารถทำให้เราอินไปกับครอบครัวในเรื่องและน้ำตาแตกไปได้หลายตอนเลยทีเดียว ด้วยความที่หนังนำเสนอความเป็นอยู่ในซอยเล็กๆไม่ว่าจะเป็นฉากที่แลกเปลี่ยนกับข้าว หรือฉากที่แม่ๆนั้งคุยกันตอนที่สามีออกไปทำงาน ก็สามารถนำเสนอออกมาเป็นธรรมชาติ และเป็นเสน่ห์อีกอย่างของซีรีส์เรื่องนี้ที่ไม่พูดถึงไม่ได้</Text>

                <Image source={{ uri: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/150935/S__27508741_1.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>3. แฟชั่น ยุคสมัยและไอเท็มเด็ด</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>ในแต่ละยุคสมัยนั้นต่างมีความแตกต่างไปในแต่ละยุคสมัย ในเรื่อง Reply1988 มีการดำเนินเรื่องในช่วงปี1988 เกาหลีที่มีเหตุการณ์ต่างๆไม่ว่าจะเป็นการแข่งขันกีฬาโอลิมปิก และที่ขาดไม่ได้คงเป็นเสื้อผ้าแฟชั่น ทรงผมสั้นของนางเอกที่เหมือนหลุดออกมาในช่วงเวลานั้นจริงๆ และไอเท็มเด็ดๆของยุคนั้นอีกมากมาย</Text>

                <Image source={{ uri: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto%2Cwidth=1600%2Cheight=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/150935/S__27508743_1.jpg" }}
                    style={{ width: 450, height: 300, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>4. เพลงประกอบซีรีส์</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>การที่เราจะดูซีรีส์เรื่องหนึ่งให้อินมากๆเพลงประกอบก็สำคัญมากและเป็นอีกสิ่งหนึ่งที่ดึงดูดคนดูให้ติดตามซีรีส์ได้ดีทีเดียว ใน Reply1988 มีเพลงเพราะๆที่อยากแนะนำให้ไปลองฟังกันดูหลายเพลงมาก ส่วนตัวเราชอบเพลง  Hyehwadong ของคุณPark Boram และA Little Girl ของคุณOh Hyuk มากๆเลยค่ะ</Text>

                <Image source={{ uri: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/64/6a/4e/646a4e5c-d6e9-6566-2ae5-0d2dc9af8c8a/8809484111798_Cover.jpg/400x400bb.webp" }}
                    style={{ width: 450, height: 420, marginTop: 15 }} />

                <Text style={{ fontSize: 25, padding: 10 }}>5. การทายสามี</Text>
                <Text style={{ fontSize: 20, padding: 5, color: '#828282' }}>และเสน่ห์ที่ขาดไม่ได้ของซีรีส์ตระกูล Reply คือการทายสามีหรือการหาพระเอกที่คู่กับนางเอกในซีรีส์ทำให้เราสับสนกับการหาพระเอกมาก ไม่อยากจะบอกเลยเรากินแห้วด้วย เหมือนอกหักเองเลยค่ะ</Text>


            </View>

        </ScrollView>

    );
}