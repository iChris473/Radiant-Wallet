import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import ArrowLeftIcon from "../../svgs/ArrowLeftIcon";
import UserCircleIcon from "../../svgs/UserCircleIcon";
import styles from "../../screens/tv/tv.style";

export default function Topview({ navigation, title }) {
  return (
    <View style={{height: 100}}>
      {/* MEBU BARS */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
      </View>
      {/* MAIN CARD */}
      <View style={styles.topCurve} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
