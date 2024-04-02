import React from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ShinchanTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "tomato", tabBarInactiveTintColor: "gray", }} >
            <Tab.Screen
                name="FlashScreen"
                component={FlashScreen}
                options={{
                    tabBarLabel: "Short Story",
                    // tabBarIcon: ({ color, size }) => (<FontAwesome name="bolt" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="FlameScreen"
                component={FlameScreen}
                options={{
                    tabBarLabel: "Characters",
                    // tabBarIcon: ({ color, size }) => (<FontAwesome name="fire" color={color} size={size} />),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="LeafScreen"
                component={LeafScreen}
                options={{
                    tabBarLabel: "Others",
                    // tabBarIcon: ({ color, size }) => (<FontAwesome name="leaf" color={color} size={size} />),
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
                    source={{ uri: "https://i.pinimg.com/564x/55/69/7a/55697aed7230ab5731154b88499c868e.jpg" }}
                style={{ width: 450, height: 280 }}
            />
            <View style={{flexDirection:'row', margin:8}}>
                <Image
                        source={{ uri: "https://i.pinimg.com/originals/b8/cd/21/b8cd21b6d75ed6819d360822cf7afb5e.gif" }}
                        style={{ width: 210, height: 200, marginRight:5 }}
                />
                <Image
                        source={{ uri: "https://i.pinimg.com/originals/b2/87/c0/b287c0acd7043d05034d8b21e5f84492.gif" }}
                        style={{ width: 210, height: 200,  marginLeft:5 }}
                />

            </View>

                <Text style={{ fontSize: 30, paddingTop: 20}}>Crayon Shinchan</Text>
                <Text style={{ fontSize: 17, padding: 10, color: '#828282' }}>   เนื้อเรื่องเกี่ยวกับชินจัง (โนะฮาร่า ชินโนะสุเกะ; Nohara Shinnosuke) เด็กอนุบาลวัย 5 ขวบ ผู้มีนิสัยทะลึ่งและแก่แดดเกินวัย เช่น ชอบผู้หญิงหุ่นดีหน้าตาดี พ่อของชินจัง (โนฮาร่า ฮิโรชิ ) เป็นคนที่ ชอบทำเท่ให้สาวๆเห็น ชาวสาวหุ่นดีหน้าตาดี เป็นมนุษย์เงินเดือนเพื่อหวังเป็นหัวหน้าฝ่ายและยังต้องผ่อนบ้านอีก32ปี แม่ของชินจัง (มิซาเอะ) มีนิสัยขี้เหนียว แต่โมโหง่ายและน่ากลัว ใบหน้ามีรอยเหี่ยวย่น(รอยตีนกา) .ชินจังมีน้องสาวหนึ่งคนชื่อฮิมาวาริ. ครอบครัวของชินจังเลี้ยงหมาไว้หนึ่งตัว มีชื่อว่าเจ้าขาว (ชิโระ). เพื่อนๆ ของชินจังที่พบในเรื่องบ่อยๆ คือ คาซามะคุง, เนเน่จัง, มาซาโอะคุง, และ โบจัง ชินจังมักจะชอบแสดงท่าทางแปลกๆ เช่น ทำตัวเป็นมนุษย์ต่างดาวนู้ดครึ่งก้น หรือเอากางเกงในมาครอบหัวทำเพื่อทำเลียนแบบหน้ากากแอ็คชั่นหรือกันตั้มที่เป็นการ์ตูนเรื่องโปรดของชินจัง ชินจังเองเป็นคนที่ชื่นชอบและชื่นชมในตัวหน้ากากแอ็คชั่นมาก มีขนมโปรดคือ ช็อกโกบี การละเล่นของชินจังที่โรงเรียนคือ เล่นเป็นยุง เล่นเป็นอึ เล่นซ่อนแอบแบบไม่มีคนหา(ส่วนใหญ่แล้วจะเล่นกับโบจัง) เล่นแกล้งตายบนหิมะ เล่นพ่อ แม่ ลูก (เมื่อถูกเนเน่จังบังคับ)เล่นซ่อนหา เล่นไล่จับ.</Text>

        </View>
        </ScrollView >
    );
}

function FlameScreen(props) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={props.style}>
                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 205, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>ตัวละครหลัก </Text>
                </View>


                <Text style={{ padding: 15, fontSize: 28 }}>ครอบครัวโนะฮาร่า</Text>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/c4/59/bd/c459bd0f2279d59b9958b35890f71427.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โนะฮาร่า ชินโนะสึเกะ</Text>
                    

                    <Image source={{ uri: "https://i.pinimg.com/564x/f6/07/0d/f6070da34c4002b9f00431b361972c6b.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โนะฮาร่า ฮิมาวาริ</Text>
                   
                    <Image source={{ uri: "https://i.pinimg.com/564x/ec/93/d2/ec93d20d049d57d5ed28bd5cae1bc54d.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />

                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โนะฮาร่า มิซาเอะ</Text>
                    

                    <Image source={{ uri: "https://i.pinimg.com/564x/63/c6/f7/63c6f73d204f5f44e71490bf98d9b1c4.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>โนะฮาร่า ฮิโรชิ</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/13/13/d0/1313d0e9e571ced024dfce1f951bb676.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>เจ้าขาว (ชิโร่)</Text>
                </View>
                <Text style={{ padding: 15, fontSize: 28, marginTop: 30 }}>เพื่อนโนฮาร่า ชินโนะสุเกะ (ชินจัง)</Text>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://i.pinimg.com/564x/c1/33/34/c1333494ae636f3b9e2b8ff8cd5bce8b.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซากุราดะ เนเน่</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/e2/60/f3/e260f34364c5cd3113dca9ec40d7a09f.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คาซามะ โทโอรุ</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/46/e9/64/46e9646b1e44a760c6785cd73aa65ebf.jpg" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซาโต้ มาซาโอะ</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/3d/ed/ff/3dedffdc72003589fe4f9f691aef74da.jpg" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซูซูกิ โบ</Text>

                    <Image source={{ uri: "https://i.pinimg.com/564x/62/86/b9/6286b922ad65b14006d625f05530468a.jpg" }}
                        style={{ width: 350, height: 260, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซึโอโตเมะ ไอย์</Text>
                </View>
                <Text style={{ padding: 15, fontSize: 28, marginTop: 30 }}>เพื่อนโนฮาร่า ชินโนะสุเกะ (ชินจัง)</Text>


                <View style={{ flexDirection: 'row', marginTop: 20, margin: 15, height: 50, width: 205, borderRadius: 15, paddingHorizontal: 10, backgroundColor: '#C4C1A4', opacity: 1, borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 35 }}>ตัวละครรอง </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: "https://f.ptcdn.info/149/046/000/odw98ya0sHDx019grTq-o.jpg" }}
                        style={{ width: 350, height: 310, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ซากุระดะ โมเอโกะ (แม่ของเนเน่จัง)</Text>

                    <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/Screenshot%202024-03-31%20101013.png" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คาซามะ มิเนโกะ (แม่ของคาซามะ)</Text>

                    <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/Screenshot%202024-03-31%20101420.png" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>คุณนาย ซาโต้ (แม่ของมาซาโอะ)</Text>

                    <Image source={{ uri: "https://pbs.twimg.com/media/FtbHVwxaQAEpDmk?format=jpg&name=small" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ครูโยชินาง่า มิโดริ (อิชิซากะ มิโดริ)</Text>

                    <Image source={{ uri: "https://image.thepeople.co/uploads/2021/08/%E0%B8%A1%E0%B8%B1%E0%B8%95%E0%B8%AA%E0%B8%B6%E0%B8%8B%E0%B8%B2%E0%B8%81%E0%B8%B0_Website_1200x628.jpg?x-image-process=style/lg" }}
                        style={{ width: 350, height: 260, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ครูมัตสึซากะ อุเมะ (ครูประจำชั้นห้องกุหลาบ)</Text>

                    <Image source={{ uri: "https://image.dek-d.com/27/0360/9015/115271966" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>หน้ากากแอ็คชั่น (ฮีโร่ในดวงใจของชินจัง)</Text>

                    <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/Screenshot%202024-03-31%20102338.png" }}
                        style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ครูอาเงโอะ มาซึมิ</Text>

                    <Image source={{ uri: "https://pbs.twimg.com/media/Dg1nqK-VAAAlmi0?format=jpg&name=360x360" }}
                        style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} />
                    <Text style={{ fontSize: 25, paddingTop: 10 }}>ครูใหญ่ ทาคาคูระ บุนตะ (คุณครูหัวหน้าแก๊ง)</Text>

                    {/* <Image source={{ uri: "https://raw.githubusercontent.com/JN-JANE/image/main/Screenshot%202024-03-31%20102338.png" }} */}
                        {/* style={{ width: 350, height: 280, borderRadius: 20, marginTop: 15 }} /> */}
                    {/* <Text style={{ fontSize: 25, paddingTop: 10 }}>ฮนดะ เคย์โกะ (ป้าโอเคย์)</Text> */}

                    {/* <Image source={{ uri: "https://pbs.twimg.com/media/Dg1nqK-VAAAlmi0?format=jpg&name=360x360" }} */}
                        {/* style={{ width: 350, height: 300, borderRadius: 20, marginTop: 15 }} /> */}
                    {/* <Text style={{ fontSize: 25, paddingTop: 10 }}>ครูใหญ่ ทาคาคูระ บุนตะ (คุณครูหัวหน้าแก๊ง)</Text> */}

                </View>
            </View>


        </ScrollView >
    );
}


function LeafScreen() {
    return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                source={{ uri: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/307017414_852990809407607_2397237978625847215_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFFWtWC8k4Ifbo42ovgmn1Xi6-A4dovFHuLr4Dh2i8Ue8f6fdoo1PI17Il1k7Lc9FXnA-I7p9ZYYzCgCCng1ZFt&_nc_ohc=M2fRFSiDAZwAX_N36vh&_nc_ht=scontent.fbkk9-2.fna&oh=00_AfBukOxRMPMIi2HGvQOOOqJG0nD_KwpoZNQd5GzeH17aTw&oe=660EC534" }}
                style={{ width:'100%', height: 500 }}
            />
            {/* <Text style={{ fontSize: 30, paddingTop: 20 }}></Text> */}
            <Image
                    source={{ uri: "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/307168333_852990876074267_6820654656112210895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHEfjYN16Xk_ZqgJci4IW5Jo6J1TnSscKGjonVOdKxwoY5kQnrlU7hvEMFgxEp6AuStoOXawlQG4HABXwb8kQPB&_nc_ohc=hkzUn09IFlgAX8RoHC_&_nc_oc=Adg1aH66_xc9j5Q9-WIx_kEViRIvPQbbtWOs4NdBZ1NK3jOcbtZPNIRqa1BiEhrpj4AoDYoVnT8t25SKzEULKNTs&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfDN_oJufCChueZeniqdqQU_bKDG_zdCNXQMavAhvp_gig&oe=660EB531" }}
                style={{ width: '100%', height: 500 }}
            />

                <Image
                    source={{ uri: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/306948378_852990922740929_8386960874946053287_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkmo0scE8nrYl_OFYTlFJLnpC33_SYedaekLff9Jh51sWR9lySs__0eQmXlg_kLhtRmZ1B4dij8gvXarDZ3A32&_nc_ohc=XmqGb6q7yHEAX_MdNxK&_nc_ht=scontent.fbkk12-5.fna&oh=00_AfARBqVsiKZsFhPu27_T3JbI6al9KjppeZLo66TBlMNmsw&oe=660E96E6" }}
                    style={{ width: '100%', height: 500 }}
                />

                <Image
                    source={{ uri: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/307011992_852990969407591_7533067714564212983_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiyBeJKs4hFal150EDxX8ja4yFIeKwMKZrjIUh4rAwphWSqB_LbJR17PaKI52T8L1EI1Jsf6GQFZTXmrHi-Wo1&_nc_ohc=EBVBQ0IRaTkAX-XeXsh&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfCdLhf3upVxsVXZxzqxMG4bY-mO2AVOspdzq8N5ufVIiA&oe=660EB9A6" }}
                    style={{ width: '100%', height: 500 }}
                />
                <Image
                    source={{ uri: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/307211627_852991062740915_3783008435562997600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsh960dRKI5-_RYfhm0bT48jTKwVoSenjyNMrBWhJ6eH3BDZsEUhEgNTjBtC1B0BpksR19KHKJUeLjGaJ6Iwap&_nc_ohc=2YA0XFQK6VIAX-kZBRc&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfDy2v1REVyvv3Wgxt23jSKcfYpqn0SmPk7nURFrIeypjA&oe=660E96E0" }}
                    style={{ width: '100%', height: 500 }}
                />
        </View>
        </ScrollView >
    );
}
