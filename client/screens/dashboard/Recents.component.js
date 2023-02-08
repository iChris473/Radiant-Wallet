
import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './dashboard.style';

export default function RecentsComponent({ navigation, wallet }) {
  return (
    <View style={{ width: "100%", marginTop: 20 }}>
      <Text style={styles.recents}>Assets</Text>
      {/* CURVE */}
      <View style={styles.recentCurve} />
      {/* RECENT TRANSACTIONS */}
      <View style={styles.recentsTransactions}>
        {/* USDT */}
        <Pressable onPress={() =>
          navigation.navigate('ConfirmPayment',
            { data: { name: 'USDT', description: 'Tether USDT (BEP 20)', pic: require("../../assets/ethqr.jpeg"), add: 'bc1q9ud9v0yjrkejdj8a3yx0fz2xkyg4hwtw4e6hue' } }
          )}
          style={styles.singleTransaction}
        >
          <View style={styles.transImgCont}>
            <Image
              resizeMode="contain"
              style={styles.transImg}
              source={require("../../assets/usdt.png")}
            />
          </View>
          <View style={styles.transDesc}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.transTitle}>USDT</Text>
              <Text style={{...styles.transDate, fontSize: 12}}>Tether USDT{"\n"}(BEP 20)</Text>
            </View>
            <Text style={styles.transID}>{wallet?.usdt || 0} USDT</Text>
            <View style={styles.transPrice}>
              <Text style={styles.transPriceText}>$ {wallet?.usdtAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}.00</Text>
            </View>
          </View>
        </Pressable>
        {/* BTC */}
        <Pressable onPress={() =>
          navigation.navigate('ConfirmPayment',
            { data: { name: 'BTC', description: 'Bitcoin', pic: require("../../assets/btcqr.jpeg"), add: 'bc1q9ud9v0yjrkejdj8a3yx0fz2xkyg4hwtw4e6hue' } }
          )}
          style={styles.singleTransaction}
        >
          <View style={styles.transImgCont}>
            <Image
              resizeMode="contain"
              style={styles.transImg}
              source={require("../../assets/btc.png")}
            />
          </View>
          <View style={styles.transDesc}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.transTitle}>BTC</Text>
              <Text style={styles.transDate}>Bitcoin</Text>
            </View>
            <Text style={styles.transID}>{wallet?.btc || 0} BTC</Text>
            <View style={styles.transPrice}>
              <Text style={styles.transPriceText}>$ {wallet?.btcAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}.00</Text>
            </View>
          </View>
        </Pressable>
        {/* ETH */}
        <Pressable onPress={() =>
          navigation.navigate('ConfirmPayment',
            { data: { name: 'ETH', description: 'Ethereum', pic: require("../../assets/ethqr.jpeg"), add: 'bc1q9ud9v0yjrkejdj8a3yx0fz2xkyg4hwtw4e6hue' } }
          )}
          style={styles.singleTransaction}
        >
          <View style={styles.transImgCont}>
            <Image
              resizeMode="contain"
              style={styles.transImg}
              source={require("../../assets/eth.png")}
            />
          </View>
          <View style={styles.transDesc}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.transTitle}>ETH</Text>
              <Text style={styles.transDate}>Ethereum</Text>
            </View>
            <Text style={styles.transID}>{wallet?.eth || 0} ETH</Text>
            <View style={styles.transPrice}>
              <Text style={styles.transPriceText}>$ {wallet?.ethAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}.00</Text>
            </View>
          </View>
        </Pressable>
        {/* BNB */}
        <Pressable onPress={() =>
          navigation.navigate('ConfirmPayment',
            { data: { name: 'BNB', description: 'Binance Coin (BEP 20)', pic: require("../../assets/ethqr.jpeg"), add: 'bc1q9ud9v0yjrkejdj8a3yx0fz2xkyg4hwtw4e6hue' } }
          )}
          style={styles.singleTransaction}
        >
          <View style={styles.transImgCont}>
            <Image
              resizeMode="contain"
              style={styles.transImg}
              source={require("../../assets/bnb.png")}
            />
          </View>
          <View style={styles.transDesc}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.transTitle}>BNB</Text>
              <Text style={{...styles.transDate, fontSize: 12}}>Binance Coin{"\n"}(BEP 20)</Text>
            </View>
            <Text style={styles.transID}>{wallet?.bnb || 0} BNB</Text>
            <View style={styles.transPrice}>
              <Text style={styles.transPriceText}>$ {wallet?.bnbAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}.00</Text>
            </View>
          </View>
        </Pressable>
        {/* XRP */}
        <Pressable onPress={() =>
          navigation.navigate('ConfirmPayment',
            { data: { name: 'XRP', description: 'XRP', pic: require("../../assets/xrpqr.jpeg"), add: 'rfo6xAnM8p5vEKfU8e5TbarujQsZaqAV7S' } }
          )}
          style={styles.singleTransaction}
        >
          <View style={styles.transImgCont}>
            <Image
              resizeMode="contain"
              style={styles.transImg}
              source={require("../../assets/xrp.png")}
            />
          </View>
          <View style={styles.transDesc}>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.transTitle}>XRP</Text>
              <Text style={styles.transDate}>XRP</Text>
            </View>
            <Text style={styles.transID}>{wallet?.xrp || 0} XRP</Text>
            <View style={styles.transPrice}>
              <Text style={styles.transPriceText}>$ {wallet?.xrpAmount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}.00</Text>
            </View>
          </View>
        </Pressable>

      </View>
    </View>
  )
}