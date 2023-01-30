import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../../screens/airtime/airtime.style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Networks({setNetwork, setShowNetworks}) {

    const updateNetwork = (title, picture) => {
        setNetwork({
            name: title,
            picture
        })
        setShowNetworks(false)
    }

  return (
    <View style={styles.networkCont}>
      {/* AIRTEL */}
      <TouchableWithoutFeedback
        onPress={() =>
          updateNetwork("Airtel", require("../../assets/airtelIcon.png"))
        }
        style={styles.netOption}
      >
        <Image
          resizeMode="contain"
          style={styles.netPic}
          source={require("../../assets/airtelIcon.png")}
        />
        <Text style={styles.netName}>Airtel</Text>
      </TouchableWithoutFeedback>
      {/* GLO */}
      <TouchableWithoutFeedback
        onPress={() =>
          updateNetwork("Glo", require("../../assets/gloIcon.jpg"))
        }
        style={styles.netOption}
      >
        <Image
          resizeMode="contain"
          style={styles.netPic}
          source={require("../../assets/gloIcon.jpg")}
        />
        <Text style={styles.netName}>GLO</Text>
      </TouchableWithoutFeedback>
      {/* MTN */}
      <TouchableWithoutFeedback
        onPress={() =>
          updateNetwork("MTN", require("../../assets/mtnIcon.jpg"))
        }
        style={styles.netOption}
      >
        <Image
          resizeMode="contain"
          style={styles.netPic}
          source={require("../../assets/mtnIcon.jpg")}
        />
        <Text style={styles.netName}>MTN</Text>
      </TouchableWithoutFeedback>
      {/* MTN */}
      <TouchableWithoutFeedback
        onPress={() =>
          updateNetwork("9 Mobile", require("../../assets/9mobile.png"))
        }
        style={styles.netOption}
      >
        <Image
          resizeMode="contain"
          style={styles.netPic}
          source={require("../../assets/9mobile.png")}
        />
        <Text style={styles.netName}>9 Mobile</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
