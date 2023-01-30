
import { View, Text, Image, Pressable, Platform } from 'react-native';
import styles from './dashboard.style';
import * as Linking from 'expo-linking';

export default function ServicesComponent({navigation}) {

  //  const buyApp = () => {
  //   if (Platform.OS === 'android') {
  //     Linking.openURL('https://play.google.com/store/apps/details?id=com.coinbase.android&hl=en&gl=US')
  //   } else if (Platform.OS === 'ios') {
  //     Linking.openURL('https://apps.apple.com/us/app/coinbase-buy-bitcoin-ether/id886427730')
  //   } else {
  //     Linking.openURL('https://www.coinbase.com/wallet/downloads')
  //   }
  // } 

    return (
      <View style={styles.serviceContainer}>
        <View style={styles.allServCont}>
          {/* ROW 1 OF SERVICES */}
          <View style={styles.utilities}>
            <Pressable
              onPress={() => navigation.navigate('TvSubscription')}
              style={styles.utilityBox}
            >
              <View style={styles.servImgContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.serviceIcon}
                  source={require("../../assets/send.png")}
                />
              </View>
              <Text style={styles.serviceTitle}>Send</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('ConfirmPayment',{data: { name: 'BTC', description: 'Bitcoin', pic: require("../../assets/btcqr.jpeg"), add: 'bc1q9ud9v0yjrkejdj8a3yx0fz2xkyg4hwtw4e6hue' }})}
              style={styles.utilityBox}
            >
              <View style={styles.servImgContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.serviceIcon}
                  source={require("../../assets/receive.png")}
                />
              </View>
              <Text style={styles.serviceTitle}>Receive</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Swap')}
              style={styles.utilityBox}
            >
              <View style={styles.servImgContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.serviceIcon}
                  source={require("../../assets/swap.jpg")}
                />
              </View>
              <Text style={styles.serviceTitle}>Swap</Text>
            </Pressable>
          </View>
      
        </View>
      </View>
    );
}