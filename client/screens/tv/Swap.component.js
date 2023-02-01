
import { View, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import ArrowDownIcon from '../../svgs/ArrowDownIcon';
import styles from './tv.style';
import { useState } from 'react';
import { request } from '../../axios';


export default function SwapComponent({
  navigation,
  setBillers,
  setTokenModal,
  tvService,
  tokens,
  setIsLoading,
}) {

  const [amount, setAmount] = useState("");

  const opacity = amount ? true : false;

  const swapToken = async () => {

    setIsLoading(true);

    const swapObject = {
      from: tvService?.name,
      to: tokens?.name,
      amount
    }

    try {
      
      await request.post('/swap', swapObject);
      
      setIsLoading(false);
      
      Alert.alert("Swap Successful");

      navigation.navigate("Dashboard")

    } catch (error) {
      
      Alert.alert(error?.response?.data);
      
      setIsLoading(false);

    }

  }

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
              onChangeText={(e) => setAmount(e)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={swapToken}
        style={[styles.button, { opacity: opacity ? 1 : 0.5 }]}
        disabled={!opacity}
      >
        <Text style={styles.btnText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}



