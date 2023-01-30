import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "./electricity.style";
import MyStatusBar from "../../components/MyStatusBar";
import ElectricComponent from "./Electricity.component";
import BillingComponent from "../../components/services/Biller";
import PaymentItem from "../../components/services/PaymentItem";
import Topview from "../../components/services/Topview";

export default function Electricity({ navigation }) {

    const [billers, setBillers] = useState(false);
    const [payItem, setPayItem] = useState(false);
    const [tvService, setTvService] = useState("");
  
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
      <Topview title='Electricity' navigation={navigation} />
      <ScrollView>
        <ElectricComponent
          billers={billers}
          setBillers={setBillers}
          navigation={navigation}
          tvService={tvService}
          setTvService={setTvService}
          payItem={payItem}
          setPayItem={setPayItem}
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
    </KeyboardAvoidingView>
  );
}
