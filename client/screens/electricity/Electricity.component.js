
import { View, Text, TouchableOpacity, Pressable, TextInput, ScrollView, Image } from 'react-native';
import ArrowLeftIcon from "../../svgs/ArrowLeftIcon";
import ArrowDownIcon from '../../svgs/ArrowDownIcon';
import UserCircleIcon from '../../svgs/UserCircleIcon';
import styles from './electricity.style';
import { useState } from 'react';
import PaymentMethod from '../../components/payments/PaymentMethods';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function ElectricComponent({
  navigation,
  showSide,
  setShowSide,
  setBillers,
  tvService,
  setPayItem
}) {

  const [subAmount, setSubAmount] = useState("");
  const [decodeNo, setDecodeNo] = useState("");
  const [decription, setDecription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const opacity = (tvService && subAmount && decodeNo) ? true : false

    return (
      <View style={styles.container}>
          {/* SUB CARD */}
          <View style={styles.servicesCont}>
            <View>
              <Text style={styles.placeholder}>Select Biller</Text>
              <TouchableWithoutFeedback
                onPress={() => setBillers(true)}
                style={{ zIndex: 20 }}
              >
                <View style={styles.boxCont}>
                  <View style={styles.selectedCont}>
                    <Image
                      resizeMode="contain"
                      style={styles.selectserviceIcon}
                      source={require("../../assets/dstv2.png")}
                    />
                    <View style={styles.selectedTvServiceTexts}>
                      <Text style={styles.tvName}>AEDC</Text>
                      <Text style={styles.tvDesc}>Abuja Electricity Distribution Company</Text>
                    </View>
                  </View>
                  <ArrowDownIcon color={"#BC51B1"} height={27} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <Text style={styles.placeholder}>Select payment item</Text>
              <TouchableWithoutFeedback
                onPress={() => setPayItem(true)}
                style={{ zIndex: 20 }}
              >
                <View style={styles.boxCont}>
                  <Text style={styles.styleText}>{tvService || ""}</Text>
                  <ArrowDownIcon color={"#BC51B1"} height={27} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <Text style={styles.placeholder}>
                Smart card or decoder number
              </Text>
              <View style={styles.boxCont}>
                <TextInput
                  style={styles.serviceInput}
                  keyboardType="number-pad"
                  placeholderTextColor="grey"
                  onChangeText={(e) => setSubAmount(e)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.placeholder}>Amount (₦)</Text>
              <View style={styles.boxCont}>
                <TextInput
                  style={styles.serviceInput}
                  keyboardType="number-pad"
                  placeholderTextColor="grey"
                  onChangeText={(e) => setSubAmount(e)}
                />
              </View>
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



