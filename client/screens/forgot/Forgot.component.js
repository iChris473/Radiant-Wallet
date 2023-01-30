
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import UserIcon from '../../svgs/UserIcon';
import styles from "./forgot.style";
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';

export default function ForgotComponent({navigation}) {

    const [viewPass, setViewPass] = useState(true)

  return (
      <View style={styles.container}>
          {/* BACK ICON */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
              <ArrowLeftIcon color={"#6843A1"} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
              <Image
                  source={require("../../assets/logo1.png")}
                  resizeMode="contain"
                  style={styles.logo}
              />
              <Text style={styles.royalipay}>Royalipay</Text>
          </View>
          <Text style={styles.info1}>Trouble logging in?</Text>
          <Text style={styles.info2}>Enter your email or phone number and we'll send you a link to get back into your account</Text>
          
          {/* EMAIL OR PHONE NUMBER CONTAINER */}
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Email or phone number "
                placeholderTextColor="gray"
                style={styles.input}
            />
            <UserIcon />
          </View>
          {/* PROCEED BUTTON */}
          <TouchableOpacity style={{...styles.button, width: "90%"}}>
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.login}>Back to log in</Text>
          </TouchableOpacity>
          {/* ORANGE ELLIPSE */}
          <View style={styles.orangeEllipse} />
      </View>
  )
}