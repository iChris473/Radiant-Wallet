import { View, Text, Pressable } from "react-native";
import React, { useRef } from "react";
import styles from "./payment.style";

export default function PaymentMethod({
  setModalVisible, 
  navigation
}) {

  return (
    <View style={styles.centeredView}>
        <Pressable onPressIn={() => setModalVisible(false)} style={styles.bg} />
        <View style={styles.tvsCont}>
            <Text style={styles.paymentText}>Payment Method</Text>
          <Pressable
            style={styles.tvType}
            onPress={() => {navigation.navigate("ConfirmPayment");setModalVisible(false);}}
          >
            <Text style={styles.tvName}>Wallet</Text>
          </Pressable>
          <Pressable
            style={styles.tvType}
          >
            <Text style={styles.tvName}>Card</Text>
          </Pressable>
          <Pressable
            style={styles.tvType}
          >
            <Text style={styles.tvName}>USSD</Text>
          </Pressable>
          <Pressable
            style={styles.tvType}
          >
            <Text style={styles.tvName}>Bank Transfer</Text>
          </Pressable>
      </View>
    </View>
  );
}
