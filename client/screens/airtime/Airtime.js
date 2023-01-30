import {
    View,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";
  import React, { useState } from "react";
  import styles from "./airtime.style";
  import MyStatusBar from "../../components/MyStatusBar";
  import AirtimeComponent from "./Airtime.component";
  import BillingComponent from "../../components/services/Biller";
  import PaymentItem from "../../components/services/PaymentItem";
  import Topview from "../../components/services/Topview";
  import Networks from "../../components/services/Networks";
  
  export default function Airtime({ navigation }) {
  
    const [billers, setBillers] = useState(false);
    const [payItem, setPayItem] = useState(false);
    const [tvService, setTvService] = useState("");
    const [showNetworks, setShowNetworks] = useState(false);
    
    const [network, setNetwork] = useState({name:'MTN', picture: require("../../assets/mtnIcon.jpg")});
  
    const handleModal = () => {
      billers ? setBillers(false) : setPayItem(false);
    };
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.blueSemiCirlce} />
        <MyStatusBar />
        <Topview title='Airtime' navigation={navigation} />
        <ScrollView>
          <AirtimeComponent
            billers={billers}
            setBillers={setBillers}
            navigation={navigation}
            tvService={tvService}
            setTvService={setTvService}
            payItem={payItem}
            setPayItem={setPayItem}
            setShowNetworks={setShowNetworks}
            showNetworks={showNetworks}
            network={network}
            setNetwork={setNetwork}
          />
        </ScrollView>
        {billers && (
          <BillingComponent
            setBillers={setBillers}
            setTvService={setTvService}
          />
        )}
        {payItem && (
          <PaymentItem setPayItem={setPayItem} setTvService={setTvService} />
        )}
        {(billers || payItem) && (
          <TouchableOpacity
            style={styles.backDrop}
            onPress={handleModal}
            onLongPress={() => {}}
          />
        )}
        {showNetworks && <TouchableOpacity onPress={() => setShowNetworks(false)} style={styles.shownetworks} />}
        {showNetworks && <Networks setShowNetworks={setShowNetworks} setNetwork={setNetwork} />}
      </KeyboardAvoidingView>
    );
  }
  