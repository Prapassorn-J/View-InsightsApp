import React from 'react';
import { View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Ms01() {

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#AECDFF", height: 100, borderBottomLeftRadius: 45, borderBottomRightRadius: 45, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>ซีรีส์เกาหลี แนะนํา 10 เรื่อง ฮิตตลอดกาล คัดมาแล้วว่าต้องดู!!</Text>
                </View>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>1. START-UP : สตาร์ทอัพ (2020)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.0/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>    
                <Image source={{ uri: "https://i.mydramalist.com/ByQ25_3f.jpg" }}
                    style={{ width:450, height:580, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding:10 }}>   เรื่องราวชีวิตของคนวัยหนุ่มสาวที่ก้าวเดินจากจุดเริ่มต้น (Start) จน เติบโต (Up) ในธุรกิจสตาร์ทอัพ ด้วยความใฝ่ฝันที่อยากจะประสบความสำเร็จเป็นที่ยอมรับในฐานะอัจฉริยะ และมีชื่อปรากฏใน Silicon Valley ของเกาหลีใต้ เขาและเธอ ต่างเป็นแรงผลักดันของกันและกันโดยไม่รู้ตัว</Text>
            </View>
            
            <Text style={{ marginTop: 25, fontSize: 20, padding:10 }}>2. TALE OF THE NINE TAILED : เทพบุตรจิ้งจอกเก้าหาง (2021)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 7.9/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2019/09/Pic-6-9.jpg" }}
                    style={{ width: 450, height: 620, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   เล่าถึง อียอน ได้ย้อนกลับไปในปี 1938 และได้พบกับผู้คนที่คุ้นเคย อย่างเช่น อีรัง น้องชายของเขา ที่มีความสัมพันธ์แตกต่างจากในยุคปัจจุบันมาก อียอนพยายามหาทางกลับไปสู่ช่วงเวลาปัจจุบัน แต่ระหว่างนั้นเขาก็ได้พบกับเพื่อนเก่าที่ได้แปรเปลี่ยนไปเป็นศัตรู นอกจากจะมีอุปสรรคมากมายที่ขัดขวางไม่ให้เขากลับไปหาคนรักในยุคปัจจุบันแล้ว อียอนยังต้องเผชิญกับบางสิ่งที่มุ่งมั่นจะพรากทุกคนที่เขารักให้จากไป</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>3. ITAEWON CLASS : ธุรกิจปิดเกมแค้น (2020)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.2/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://mushroomtravelpage.b-cdn.net/wp-content/uploads/2019/09/Pic-9-3-719x1024.jpg" }}
                    style={{ width: 450, height: 620, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   ซีรีส์เรื่องนี้ดัดแปลงเรื่องราวจากต้นฉบับที่เป็นเว็บตูนในชื่อเดียวกัน ว่าด้วยเรื่องราวการสู้ชีวิตของ พัคแซรอย (รับบทโดย พัคซอจุน) ที่เติบโตมาจนถึงช่วงเริ่มต้นมัธยมปลาย อยู่กับพ่อที่ทำงานใน ชางกา บริษัทธุรกิจอาหารยักษ์ใหญ่ จนในวันแรกของการเข้าเรียนในโรงเรียนแห่งใหม่ แซรอย เด็กหนุ่มผู้บ้าบิ่นและไม่ยอมอ่อนข้อให้กับใคร อดทนไม่ได้ที่เห็นความอยุติธรรมอยู่ตรงหน้า ทำให้เขามีเรื่องกับ จางกึนวอน (รับบทโดย อันโบฮยอน) ลูกชายคนโตของ ซีอีโอจางแดฮี (รับบทโดย ยูแจมยอง) ผู้กุมอำนาจชางกาไว้ในมือ นั่นเป็นจุดเริ่มต้นที่ทำให้ชีวิตของเขาพังไม่เป็นท่า ไม่ว่าจะโดนไล่ออกจากโรงเรียน สูญเสียพ่อจากอุบัติเหตุ และเข้าคุกอย่างไร้ซึ่งความยุติธรรม แต่ทว่า แซรอย กลับไม่ย่อท้อกลับมาสร้างเนื้อสร้างตัวใหม่ พร้อมมีแผนการแก้แค้น ที่ไม่ใช่การใช้กำลัง แต่ใช้สติและความมุ่งมั่นเพื่อเป้าหมายในใจที่อดทนรอคอยมานานแสนนานด้วยการเปิดผับกึ่งร้านอาหาร ที่มีชื่อว่า ทันบัม ในย่านอิแทวอน ศึกการต่อกรระหว่าง ชางกา และ ทันบัม จึงเริ่มต้นขึ้น ณ บัดนั้น</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>4. 18 AGAIN (2020)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.2/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://i.pinimg.com/564x/05/ab/31/05ab31c21da544d6858cb948acc26ad1.jpg" }}
                    style={{ width: 450, height: 620, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   เรื่องราวของ คิมฮานึล จะมารับบทเป็น จองดาจอง (รับบทโดย คิมฮานึล) คุณแม่สายเวิร์คกิ้งมัม ที่เข้าร่วมในที่ทำงานหลังจากลูก ๆ ของเธอเติบโตกันไปแล้ว ฮงแดยอง (รับบทโดย ยุนซังฮยอน) สามีของจองดาจอง ในวัย 37 ปี ที่เกิดเรื่องราวทำให้เขาได้กลับไปอยู่ในร่างของตัวเองเมื่อตอนอายุ 18 ปีและเพื่อปกปิดความจริงไม่ให้ใครรู้เรื่องราวสุดพิลึกนี้ ฮงแดยอง จึงใช้ชีวิตด้วยชื่อที่ตั้งขึ้นมาใหม่ โกอูยอง (รับบทโดย อีโดฮยอน) แทน</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>5.GOBLIN (2016)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.6/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://i.pinimg.com/564x/cc/2f/80/cc2f8002ca1ca32af8f0bebdb986d831.jpg" }}
                    style={{ width: 450, height: 625, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   เป็นเรื่องราวของ คิมชิน (กงยู) วีรบุรุษนักรบที่ถูกสาปให้เป็น ทกแกบี (Goblin) เป็นผู้พิทักษ์วิญญาณที่ไม่มีวันตาย มีชีวิตวนเวียนอยู่บนโลกมา 900 กว่าปี เดินไปเดินมาพร้อมดาบที่ปักอกอยู่ (ไอ้ดาบปักอกเนี่ยมันคือคำสาป) แต่ไม่มีใครเห็นดาบเล่มนี้หรอกนอกจากคนที่จะสามารถถอนคำสาปให้เขาได้ ซึ่งคนนั้นจะเป็นเจ้าสาวของก็อบลิน เป็นผู้หญิงที่จะมาถอนคำสาปให้เขาโดย ดึงดาบออกแล้วเขาก็อาจจะกลายเป็นเถ้าถ่าน ได้ตายสมใจเหมือนชาวบ้านเขาซะที </Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>6.REPLY 1988 (2015)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 9.1/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2017/08/Reply1988.jpg?w=1352&ssl=1" }}
                    style={{ width: 450, height: 350, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   ซีรี่ส์บอกเล่าเรื่องราวในช่วงปี 1988 ของกลุ่มเพื่อนสนิท 5 คนที่รักและผูกพันกันมาก เพราะอาศัยอยู่ละแวกบ้านเดียวกันและเห็นกันมาตั้งแต่เด็ก ๆ ประกอบไปด้วย ด็อกซอน (รับบทโดย ฮเยริ) สาวคนเดียวในกลุ่มที่นิสัยร่าเริงสนุกสนานเฮฮาแก่นเซี้ยวตามวัย ครอบครัวอบอุ่นแต่ฐานะยากจนและอาศัยอยู่ชั้นใต้ดินของบ้าน จองฮวัน (รับบทโดย รยูจุนยอล) หนุ่มเงียบขรึมไม่ค่อยแสดงความรู้สึกแต่จิตใจดี ครอบครัวร่ำรวยขึ้นมาในพริบตาเพราะถูกล็อตเตอรี่ ซอนอู (รับบทโดย โกคยองพโย) ชายหนุ่มอ่อนโยนอบอุ่นรักครอบครัวและเรียนเก่ง ซอนอู อยู่กับแม่ที่เลี้ยงครอบครัวคนเดียวเพราะพ่อเสียแล้วและมีน้องสาวเด็กน้อยอีก 1 คน  ดงรยอง (รับบทโดย อีดงฮวี) ชายหนุ่มที่สนุกสนานไปวัน ๆ ครอบครัวมีฐานะมั่นคงแต่พ่อแม่ทำงานเยอะจนไม่มีเวลาจึงทิ้งไว้ให้แต่เงิน ทั้ง 4 คนนี้ยังเป็นนักเรียนอยู่ชั้นมัธยมปลาย และคนสุดท้าย แทค (รับบทโดย พัคโบกอม) หนุ่มเชื่องช้าพูดน้อยน่ารักจริงใจและเป็นนักเล่นหมากล้อมมืออาชีพที่มีความสามารถ ได้แชมป์มามากมายนับไม่ถ้วน จนถึงกับลาออกจากโรงเรียนเพื่อมาเอาดีทางนี้ ครอบครัวนี้มีพ่อเป็นคนเลี้ยงลูกคนเดียวเช่นเดียวกันและเป็นเจ้าของร้านขายนาฬิกา ฐานะค่อนข้างดี

                    ความสนิทสนมกลมเกลียวกันมาตั้งแต่รุ่นพ่อแม่สู่รุ่นลูก ทำให้เกิดเรื่องราวมากมาย ทั้งตลกขบขัน ,สนุกสนานเฮฮา และซึ้งกินใจ ซีรี่ส์นี้จะทำให้เรื่องราวชีวิตของเหล่าคนธรรมดา ๆ เหล่านี้ กลายเป็นเรื่องราวที่ทำให้น่าจดจำและประทับใจไปอีกนานแสนนาน</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>7. HOSPITAL PLAYLIST (2020)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.8/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://i.pinimg.com/564x/f7/c1/0f/f7c10f5609113a273407b126b05588e9.jpg" }}
                    style={{ width: 450, height: 640, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   เรื่องราวความสัมพันธ์ของแพทย์ทั้ง 5 คน ที่เป็นเพื่อนสนิทกันมา 20 ปี หลังจากที่พบกันและผูกสัมพันธ์กันมาตั้งแต่สมัยเป็นนักศึกษาแพทย์ ปีการศึกษา 1999 ปัจจุบันพวกเขายังคงรักษามิตรภาพและเติบโตเป็นคุณหมอที่เต็มไปด้วยความรับผิดชอบอยู่ที่โรงพยาบาลเดียวกัน โดยมีปณิธานเหมือนกันคือ...ช่วยเหลือชีวิตคนไข้ที่เจ็บป่วย</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>8. POLICE UNUVERSITY (2021)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 7.2/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://i.pinimg.com/564x/3c/a3/89/3ca3892c06e04716b61fa02a8a4c530a.jpg" }}
                    style={{ width: 450, height: 640, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   เรื่องราวเกี่ยวกับนักสืบที่ตามจับตัวอาชญากรอย่างเต็มกำลังความสามารถของเขา และ อดีตแฮกเกอร์ที่ใช้สติปัญญาของเขาในการแก้ไขปัญหาทุกอย่าง ทั้งสองได้พบกันที่มหาวิทยาลัยตำรวจในฐานะอาจารย์และนักเรียน และร่วมมือกันสืบสวนคดี</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>9. The Good Bad Mother: แม่ดี แม่ร้าย (2023)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.4/10 </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2022/08/The-good-bad-mother-jtbc-cover-150323.jpg?w=2000&ssl=1" }}
                    style={{ width: 450, height: 400, marginTop: 15 }} />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>   เรื่องราวของแม่เลี้ยงเดี่ยว ยองซุน (รับบทโดย รามีรัน) ที่เลี้ยงดู คังโฮ (รับบทโดย อีโดฮยอน) ลูกชายของเธอด้วยตัวคนเดียว เธอกลายเป็น “แม่ใจร้าย” และเข้มงวดกับลูกชายเพราะไม่อยากให้เขาต้องโตไปเป็นคนยากจนหรือไร้อำนาจ ความมีระเบียบวินัยของเธอทำให้คังโฮโตมาเป็นอัยการที่มีหน้ามีตา แต่แล้วคังโฮกลับสูญเสียความทรงจำเนื่องจากอุบัติเหตุเคราะห์ร้าย และกลับไปเป็นเด็กวัย 7 ขวบอีกครั้ง ยองซุนตัดสินใจที่จะกลายเป็น “แม่ใจร้าย” เพื่อคังโฮอีกครั้ง</Text>
            </View>

            <Text style={{ marginTop: 25, fontSize: 20, padding: 10 }}>10. TAXI DRIVER SEASON 1 (2021) & 2 (2023)</Text>
            <Text style={{ marginTop: 5, fontSize: 20, padding: 5 }}>ratig : 8.2/10  </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={{ uri: "https://i0.wp.com/www.korseries.com/wp-content/uploads/2021/02/Taxi-Driver-2-SBS-Cover-260123.jpg?w=2000&ssl=1" }}
                    style={{ width: 450, height: 290, marginTop: 15 }}
                />
                <Text style={{ fontSize: 20, color: '#828282', padding: 10 }}>
                    ซีรีส์ที่สร้างจากเว็บตูนในชื่อเดียวกัน เล่าเรื่องราวเกี่ยวกับคนขับรถแท็กซี่
                    ที่ไม่ได้ทำงานในบริษัทรถแท็กซี่ทั่ว ๆ ไป แต่ว่าเป็นบริษัทที่ให้บริการพิเศษ
                    นั่นคือ การรับหน้าที่เป็นตัวแทนแก้แค้นให้กับผู้โดยสาร
                </Text>
            </View>
        </ScrollView >
    );
}