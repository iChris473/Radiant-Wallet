
import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../screens/tv/tv.style'
import XIcon from '../../svgs/XIcon'
import SearchIcon from '../../svgs/SearchIcon';

export default function BillingComponent({setTvService, setBillers}) {

    const changeTv = (tv) => {
        setTvService(tv);
        setBillers(false);
    }

  return (
    <View style={styles.tvsCont}>
      <Pressable
        onPress={() => setBillers(false)}
        style={styles.xIcon}
      >
        <XIcon height={30} width={30} />
      </Pressable>
      <Text style={styles.biller}>Select Coin or Token</Text>
      <ScrollView>
        <Pressable
          onPress={changeTv.bind(null, { name:"BTC", description: "Bitcoin", pic: require("../../assets/btc.png") })}
          style={styles.tvType}
        >
          <Image
            resizeMode="contain"
            style={styles.serviceIcon}
            source={require("../../assets/btc.png")}
          />
          <View style={styles.tvServiceTexts}>
            <Text style={styles.tvName}>BTC</Text>
            <Text style={styles.tvDesc}>Bitcoin</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={changeTv.bind(null, { name:"ETH", description: "Ethereum", pic: require("../../assets/eth.png") })}
          style={styles.tvType}
        >
          <Image
            resizeMode="contain"
            style={styles.serviceIcon}
            source={require("../../assets/eth.png")}
          />
          <View style={styles.tvServiceTexts}>
            <Text style={styles.tvName}>ETH</Text>
            <Text style={styles.tvDesc}>Ethereum</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={changeTv.bind(null, { name:"BNB", description: "Binance Coin (BEP 20)", pic: require("../../assets/bnb.png") })}
          style={styles.tvType}
        >
          <Image
            resizeMode="contain"
            style={styles.serviceIcon}
            source={require("../../assets/bnb.png")}
          />
          <View style={styles.tvServiceTexts}>
            <Text style={styles.tvName}>BNB</Text>
            <Text style={styles.tvDesc}>Binance Coin (BEP 20)</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={changeTv.bind(null, { name:"USDT", description: "Tether USDT (BEP 20)", pic: require("../../assets/usdt.png") })}
          style={styles.tvType}
        >
          <Image
            resizeMode="contain"
            style={styles.serviceIcon}
            source={require("../../assets/usdt.png")}
          />
          <View style={styles.tvServiceTexts}>
            <Text style={styles.tvName}>USDT</Text>
            <Text style={styles.tvDesc}>Tether USDT (BEP 20)</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={changeTv.bind(null, { name:"XRP", description: "XRP", pic: require("../../assets/xrp.png") })}
          style={styles.tvType}
        >
          <Image
            resizeMode="contain"
            style={styles.serviceIcon}
            source={require("../../assets/xrp.png")}
          />
          <View style={styles.tvServiceTexts}>
            <Text style={styles.tvName}>XRP</Text>
            <Text style={styles.tvDesc}>XRP</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}