import { View, Text, TouchableOpacity, Image } from "react-native";
import ArrowLeftIcon from "../../svgs/ArrowLeftIcon";
import UserCircleIcon from "../../svgs/UserCircleIcon";
// import CancelCircle from "../../svgs/CancelCircle";
import styles from "./confirm.style";
import { useState } from "react";
import * as Clipboard from 'expo-clipboard';

export default function ConfirmConponent({ navigation, coin }) {

  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    await Clipboard.setStringAsync(coin?.add);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  

  return (
    <View style={styles.container}>
      {/* MEBU BARS */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
      </View>
      {/* MAIN CARD */}
      <View style={styles.topCurve} />
      <View style={styles.mainCard}>
        <Text style={styles.title}>Recieve {coin?.name}</Text>
        <View style={styles.messageCont}>
          <Text style={styles.introText}>Send only {coin?.description}, {coin?.name} to this address.{"\n"}Sending any other coins may result in permanent loss</Text>
          <View style={styles.mainCont}>
            <Image
              resizeMode="contain"
              style={styles.qrcode}
              source={coin?.pic}
            />
            <Text style={styles.descText}>{coin?.add}</Text>
          </View>
          <View style={styles.signContainer}>
            <TouchableOpacity onPressIn={copyAddress} style={[styles.pinBtn, copied && { backgroundColor: '#02c429' }]}>
              <Text style={styles.pinText}>{copied ? 'Address Copied!' : 'Copy Address'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
