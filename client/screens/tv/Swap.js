import {
    View,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
  } from "react-native";
  import React, { useState } from "react";
  import styles from "./tv.style";
  import MyStatusBar from "../../components/MyStatusBar";
  import BillingComponent from "../../components/services/Biller";
  import Topview from "../../components/services/Topview";
  import SwapComponent from "./Swap.component";
  import Loading from '../../components/loading/Loading';
  
  export default function Swap({ navigation }) {
  
    const [billers, setBillers] = useState(false);
    const [tokenModal, setTokenModal] = useState(false);
    const [payItem, setPayItem] = useState(false);
    const [tvService, setTvService] = useState({ name: 'BTC', description: 'Bitcoin', pic: require("../../assets/btc.png") });
    const [tokens, setTokens] = useState({ name: 'USDT', description: "Tether USDT (BEP 20)", pic: require("../../assets/usdt.png") });
    const [isLoading, setIsLoading] = useState(false);
  
    const handleModal = () => {
      billers ? setBillers(false) : tokenModal ? setTokenModal(false) : setPayItem(false);
    };
    
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[{ flex: 1 }, {paddingTop: 30}]}
      >
        <View style={styles.blueSemiCirlce} />
        <MyStatusBar />
        <Topview title='Swap Crypto' navigation={navigation} />
        <ScrollView>
          <SwapComponent
            billers={billers}
            setBillers={setBillers}
            navigation={navigation}
            tvService={tvService}
            setTvService={setTvService}
            payItem={payItem}
            setPayItem={setPayItem}
            tokens={tokens}
            setTokenModal={setTokenModal}
            setIsLoading={setIsLoading}
          />
        </ScrollView>
        {billers && (
          <BillingComponent setBillers={setBillers} setTvService={setTvService} />
        )}
        {tokenModal && (
          <BillingComponent setBillers={setTokenModal} setTvService={setTokens} />
        )}
        {(billers || payItem || tokenModal) && (
          <TouchableOpacity
            style={styles.backDrop}
            onPress={handleModal}
            onLongPress={() => {}}
          />
        )}
        {isLoading && <Loading />}
      </KeyboardAvoidingView>
    );
  }
  