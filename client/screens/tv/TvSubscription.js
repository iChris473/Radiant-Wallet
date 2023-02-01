import {
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./tv.style";
import MyStatusBar from "../../components/MyStatusBar";
import TvComponent from "./Tv.component";
import BillingComponent from "../../components/services/Biller";
import PaymentItem from "../../components/services/PaymentItem";
import Topview from "../../components/services/Topview";
import Loading from "../../components/loading/Loading";

export default function TvSubscription({ navigation }) {

  const [billers, setBillers] = useState(false);
  const [payItem, setPayItem] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tvService, setTvService] = useState({ name: 'BTC', description: 'Bitcoin', pic: require("../../assets/btc.png") });

  const handleModal = () => {
    billers ? setBillers(false) : setPayItem(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[{ flex: 1 }, {paddingTop: 30}]}
    >
      <View style={styles.blueSemiCirlce} />
      <MyStatusBar />
      <Topview title='Send Crypto' navigation={navigation} />
      <ScrollView>
        <TvComponent
          billers={billers}
          setBillers={setBillers}
          navigation={navigation}
          tvService={tvService}
          setTvService={setTvService}
          payItem={payItem}
          setPayItem={setPayItem}
          setIsLoading={setIsLoading}
        />
      </ScrollView>
      {billers && (
        <BillingComponent setBillers={setBillers} setTvService={setTvService} />
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
      {isLoading && <Loading />}
    </KeyboardAvoidingView>
  );
}
