
import { View, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import ArrowLeftIcon from "../../svgs/ArrowLeftIcon";
import ArrowDownIcon from '../../svgs/ArrowDownIcon';
import UserCircleIcon from '../../svgs/UserCircleIcon';
import styles from './tv.style';
import { useState } from 'react';
import PaymentMethod from '../../components/payments/PaymentMethods';
import { ScrollView } from 'react-native-gesture-handler';


export default function TvComponent({
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

  const opacity = ( subAmount && decodeNo) ? true : false

    return (
      <View style={styles.container}>
        {/* SUB CARD */}
        <View style={styles.servicesCont}>
          <View>
            <Text style={styles.placeholder}>Select Coin or Token</Text>
            <TouchableWithoutFeedback
              onPress={() => setBillers(true)}
              style={{ zIndex: 20 }}
            >
              <View style={styles.boxCont}>
                <View style={styles.selectedCont}>
                  <Image
                    resizeMode="contain"
                    style={styles.selectserviceIcon}
                    source={tvService?.pic}
                  />
                  <View style={styles.selectedTvServiceTexts}>
                    <Text style={styles.tvName}>{tvService?.name}</Text>
                    <Text style={styles.tvDesc}>{tvService?.description}</Text>
                  </View>
                </View>
                <ArrowDownIcon color={"#BC51B1"} height={27} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Text style={styles.placeholder}>Amount in USD</Text>
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
            <Text style={styles.placeholder}>Recipient address</Text>
            <View style={styles.boxCont}>
              <TextInput
                style={styles.serviceInput}
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
      </View>
    );
}



