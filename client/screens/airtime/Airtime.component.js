import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import ArrowLeftIcon from "../../svgs/ArrowLeftIcon";
import ArrowDownIcon from "../../svgs/ArrowDownIcon";
import UserCircleIcon from "../../svgs/UserCircleIcon";
import styles from "./airtime.style";
import { useState } from "react";
import PaymentMethod from "../../components/payments/PaymentMethods";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function AirtimneComponent({
  navigation,
  showSide,
  setShowSide,
  setBillers,
  tvService,
  setPayItem,
  setShowNetworks,
  showNetworks,
  network
}) {

  const [subAmount, setSubAmount] = useState("");
  const [decodeNo, setDecodeNo] = useState("");
  const [decription, setDecription] = useState("");
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

  }

  return (
    <View style={styles.container}>
      <View style={styles.servicesCont}>
        {/* PHONE NUMBER SECTION */}
        <View style={{...styles.numberCont, zIndex: 2}}>
          <TouchableWithoutFeedback onPress={() => setShowNetworks(!showNetworks)} style={styles.vtuImgCont}>
            <Image
              resizeMode="contain"
              style={styles.vtuImg}
              source={network.picture}
            />
            <ArrowDownIcon width={20} />
          </TouchableWithoutFeedback>
          <TextInput
            style={styles.mobileNo}
            keyboardType="number-pad"
            placeholderTextColor="grey"
            defaultValue="09134534917"
            // onChangeText={(e) => setSubAmount(e)}
          />
        </View>
        {/* TOP UP SECTION */}
        <View style={styles.topupCont}>
          <Text style={styles.topupText}>Top up</Text>
          <View>
            {/* 1ST ROW */}
            <View style={styles.row}>
              <View style={styles.price}>
                <Text style={styles.priceText}>₦50</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>₦100</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>₦200</Text>
              </View>
            </View>
            {/* 2ND ROW */}
            <View style={styles.row}>
              <View style={styles.price}>
                <Text style={styles.priceText}>₦300</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>₦500</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>₦{(1000).toLocaleString()}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* CUSTOM AMOUNT */}
        <View style={styles.topupCont}>
          <Text style={styles.topupText}>Enter Custom Amount</Text>
          <TextInput 
            placeholder="₦ 0.00"
            style={styles.customAmnt}
            onChangeText={handleAmount}
            value={customAmnt}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[styles.button, { opacity: opacity ? 1 : 0.5 }]}
            disabled={!opacity}
          >
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
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
