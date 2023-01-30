
import { View, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import ArrowLeftIcon from "../../svgs/ArrowLeftIcon";
import ArrowDownIcon from '../../svgs/ArrowDownIcon';
import UserCircleIcon from '../../svgs/UserCircleIcon';
import styles from './tv.style';
import { useState } from 'react';
import PaymentMethod from '../../components/payments/PaymentMethods';
import { ScrollView } from 'react-native-gesture-handler';


export default function SwapComponent({
  navigation,
  setBillers,
  setTokenModal,
  tvService,
  tokens,
  setPayItem,
}) {

  const [subAmount, setSubAmount] = useState("");
  const [decodeNo, setDecodeNo] = useState("");
  const [decription, setDecription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const opacity = ( subAmount && decodeNo) ? true : false

    return (
      <View style={styles.container}>
        {/* MAIN CARD */}
        <View style={styles.servicesCont}>
            {/* PAYING */}
          <View>
            <Text style={styles.placeholder}>Select Coin or Token you want to pay</Text>
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
          {/* RECEIVING */}
          <View>
            <Text style={styles.placeholder}>Select Coin or Token you want to receive</Text>
            <TouchableWithoutFeedback
              onPress={() => setTokenModal(true)}
              style={{ zIndex: 20 }}
            >
              <View style={styles.boxCont}>
                <View style={styles.selectedCont}>
                  <Image
                    resizeMode="contain"
                    style={styles.selectserviceIcon}
                    source={tokens?.pic}
                  />
                  <View style={styles.selectedTvServiceTexts}>
                    <Text style={styles.tvName}>{tokens?.name}</Text>
                    <Text style={styles.tvDesc}>{tokens?.description}</Text>
                  </View>
                </View>
                <ArrowDownIcon color={"#BC51B1"} height={27} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Text style={styles.placeholder}>Amount(USD)</Text>
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
      </View>
    );
}



