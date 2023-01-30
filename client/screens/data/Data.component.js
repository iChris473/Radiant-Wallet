import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
  } from "react-native";
  import ArrowDownIcon from "../../svgs/ArrowDownIcon";
  import styles from "./data.style";
  import { useState } from "react";
  import PaymentMethod from "../../components/payments/PaymentMethods";
  import { TouchableWithoutFeedback } from "react-native-gesture-handler";
  import UserIcon from "../../svgs/UserIcon"
  import { dataBundles } from "./random.data";
  
  export default function DataComponent({
    navigation,
    tvService,
    setShowNetworks,
    showNetworks,
    network
  }) {
  
    const [subAmount, setSubAmount] = useState("");
    const [decodeNo, setDecodeNo] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [customAmnt, setCustomAmnt] = useState('');
  
    const opacity = tvService && subAmount && decodeNo ? true : false;
  
    const handleAmount = e => {
      
      if(customAmnt[0] !== "₦"){
        setCustomAmnt("₦ " + e)
      } else{
        setCustomAmnt(e)
      }
      
      if(e === '₦'){
        setCustomAmnt('₦ ')
      }
  
    };

    const [activeBundle, setActiveBundle] = useState(dataBundles[0].id)

    const bundeList = ({item}) => (
        <TouchableOpacity onPress={() => setActiveBundle(item.id)} style={styles.item}>
            <Text style={[styles.bundleTitle, (item.id === activeBundle) && styles.activeBundle]}>{item.title}</Text>
        </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.servicesCont}>
          {/* PHONE NUMBER SECTION */}
          <View style={{ ...styles.numberCont, zIndex: 2 }}>
            <TouchableWithoutFeedback
              onPress={() => setShowNetworks(!showNetworks)}
              style={styles.vtuImgCont}
            >
              <Image
                resizeMode="contain"
                style={styles.vtuImg}
                source={network.picture}
              />
              <ArrowDownIcon width={20} />
            </TouchableWithoutFeedback>
            <View style={styles.phoneNoCont}>
              <TextInput
                style={styles.mobileNo}
                keyboardType="number-pad"
                placeholderTextColor="grey"
                defaultValue="09134534917"
                // onChangeText={(e) => setSubAmount(e)}
              />
              <UserIcon width={20} height={20} color="#7654ab" />
            </View>
          </View>
          {/* TOP UP SECTION */}
          <View style={styles.topupCont}>
            <FlatList
              data={dataBundles}
              horizontal={true}
              renderItem={bundeList}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />
            <View>
              {/* 1ST ROW */}
              <View style={styles.row}>
                <View style={styles.price}>
                  <View style={styles.cahsback}>
                    <Text style={styles.cahsbackText}>₦5 cashback</Text>
                  </View>
                  <View style={styles.bundleInfo}>
                    <Text style={styles.dataSize}>100MB</Text>
                    <Text style={styles.dataInfo}>1 Day</Text>
                    <Text style={styles.dataInfo}>₦100.00</Text>
                  </View>
                  <View style={styles.talkTime}>
                    <Text style={styles.talkTimeTxt}>₦200 Talktime</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <View style={styles.cahsback}>
                    <Text style={styles.cahsbackText}>₦5 cashback</Text>
                  </View>
                  <View style={styles.bundleInfo}>
                    <Text style={styles.dataSize}>100MB</Text>
                    <Text style={styles.dataInfo}>1 Day</Text>
                    <Text style={styles.dataInfo}>₦100.00</Text>
                  </View>
                  <View style={styles.talkTime}>
                    <Text style={styles.talkTimeTxt}>₦200 Talktime</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <View style={styles.cahsback}>
                    <Text style={styles.cahsbackText}>₦5 cashback</Text>
                  </View>
                  <View style={styles.bundleInfo}>
                    <Text style={styles.dataSize}>100MB</Text>
                    <Text style={styles.dataInfo}>1 Day</Text>
                    <Text style={styles.dataInfo}>₦100.00</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <View style={styles.bundleInfo}>
                    <Text style={styles.dataSize}>100MB</Text>
                    <Text style={styles.dataInfo}>1 Day</Text>
                    <Text style={styles.dataInfo}>₦100.00</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <View style={styles.bundleInfo}>
                    <Text style={styles.dataSize}>100MB</Text>
                    <Text style={styles.dataInfo}>1 Day</Text>
                    <Text style={styles.dataInfo}>₦100.00</Text>
                  </View>
                  <View style={styles.talkTime}>
                    <Text style={styles.talkTimeTxt}>₦200 Talktime</Text>
                  </View>
                </View>
                <View style={styles.price}>
                  <View style={styles.cahsback}>
                    <Text style={styles.cahsbackText}>₦5 cashback</Text>
                  </View>
                  <View style={styles.bundleInfo}>
                    <Text style={styles.dataSize}>100MB</Text>
                    <Text style={styles.dataInfo}>1 Day</Text>
                    <Text style={styles.dataInfo}>₦100.00</Text>
                  </View>
                  <View style={styles.talkTime}>
                    <Text style={styles.talkTimeTxt}>₦200 Talktime</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {modalVisible && (
          <PaymentMethod
            navigation={navigation}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
      </View>
    );
  }
  