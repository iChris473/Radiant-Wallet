
import { View, Text, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import ArrowDownIcon from '../../svgs/ArrowDownIcon';
import styles from './tv.style';
import { useState } from 'react';
import { request } from '../../axios';

export default function TvComponent({
  navigation,
  setBillers,
  tvService,
  setIsLoading
}) {

  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const opacity = amount ? true : false;

  const sendToken = async () => {

    setIsLoading(true);

    const depositObject = {
      tokenType: tvService?.name,
      amount,
      address
    }

    try {

      const res = await request.post('/deposit', depositObject);

      setIsLoading(false);

      Alert.alert(res.data);

      navigation.navigate("Dashboard"); 

    } catch (error) {

      Alert.alert(error?.response?.data);

      setIsLoading(false);

    }

  }

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
              onChangeText={(e) => setAmount(e)}
            />
          </View>
        </View>
        <View>
          <Text style={styles.placeholder}>Recipient address</Text>
          <View style={styles.boxCont}>
            <TextInput
              style={styles.serviceInput}
              placeholderTextColor="grey"
              onChangeText={(e) => setAddress(e)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={sendToken}
        style={[styles.button, { opacity: opacity ? 1 : 0.5 }]}
        disabled={!opacity}
      >
        <Text style={styles.btnText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}
