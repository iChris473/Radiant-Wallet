
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import EyeIcon from '../../svgs/EyeIcon';
import HideEyeIcon from '../../svgs/HideEyeIcon';
import UserIcon from '../../svgs/UserIcon';
import WhiteCurve from '../../svgs/WhiteCurve';
import styles from "../login/login.style";
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';

export default function RegisterComponent({navigation}) {

    const [viewPass, setViewPass] = useState(true)
    const [viewConfirm, setViewConfirm] = useState(true)

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
          <Text style={styles.signIn}>Sign Up</Text>
          {/* EMAIL OR PHONE NUMBER CONTAINER */}
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Email"
                placeholderTextColor="gray"
                style={styles.input}
            />
            <UserIcon />
          </View>
          {/* PASSWORD CONTAINER */}
          <View style={styles.inputContainer}>
              <TextInput
                  placeholder="Password"
                  placeholderTextColor="gray"
                  style={styles.input}
                  secureTextEntry={viewPass}
              />
              {
                  viewPass ?
                  <TouchableOpacity onPress={() => setViewPass(!viewPass)}>
                      <HideEyeIcon />
                  </TouchableOpacity> :
                  <TouchableOpacity onPress={() => setViewPass(!viewPass)}>
                      <EyeIcon /> 
                  </TouchableOpacity>
              }
          </View>
          {/* CONFIRM PASSWORD */}
          <View style={styles.inputContainer}>
              <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="gray"
                  style={styles.input}
                  secureTextEntry={viewConfirm}
              />
              {
                  viewConfirm ?
                  <TouchableOpacity onPress={() => setViewConfirm(!viewConfirm)}>
                      <HideEyeIcon />
                  </TouchableOpacity> :
                  <TouchableOpacity onPress={() => setViewConfirm(!viewConfirm)}>
                      <EyeIcon /> 
                  </TouchableOpacity>
              }
          </View>
          {/* WHITE CURVE */}

          {/* PROCEED BUTTON */}
          <TouchableOpacity style={{...styles.button, marginTop: 40}}>
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
          <View style={styles.noAccountView}>  
            <Text style={styles.noAccount}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signUp}>sign in</Text>
            </TouchableOpacity>
          </View>
          {/* ORANGE ELLIPSE */}
          <View style={styles.orangeEllipse} />
      </View>
  )
}