
import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../screens/tv/tv.style'
import { ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import XIcon from '../../svgs/XIcon'
import SearchIcon from '../../svgs/SearchIcon'

export default function PaymentItem({setTvService, setPayItem}) {

    const changeTv = (tv) => {
        setTvService(tv);
        setPayItem(false);
    }

  return (
    <View style={styles.tvsCont}>
      <TouchableWithoutFeedback
        onPress={() => setPayItem(false)}
        style={styles.xIcon}
      >
        <XIcon height={30} width={30} />
      </TouchableWithoutFeedback>
      <Text style={styles.biller}>Select payment item</Text>
      <View style={styles.tvsearchCont}>
        <SearchIcon />
        <TextInput
          style={styles.searchBiller}
          placeholder="Search for a biller"
        />
      </View>
      <ScrollView style={styles.payItemCont}>
        <TouchableWithoutFeedback
          onPress={changeTv.bind(null, "Dstv")}
          style={styles.payCont}
        >
          <Text style={styles.tvName}>Yanga - 1 month</Text>
          <Text style={styles.tvDesc}>₦ 2,950.00</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={changeTv.bind(null, "Dstv")}
          style={styles.payCont}
        >
          <Text style={styles.tvName}>Yanga - 1 month</Text>
          <Text style={styles.tvDesc}>₦ 2,950.00</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={changeTv.bind(null, "Dstv")}
          style={styles.payCont}
        >
          <Text style={styles.tvName}>Yanga - 1 month</Text>
          <Text style={styles.tvDesc}>₦ 2,950.00</Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}